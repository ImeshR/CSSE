import React from "react";
import {
  DesktopOutlined,
  SettingOutlined,
  HomeOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import { Button, Menu, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const SidePanel = () => {
  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
      link: "/staff-manager",
    },
    {
      key: "2",
      icon: <SettingOutlined />,
      label: "Add Employee",
      link: "/staff-manager/employee-manage",
    },
    {
      key: "3",
      icon: <PartitionOutlined />,
      label: "pending orders",
      link: "/staff-manager/pending-order",
    },
    {
      key: "4",
      icon: <SettingOutlined />,
      label: "Accepted Orders",
      link: "#",
    },
    {
      key: "5",
      icon: <DesktopOutlined />,
      label: "Log Out",
      link: "#",
    },
  ];

  return (
    <div className="h-screen py-2 pl-2 w-[400px]">
      <div className="w-full h-full bg-[#001529] rounded-md py-2 flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full text-white text-xl px-2 ">Hi Staff Manager!</div>
          <div className="w-full pt-10  flex justify-center">
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              style={{
                width: " 100%",
                height: "100%",
                paddingTop: 6,
                paddingLeft: 10,
                paddingRight: 10,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                maxHeight: 600,
                overflow: "hidden",
              }}
            >
              {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.onClick ? (
                    <a onClick={item.onClick}>{item.label}</a>
                  ) : (
                    <Link to={item.link}>{item.label}</Link>
                  )}
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
