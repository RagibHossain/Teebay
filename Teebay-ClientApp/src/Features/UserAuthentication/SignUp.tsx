import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Grid, Header, Form, Segment, Button, Message } from 'semantic-ui-react'
import { IUserRegister } from '../../Models/User'
import MyButton from '../Common/MyButton'
import MyInput from '../Common/MyInput'
import  "./userAuth.css"
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IUserRegister>();
    const onRegister = (user: IUserRegister) => {
        console.log(user);
    }
    const errorStyle = {
        fontWeigth: "bolder",
        color: "red"
    }
    const inputStyle = { height: "40px", width: "100%", margin: "10px 0px 10px 0px", borderRadius: "2%", padding: "5px" }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='black' textAlign='center'>
                    Sign-Up
                </Header>
                <form onSubmit={handleSubmit(onRegister)}>
                    <div className="inputRow">
                        <div className="input">
                            <input
                                {...register("firstName", { required: "First Name is Required" })} type="text" placeholder="First Name" style={inputStyle} />
                            {errors.firstName && <p style={errorStyle}>{errors.firstName?.message}</p>}
                        </div>

                        <div className="input">
                            <input {...register("lastName", { required: "Last Name is Required" })} type="text" placeholder="Last Name" style={inputStyle} />
                            {errors.lastName && <p style={errorStyle}>{errors.lastName?.message}</p>}
                        </div>
                    </div>

                    <input {...register("address", { required: "Address is Required" })} type="text" placeholder="Address" style={inputStyle} />
                    {errors.address && <p style={errorStyle}>{errors.address?.message}</p>}

                    <div className="inputRow">
                        <div className="input">

                            <input  {...register("email", { required: "Email is Required" })} type="text" placeholder="Email" style={inputStyle} />
                            {errors.email && <p style={errorStyle}>{errors.email?.message}</p>}
                        </div>
                        <div className="input">

                        <input  {...register("phoneNumber", { required: "Phone Number is Required" })} type="text" placeholder="PhoneNumber" style={inputStyle} />
                        {errors.phoneNumber && <p style={errorStyle}>{errors.phoneNumber?.message}</p>}
                        </div>
                    </div>

                    <input  {...register("password", { required: "Password is Required" })} type="password" placeholder="Password" style={inputStyle} />
                    {errors.password && <p style={errorStyle}>{errors.password?.message}</p>}

                    <input  {...register("confirmPassword", { required: "Confirm is Required" })} type="password" placeholder="Confirm Password" style={inputStyle} />
                    {errors.confirmPassword && <p style={errorStyle}>{errors.confirmPassword?.message}</p>}
                    <MyButton content="REGISTER" />
                </form>
                <Message>
                    Already have an account?  <Link to="/">Sign In</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default SignUp
