import { Drawer } from "antd";
import React from "react";
import { Button } from "antd";
import CreateForm from "./CreateForm";

const Createdrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Create New Order"
      placement="right"
      closable={false}
      onClose={onClose} // Call the onClose function when the drawer is closed
      open={visible} // Control visibility with the visible prop
      width={1024}
      footer={
        <div className="w-full border px-8 py-4 flex flex-row justify-end">
          <Button
            type="primary"
            style={{ background: "#232D3F", width: 200, height: 50 }}
            className="text-lg flex justify-center items-center"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      }
    >
     <CreateForm onClose={onClose}/>
    </Drawer>
  );
};

export default Createdrawer;
