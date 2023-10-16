import React from "react";
import { Button, Form, Input, DatePicker,message } from "antd";
import axios from "axios";

const CreateForm = ({ onClose }) => {
  const onFinish = async (values) => {
    try {
      // Send a POST request to your backend API with the form values
      await axios.post("http://localhost:5000/api/staff/create-site", values);

      // Display a success message
      message.success("Site created successfully");

      // Close the form or perform other actions as needed
      onClose();
    } catch (error) {
      console.error("Error creating site:", error);
      // Display an error message if needed
      message.error("Error creating the site");
    }
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
        autoComplete="off"
      >
        <Form.Item
          label="Site Name"
          name="siteName"
          rules={[
            {
              required: true,
              message: "Please input your site name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your site address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Start Date"
          name="startDate"
          rules={[
            {
              required: true,
              message: "Please input the start date!",
            },
          ]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          label="End Date"
          name="endDate"
          rules={[
            {
              required: true,
              message: "Please input the end date!",
            },
          ]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          label="Estimated Price"
          name="estimatedPrice"
          rules={[
            {
              required: true,
              message: "Please input the estimated price!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Site Manager"
          name="siteManager"
          rules={[
            {
              required: true,
              message: "Please input the site manager!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "#E7B10A", width: 150, height: 50 }}
            className="text-lg"
          >
            Create Site
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateForm;
