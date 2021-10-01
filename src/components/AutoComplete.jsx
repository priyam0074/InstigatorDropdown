import {useState, useEffect, useRef} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {dropdownActions} from '../Store/dropdown-slice'
import SearchInput from "./SearchInput";
import ActiveButton from './ActiveButton'
import DropDownList from "./DropDownList";
import data from  '../data/data.json'
const AutoComplete = (props) => {
  const [display,
    setDisplay] = useState(false);
  const [options,
    setOptions] = useState([]);
  const [search,
    setSearch] = useState("");
  const [showFilter,
    setShowFilter] = useState(false);
  const [reset, setReset]= useState('');
  const wrapperRef = useRef(null);
  const unSelectedItems = useSelector(state => state.dropdown.items);
  const selectedItems = useSelector(state => state.dropdown.selectedItems);
  const dispatch = useDispatch();
  const toggleCartHandler = (item) => {
    dispatch(dropdownActions.setDropDownReducer(item))
  }
  // dispatch(setDropDownReducer(data))

  // for data we fetch data from pokeapi and extract the required and prepare
  // model for the same model ----> {id: number, name:string,
  // sprite:string,isChecked:boolean}
  // useEffect(() => {
  //   const pokemon = [];
  //   const promises = new Array(20)
  //     .fill()
  //     .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
  //   Promise
  //     .all(promises)
  //     .then(pokemonArr => {
  //       return pokemonArr.map((value, i) => value.json().then(({
  //         name,
  //         sprites: {
  //           front_default: sprite
  //         }
  //       }) => pokemon.push({
  //         id: i + 1,
  //         name,
  //         sprite,
  //         isChecked: false
  //       })));
  //     });
  //   setOptions(pokemon);
  // }, []);

  useEffect(()=>{
    toggleCartHandler(data)
    setOptions(unSelectedItems);
  },[])

  useEffect(() => {
    if (unSelectedItems.length > 0) {
      setOptions(unSelectedItems)
    }
  }, [unSelectedItems])

  useEffect(() => {
    ["click","touchend", "mousedown"].forEach(e => 
    window.addEventListener(e, handleClickOutside)
    )
    return () => {
      ["click","touchend", "mousedown"].forEach(e => 
      window.removeEventListener(e, handleClickOutside)
      )
    };
  });

  const handleClickOutside = event => {
    const {current: wrap} = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const handleOnChange = (event, item) => {
    reset === 'All'? setReset('None'): setReset('All');
    const addItem = {
      ...item,
      isChecked: event.target.checked
    }
    setShowFilter(true);
    if (event.target.checked) {
      dispatch(dropdownActions.AddReducer(addItem))
    } else {
      dispatch(dropdownActions.RemoveDropDownReducer(addItem))
     
    }
  }

  const displayDropDown = (item) => {
    setDisplay(item)
    if (options.length > 0 && unSelectedItems.length === 0) {
      toggleCartHandler(options);
    } else if (options.length > 0 && unSelectedItems.length > 0) {
      toggleCartHandler(unSelectedItems);
    }
  };

  const filterSelection = () => {
    props.checkedItem(selectedItems.length)
    console.log("show all items stored", unSelectedItems)
  }

  const setSearchItems = (event) => {
    setSearch(event);
  }

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
        <SearchInput search={search} displayDropDown={displayDropDown} setSearchItems={setSearchItems}></SearchInput>
        <ActiveButton display={display} reset={reset}></ActiveButton>
        {!display && <div className="brightColor-msg"> <i className="fas fa-info-circle"></i> Click on search bar to show list and enable button</div>}
        {display && (
          <DropDownList options={options} search={search} handleOnChange={handleOnChange} showFilter={showFilter} filterSelection={filterSelection}></DropDownList>
        )}
      </div>
  );
};

export default AutoComplete;