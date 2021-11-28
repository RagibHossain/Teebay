import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { RootStoreContext } from '../../Stores/RootStore';
import ItemCard from '../Common/ItemCard'
import TabItem from '../Common/TabItem';
import NoProduct from './NoProduct';


const ProductDash = () => {
    const store = useContext(RootStoreContext);
    const { boughtProducts, soldProducts, borrowedProducts, lentProducts, setDashProducts } = store.productStore;

    useEffect(() => {
        if (boughtProducts.length < 1) setDashProducts()
    }, [setDashProducts])
    let productsToLoad = boughtProducts;
    const [selected, setSelected] = useState("Bought")
    switch (selected) {
        case "Bought":
            productsToLoad = boughtProducts;
            console.log(productsToLoad)
            break;
        case "Sold":
            productsToLoad = soldProducts;
            //  console.log(productsToLoad)
            break;
        case "Borrowed":
            productsToLoad = borrowedProducts;
            console.log(productsToLoad)
            break;
        case "Lent":
            productsToLoad = lentProducts;
            console.log(productsToLoad)
            break;
    }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", height: "100px", width: "100%" }}>

                <TabItem setState={setSelected} content="Bought" />
                <TabItem setState={setSelected} content="Sold" />
                <TabItem setState={setSelected} content="Borrowed" />
                <TabItem setState={setSelected} content="Lent" />

            </div>
            {productsToLoad.length < 1 ? <NoProduct /> :
                <>
                    {
                        productsToLoad.map((product) => (
                            <ItemCard link="update" remove={false} key={product.pk} product={product} />
                        ))
                    }
                </>
            }


        </div>

    )
}

export default observer(ProductDash)
