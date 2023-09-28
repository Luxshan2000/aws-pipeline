import React, { useState } from 'react'
import axios from 'axios'

function AddItems({setItems}) {

  const [name,setname] = useState('')

  const handleSubmit = async  (ev)=>{
    
     ev.preventDefault()
     await axios.post("http://51.20.93.112:5000/api/add/item",{name: name } )
    
     setname("")
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
