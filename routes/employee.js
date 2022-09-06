const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')

router.route('/').get((req, res) => {
    res.render('./employee/profile')
})

module.exports = router