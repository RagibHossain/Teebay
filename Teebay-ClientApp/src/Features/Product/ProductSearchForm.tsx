import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Select } from "semantic-ui-react";
import { IProductSearch } from "../../Models/Product";
import { RootStoreContext } from "../../Stores/RootStore";
import MyButton from "../Common/MyButton";

const ProductSearchForm = () => {
  const fieldStyle = {
    display: "flex",
    margin: "20px",
  };
  const categories = [
    {
      key: 1,
      text: "ELECTRONICS",
      value: 6,
    },
    {
      key: 2,
      text: "FURNITURE",
      value: 7,
    },
    {
      key: 3,
      text: "HOME APPLIANCES",
      value: 8,
    },
    {
      key: 4,
      text: "SPORTING GOODS",
      value: 9,
    },
    {
      key: 5,
      text: "OUTDOOR",
      value: 10,
    },
    {
      key: 6,
      text: "TOYS",
      value: 11,
    },
  ];
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [param, setParam] = useState<IProductSearch>();
  const store = useContext(RootStoreContext);
  const { searchProducts } = store.productStore;
  const inputStyle = {
    height: "40px",
    width: "90%",
    margin: "30px 10px 20px 10px",
    borderRadius: "2%",
    padding: "5px",
  };
  const search = () => {
    searchProducts(param!);
  };
  const handleChange = (item: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = item.target;
    setParam({ ...param!, [name]: value });
  };
  const handleSelect = (
    item: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setParam({ ...param!, categories: data.value });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Search</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(search)}>
          <input
            name="title"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Title (optional)"
            style={inputStyle}
          />

          <div>
            <Select
              name="categories"
              onChange={(e, data) => handleSelect(e, data)}
              placeholder="Select Categories"
              options={categories}
              style={{ margin: "10px", height: "35px", width: "60px" }}
            ></Select>
          </div>
          <div style={{ marginLeft: "20px", marginTop: "40px" }}>
            <input
              onChange={(e) => handleChange(e)}
              style={{ marginRight: "5px" }}
              checked
              name="type"
              value="buy"
              type="radio"
            />
            <label>Buy</label>
          </div>
          <div style={{ marginLeft: "20px", marginTop: "40px" }}>
            <input
              style={{ marginRight: "5px" }}
              name="type"
              onChange={(e) => handleChange(e)}
              value="rent"
              type="radio"
            />
            <label>Rent</label>
          </div>
          <div className="inputRow">
            <div className="">
              <input
                onChange={(e) => handleChange(e)}
                type="number"
                placeholder="Start Price"
                name="startPrice"
                style={inputStyle}
              />
            </div>
            <div className="">
              <input
                onChange={(e) => handleChange(e)}
                type="number"
                placeholder="End Price"
                name="endPrice"
                style={inputStyle}
              />
            </div>
          </div>
          <div
            style={{
              marginTop: "80px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MyButton content="search" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default observer(ProductSearchForm);
