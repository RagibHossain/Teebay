import React from 'react'
import MyButton from '../Common/MyButton'

const ProductSearchForm = () => {
    const fieldStyle = {
        display: "flex",
        margin: "20px"
    }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 >Search</h1>
                </div>
                <div>
                    <form>
                        <div style={fieldStyle}>

                            <label>Title</label>
                            <input style={{ height: "35px" }} type="text" />
                        </div>
                        <div style={fieldStyle}>
                            <label>Categories</label>
                            <select style={{ height: "35px", width: "" }}>
                            </select>
                        </div>
                        <div style={{ marginLeft: "20px",marginTop:"40px"}} >
                            <input style={{marginRight:"5px"}} type="radio" />
                            <label>Buy</label>
                        </div>
                        <div  style={{ marginLeft: "20px",marginTop:"40px" }}>
                            <input style={{marginRight:"5px"}} type="radio" />
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
