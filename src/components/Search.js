import React, {useState} from "react";

function Search({setFilter}) {

  const [searchText, setSearchText] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    setFilter(searchText)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
