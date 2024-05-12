import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Button, Modal, SemanticCOLORS } from "semantic-ui-react";

import { IRentProduct } from "../../Models/Rent";
import { RootStoreContext } from "../../Stores/RootStore";
interface IProps {
  trigger: React.ReactNode;
  header: string;
  buttonText: string;
  cancelText: string;
  btnColor: SemanticCOLORS;
}

const RentModal: React.FC<IProps> = ({
  trigger,
  header,
  buttonText,
  cancelText,
  btnColor,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rentRequestBody, setRentRequestBody] = useState<IRentProduct>();
  const store = useContext(RootStoreContext);
  const { rentProduct } = store.productStore;

  const onchange = (e: any) => {
    setRentRequestBody({
      ...rentRequestBody!,
      [e.target.name]: e.target.value,
    });
  };
  const history = useHistory();
  const onRentClick = () => {
    if (
      !rentRequestBody ||
      !rentRequestBody.rentend ||
      !rentRequestBody.rentstart
    ) {
      toast.error("Enter Start and End date");
    } else rentProduct(rentRequestBody!, toast, history);
  };
  const errorStyle = {
    color: "red",
    fontWeight: "bolder",
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>{header}</Modal.Header>

      <Modal.Description>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "20px",
          }}
        >
          <label>Start Date : </label>
          <input
            type="date"
            onChange={(e) => onchange(e)}
            name="rentstart"
            placeholder="Start date"
          />
          <label>End Date : </label>
          <input
            type="date"
            onChange={(e) => onchange(e)}
            name="rentend"
            placeholder="End date"
          />
        </div>
      </Modal.Description>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          {cancelText}
        </Button>
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
};

export default RentModal;
