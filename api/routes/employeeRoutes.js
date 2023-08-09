const express = require("express");
const {
  getAllEmployee,
  addEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} = require("../controllers/employeeController");
const router = express.Router();

router.route("/").get(getAllEmployee).post(addEmployee);

router
  .route("/:id")
  .get(getEmployee)
  .delete(deleteEmployee)
  .put(updateEmployee);

module.exports = router;
