import React, { useState } from 'react'
interface IProps{
    content : string;
}
const TabItem : React.FC<IProps> = ({content}) => {
    const [hovered,setHovered] = useState(false);
    const normalStyle ={
        height:"30px",
        margin:"30px",
        width:"100px",
        display:"flex",
        justifyContent:"center"
    }
    const hoverStyle = {
        height:"30px",
        margin:"30px",
        width:"100px",
        borderBottom:"1px solid purple",
        cursor:"pointer",
        display:"flex",
        justifyContent:"center"
    }
    return (
        <div  onMouseOut={() => setHovered(!hovered)} onMouseOver={() => setHovered(!hovered)} style={hovered ? hoverStyle : normalStyle}>
            <strong>{content}</strong>
        </div>
    )
}

export default TabItem
