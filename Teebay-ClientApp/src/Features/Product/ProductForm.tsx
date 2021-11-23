import React from 'react'
import { Button, Dropdown, Select } from 'semantic-ui-react'
import MyButton from '../Common/MyButton'
import MyHeader from '../Common/MyHeader'
import MyInput from '../Common/MyInput'

const ProductForm = () => {
    const categories = [
        {
            key:1,
            text:"Primary",
            value:1
        },
        {
            key:2,
            text:"Secondary",
            value:2
        },
        {
            key:3,
            text:"Thirdary",
            value:3
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
