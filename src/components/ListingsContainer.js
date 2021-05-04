import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {

  const listCards = listings.map(listing => {
    return <ListingCard 
      key={listing.id} 
      {...listing} 
      handleDelete={handleDelete} 
    />
  })

  return (
    <main>
      <ul className="cards">
        {listCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
