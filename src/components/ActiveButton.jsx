import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react'
import {dropdownActions} from '../Store/dropdown-slice'

const ActiveButton = (props) => {
  const dispatch = useDispatch();
  const [state,setState]= useState('');
  const displayDropDownChecked=()=>{
    setState('All')
    dispatch(dropdownActions.selectAllDropDown())
  }; 

  const displayDropDownUnChecked=()=>{
    setState('None')
    dispatch(dropdownActions.selectNoneDropDown())
};
useEffect(()=>{
    if(!props.display) {
        setState('')
    }
    if(props.reset === 'All' || props.reset ==='None') {
        setState('')
    }
},[props.display, props.reset])

  return (
    <>
    <div className="selectBtnHeight"> 
       <button onClick={()=> displayDropDownChecked()} className={`button-select  ${props.display ? "selectActiveState" : "selectUnActiveState"} ${state === 'All'? "color-btn ": ""} ` } disabled={!props.display} >
       <i className="fas fa-plus-circle mr-2"></i>
        select All</button>
       </div>
    <div className="selectBtnHeight"> 
        <button onClick={()=> displayDropDownUnChecked()} className={`button-select ${props.display ? "selectActiveState" : "selectUnActiveState"} ${state === 'None'? "color-btn ": ""}` } disabled={!props.display} >
            <i className="fas fa-times-circle mr-2"></i>
             select None</button>
    </div>
    </>
  )
}

export default ActiveButton