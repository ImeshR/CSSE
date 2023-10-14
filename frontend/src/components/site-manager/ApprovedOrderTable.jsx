import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import dayjs from "dayjs";

const { Column } = Table;

const ApprovedOrderTable = () => {
  const [approvedOrders, setApprovedOrders] = useState([]);

  const date = dayjs();

  const formattedDate = date.format("YYYY-MM-DD");

  useEffect(() => {
    // Fetch approved orders from your API when the component mounts
    fetch(
      "http://localhost:5000/api/sitemanager/get-accepted-orders/john.doe@example.com"
    )
      .then((response) => response.json())
      .then((data) => {
        setApprovedOrders(data);
      })
      .catch((error) => {
        console.error("Error fetching approved orders:", error);
      });
  }, []);

  return (
    <div className="w-full px-4 border">
      <Table dataSource={approvedOrders}>
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
        <Column title="Suppliers" key="suppliers" dataIndex="suppliers" />
        <Column title="Quotation" dataIndex="quotation" key="quotation" />
        <Column
          title="Status"
          dataIndex="status"
          key="status"
          render={(text, record) => (
            <Tag color={record.status === "pending" ? "blue" : "green"}>
              {record.status}
            </Tag>
          )}
        />
      </Table>
    </div>
  );
};

export default ApprovedOrderTable;
