import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import EmployeeViewDrawer from "./EmployeeViewDrawer";

const { Column } = Table;

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedEmployee, setselectedEmployee] = useState(null);

  const showDrawer = (record) => {
    setselectedEmployee(record);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  useEffect(() => {
    async function fetchEmployeeData() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/staff/get-employeee"
        );
        setEmployeeData(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    }

    fetchEmployeeData();
  }, []);

  return (
    <div className="w-full pt-10 text-base">
      <Table dataSource={employeeData} pagination={{ pageSize: 6 }}>
        <Column
          title="#"
          dataIndex="index"
          key="index"
          render={(text, record, rowIndex) => (
            <span
              className="underline text-primary font-semibold cursor-pointer"
              onClick={() => showDrawer(record)}
            >
              Employee : {rowIndex + 1}
            </span>
          )}
        />
        <Column title="Employee Name" dataIndex="name" key="name" />
        <Column title="Contact" dataIndex="mobileNo" key="mobileNo" />
        <Column title="Employee  Address" dataIndex="email" key="email" />
        <Column title="Employee  Name" dataIndex="position" key="position" />
        <Column title="Basic Salary" dataIndex="salary" key="salary" />
        <Column title="Age" dataIndex="age" key="age" />
      </Table>
      <EmployeeViewDrawer
        visible={drawerVisible}
        onClose={closeDrawer}
        EmployeeData={selectedEmployee}
      />
    </div>
  );
};

export default EmployeeTable;
