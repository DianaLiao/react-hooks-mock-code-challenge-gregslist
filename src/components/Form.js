import {useState} from "react"

function Form ({submitNewItem}){

  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [location, setLocation] = useState("")

  const formData = {description, image, location}

  function handleSubmit(event){
    event.preventDefault()
    
    setDescription("")
    setImage("")
    setLocation("")

    submitNewItem(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add an Item!</h3>
      <label for="description">Description:</label>
      <input type="text" 
        name="description" 
        value={description}
        onChange={e => setDescription(e.target.value)}>
      </input>
      <label for="image">Image:</label>
      <input type="text" 
        name="image" 
        value={image}
        onChange={e => setImage(e.target.value)}>
      </input>
      <label for="location">Location:</label>
      <input type="text" 
        name="location" 
        value={location}
        onChange={e => setLocation(e.target.value)}>
      </input>
      <input type="submit"></input>
    </form>
  )
}

export default Form