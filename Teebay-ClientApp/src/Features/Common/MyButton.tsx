import React from 'react'
import { Button, SemanticFLOATS } from 'semantic-ui-react'
interface IProps{
    content : string;
    floating? : SemanticFLOATS;
}
const MyButton : React.FC<IProps> = ({content,floating}) => {
    return (
        <div>
            <Button floated={floating} style={{ backgroundColor: "#6558F5",color:"white" }}  size='large'>
                {content}
            </Button>
        </div>
    )
}

export default MyButton
