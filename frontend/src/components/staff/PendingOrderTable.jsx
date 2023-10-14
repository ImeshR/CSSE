import React, { useState, useEffect } from "react";
import { Space, Table, Tag, Button, message } from "antd";
import dayjs from "dayjs";
import axios from "axios";

const { Column } = Table;

const PendingOrderTable = () => {
  const [pendingOrders, setPendingOrders] = useState([]);

  // Fetch all orders from your API when the component mounts
  useEffect(() => {
    fetch(
      "http://localhost:5000/api/sitemanager/get-pending-orders/john.doe@example.com"
    )
      .then((response) => response.json())
      .then((data) => {
        setPendingOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching pending orders:", error);
      });
  }, []);

  const handleAcceptPayment = (record) => {
    axios
      .put("http://localhost:5000/api/sitemanager/update-order-status", {
        orderid: record.orderid,
      })
      .then((response) => {
        // Handle the response if needed
        console.log("Order status updated successfully:", response.data);
        message.success("Order status updated successfully");
      })
      .catch((error) => {
        console.error("Error updating order status:", error);
        message.error("Error updating order status");
      });
  };

  const handleSendRequestToStaff = (record) => {
    axios
      .post("http://localhost:5000/api/staff/create-order", record)
      .then((response) => {
        console.log("Request sent to staff successfully:", response.data);
        message.success("Request sent to staff successfully");
      })
      .catch((error) => {
        console.error("Error sending request to staff:", error);
        message.error("Error sending request to staff");
      });
  };

  const renderButtons = (text, record) => {
    return (
      <div>
        {record.quotation < 100000 && record.status === "pending" ? (
          <Button
            type="primary"
            onClick={() => handleAcceptPayment(record)}
            style={{ background: "#296F9D" }}
          >
            Accept Payment
          </Button>
        ) : null}
        {record.quotation > 100000 && record.status === "pending" ? (
          <Button
            type="primary"
            style={{ background: "#22c55e" }}
            onClick={() => handleSendRequestToStaff(record)}
          >
            Send Request to Staff
          </Button>
        ) : null}
      </div>
    );
  };

  return (
    <div className="w-full px-4 border pt-10">
      <Table dataSource={pendingOrders}>
        <Column title="Order ID" dataIndex="orderid" key="orderid" />
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
            <Tag color={record.status === "pending" ? "blue" : "green"}>
              {record.status}
            </Tag>
          )}
        />
        <Column title="Actions" key="actions" render={renderButtons} />
      </Table>
    </div>
  );
};

export default PendingOrderTable;
