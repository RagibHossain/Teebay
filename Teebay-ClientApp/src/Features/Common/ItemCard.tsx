import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { Icon } from 'semantic-ui-react'
import { IProduct } from '../../Models/Product'
import { RootStoreContext } from '../../Stores/RootStore'
import CommonModal from './CommonModal'
interface IProps {
    product: IProduct
}
const ItemCard: React.FC<IProps> = ({ product }) => {
    const store = useContext(RootStoreContext)
    const { deleteProduct,setCurrentProduct } = store.productStore;
    const history = useHistory();
    const goToEdit = (pk : number) => {
    history.push(`/update/${pk}`)//
    setCurrentProduct(pk);
    }
    return (
        <div style={{width: "80%", border: "1px solid grey", padding: "30px", margin: "30px" }}>

            <h1 style={{cursor:"pointer"}} onClick={() => goToEdit(product.pk)} >{product.title}</h1>
            <span>Categories :{product.category.toString()}</span>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Price : ${product.price} || Rent Price : ${product.rentPrice ?? "0"} daily</span>

            </div>

            <p> {product.description}</p>
            {/* <button onClick={() => deleteProduct(product.pk!)}>Delete</button> */}
            <CommonModal
                header={`Are you sure you want to delete this product}?`}
                trigger={
                    <button className="action-button" >
                        <Icon color="red" name="delete"></Icon>
                    </button>
                }
                btnColor="red"
                buttonText="Yes, Delete permanently"
                action={() => deleteProduct(product.pk!)}
            />
        </div>
    )
}

export default observer(ItemCard)
