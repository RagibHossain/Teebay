import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Modal, Button, SemanticCOLORS } from "semantic-ui-react";

interface IProps {
  trigger: React.ReactNode;
  action: Function;
  header: string;
  buttonText : string;
  cancelText : string;
  btnColor : SemanticCOLORS;
}

const CommonModal: React.FC<IProps> = ({ trigger, action, header,buttonText,btnColor,cancelText}) => {
  const [open, setOpen] = useState(false);
  const [loading,setLoading] = useState(false);
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
        <input type="date" placeholder="Start date"/>
        <input type="date" placeholder="End date"/>
      </Modal.Description>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>{cancelText}</Button>
        <Button
          color={btnColor}
          loading={loading}
          onClick={() => {
            setLoading(true);
            action();
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

export default observer(CommonModal);