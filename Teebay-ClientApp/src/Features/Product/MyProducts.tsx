import { observer } from 'mobx-react-lite'
import React, { Fragment, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Button, Grid, Header, Item } from 'semantic-ui-react'
import { RootStoreContext } from '../../Stores/RootStore'
import MyButton from '../Common/MyButton'
import MyHeader from '../Common/MyHeader'
import NoProduct from './NoProduct'
import ProductList from './ProductList'

const MyProducts = () => {
    const history = useHistory();
    const store = useContext(RootStoreContext);
    const { myProducts, getProducts } = store.productStore;

    useEffect(() => {
        if (myProducts.length < 1) getProducts();
    }, [getProducts])
    return (
        <div>
            <MyHeader content="MY PRODUCTS"/>
            {myProducts.length < 1 ? <NoProduct /> :

                <>
                    <ProductList link="update" remove={true} products={myProducts} />
                    <div onClick={() => history.push("/addproduct")} style={{ display: "flex", justifyContent: "center" }}>
                        <MyButton floating="right" content="Add Product" />
                    </div>

                </>}

        </div>

    )
}

export default observer(MyProducts)
