import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import axios from "axios";

const EmployeeCreateForm = ({ onClose }) => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/staff/add-employee",
        values
      );
      if (response.status === 200) {
        message.success("Employee successfully created");
        onClose(); 
      } else {
        message.error("Failed to create employee");
      }
    } catch (error) {
      console.error("Error creating employee:", error);
      message.error("Failed to create employee");
    }
  };

  return (
    <div>
      <Form name="basic" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Employee name"
          name="name"
          rules={[{ required: true, message: "Please input employee name!" }]}
        >
          <Input className="h-12" />
        </Form.Item>
        <Form.Item
          label="Employee email"
          name="email"
          type="email"
          rules={[{ required: true, message: "Please input employee email!" }]}
        >
          <Input className="h-12" />
        </Form.Item>
        <Form.Item
          label="Employee mobile"
          name="mobileNo"
          rules={[
            { required: true, message: "Please input employee mobile number!" },
          ]}
        >
          <Input className="h-12" />
        </Form.Item>
        <Form.Item
          label="Employee position"
          name="position"
          rules={[
            { required: true, message: "Please input employee position!" },
          ]}
        >
          <Select className="h-12">
            <Select.Option value="staff">Staff Member</Select.Option>
            <Select.Option value="sitemanager">Site Manager</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Employee age"
          name="age"
          rules={[{ required: true, message: "Please input employee age!" }]}
        >
          <Input className="h-12" />
        </Form.Item>
        <Form.Item
          label="Employee salary"
          name="salary"
          rules={[{ required: true, message: "Please input employee salary!" }]}
        >
          <Input className="h-12" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "#E7B10A", width: 150, height: 50 }}
            className="text-base"
          >
            Create Employee
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmployeeCreateForm;
