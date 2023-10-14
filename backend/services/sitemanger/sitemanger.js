import Order from "../../models/Order/Order.js";
import Supplier from "../../models/Order/Supplier.js";
import SupplierOrderView from "../../models/Order/SupplierOrderView.js";

//create new order
export const createOrder = async (req, res, next) => {
  try {
    const {
      managername,
      email,
      contact,
      siteaddress,
      sitename,
      deadline,
      suppliers,
      items,
    } = req.body;

    const newOrder = new Order({
      managername,
      email,
      contact,
      siteaddress,
      sitename,
      deadline,
      suppliers,
      items,
    });

    const savedOrder = await newOrder.save();

    const orderid = savedOrder._id;

    //create new supplier order view
    const newSupplierOrderView = new SupplierOrderView({
      orderid,
      managername,
      email,
      contact,
      siteaddress,
      sitename,
      deadline,
      suppliers,
      items,
      quotation: 0,
    });

    await newSupplierOrderView.save();

    res.status(200).json(savedOrder);
  } catch (error) {
    console.log(error);
  }
};

//create new supplier
export const createSupplier = async (req, res, next) => {
  try {
    const { suppliername, supplieremail, suppliercontact } = req.body;

    const newSupplier = new Supplier({
      suppliername,
      supplieremail,
      suppliercontact,
    });

    const savedSupplier = await newSupplier.save();

    res.status(200).json(savedSupplier);
  } catch (error) {
    console.log(error);
  }
};

//get suppliers
export const getSuppliers = async (req, res, next) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (error) {
    console.log(error);
  }
};

//get order relevant to site manager by email
export const getOrderbyEmail = async (req, res, next) => {
  try {
    const email = req.params.email;
    const order = await Order.find({ email: email });
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};

//delete order
export const deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Order.findByIdAndDelete(id);
    res.status(200).json("Order deleted");
  } catch (error) {
    console.log(error);
  }
};

//get pending orders by qutation
export const getPendingOrders = async (req, res, next) => {
  try {
    const email = req.params.email;
    const orders = await SupplierOrderView.find({
      email: email,
      status: "pending",
    });
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
  }
};

//update order quotation
export const updateQuotation = async (req, res, next) => {
  try {
    const orderid = req.body.orderid;
    const quotation = req.body.quotation;

    const updatedOrder = await SupplierOrderView.findOneAndUpdate(
      { orderid: orderid },
      { quotation: quotation },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//order status update
export const updateOrderStatus = async (req, res, next) => {
  try {
    const orderid = req.body.orderid;
    const status = "approved"

    const updatedOrder = await SupplierOrderView.findOneAndUpdate(
      { orderid: orderid },
      { status: status },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//get all approved orders for site manager
export const getAcceptedOrders = async (req, res, next) => {
  try{
    const email = req.params.email;
    const orders = await SupplierOrderView.find({
      email: email,
      status: "approved",
    });
    res.status(200).json(orders);
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
}
