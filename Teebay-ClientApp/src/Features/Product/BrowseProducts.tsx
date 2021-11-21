import React from 'react'
import MyButton from '../Common/MyButton'
import NoProduct from './NoProduct'
import ProductList from './ProductList'
import ProductSearchForm from './ProductSearchForm'

const BrowseProducts = () => {
  
    return (
        <div style={{ display: "flex" }}>
            <div style={{ height: "800px", padding: "30px", width: "30%", border: "1px solid grey" }}>
                
            <ProductSearchForm />
            </div>
            <div style={{ height: "800px", width: "70%" }}>
                {/* <NoProduct /> */}
                <ProductList />
                
            </div>
        </div>
    )
}

export default BrowseProducts
