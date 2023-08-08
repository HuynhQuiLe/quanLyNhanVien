const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
  tknv: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  datepicker: {
    type: String,
    required: true,
  },
  luongCB: {
    type: Number,
    required: true,
  },
  chucvu: {
    type: String,
    required: true,
  },
  gioLam: {
    type: Number,
    required: true,
  },
  luong: {
    type: Number,
    required: true,
  },
  xepLoai: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
