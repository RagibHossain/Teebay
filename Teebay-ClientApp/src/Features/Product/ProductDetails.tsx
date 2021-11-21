import React from 'react'
import { Item, Button, Icon, Label } from 'semantic-ui-react'
import MyHeader from '../Common/MyHeader'

const ProductDetails = () => {
    const paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    const spanStyle={
        color:"#788896",
        margin:"5px",
        fontSize:"15px"
    }
    return (
        <div>
         <MyHeader content="Product Details"/>
        <div style={{display:"flex",flexDirection:"column"}}>
           
          <h1>Cricket Kit</h1>
         
            <span style={spanStyle}>Categories : Sports</span>
            <span style={spanStyle}>Price : 100$</span>
          <p>{paragraph}</p>
          <div>
            <Button primary floated='right'>
              Rent
            </Button>
          </div>
        </div>
      </div>
    )
}

export default ProductDetails
