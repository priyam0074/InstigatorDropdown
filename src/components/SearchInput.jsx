const SearchInput =(props)=> {
    const displayDropDown=(item)=> {
        props.displayDropDown(item)
    }

    const setSearchItem = (e)=>{
        props.setSearchItems(e)
    }
    return(
        <div className="input-icons">
       <i className="fas fa-search input-icon-search">
              </i>
        <input
           className="input-searchahead"
          id="auto input-searchahead "
          onClick={()=> displayDropDown(true)}
          placeholder="Search"
          value={props.search}
          onChange={event => setSearchItem(event.target.value)}
        />
        </div>
    )
}

export default SearchInput;
