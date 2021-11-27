import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { IProduct } from '../../Models/Product';
import { RootStoreContext } from '../../Stores/RootStore'
import ItemCard from '../Common/ItemCard'
interface IProps{
    products : IProduct[],
    remove : boolean,
    link : string
}
const ProductList : React.FC<IProps> = ({products,remove,link}) => {
    // const store = useContext(RootStoreContext);
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            {products.map((product) => (
                <ItemCard remove={remove} link={link} key={product.pk} product={product} />
            ))}

        </div>
    )
}

export default observer(ProductList)
