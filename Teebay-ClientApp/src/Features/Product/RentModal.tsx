import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button, Modal, SemanticCOLORS } from 'semantic-ui-react';
import { IProduct, IRentProduct } from '../../Models/Product';
import { RootStoreContext } from '../../Stores/RootStore';
interface IProps {
    trigger: React.ReactNode;
    header: string;
    buttonText : string;
    cancelText : string;
    btnColor : SemanticCOLORS;
  }


const RentModal : React.FC<IProps> = ({trigger,header,buttonText,cancelText,btnColor}) => {
    const [open, setOpen] = useState(false);
    const [loading,setLoading] = useState(false);
    const [rentRequestBody,setRentRequestBody] = useState<IRentProduct>();
    const store = useContext(RootStoreContext);
    const { rentProduct } = store.productStore;
    
    const onchange = (e : any) => {
       
        setRentRequestBody({...rentRequestBody!,[e.target.name]:e.target.value})
    }
    const mytoast = toast;
    const onRentClick = ()=> {

        if(!rentRequestBody || !rentRequestBody.rentend || !rentRequestBody.rentstart){
            toast.error("Enter Start and End date");
        }
        else rentProduct(rentRequestBody!,toast);
    }
    const errorStyle = {
        color:"red",
        fontWeight:"bolder"
    }
    return (
      <Modal
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={trigger}
      >
        <Modal.Header>{header}</Modal.Header>
    

     
        <Modal.Description>
          <input type="date"  onChange={(e) => onchange(e)} name="rentstart" placeholder="Start date"/>
       
          <input type="date"  onChange={(e) => onchange(e)} name="rentend" placeholder="End date"/>
     
        </Modal.Description>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>{cancelText}</Button>
          <Button
            color={btnColor}
            loading={loading}
            onClick={() => {
              setLoading(true);
              onRentClick();
              setLoading(false);
              setOpen(false);
            }}
          >
           {buttonText}
          </Button>
        </Modal.Actions>

      </Modal>
    );
}

export default RentModal
