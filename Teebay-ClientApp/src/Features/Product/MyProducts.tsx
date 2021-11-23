import React, { Fragment, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Button, Grid, Header, Item } from 'semantic-ui-react'
import agent from '../../Api/agent'
import ItemCard from '../Common/ItemCard'
import MyButton from '../Common/MyButton'
import Product from './Product'
import ProductList from './ProductList'

const MyProducts = () => {
    const history = useHistory();
    useEffect(()=>{
      console.log( agent.Products.productList());
    },[])
    return (
        <div>
            <Header textAlign="center" >My Products </Header>
            <ProductList />
            <div onClick={() => history.push("/addproduct")} style={{display:"flex",justifyContent:"center"}}>
                <MyButton floating="right"  content="Add Product" />
            </div>

        </div>

    )
}

export default MyProducts
