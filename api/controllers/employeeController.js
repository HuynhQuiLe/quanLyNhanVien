const asyncHandler = require("express-async-handler");
const Employee = require("../models/Employee");

const getAllEmployee = asyncHandler(async (req, res) => {
  const employees = await Employee.find();
  return res.status(200).json(employees);
});

const getEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (id) {
    const employee = await Employee.findOne({ _id: id });
    return res.status(200).json(employee);
  }
});

const addEmployee = asyncHandler(async (req, res) => {
  const {
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam,
    luong,
    xepLoai,
  } = req.body;
  const employeeObject = {
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam,
    luong,
    xepLoai,
  };
  const newEmployee = await Employee.create(employeeObject);
  if (newEmployee) {
    return res.status(201).json(newEmployee);
  } else {
    return res.status(400).json({ message: "Invalid user data received" });
  }
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (id) {
    const newEmployees = await Employee.deleteOne({ _id: id });
    return res.status(200).json(newEmployees);
  }
});

const updateEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam,
    luong,
    xepLoai,
  } = req.body;

  const employee = await Employee.findOne({ _id: id }).exec();
  employee.tknv = tknv;
  employee.name = name;
  employee.email = email;
  employee.password = password;
  employee.datepicker = datepicker;
  employee.luongCB = luongCB;
  employee.chucvu = chucvu;
  employee.gioLam = gioLam;
  employee.luong = luong;
  employee.xepLoai = xepLoai;

  const updateEmployee = await employee.save();
  return res.status(201).json(updateEmployee);
});

module.exports = {
  getAllEmployee,
  getEmployee,
  addEmployee,
  deleteEmployee,
  updateEmployee,
};
