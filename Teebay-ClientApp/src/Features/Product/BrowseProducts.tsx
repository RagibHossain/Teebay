import React, { useContext, useState } from 'react'
import { RootStoreContext } from '../../Stores/RootStore'
import MyButton from '../Common/MyButton'
import NoProduct from './NoProduct'
import ProductList from './ProductList'
import ProductSearchForm from './ProductSearchForm'

const BrowseProducts = () => {
    const store = useContext(RootStoreContext);
    const { productTobeBought, getProducts } = store.productStore;
    const [searched,setSearched] = useState(false);
    return (
        <div style={{ display: "flex" }}>
            <div style={{ height: "800px", padding: "30px", width: "30%", border: "1px solid grey" }}>
                
            <ProductSearchForm />
            </div>
            <div style={{ height: "800px", width: "70%" }}>
            {searched ? <ProductList remove={false} products={productTobeBought} /> :  <NoProduct />}   
                
               
                
            </div>
        </div>
    )
}

export default BrowseProducts
