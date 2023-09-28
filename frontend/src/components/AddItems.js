import React from 'react'

function AddItems() {
  return (
    <div>
        <form method='POST' onSubmit={()=> console.log("Submitted")} >
            <input type='text' placeholder='Item name' />
            <button>Add Item</button>
        </form>
        
    </div>
  )
}

export default AddItems
