const express = require("express");
const {
  getAllEmployee,
  addEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");
const router = express.Router();

router.route("/").get(getAllEmployee).post(addEmployee).put();

router.route("/:id").delete(deleteEmployee);

module.exports = router;
