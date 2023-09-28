import React from 'react'





function SeeItems({items}) {

  
    

    if(!items){
        return <h1>Loading.....</h1>
    }
  return (
    <div>
        {items.map((item)=>(
                <h6 key={item._id}>{item.name}</h6>
        ))}
    </div>
  )
}

export default SeeItems
