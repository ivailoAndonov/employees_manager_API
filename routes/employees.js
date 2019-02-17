const express = require('express');
const router = express.Router();

// const verify = require('../middleware/auth').verify
// const logsModel = require('../models/Logs')

const EmployeeModel = require('../models/employee')

module.exports = {
  getAllEmployees: router.get('/employees', async (req, res) => {

    console.log(req.query);

    try {
      let sortField = req.query.sortField || 'name';
      let asc = req.query.asc === 'true' ? 1 : -1;
      let filter = req.query.filter || {}

      EmployeeModel.find(filter, ['name', 'sector', 'skills', 'salary', 'arrivalDate'], { sort: { [sortField]: asc } })
        .then((data) => {
          console.log(data);
          return res.json({
            employeesArr: data
          })
        })
        .catch((err) => {
          console.log(err);
        })

    } catch (error) {
      console.log('\x1b[31m', error, '\x1b[0m');
      return res.status(500).send();
    }

  }),
  getOneEmployee: router.get('/employees/:name/:id', async (req, res) => {

    console.log(req.params)

    try {
      EmployeeModel.findOne({ name: req.params.name, _id: req.params.id })
        .then((data) => {
          return res.json({
            user: data
          })
        })

    } catch (error) {
      console.log('\x1b[31m', error, '\x1b[0m');
      return res.status(500).send();
    }

  }),

  createEmployee: router.put('/employees', async (req, res) => {

    // console.log(req.body);   


    try {
      const newEmployee = new EmployeeModel(req.body.payload)
      newEmployee
        .save()
        .then(user => res.json(user))
        .catch(err => {
          console.log(err);
          return res.status(400).send({ message: "Wrong data!" })
        });

    } catch (error) {
      console.log(error);
      return res.status(500).send();
    }

  }),
  editEmployee: router.post('/employees/:name/:id', async (req, res) => {

    try {
      return res.json({
        ok: 'ok'
      })
    } catch (error) {
      console.log(error);
      return res.status(500).send();
    }

  }),
  archiveEmployee: router.post('/employees/:name/:id/archive', async (req, res) => {

    try {
      return res.json({
        ok: 'ok'
      })
    } catch (error) {
      console.log(error);
      return res.status(500).send();
    }

  })
};
