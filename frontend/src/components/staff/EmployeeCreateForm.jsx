import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  DatePicker,
  Select,
  Divider,
  message,
} from "antd";
import axios from "axios";

const EmployeeCreateForm = ({ onClose }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="">
      <Form
        name="basic"
        layout="vertical"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Employee name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input employee name!",
            },
          ]}
        >
          <Input className="h-12" />
        </Form.Item>
        <Form.Item
          label="Employee email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input employee email!",
            },
          ]}
        >
          <Input className="h-12" />
        </Form.Item>
        <Form.Item
          label="Employee mobile"
          name="mobileNo"
          rules={[
            {
              required: true,
              message: "Please input employee mobile number!",
            },
          ]}
        >
          <Input className="h-12" />
        </Form.Item>
        <Form.Item
          label="Employee position"
          name="position"
          rules={[
            {
              required: true,
              message: "Please input employee position!",
            },
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
          rules={[
            {
              required: true,
              message: "Please input employee age!",
            },
          ]}
        >
          <Input className="h-12" />
        </Form.Item>
        {/* employee salary */}
        <Form.Item
          label="Employee salary"
          name="salary"
          rules={[
            {
              required: true,
              message: "Please input employee salary!",
            },
          ]}
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
            style={{ background: "#296F9D", width: 150, height: 50 }}
            className="text-lg"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmployeeCreateForm;
