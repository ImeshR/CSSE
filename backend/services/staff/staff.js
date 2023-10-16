import StaffPendingOrder from "../../models/staff/PendingOrder.js";
import Employee from "../../models/Employee/Employee.js";
import Site from "../../models/sites/site.js";

export const createOrder = async (req, res) => {
  const pendingorder = {
    orderid: req.body.orderid,
    managername: req.body.managername,
    email: req.body.email,
    contact: req.body.contact,
    siteaddress: req.body.siteaddress,
    sitename: req.body.sitename,
    createdDate: req.body.createdDate,
    deadline: req.body.deadline,
    suppliers: req.body.suppliers,
    items: req.body.items,
    quotation: req.body.quotation,
    status: req.body.status,
  };
  const newOrder = new StaffPendingOrder(pendingorder);
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//add new employee
export const addEmployee = async (req, res) => {
  const employee = {
    name: req.body.name,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    position: req.body.position,
    age: req.body.age,
    salary: req.body.salary,
  };
  const newEmployee = new Employee(employee);
  try {
    await newEmployee.save();
    res.status(200).json(newEmployee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get all employees
export const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//delete employee
export const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    await Employee.findByIdAndRemove(id).exec();
    res.status(200).json("Employee deleted.");
  } catch (error) {
    console.log(error);
  }
};

//create new site
export const createSite = async (req, res) => {
  const site = {
    siteName: req.body.siteName,
    address: req.body.address,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    estimatedPrice: req.body.estimatedPrice,
    siteManager: req.body.siteManager,
  };
  const newSite = new Site(site);
  try {
    await newSite.save();
    res.status(200).json(newSite);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get all sites
export const getSite = async (req, res) => {
  try {
    const site = await Site.find();
    res.status(200).json(site);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get pending orders 
export const getPendingOrders = async (req, res) => {
  try {
    const pendingOrders = await StaffPendingOrder.find();
    res.status(200).json(pendingOrders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update order status
export const updateOrderStatus = async (req, res) => {
  const id = req.params.id;
  const status = "approved";
  try {
    await StaffPendingOrder.findByIdAndUpdate(id, { status: status }).exec();
    res.status(200).json("Order status updated.");
  } catch (error) {
    console.log(error);
  }
};

//change order status in to declined
export const deleteOrder = async (req, res) => {
  const id = req.params.id;
  const status = "declined";

  try {
    await StaffPendingOrder.findByIdAndUpdate(id, { status: status }).exec();
    res.status(200).json("Order status updated.");
  } catch (error) {
    console.log(error);
  }
};
