import React from 'react'
import ItemCard from '../Common/ItemCard'

const ProductList = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <ItemCard />
            <ItemCard />
        </div>
    )
}

export default ProductList
