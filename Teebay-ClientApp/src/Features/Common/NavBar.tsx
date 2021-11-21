import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const NavBar = () => {
    const spanStyle = {
        color:"wheat"
    }
    const history = useHistory();
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
               <Link to="/browseproducts">
               <span style={spanStyle}>Browse Products</span> 
               </Link>
               <Button onClick={() => history.push("/") }  content="Logout" color="red"/>
            </div>
       
        
           
            
        </div>
    )
}

export default NavBar
