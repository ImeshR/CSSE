import mongoose from "mongoose";

const stitesSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  estimatedPrice: {
    type: Number,
    required: true,
  },
  siteManager: {
    type: String,
    required: true,
  },
});

const Sites = mongoose.model("Sites", stitesSchema);

export default Sites;
