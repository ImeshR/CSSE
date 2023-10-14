import React, { useState } from "react";
import { Button, Drawer, Modal, message } from "antd";
import dayjs from "dayjs";
import axios from "axios";

const OrderViewDrawer = ({ visible, onClose, orderData }) => {
  const date = dayjs(orderData?.createdDate);

  const formattedDate = date.format("YYYY-MM-DD");

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDeleteOrder = () => {
    // Send a delete request to your backend API
    axios
      .delete(
        `http://localhost:5000/api/sitemanager/delete-order/${orderData._id}`
      )
      .then((response) => {
        message.success("Order successfully deleted");
        closeDeleteModal(); // Close the delete confirmation modal
        // onDelete(); // Notify the parent component that the order is deleted
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
        message.error("Error deleting the order.");
      });
  };

  return (
    <Drawer
      title="Order Details"
      placement="right"
      closable={false}
      onClose={onClose}
      open={visible}
      width={1024}
      footer={
        <div className="w-full border px-4 py-4 flex flex-row justify-between">
          <Button
            type="primary"
            style={{ background: "#296F9D", width: 200, height: 50 }}
            className="text-lg flex justify-center items-center"
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            type="primary"
            danger
            style={{ background: "#FF4D4F", width: 200, height: 50 }}
            className="text-lg flex justify-center items-center"
            onClick={showDeleteModal}
          >
            Delete
          </Button>
        </div>
      }
    >
      {/* Display the order data here */}
      {orderData && (
        <div className="w-full border rounded-lg p-2 flex flex-col gap-5">
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">
              Manager Name:
            </div>
            <div className="text-gray-500 text-base">
              {orderData.managername}
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Contact:</div>
            <div className="text-gray-500 text-base">{orderData.contact}</div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">
              Site Address:
            </div>
            <div className="text-gray-500 text-base">
              {orderData.siteaddress}
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Site Name:</div>
            <div className="text-gray-500 text-base">{orderData.sitename}</div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">
              Created Date:
            </div>
            <div className="text-gray-500 text-base">{formattedDate}</div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Deadline:</div>
            <div className="text-gray-500 text-base">
              {dayjs(orderData.deadline).format("YYYY-MM-DD")}
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Suppliers:</div>
            <div className="text-gray-500 text-base">
              {orderData.suppliers}
            </div>
          </div>
          <div className="text-primary font-semibold text-lg">Items:</div>
          {orderData.items.map((item, index) => (
            <div key={index} className="flex flex-row items-center gap-5">
              <div className="text-primary font-semibold text-base">
                Item Name {index + 1}:
              </div>
              <div className="text-gray-500 text-base">{item.itemName}</div>
              <div className="text-primary font-semibold text-base">
                Quantity :
              </div>
              <div className="text-gray-500 text-base">{item.quantity}</div>
            </div>
          ))}
        </div>
      )}
      <Modal
        title="Confirm Delete"
        visible={isDeleteModalVisible}
        onOk={handleDeleteOrder}
        onCancel={closeDeleteModal}
        okText="Delete"
        okType="danger"
        cancelText="Cancel"
      >
        Are you sure you want to delete this order?
      </Modal>
    </Drawer>
  );
};

export default OrderViewDrawer;
