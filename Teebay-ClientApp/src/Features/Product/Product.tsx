import React from 'react'
import { useHistory } from 'react-router'
import { Button, Item } from 'semantic-ui-react'


const Product = () => {
    let history = useHistory();
    const productDesign = {
        border:"1px solid grey",
        margin:"10px",
        cursor:"pointer"
    }
    const redirect = () => {
        history.push("/product");
        
    }
    return (
        <div onClick={() => redirect()} style={productDesign} >
            <Item >
                <Item.Content>
                    <Button floated="right">Delete</Button>
                    <Item.Header as='a'>Cricket Kit</Item.Header>
                    <Item.Meta>Categories : Sports </Item.Meta>
                    <Item.Meta>Price : 50$ | Rent :5$ daily  </Item.Meta>
                    <Item.Description>

                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                    <Item.Extra>Date Posted : 21-11-19</Item.Extra>
                    <Item.Content >Additional Details</Item.Content>
                </Item.Content>
            </Item>
        </div>

    )
}

export default Product
