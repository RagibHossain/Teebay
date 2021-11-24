import React, { useContext } from 'react'
import { RootStoreContext } from '../../Stores/RootStore';
import ItemCard from '../Common/ItemCard'
import Tab from '../Common/Tab'


const ProductDash = () => {
    const store = useContext(RootStoreContext);
    const { products, getProducts } = store.productStore;
    return (
        <div>
            <Tab />
            {products.map((product) => (
                <ItemCard key={product.pk} product={product}/>
            ))}
            
        </div>

    )
}

export default ProductDash
