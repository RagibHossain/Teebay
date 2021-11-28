import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
interface IProps{
    content : string;
    setState : React.Dispatch<React.SetStateAction<string>>;
}
const TabItem : React.FC<IProps> = ({content,setState}) => {
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
        <div onClick={() => setState(content)}  onMouseOut={() => setHovered(!hovered)} onMouseOver={() => setHovered(!hovered)} style={hovered ? hoverStyle : normalStyle}>
            <strong>{content}</strong>
        </div>
    )
}

export default observer(TabItem)
