import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Button, Grid, Header, Item } from 'semantic-ui-react'
import agent from '../../Api/agent'
import { RootStoreContext } from '../../Stores/RootStore'
import ItemCard from '../Common/ItemCard'
import MyButton from '../Common/MyButton'
import Product from './Product'
import ProductList from './ProductList'

const MyProducts = () => {
    const history = useHistory();
    const store = useContext(RootStoreContext);
    const { myProducts, getProducts } = store.productStore;

    // useEffect(()=>{
    //   if(products.length < 1) getProducts();
    // },[getProducts,products])
    return (
        <div>
            <Header textAlign="center" >My Products </Header>
            <ProductList remove={true} products={myProducts} />
            <div onClick={() => history.push("/addproduct")} style={{display:"flex",justifyContent:"center"}}>
                <MyButton floating="right"  content="Add Product" />
            </div>
        </div>

    )
}

export default observer(MyProducts)
