import { Drawer } from "antd";
import React from "react";
import { Button } from "antd";
import EmployeeCreateForm from "./EmployeeCreateForm";

const EmployeeCreateDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Create New Order"
      placement="right"
      closable={false}
      onClose={onClose}
      open={visible}
      width={1024}
      footer={
        <div className="w-full border px-8 py-4 flex flex-row justify-end">
          <Button
            type="primary"
            style={{ background: "#296F9D", width: 200, height: 50 }}
            className="text-lg flex justify-center items-center"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      }
    >
     <EmployeeCreateForm onClose={onClose}/>
    </Drawer>
  );
};

export default EmployeeCreateDrawer;
