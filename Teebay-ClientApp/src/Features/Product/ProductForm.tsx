import React from 'react'
import MyHeader from '../Common/MyHeader'

const ProductForm = () => {
    return (
        <div>
            <MyHeader content="ADD PRODUCT"/>
            <form>
                <div>
                    <label>Title</label>
                    <input type="text" style={{height:"40px",width:"100%"}}/>
                </div>
                <div>
                    
                </div>
            </form>
        </div>
    )
}

export default ProductForm
