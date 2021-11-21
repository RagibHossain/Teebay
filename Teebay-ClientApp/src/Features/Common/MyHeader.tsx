import React from 'react'

const MyHeader : React.FC<{content : string}> = ({content}) => {
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <p style={{fontSize:"25px",fontWeight:"bolder"}}>{content}</p>
        </div>
    )
}

export default MyHeader
