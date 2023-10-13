import React, { useState } from "react";
import { Button, Form, Input, DatePicker, Select, Divider } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const CreateForm = () => {
  const [items, setItems] = useState([{ itemName: "", quantity: "" }]);

  const addItem = () => {
    setItems([...items, { itemName: "", quantity: "" }]);
  };

  const handleItemChange = (index, fieldName, value) => {
    const updatedItems = [...items];
    updatedItems[index][fieldName] = value;
    setItems(updatedItems);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    // You can access the items and quantities from the 'items' state here.
    console.log("Items:", items);
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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
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
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your manager email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="contact"
          name="contact"
          rules={[
            {
              required: true,
              message: "Please input your manager contact!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="address"
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
          label="site name"
          name="site name"
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
          name="supplier"
          rules={[
            {
              required: true,
              message: "Please input at least one supplier!",
            },
          ]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <Divider />
            <div className="flex flex-row">
              <div className="w-1/2 flex justify-start items-center shrink-0">
                <Form.Item
                  label={`Item Name ${index + 1}`}
                  name={`itemname[${index}]`}
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
                  label={`Quantity`}
                  name={`quantity[${index}]`}
                  rules={[
                    {
                      required: true,
                      message: "Please input the quantity!",
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
          style={{ background: "#296F9D", width: 100, height: 30 }}
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

export default CreateForm;
