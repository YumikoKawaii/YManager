const express = require('express');
const employee = require('../models/employee');
const router = express.Router();

const Employee = require('../models/employee')

router.route('/signup').get(async (req, res) => {
    res.render('signup')
})

router.route('/signup').post(async (req, res) => {
    const employee = new Employee(req.body.user)
    console.log(req.body.user)
    await employee.save()
    console.log('saved')
    res.redirect('/')
})

router.route('/signin').get(async (req, res) => {
    res.render('signin')
})

router.route('/signin').post(async (req, res) => {
    const info = req.body.user
    console.log(info)
    const data = await employee.findOne({"email": info.email});
    console.log(data)
    if (data.password === info.password) res.redirect('/')
    else {
        res.redirect('/signin')
    }
})


module.exports = router