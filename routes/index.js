const express = require('express');
const router = express.Router();

const employees = require('./employees')

// employees
router.use(employees.getAllEmployees)
router.use(employees.getOneEmployee)
router.use(employees.createEmployee)
router.use(employees.editEmployee)

module.exports = router;
