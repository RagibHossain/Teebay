import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Icon } from "semantic-ui-react";
import { IProduct } from "../../Models/Product";
import { RootStoreContext } from "../../Stores/RootStore";
import Category from "./Category";
import CommonModal from "./CommonModal";
interface IProps {
  product: IProduct;
  remove: boolean;
  link: string;
}
const ItemCard: React.FC<IProps> = ({ product, remove, link }) => {
  const store = useContext(RootStoreContext);
  const { deleteProduct, setCurrentProduct } = store.productStore;
  const history = useHistory();
  const goToEdit = (pk: number, link: string) => {
    history.push(`/${link}/${pk}`);
    setCurrentProduct(pk);
  };
  return (
    <div
      style={{
        width: "80%",
        border: "1px solid #C3CFD9",
        padding: "30px",
        margin: "30px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => goToEdit(product.pk, link)}
        >
          {product.title}
        </h1>
        {remove && (
          <CommonModal
            header={`Are you sure you want to delete this product}?`}
            trigger={
              <button style={{ border: "0px", cursor: "pointer" }}>
                <i className="trash alternate icon"></i>
              </button>
            }
            cancelText="NOOOO"
            btnColor="red"
            buttonText="Yes, Delete"
            action={() => deleteProduct(product.pk!)}
          />
        )}
      </div>

      <Category categories={product.category} />
      <div
        style={{ color: "#788896", marginTop: "10px", marginBottom: "10px" }}
      >
        <span>
          Price : ${product.price} || Rent Price : ${product.rentPrice ?? "0"}{" "}
          daily
        </span>
      </div>

      <p> {product.description}</p>
    </div>
  );
};

export default observer(ItemCard);
