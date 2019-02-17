const express = require('express')
const jwt = require('jsonwebtoken')

const SECRET_KEY = require('../config/mainConfig').SECRET

module.exports = {
    genToken: function(pin) {
        return jwt.sign({pin: pin}, SECRET_KEY)
    },
    verify: (req, res, next) => {

        // console.log('token', req.headers['bearer']);
        // console.log('token', typeof req.headers['bearer']);
        
        const bearerHeader = req.headers['bearer']
        
        if (typeof bearerHeader !== 'undefined' || bearerHeader !== 'undefined') {
            res.set('bearer', bearerHeader)
            next()
        } else {
            res.set('bearer', '')
            res.json({
                auth: 'NO'
            })
        }
    }
}