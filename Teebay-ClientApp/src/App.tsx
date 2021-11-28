import { observer } from 'mobx-react-lite'
import { Fragment, useContext, useEffect, useState } from 'react'
import { Route,Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import './App.css'
import NavBar from './Features/Common/NavBar'
import BrowseProducts from './Features/Product/BrowseProducts'
import MyProducts from './Features/Product/MyProducts'
import ProductList from './Features/Product/Product'
import ProductDash from './Features/Product/ProductDash'
import ProductDetails from './Features/Product/ProductDetails'
import ProductForm from './Features/Product/ProductForm'
import Signin from './Features/UserAuthentication/Signin'
import SignUp from './Features/UserAuthentication/SignUp'
import { RootStoreContext } from './Stores/RootStore'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  const rootStore = useContext(RootStoreContext);
  const {loggedIn,initUser} = rootStore.userStore;
  useEffect(() => {
   if(!loggedIn) initUser()
  },[loggedIn,initUser])
  return (
    <div>
     {loggedIn && <NavBar /> }  
       <ToastContainer position="top-right"/>
       <Route exact path="/" component={Signin} />
      
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
          
            <Container style={{ marginTop: "10em" }}>
              <Switch>
            
              <Route exact path="/product" component={ProductDetails} />
                <Route exact path="/products" component={MyProducts} />
                <Route exact path="/update/:id" component={ProductForm} />
                <Route exact path="/productdash" component={ProductDash} />
                <Route exact path="/browseproducts" component={BrowseProducts} />
                <Route exact path="/addproduct" component={ProductForm} />
                {/* <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                /> */}
                 <Route exact path="/signup" component={SignUp}/>
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </div>
  )
}

export default observer(App)
