import React, { useState, useEffect } from "react";
import { Space, Table } from "antd";
import dayjs from "dayjs";
import OrderViewDrawer from "./OrderViewDrawer";

const { Column } = Table;

const OrderTable = () => {
  const [orderData, setOrderData] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const showDrawer = (record) => {
    setSelectedOrder(record);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  const date = dayjs();

  const formattedDate = date.format("YYYY-MM-DD");

  // Fetch order data from your API when the component mounts
  useEffect(() => {
    fetch(
      "http://localhost:5000/api/sitemanager/get-order/john.doe@example.com"
    )
      .then((response) => response.json())
      .then((data) => {
        setOrderData(data);
      })
      .catch((error) => {
        console.error("Error fetching order data:", error);
      });
  }, []);

  return (
    <div className="w-full px-4 border">
      <Table dataSource={orderData}>
        <Column
          title="#"
          dataIndex="index"
          key="index"
          render={(text, record, rowIndex) => (
            <span
              className="underline text-primary font-semibold cursor-pointer"
              onClick={() => showDrawer(record)}
            >
              Order : {rowIndex + 1}
            </span>
          )}
        />
        <Column title="Manger Name" dataIndex="managername" key="managername" />
        <Column title="Contact" dataIndex="contact" key="contact" />
        <Column
          title="Site Address"
          dataIndex="siteaddress"
          key="siteaddress"
        />
        <Column title="Site Name" dataIndex="sitename" key="sitename" />
        <Column
          title="Created Date"
          dataIndex="createdDate"
          key="createdDate"
          render={(text, record) => (
            <span>{dayjs(record.createdDate).format("YYYY-MM-DD")}</span>
          )}
        />
        <Column
          title="Deadline"
          dataIndex="deadline"
          key="deadline"
          render={(text, record) => (
            <span>{dayjs(record.deadline).format("YYYY-MM-DD")}</span>
          )}
        />
        <Column title="Suppliers" key="suppliers" dataIndex="suppliers" />
      </Table>
      <OrderViewDrawer
        visible={drawerVisible}
        onClose={closeDrawer}
        orderData={selectedOrder}
      />
    </div>
  );
};

export default OrderTable;
