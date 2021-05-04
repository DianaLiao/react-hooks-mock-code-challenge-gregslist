import React, {useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from "./Form"

function App() {

  const listingsURL = "http://localhost:6001/listings"

  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState("")
  const [locationSort, setLocationSort] = useState(false) 

  useEffect(() => {
    fetch(listingsURL).then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

 
  function handleDelete(id){
    fetch(`${listingsURL}/${id}`, {method:"DELETE"})

    setListings(oldList => oldList.filter(listing => listing.id !== id))
  }

  function submitNewItem(formData){
    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch(listingsURL, fetchObj).then(resp => resp.json())
      .then(newItem => setListings([...listings, newItem]))
  }

  const sortedListings = locationSort ? 
    [...listings].sort((a,b) => a.location.localeCompare(b.location)) 
    : [...listings]

  const filteredListings = sortedListings.filter(listing => {
    return listing.description.toLowerCase().includes(filter.toLowerCase())
  })


  return (
    <div className="app">
      <Header setFilter={setFilter} setLocationSort={setLocationSort}/>
      <Form submitNewItem={submitNewItem}/>
      <ListingsContainer handleDelete={handleDelete} listings={filteredListings} />
    </div>
  );
}

export default App;
