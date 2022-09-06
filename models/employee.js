const mongoose = require('mongoose')
const Company = require('./company')
const Education = require('./education')
const Skill = require('./skill')
const Experience = require('./experience')
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    avatar: {
        type: String,
        default: 'acd'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
    experience: [{
        type: Schema.Types.ObjectId,
        ref: 'Experience'
    }],
    education: [{
        type: Schema.Types.ObjectId,
        ref: 'Education'
    }],
    skill: [{
        type: Schema.Types.ObjectId,
        ref: 'Skill'
    }]
})

module.exports = mongoose.model('Employee', employeeSchema)