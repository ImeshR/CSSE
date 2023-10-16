import React from "react";
import { Drawer,Button } from "antd";
import dayjs from "dayjs";

const PendingOrderViewDrawer = ({ visible, onClose, orderData }) => {
    const date = dayjs(orderData?.createdDate);

    const formattedDate = date.format("YYYY-MM-DD");
  return (
    <Drawer
      title="Order Details"
      placement="right"
      closable={false}
      onClose={onClose}
      open={visible}
      width={1024}
      footer={
        <div className="w-full border px-4 py-4 flex flex-row justify-end">
          <Button
            type="primary"
            style={{ background: "#E7B10A", width: 200, height: 50 }}
            className="text-lg flex justify-center items-center"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      }
    >
        {orderData ? (
      <div className="w-full border rounded-lg p-2 flex flex-col gap-5">
        <div className="flex flex-row items-center gap-5">
          <div className="text-primary font-semibold text-lg">Oder Id:</div>
          <div className="text-gray-500 text-base">{orderData.orderid}</div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="text-primary font-semibold text-lg">Site Name:</div>
          <div className="text-gray-500 text-base">{orderData.sitename}</div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="text-primary font-semibold text-lg">Site Address:</div>
          <div className="text-gray-500 text-base">{orderData.siteaddress}</div>
        </div>
        <div className="flex flex-row items-center gap-5">
            <div className="text-primary font-semibold text-lg">
              Manager Name:
            </div>
            <div className="text-gray-500 text-base">
              {orderData.managername}
            </div>
          </div>
        <div className="flex flex-row items-center gap-5">
          <div className="text-primary font-semibold text-lg">Created Date:</div>
          <div className="text-gray-500 text-base">
            {dayjs(orderData.createdDate).format("YYYY-MM-DD")}
            </div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="text-primary font-semibold text-lg">Deadline:</div>
          <div className="text-gray-500 text-base">
            {dayjs(orderData.deadline).format("YYYY-MM-DD")}
            </div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="text-primary font-semibold text-lg">Suppliers:</div>
          <div className="text-gray-500 text-base">{orderData.suppliers}</div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="text-primary font-semibold text-lg">Quotation:</div>
          <div className="text-gray-500 text-base">{orderData.quotation}</div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="text-primary font-semibold text-lg">Status:</div>
          <div className="text-gray-500 text-base">{orderData.status}</div>
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
        ) : null
        }
    </Drawer>
  );
};

export default PendingOrderViewDrawer;
