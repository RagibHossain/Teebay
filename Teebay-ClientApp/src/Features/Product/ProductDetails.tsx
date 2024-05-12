import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Item, Button, Icon, Label } from "semantic-ui-react";
import { RootStoreContext } from "../../Stores/RootStore";
import CommonModal from "../Common/CommonModal";
import MyHeader from "../Common/MyHeader";
import RentModal from "./RentModal";

const ProductDetails: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const spanStyle = {
    color: "#788896",
    margin: "5px",
    fontSize: "15px",
  };
  const paraStyle = {
    color: "#000000",
    margin: "5px",
    fontSize: "15px",
  };
  const store = useContext(RootStoreContext);
  const {
    getProductDetails,
    emptyCurrentProduct,
    currentProduct: product,
    action,
    buyProduct,
  } = store.productStore;
  const { currentUser } = store.userStore;
  const history = useHistory();
  const mytoast = toast;
  useEffect(() => {
    if (match.params.id) {
      getProductDetails(match.params.id);
    }
    return () => {
      emptyCurrentProduct();
    };
  }, [getProductDetails, match.params.id, emptyCurrentProduct]);
  const onButtonClick = () => {
    buyProduct(product!, currentUser!.id, history, mytoast);
  };
  return (
    <div>
      <MyHeader content="Product Details" />
      {product && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>{product!.title}</h1>

          <span style={spanStyle}>Categories : {product!.category}</span>
          <span style={spanStyle}>Price : {product!.price}$</span>
          <span style={spanStyle}>Rent Price : {product!.rentPrice}$</span>

          <p style={paraStyle}>{product!.description}</p>

          <div>
            {action == "rent" ? (
              <RentModal
                header={`Are you sure you want to ${action} this product at ${product.rentPrice} $?`}
                cancelText="Go Back"
                trigger={
                  <Button primary floated="right">
                    RENT
                  </Button>
                }
                btnColor="green"
                buttonText="Confirm"
              />
            ) : (
              <CommonModal
                header={`Are you sure you want to ${action} this product at ${product.price} $?`}
                cancelText="Go Back"
                trigger={
                  <Button primary floated="right">
                    {action == "rent" ? action.toUpperCase() : "BUY"}
                  </Button>
                }
                btnColor="red"
                buttonText="Confirm"
                action={() => onButtonClick()}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(ProductDetails);
