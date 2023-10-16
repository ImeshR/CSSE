import React, { useState } from "react";
import Layout from "./layout";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import EmployeeTable from "../../components/staff/EmployeeTable";
import EmployeeCreateDrawer from "../../components/staff/EmployeeCreateDrawer";

const ManageEmployee = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  return (
    <Layout>
      <div className="top-0 px-8 right-0 bottom-0 flex grow flex-col border gap-5">
        <div className="w-full px-8 py-4 flex justify-end items-center">
          <Button
            type="primary"
            className="mr-4 text-base flex items-center justify-center font-semibold"
            style={{ background: "#E7B10A", width: 150, height: 50 }}
            onClick={showDrawer}
          >
            <PlusOutlined />
            Add Employee
          </Button>
        </div>
        <EmployeeTable />
        <EmployeeCreateDrawer visible={drawerVisible} onClose={closeDrawer} />
      </div>
    </Layout>
  );
};

export default ManageEmployee;
