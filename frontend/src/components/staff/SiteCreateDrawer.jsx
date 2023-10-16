import { Drawer } from "antd";
import React from "react";
import { Button } from "antd";
import CreateForm from "./CreateForm";

const SiteCreatedrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Add New Project Site"
      placement="right"
      closable={false}
      onClose={onClose} 
      open={visible}
      width={1024}
      footer={
        <div className="w-full border px-8 py-4 flex flex-row justify-end">
          <Button
            type="primary"
            style={{ background: "#E7B10A", width: 200, height: 50 }}
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

export default SiteCreatedrawer;
