import React, { useContext } from 'react'
import { RootStoreContext } from '../../Stores/RootStore';
import ItemCard from '../Common/ItemCard'
import Tab from '../Common/Tab'
import TabItem from '../Common/TabItem';


const ProductDash = () => {
    const store = useContext(RootStoreContext);
    const { myProducts, getProducts } = store.productStore;
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", height: "100px", width: "100%" }}>
                <TabItem content="Bought" />
                <TabItem content="Sold" />
                <TabItem content="Borrowed" />
                <TabItem content="Lent" />
            </div>
            {myProducts.map((product) => (
                <ItemCard remove={false} key={product.pk} product={product} />
            ))}

        </div>

    )
}

export default ProductDash
