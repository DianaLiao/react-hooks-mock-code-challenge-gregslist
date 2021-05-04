import React from "react";
import Search from "./Search";


function Header({setFilter, setLocationSort}) {

  function handleBoxClick(e){
    setLocationSort(oldState => !oldState)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setFilter={setFilter}/>
      <input type="checkbox" name="locationSort" onClick={handleBoxClick}/>
      <label for="locationSort">Sort by Location?</label>
    </header>
  );
}

export default Header;
