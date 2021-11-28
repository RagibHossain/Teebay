import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Select } from 'semantic-ui-react'
import { IProductSearch } from '../../Models/Product'
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
            key: 1,
            text: "ELECTRONICS",
            value: 6
        },
        {
            key: 2,
            text: "FURNITURE",
            value: 7
        },
        {
            key: 3,
            text: "HOME APPLIANCES",
            value: 8
        },
        {
            key: 4,
            text: "SPORTING GOODS",
            value: 9
        },
        {
            key: 5,
            text:"OUTDOOR",
            value: 10
        },
        {
            key: 6,
            text: "TOYS",
            value: 11
        }
    ];
    const {  handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [param, setParam] = useState<IProductSearch>();
    const inputStyle = { height: "40px", width: "100%", margin: "10px 0px 10px 0px", borderRadius: "2%", padding: "5px" }
    const search = () => {
        console.log(param)
    }
    const handleChange = (item:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = item.target;
        setParam({ ...param!, [name]: value })

    }
    const handleSelect = ( item: React.SyntheticEvent<HTMLElement, Event>,data : any) => {
        setParam({ ...param!, categories: data.value })   
    }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 >Search</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(search)}>
                    <input name="title"  onChange={(e) => handleChange(e)} type="text" style={inputStyle} />
                  
                   
                        <div style={fieldStyle}>
                            <label>Categories</label>
                            <Select name="categories" onChange={(e,data) => handleSelect(e,data)} placeholder="Select Categories" options={categories}  style={{ height: "35px", width: "60px" }}>
                                
                            </Select>
                        </div>
                        <div style={{ marginLeft: "20px",marginTop:"40px"}} >
                            <input    onChange={() => {

                            }} style={{marginRight:"5px"}} name="type" type="radio" />
                            <label>Buy</label>
                        </div>
                        <div  style={{ marginLeft: "20px",marginTop:"40px" }}>
                            <input style={{marginRight:"5px"}} name="type" type="radio" />
                            <label>Rent</label>
                        </div>
                        <div className="inputRow">
                        <div className="input">

                            <input onChange={(e) => handleChange(e)} type="text" name="startPrice"  style={inputStyle} />
                         
                        </div>
                        <div className="input">

                        <input  onChange={(e) => handleChange(e)} type="text" name="endPrice"   style={inputStyle} />
                      
                        </div>
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
