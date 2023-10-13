import React, { useState } from "react";
import Layout from "./layout";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Createdrawer from "../../components/site-manager/Createdrawer";

const Dashboard = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    console.log("show drawer1", drawerVisible);
    setDrawerVisible(true);
    console.log("show drawer2", drawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout>
      <div className="top-0 px-8 right-0 bottom-0 flex grow flex-col border gap-5">
        <div className="w-full border px-8 py-4 flex flex-row justify-end">
          <Button
            type="primary"
            style={{ background: "#296F9D", width: 200, height: 50 }}
            className="text-lg flex justify-center items-center"
            onClick={showDrawer}
          >
            <PlusOutlined />
            Create New Order
          </Button>
        </div>
        <Createdrawer visible={drawerVisible} onClose={closeDrawer} />
      </div>
    </Layout>
  );
};

export default Dashboard;
