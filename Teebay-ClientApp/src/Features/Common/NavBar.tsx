import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { RootStoreContext } from "../../Stores/RootStore";

const NavBar = () => {
  const spanStyle = {
    color: "white",
    fontWeight: "bolder",
  };
  const history = useHistory();
  const store = useContext(RootStoreContext);
  const { logout, currentUser } = store.userStore;
  const logOut = () => {
    logout();
    history.push("/");
  };
  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        position: "fixed",
        top: "0",
        backgroundColor: "#9EADBA",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/browseproducts">
          <span style={spanStyle}>BROWSE PRODUCTS</span>
        </Link>
        <Link to="/products">
          <span style={spanStyle}>MY PRODUCTS</span>
        </Link>
        <Link to="/productdash">
          <span style={spanStyle}>PRODUCT DASH</span>
        </Link>
        <Link to="/updateprofile">
          <span style={spanStyle}>
            <i className="user icon"></i>{" "}
            {currentUser?.firstName.toUpperCase() +
              " " +
              currentUser?.lastName.toUpperCase()}
          </span>
        </Link>

        <Button onClick={() => logOut()} content="Logout" color="grey" />
      </div>
    </div>
  );
};

export default NavBar;
