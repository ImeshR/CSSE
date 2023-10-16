import React, { useEffect, useState } from "react";
import { Table } from "antd";
import dayjs from "dayjs";
import axios from "axios";

const { Column } = Table;

const SitesTable = () => {
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    async function fetchSiteData() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/staff/get-site"
        );
        setSiteData(response.data);
      } catch (error) {
        console.error("Error fetching site data:", error);
      }
    }

    fetchSiteData();
  }, []);

  return (
    <div className="w-full pt-10 text-base">
      <Table dataSource={siteData} pagination={{ pageSize: 6 }}>
        <Column
          title="#"
          dataIndex="_id"
          key="_id"
          render={(text, record, index) => index + 1}
        />
        <Column title="Site Name" dataIndex="siteName" key="siteName" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Start Date"
          dataIndex="startDate"
          key="startDate"
          render={(text) => dayjs(text).format("YYYY-MMM-DD")}
        />
        <Column
          title="End Date"
          dataIndex="endDate"
          key="endDate"
          render={(text) => dayjs(text).format("YYYY-MMM-DD")}
        />
        <Column
          title="Estimated Price"
          dataIndex="estimatedPrice"
          key="estimatedPrice"
        />
        <Column
          title="Site Manager"
          dataIndex="siteManager"
          key="siteManager"
        />
      </Table>
    </div>
  );
};

export default SitesTable;
