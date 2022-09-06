const mongoose = require('mongoose')
const Company = require('./company')
const Employee = require('./employee')
const Schema = mongoose.Schema;

const experienceSchema = new Schema({

    employee: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Employee'
    },
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

})

module.exports = mongoose.model('Experience', experienceSchema)