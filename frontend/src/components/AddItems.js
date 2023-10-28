import React, { useState } from 'react'
import axios from 'axios'

function AddItems({setItems}) {

  const [name,setname] = useState('')

  const handleSubmit = async (ev) => {
    ev.preventDefault();
  
    try {//51.20.76.107
      const response = await axios.post("http://ec2-18-61-66-218.ap-south-2.compute.amazonaws.com/api/add/item", { name: name });
      setname("");
      setItems((prv)=>[...prv,response.data.item])
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error("Error:", error);
    }
  }
  

  

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input onChange={(e)=> setname(e.target.value)} value={name} type='text' placeholder='Item name' />
            <button>Add Item</button>
        </form>
        
    </div>
  )
}

export default AddItems
