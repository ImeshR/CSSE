import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
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
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const SiteOrder = mongoose.model("SiteOrder", orderSchema);

export default SiteOrder;
