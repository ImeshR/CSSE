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

const CreateForm = ({ onClose }) => {
  const [items, setItems] = useState([{ itemName: "", quantity: "" }]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    // Fetch the list of suppliers from your backend API
    axios
      .get("http://localhost:5000/api/sitemanager/get-suppliers")
      .then((response) => {
        // Set the list of suppliers in state
        setSuppliers(response.data);
      })
      .catch((error) => {
        // Handle errors if needed
        console.error("Error fetching suppliers:", error);
      });
  }, []);

  const addItem = () => {
    setItems([...items, { itemName: "", quantity: "" }]);
  };

  const handleItemChange = (index, fieldName, value) => {
    const updatedItems = [...items];
    updatedItems[index][fieldName] = value;
    setItems(updatedItems);
  };

  const onFinish = (values) => {
    // Create an order object with the form values
    const order = {
      managername: values.managername,
      email: values.email,
      contact: values.contact,
      siteaddress: values.siteaddress,
      sitename: values.sitename,
      deadline: values.deadline.format("YYYY-MM-DD"),
      suppliers: values.suppliers,
      items: items,
    };

    // Send a POST request to your backend API
    axios
      .post("http://localhost:5000/api/sitemanager/create-order", order)
      .then((response) => {
        // Display a success message
        message.success("Order successfully created!");
        onClose();
      })
      .catch((error) => {
        // Handle errors and display an error message if needed.
        console.error("Error creating order:", error);
        message.error("Error creating the order.");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
          label="Site name"
          name="sitename"
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
          label="Sitemanager name"
          name="managername"
          rules={[
            {
              required: true,
              message: "Please input your manager name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Sitemanager email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your manager email!",
            },
            {
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Contact"
          name="contact"
          rules={[
            {
              required: true,
              message: "Please input your manager contact!",
            },
            {
              pattern: /^[0-9]+$/,
              message: "Please enter a valid phone number",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="siteaddress"
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
          label="Deadline"
          name="deadline"
          rules={[
            {
              required: true,
              message: "Please input the deadline!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Suppliers"
          name="suppliers"
          rules={[
            {
              required: true,
              message: "Please select at least one supplier!",
            },
          ]}
        >
          <Select>
            {suppliers.map((supplier) => (
              <Select.Option key={supplier._id} value={supplier._id}>
                {supplier.suppliername}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <Divider />
            <div className="flex flex-row">
              <div className="w-1/2 flex justify-start items-center shrink-0">
                <Form.Item
                  label={`Item Name ${index + 1}`}
                  name={`items[${index}].itemName`}
                  rules={[
                    {
                      required: true,
                      message: "Please input the item name!",
                    },
                  ]}
                  className="w-full"
                >
                  <Input
                    value={item.itemName}
                    onChange={(e) =>
                      handleItemChange(index, "itemName", e.target.value)
                    }
                  />
                </Form.Item>
              </div>
              <div className="w-1/2 flex justify-start items-center shrink-0">
                <Form.Item
                  label={`Quantity ${index + 1}`}
                  name={`items[${index}].quantity`}
                  rules={[
                    {
                      required: true,
                      message: "Please input the quantity!",
                    },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Please enter a valid quantity",
                    },
                  ]}
                  className="w-full"
                >
                  <Input
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(index, "quantity", e.target.value)
                    }
                  />
                </Form.Item>
              </div>
            </div>
            <Divider />
          </div>
        ))}
        <Button
          type="primary"
          onClick={addItem}
          style={{ background: "#232D3F", width: 100, height: 30 }}
        >
          Add Item
        </Button>
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
            className="text-lg"
          >
            Create Order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateForm;
