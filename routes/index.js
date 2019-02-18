const express = require('express');
const router = express.Router();

const employees = require('./employees')
const settings = require('./settings')

// employees
router.use(employees.getAllEmployees)
router.use(employees.getOneEmployee)
router.use(employees.createEmployee)
router.use(employees.editEmployee)

// settings
router.use(settings.editSettingsSectors)
router.use(settings.editSettingsSkills)

module.exports = router;
