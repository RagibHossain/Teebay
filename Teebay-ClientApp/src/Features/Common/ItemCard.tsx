import { observer } from 'mobx-react-lite'
import React from 'react'
import { IProduct } from '../../Models/Product'
interface IProps{
    product : IProduct
}
const ItemCard : React.FC<IProps> = ({product}) => {
    return (
        <div style={{width:"80%",border:"1px solid grey",padding:"30px",margin:"30px"}}>
            <h1>{product.title}</h1>
            <span>Categories :{product.category.toString()}</span>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <span>Price : ${product.price} || Rent Price : ${product.rentPrice ?? "0"} daily</span>
            
            </div>
            
            <p> {product.description}</p>
            
        </div>
    )
}

export default observer(ItemCard)
