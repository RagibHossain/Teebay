import React from 'react'
import TabItem from './TabItem'

const Tab = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",height:"100px",width:"100%"}}>
        <TabItem content="Bought"/>
        <TabItem content="Sold"/>
        <TabItem content="Borrowed"/>
        <TabItem content="Lent"/>
    </div>
    )
}

export default Tab
