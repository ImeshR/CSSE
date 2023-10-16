import express from "express";
import {
  createOrder,
  addEmployee,
  getEmployee,
  deleteEmployee,
  createSite,
  getSite,
  getPendingOrders,
  updateOrderStatus,
  deleteOrder
} from "../../services/staff/staff.js";

const router = express.Router();

//create staff pending order create
router.post("/create-order", createOrder);

//add nw employee
router.post("/add-employee", addEmployee);

//get all employees
router.get("/get-employeee", getEmployee);

//delete employee
router.delete("/delete-employee/:id", deleteEmployee);

//create new site
router.post("/create-site", createSite);

//get all sites
router.get("/get-site", getSite);

//ger pending orders
router.get("/get-pending-orders", getPendingOrders);

//update order status
router.put("/update-order-status/:id", updateOrderStatus);

//change order status in to declined
router.put("/cancel-order/:id", deleteOrder);

export default router;
