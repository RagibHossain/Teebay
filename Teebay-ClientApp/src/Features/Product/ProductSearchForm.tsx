import React from 'react'
import { Select } from 'semantic-ui-react'
import MyButton from '../Common/MyButton'
import MyInput from '../Common/MyInput'

const ProductSearchForm = () => {
    const fieldStyle = {
        display: "flex",
        margin: "20px",
        flexDirection:"column"
    }
    const categories = [
        {
            key:1,
            text:"Primary",
            value:1
        },
        {
            key:2,
            text:"Secondary",
            value:3
        },
        {
            key:3,
            text:"Thirdary",
            value:3
        }
    ];
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 >Search</h1>
                </div>
                <div>
                    <form>
                    <MyInput type="text" labelText="Title" height="40px" widthPercentage="70%" />
                        <div style={fieldStyle}>
                            <label>Categories</label>
                            <Select placeholder="Select Categories" options={categories}  style={{ height: "35px", width: "60px" }}>
                                
                            </Select>
                        </div>
                        <div style={{ marginLeft: "20px",marginTop:"40px"}} >
                            <input style={{marginRight:"5px"}} name="type" type="radio" />
                            <label>Buy</label>
                        </div>
                        <div  style={{ marginLeft: "20px",marginTop:"40px" }}>
                            <input style={{marginRight:"5px"}} name="type" type="radio" />
                            <label>Rent</label>
                        </div>
                         <div style={{marginTop:"80px",display:"flex",justifyContent:"center"}}>
                             <MyButton content="search" />
                         </div>
                    </form>
                </div>
        </div>
    )
}

export default ProductSearchForm
