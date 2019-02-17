const express = require('express')
const router = express.Router()

const genToken = require('../middleware/auth').genToken

//models
const userModel = require('../models/userModel')

module.exports = {
  doLogin: router.post('/doLogin', async (req, res) => {
    try {
      let userInfo = await userModel.validateCredentials(req.body.pin)

      if (userInfo.auth) {

        let userToken = genToken(req.body.pin)
        res.set('bearer', userToken)

        return res.json({
          auth: 'OK',
          role: userInfo.role
        })
      }else{
        return res.json({
          auth: 'NO',
        })
      }
    } catch (error) {
      console.log('\x1b[31m', error, '\x1b[0m');
      return res.status(500).send();
    }
  })
}
