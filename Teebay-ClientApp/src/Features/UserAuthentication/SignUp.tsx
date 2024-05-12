import { observer } from "mobx-react-lite";
import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message,
} from "semantic-ui-react";
import { IUserRegister } from "../../Models/User";
import { RootStoreContext } from "../../Stores/RootStore";
import MyButton from "../Common/MyButton";
import "./userAuth.css";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserRegister>();
  const { register: registeruser } = useContext(RootStoreContext).userStore;
  const password = useRef({});
  password.current = watch("password", "");
  const history = useHistory();
  const onRegister = (user: IUserRegister) => {
    registeruser(user, toast, history);
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
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          Sign-Up
        </Header>
        <form onSubmit={handleSubmit(onRegister)}>
          <div className="">
            <div className="">
              <input
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
            {...register("password", { required: "Password is Required" })}
            type="password"
            placeholder="Password"
            style={inputStyle}
          />
          {errors.password && (
            <p style={errorStyle}>{errors.password?.message}</p>
          )}

          <input
            {...register("confirmPassword", {
              required: "Confirm is Required",
              validate: (value) =>
                value === password.current || "Passwords Mismatches",
            })}
            type="password"
            placeholder="Confirm Password"
            style={inputStyle}
          />
          {errors.confirmPassword && (
            <p style={errorStyle}>{errors.confirmPassword?.message}</p>
          )}
          <MyButton content="REGISTER" />
        </form>
        <Message>
          Already have an account? <Link to="/">Sign In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default observer(SignUp);
