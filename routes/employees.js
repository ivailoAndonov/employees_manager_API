'use strict'

const express = require('express');
const router = express.Router();

// const verify = require('../middleware/auth').verify
// const logsModel = require('../models/Logs')

const EmployeeModel = require('../models/employee')
const skillsList = require('../globals/skillsList')
const sectorsList = require('../globals/sectorsList')

module.exports = {
  getAllEmployees: router.get('/employees', async (req, res) => {

    console.log(req.query.filters);

    try {
      let sortField = req.query.sortField || 'name';
      let asc = req.query.asc === 'true' ? 1 : -1;
      let filter = {};
      let sectors = sectorsList.getSectors();
      let skills = skillsList.getSkills();

      if (req.query.filters) {
        let filterObj = JSON.parse(req.query.filters)
        for (let key in filterObj) {
          if (filterObj[key].length > 0) {
            if (filterObj[key] == 'Not curret employee') {
              filter[key] = true;
            } else if (filterObj[key] == 'Curret employee') {
              filter[key] = false;
            } else {
              filter[key] = filterObj[key];
            }
          }
        }
      }

      console.log(filter);

      EmployeeModel.find(filter, ['name', 'sector', 'skill', 'salary', 'arrivalDate', 'noLongerEmployee'], {
          sort: {
            [sortField]: asc
          }
        })
        .then((data) => {
          // console.log(data);
          return res.json({
            employeesArr: data,
            filters: {
              sectors,
              skills
            }
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
      let sectors = sectorsList.getSectors();
      let skills = skillsList.getSkills();

      EmployeeModel.findOne({
          name: req.params.name,
          _id: req.params.id
        })
        .then((data) => {
          return res.json({
            user: data,
            filters: {
              sectors,
              skills
            }
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
          return res.status(400).send({
            message: "Wrong data!"
          })
        });

    } catch (error) {
      console.log(error);
      return res.status(500).send();
    }

  }),
  editEmployee: router.post('/employees/:name/:id', async (req, res) => {
    console.log(req.params.id);
    console.log(req.body)
    try {
      if (req.body.archive === true) {
        EmployeeModel.findOneAndUpdate({
            name: req.params.name // search query
          }, {
            noLongerEmployee: true // field:values to update
          }, {
            new: true, // return updated doc
            runValidators: true // validate before update
          })
          .then(doc => {
            console.log(doc)
          })
          .catch(err => {
            console.error(err)
          })
      } else {

      }


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