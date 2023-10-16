import StaffPendingOrder from "../../models/staff/PendingOrder.js";
import Employee from "../../models/Employee/Employee.js";
import Site from "../../models/sites/site.js";

// Create a new staff pending order
export const createOrder = async (req, res) => {
  // Extract data from the request
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

  // Create a new StaffPendingOrder instance
  const newOrder = new StaffPendingOrder(pendingorder);

  try {
    // Save the new order in the database
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Add a new employee
export const addEmployee = async (req, res) => {
  // Extract employee data from the request
  const employee = {
    name: req.body.name,
    email: req.body.email,
    mobileNo: req.body.mobileNo,
    position: req.body.position,
    age: req.body.age,
    salary: req.body.salary,
  };

  // Create a new Employee instance
  const newEmployee = new Employee(employee);

  try {
    // Save the new employee in the database
    await newEmployee.save();
    res.status(200).json(newEmployee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get all employees
export const getEmployee = async (req, res) => {
  try {
    // Retrieve all employees from the database
    const employee = await Employee.find();
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete an employee
export const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    // Remove an employee by ID
    await Employee.findByIdAndRemove(id).exec();
    res.status(200).json("Employee deleted.");
  } catch (error) {
    console.log(error);
  }
};

// Create a new site
export const createSite = async (req, res) => {
  // Extract site data from the request
  const site = {
    siteName: req.body.siteName,
    address: req.body.address,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    estimatedPrice: req.body.estimatedPrice,
    siteManager: req.body.siteManager,
  };

  // Create a new Site instance
  const newSite = new Site(site);

  try {
    // Save the new site in the database
    await newSite.save();
    res.status(200).json(newSite);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get all sites
export const getSite = async (req, res) => {
  try {
    // Retrieve all sites from the database
    const site = await Site.find();
    res.status(200).json(site);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get pending orders
export const getPendingOrders = async (req, res) => {
  try {
    // Retrieve all pending orders from the database
    const pendingOrders = await StaffPendingOrder.find();
    res.status(200).json(pendingOrders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update order status to "approved"
export const updateOrderStatus = async (req, res) => {
  const id = req.params.id;
  const status = "approved";
  try {
    // Update the status of a pending order to "approved"
    await StaffPendingOrder.findByIdAndUpdate(id, { status: status }).exec();
    res.status(200).json("Order status updated.");
  } catch (error) {
    console.log(error);
  }
};

// Change order status to "declined"
export const deleteOrder = async (req, res) => {
  const id = req.params.id;
  const status = "declined";

  try {
    // Change the status of a pending order to "declined"
    await StaffPendingOrder.findByIdAndUpdate(id, { status: status }).exec();
    res.status(200).json("Order status updated.");
  } catch (error) {
    console.log(error);
  }
};
