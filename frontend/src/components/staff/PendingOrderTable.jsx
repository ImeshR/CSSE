import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Button, message } from "antd";
import dayjs from "dayjs";
import axios from "axios";
import PendingOrderViewDrawer from "./PendingOrderViewDrawer";

const { Column } = Table;

const PendingOrderTable = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to fetch pending orders
  const fetchPendingOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/staff/get-pending-orders"
      );
      if (response.status === 200) {
        setPendingOrders(response.data);
      } else {
        message.error("Failed to fetch pending orders");
      }
    } catch (error) {
      console.error("Error fetching pending orders:", error);
      message.error("Failed to fetch pending orders");
    }
  };

  // Fetch pending orders when the component mounts
  useEffect(() => {
    fetchPendingOrders();
  }, []);

  const handleAcceptPayment = (record) => {
    const orderId = record._id;

    axios
      .put(`http://localhost:5000/api/staff/update-order-status/${orderId}`)
      .then((response) => {
        if (response.status === 200) {
          // Order status successfully updated
          message.success("Order accepted successfully");
          // Refresh the table by fetching pending orders again
          fetchPendingOrders();
        } else {
          message.error("Failed to accept order");
        }
      })
      .catch((error) => {
        console.error("Error accepting order:", error);
        message.error("Failed to accept order");
      });
  };

  const renderButtons = (text, record) => {
    if (record.status === "approved" || record.status === "declined") {
      return (
        <div className="w-full flex justify-center items-center">
          <Tag color="orange" className="h-8 flex justify-center items-center">
            Already Reviwed
          </Tag>
        </div>
      );
    } else {
      return (
        <div className="flex flex-row justify-evenly items-center">
          <Button
            type="primary"
            onClick={() => handleAcceptPayment(record)}
            style={{ background: "#E7B10A" }}
          >
            Accept Payment
          </Button>
          <Button type="primary" style={{ background: "#232D3F" }}>
            Decline
          </Button>
        </div>
      );
    }
  };

  const showDrawer = (record) => {
    setSelectedOrder(record);
    setDrawerVisible(true);
  };
  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  const getStatusColor = (status) => {
    if (status === "pending") {
      return "blue";
    } else if (status === "approved") {
      return "green";
    } else if (status === "declined") {
      return "red";
    } else {
      return "default-color";
    }
  };

  return (
    <div className="w-full px-4 border pt-10">
      <Table dataSource={pendingOrders}>
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
        <Column title="Site Name" dataIndex="sitename" key="sitename" />
        <Column
          title="Site Address"
          dataIndex="siteaddress"
          key="siteaddress"
        />
        <Column
          title="Created Date"
          dataIndex="createdDate"
          key="createdDate"
          render={(text, record) =>
            dayjs(record.createdDate).format("YYYY-MM-DD")
          }
        />
        <Column
          title="Deadline"
          dataIndex="deadline"
          key="deadline"
          render={(text, record) => dayjs(record.deadline).format("YYYY-MM-DD")}
        />
        <Column title="Suppliers" dataIndex="suppliers" key="suppliers" />
        <Column title="Quotation" dataIndex="quotation" key="quotation" />
        <Column
          title="Status"
          dataIndex="status"
          key="status"
          sorter={(a, b) => a.status.localeCompare(b.status)}
          render={(text, record) => (
            <Tag color={getStatusColor(record.status)}>{record.status}</Tag>
          )}
        />
        <Column title="Actions" key="actions" render={renderButtons} />
      </Table>
      <PendingOrderViewDrawer
        visible={drawerVisible}
        onClose={closeDrawer}
        orderData={selectedOrder}
      />
    </div>
  );
};

export default PendingOrderTable;
