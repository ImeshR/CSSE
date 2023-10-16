import React, { useState } from "react";
import { Button, Drawer, Modal, message } from "antd";
import axios from "axios";

const EmployeeViewDrawer = ({ visible, onClose, EmployeeData }) => {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalVisible(false);
  };

  const handleDeleteEmployee = async () => {
    try {
      // Send a delete request to your backend API using the employee's _id
      const response = await axios.delete(
        `http://localhost:5000/api/staff/delete-employee/${EmployeeData._id}`
      );

      // Check if the delete request was successful
      if (response.status === 200) {
        // Show a success message using Ant Design's message component
        message.success("Employee deleted successfully");
        // Close the drawer
        onClose();
      } else {
        message.error("Failed to delete employee");
      }
    } catch (error) {
      // Handle any errors that occur during the delete request
      console.error("Error deleting employee:", error);
      message.error("Failed to delete employee");
    }
    closeDeleteModal();
  };

  return (
    <Drawer
      title="Employee Details"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width={1024}
      footer={
        <div className="w-full border px-4 py-4 flex flex-row justify-between">
          <Button
            type="primary"
            style={{ background: "#296F9D", width: 200, height: 50 }}
            className="text-lg flex justify-center items-center"
          >
            Edit
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
      {EmployeeData && (
        <div className="w-full border rounded-lg p-2 flex flex-col gap-5">
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Employee Name:</div>
            <div className="text-gray-500 text-base">{EmployeeData.name}</div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Contact:</div>
            <div className="text-gray-500 text-base">{EmployeeData.mobileNo}</div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Employee Address:</div>
            <div className="text-gray-500 text-base">{EmployeeData.email}</div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Position:</div>
            <div className="text-gray-500 text-base">{EmployeeData.position}</div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Basic Salary:</div>
            <div className="text-gray-500 text-base">{EmployeeData.salary}</div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">Age:</div>
            <div className="text-gray-500 text-base">{EmployeeData.age}</div>
          </div>
        </div>
      )}
      <Modal
        title="Confirm Delete"
        visible={isDeleteModalVisible}
        onOk={handleDeleteEmployee}
        onCancel={closeDeleteModal}
        okText="Delete"
        okType="danger"
        cancelText="Cancel"
      >
        Are you sure you want to delete this employee?
      </Modal>
    </Drawer>
  );
};

export default EmployeeViewDrawer;
