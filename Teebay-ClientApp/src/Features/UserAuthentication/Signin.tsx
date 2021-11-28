
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { IUserLogin } from '../../Models/User';

import { RootStoreContext } from '../../Stores/RootStore';
import MyButton from '../Common/MyButton'
import "./userAuth.css"
const Signin = () => {
    const store = useContext(RootStoreContext);
    const history = useHistory();
    const { signIn, loggedIn, currentUser } = store.userStore;
    const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>();
    const onLogin = (user: IUserLogin) => {
        console.log(user);
        signIn(user).then(() => {
            setTimeout(() => {
                if (!currentUser) {
                    toast.error("Credentials Incorrect");
                }
                else {
                   history.push("/products")
                }
            }, 1000);

        });

    }
    const inputStyle = { height: "40px", width: "100%", margin: "10px 0px 10px 0px", borderRadius: "2%", padding: "5px" }
    
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='black' textAlign='center'>
                    Sign-in
                </Header>
                <form onSubmit={handleSubmit(onLogin)}>
                    <div className="input">
                        <input
                            {...register("email", { required: "Email is Required" })} type="text" placeholder="Email" style={inputStyle} />
                        {errors.email && <p className="errorStyle">{errors.email?.message}</p>}
                    </div>

                    <div className="input">
                        <input {...register("password", { required: "Password  is Required" })} type="text" placeholder="Password" style={inputStyle} />
                        {errors.password && <p className="errorStyle">{errors.password?.message}</p>}
                    </div>
                    <MyButton content="Login" />
                </form>
                <Message>
                    Don't have an account?  <Link to="/signup">Sign Up</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default observer(Signin)
