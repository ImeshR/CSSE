import StaffPendingOrder from "../../models/staff/PendingOrder.js";
import Employee from "../../models/Employee/Employee.js"

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
    }
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
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
