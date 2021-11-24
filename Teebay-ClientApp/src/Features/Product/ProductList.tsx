import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { RootStoreContext } from '../../Stores/RootStore'
import ItemCard from '../Common/ItemCard'

const ProductList = () => {


    const store = useContext(RootStoreContext);
    const { products, getProducts } = store.productStore;
    useEffect(() => {
        if (products.length < 1) getProducts()
    }, [getProducts])
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            {products.map((product) => (
                <ItemCard key={product.pk} product={product} />
            ))}

        </div>
    )
}

export default observer(ProductList)
