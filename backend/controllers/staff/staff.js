import express from "express";
import { createOrder, addEmployee } from "../../services/staff/staff.js";

const router = express.Router();

//create staff pending order create
router.post("/create-order", createOrder);

//add nw employee
router.post("/add-employee", addEmployee);

export default router;
