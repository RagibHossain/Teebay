import React from 'react'
import { Item, Button, Icon, Label } from 'semantic-ui-react'
import { IProduct } from '../../Models/Product'
import MyHeader from '../Common/MyHeader'
interface IProps {
  product: IProduct,
  rentOnly: boolean
}
const ProductDetails: React.FC<IProps> = ({ product, rentOnly }) => {
  // const paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  const spanStyle = {
    color: "#788896",
    margin: "5px",
    fontSize: "15px"
  }
  return (
    <div>
      <MyHeader content="Product Details" />
      <div style={{ display: "flex", flexDirection: "column" }}>

        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <span style={spanStyle}>Categories : {product.category}</span>


        {rentOnly ? (
          <>
            <span style={spanStyle}>Price : {product.rentPrice}$</span>
            <div>
              <Button primary floated='right'>
                Rent
              </Button>
            </div>
          </>
        ) : (
          <>
          <span style={spanStyle}>Price : {product.price}$</span>
            <div>
              <Button primary floated='right'>
                Buy
              </Button>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default ProductDetails
