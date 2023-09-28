import React, { useState } from 'react'

function SeeItems() {
    const [items, setItems] = useState([])

    if(!items){
        return <h1>Loading.....</h1>
    }
  return (
    <div>
      
    </div>
  )
}

export default SeeItems
