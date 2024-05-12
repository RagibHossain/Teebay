import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { Grid } from "semantic-ui-react";
import { IUser } from "../../Models/User";
import { RootStoreContext } from "../../Stores/RootStore";
import MyButton from "../Common/MyButton";
import MyHeader from "../Common/MyHeader";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();
  const { updateProfile, currentUser: user } =
    useContext(RootStoreContext).userStore;

  const onUpdate = (user: IUser) => {
    updateProfile(user, toast);
  };
  const errorStyle = {
    fontWeigth: "bolder",
    color: "red",
  };
  const inputStyle = {
    height: "40px",
    width: "100%",
    margin: "0px 0px 10px 0px",
    borderRadius: "2%",
    padding: "5px",
  };
  return (
    <Grid
      textAlign="center"
      style={{ height: "80vh", border: "1px solid #C3CFD9" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <MyHeader content="Update Profile" />
        <form onSubmit={handleSubmit(onUpdate)}>
          <div className="">
            <div className="">
              <input
                defaultValue={user!.firstName}
                {...register("firstName", {
                  required: "First Name is Required",
                })}
                type="text"
                placeholder="First Name"
                style={inputStyle}
              />
              {errors.firstName && (
                <p style={errorStyle}>{errors.firstName?.message}</p>
              )}
            </div>

            <div className="">
              <input
                defaultValue={user!.lastName}
                {...register("lastName", { required: "Last Name is Required" })}
                type="text"
                placeholder="Last Name"
                style={inputStyle}
              />
              {errors.lastName && (
                <p style={errorStyle}>{errors.lastName?.message}</p>
              )}
            </div>
          </div>

          <input
            defaultValue={user!.address}
            {...register("address", { required: "Address is Required" })}
            type="text"
            placeholder="Address"
            style={inputStyle}
          />
          {errors.address && (
            <p style={errorStyle}>{errors.address?.message}</p>
          )}

          <div className="">
            <div className="">
              <input
                defaultValue={user!.email}
                {...register("email", { required: "Email is Required" })}
                type="text"
                placeholder="Email"
                style={inputStyle}
              />
              {errors.email && (
                <p style={errorStyle}>{errors.email?.message}</p>
              )}
            </div>
            <div className="">
              <input
                defaultValue={user!.phoneNumber}
                {...register("phoneNumber", {
                  required: "Phone Number is Required",
                })}
                type="text"
                placeholder="PhoneNumber"
                style={inputStyle}
              />
              {errors.phoneNumber && (
                <p style={errorStyle}>{errors.phoneNumber?.message}</p>
              )}
            </div>
          </div>

          <input
            defaultValue={user!.password}
            {...register("password", { required: "Password is Required" })}
            type="password"
            placeholder="Password"
            style={inputStyle}
          />
          {errors.password && (
            <p style={errorStyle}>{errors.password?.message}</p>
          )}

          <MyButton content="Update" />
        </form>
      </Grid.Column>
    </Grid>
  );
};

export default observer(UpdateProfile);
