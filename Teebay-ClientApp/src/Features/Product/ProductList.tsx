import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { IProduct } from '../../Models/Product';
import { RootStoreContext } from '../../Stores/RootStore'
import ItemCard from '../Common/ItemCard'
interface IProps{
    products : IProduct[],
    remove : boolean
}
const ProductList : React.FC<IProps> = ({products,remove}) => {
    const store = useContext(RootStoreContext);
    const {  getProducts } = store.productStore;
    useEffect(() => {
        if (products.length < 1) getProducts()
    }, [getProducts,products])
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            {products.map((product) => (
                <ItemCard remove={remove} key={product.pk} product={product} />
            ))}

        </div>
    )
}

export default observer(ProductList)
