import React, { useEffect, useState } from 'react'


const dummy = ["Apple", "Orange", "Car"]


function SeeItems() {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(dummy)
    })

    if(!items){
        return <h1>Loading.....</h1>
    }
  return (
    <div>
        {items.map((item)=>(
                <h6>{item}</h6>
        ))}
    </div>
  )
}

export default SeeItems
