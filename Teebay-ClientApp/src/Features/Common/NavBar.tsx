import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { RootStoreContext } from '../../Stores/RootStore'

const NavBar = () => {
    const spanStyle = {
        color:"wheat"
    }
    const history = useHistory();
    const store = useContext(RootStoreContext);
    const {logout} =store.userStore;
    const logOut = () => {
        logout();
        setTimeout(() => {
          history.push("/")
        },1000)
    }
    return (
        <div style={{width:"100%",padding:"20px",position:"fixed",top:"0",backgroundColor:"grey"}}>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
               <Link to="/browseproducts">
               <span style={spanStyle}>Browse Products</span> 
               </Link>
               <Link to="/products">
               <span style={spanStyle}>My Products</span> 
               </Link>
               <Link to="/productdash">
               <span style={spanStyle}>Product Dash</span> 
               </Link>
               
               <Button onClick={() => logOut()}  content="Logout" color="red"/>
            </div>
       
        
           
            
        </div>
    )
}

export default NavBar
