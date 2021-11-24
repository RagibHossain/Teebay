import React from 'react'
import { Button, Dropdown, Select } from 'semantic-ui-react'
import MyButton from '../Common/MyButton'
import MyHeader from '../Common/MyHeader'
import MyInput from '../Common/MyInput'


// ELECTRONICS
// ○ FURNITURE
// ○ HOME APPLIANCES
// ○ SPORTING GOODS

// ○ OUTDOOR
// ○ TOYS


const ProductForm = () => {
    const categories = [
        {
            key:1,
            text:"ELECTRONICS",
            value:"electronics"
        },
        {
            key:2,
            text:"FURNITURE",
            value:"furniture"
        },
        {
            key:3,
            text:"HOME APPLIANCES",
            value:"home appliances"
        },
        {
            key:3,
            text:"SPORTING GOODS",
            value:"sporting goods"
        },
        {
            key:3,
            text:"OUTDOOR",
            value:"outdoor"
        },
        {
            key:3,
            text:"TOYS",
            value:"toys"
        }
    ];
    const rateType = [
        {
            key:4,
            text:"per hour",
            value:4
        },
        {
            key:5,
            text:"per day",
            value:5
        }
    ];
    return (
        <div>
            <MyHeader content="ADD PRODUCT" />
            <form>
                <MyInput type="text" labelText="Title" height="40px" widthPercentage="100%" />
                <Dropdown
                    placeholder='Select a Category'
                    fluid
                    style={{margin:"20px",color:"black",width:"26%"}}
                    multiple
                    search
                    selection
                    options={categories}
                />
                <MyInput type="textArea" labelText="Description" height="140px" widthPercentage="100%" />
                <div style={{ display: "flex" }}>
                    <MyInput type="text" labelText="Price" height="40px" widthPercentage="100%" />
                    <MyInput type="text" labelText="Rent" height="40px" widthPercentage="80%" />
                    <Dropdown selection placeholder="select option" style={{margin:"50px 0px",color:"black",width:"26%"}} options={rateType} />
                   
                   
                </div>
              
                    <MyButton content="Add"  floating="right"/>
                   
            </form>
        </div>
    )
}

export default ProductForm
