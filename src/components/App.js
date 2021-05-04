import React, {useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const listingsURL = "http://localhost:6001/listings"

  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState("") 

  useEffect(() => {
    fetch(listingsURL).then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  function handleDelete(id){
    // fetch(`${listingsURL}/${id}`, {method:"DELETE"})

    setListings(oldList => oldList.filter(listing => listing.id !== id))
  }

  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(filter.toLowerCase())
  })


  return (
    <div className="app">
      <Header setFilter={setFilter}/>
      <ListingsContainer handleDelete={handleDelete} listings={filteredListings} />
    </div>
  );
}

export default App;
