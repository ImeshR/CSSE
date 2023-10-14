import express from "express";
import {
  createOrder,
  createSupplier,
  getSuppliers,
  getOrderbyEmail,
  deleteOrder,
  getPendingOrders,
  updateQuotation,
  updateOrderStatus,
  getAcceptedOrders
} from "../../services/sitemanger/sitemanger.js";
const router = express.Router();

//create new order
router.post("/create-order", createOrder);
//create new supplier
router.post("/create-supplier", createSupplier);
//get suppliers
router.get("/get-suppliers", getSuppliers);

//get order relevant to site manager by email
router.get("/get-order/:email", getOrderbyEmail);

//delete order
router.delete("/delete-order/:id", deleteOrder);

//get pending orders
router.get("/get-pending-orders/:email", getPendingOrders);

//update order quotation
router.put("/update-quotation", updateQuotation);

//order status update
router.put("/update-order-status", updateOrderStatus);

//get all accepted orders for site manager
router.get("/get-accepted-orders/:email", getAcceptedOrders);


export default router;
