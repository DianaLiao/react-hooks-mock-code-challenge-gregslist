import React, {useState} from "react";

function ListingCard({id, description, image, location, handleDelete}) {

  const [isFav, setFav] = useState(false)

  function handleFavoriteClick(){
    setFav(oldState => !oldState)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image !== "" ? image : "https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
        {isFav ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
