const mongoose = require('mongoose')
const Company = require('./company')
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    avatar: {
        type: String,
        default: 'acd'
    },
    name: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        }
    },
    email: String,
    phone: String,
    experience: [{
        company: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Company'
        },
        position: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        }
    }],
    education: [{
        school: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Company'
        },
        degree: {
            type: String,
            required: true
        },
        field: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        }
    }],
    skill: [{
        skill: {
            type: String,
            required: true
        },
        place: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Company'
        }
    }]
})

module.exports = mongoose.model('Employee', employeeSchema)