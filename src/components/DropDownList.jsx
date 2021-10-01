const DropDownList =(props)=> {
    return(
        <div className="autoContainer">
            {props.options
              .filter(({ name }) => name.toLowerCase().indexOf(props.search.toLowerCase()) > -1)
              .map((value, i) => {
                return (
                  <div
                    className="option options-drop"
                    key={i}
                    tabIndex="0"
                  >
                     <input type="checkbox" id={value.id} name={value.name} value={value.name} checked={value.isChecked} onChange={($event)=>props.handleOnChange($event, value)}></input> 
                    <label htmlFor={value.id} className={`option-span ${value.isChecked ?"on-chcek":"on-uncheck"}`}>{value.name.toLowerCase()}</label>
                    {/* <img className={'img-spirtes'} src={value.sprite} alt="pokemon" /> */}
                  </div>
                );
              })}
               <div onClick={()=> props.filterSelection()}> <button className={`filter-btn ${props.showFilter ?"onfil-check":"onFil-uncheck"}`} disabled={!props.showFilter} >Filter</button></div>
          </div>
    )
}

export default DropDownList