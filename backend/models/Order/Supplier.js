import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    suppliername: {
        type: String,
        required: true,
    },
    supplieremail: {
        type: String,
        required: true,
    },
    suppliercontact: {
        type: String,
        required: true,
    },
});

const Supplier = mongoose.model("Supplier", supplierSchema);

export default Supplier;