import express from "express";
import { createOrder } from "../../services/staff/staff.js";

const router = express.Router();

//create staff pending order create 
router.post("/create-order", createOrder);



export default router;