import React from 'react'

const ItemCard = () => {
    return (
        <div style={{width:"80%",border:"1px solid grey",padding:"30px",margin:"30px"}}>
            <h1>iphone</h1>
            <span>Categories : Electronics</span>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <span>Price : 1500</span>
            <span>Price : 1500</span>
            </div>
            
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
        </div>
    )
}

export default ItemCard
