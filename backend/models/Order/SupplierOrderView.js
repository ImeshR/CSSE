import mongoose from "mongoose";

const supplierOrderViewSchema = new mongoose.Schema({
  orderid: {
    type: String,
    required: true,
  },
  managername: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  siteaddress: {
    type: String,
    required: true,
  },
  sitename: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  suppliers: {
    type: String,
    required: true,
  },
  items: [
    {
      itemName: String,
      quantity: String,
    },
  ],
  quotation: {
    type: Number,
    required: true,
    default: 0,
  },
  status: {
    type: String,
    required: false,
    default: "pending",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const SupplierOrderView = mongoose.model(
  "SupplierOrderView",
  supplierOrderViewSchema
);

export default SupplierOrderView;
