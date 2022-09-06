const mongoose = require('mongoose')
const Company = require('./company')
const Employee = require('./employee')
const Schema = mongoose.Schema;

const educationSchema = new Schema({
    
    employee: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Employee'
    },
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
})

module.exports = mongoose.model('Education', educationSchema)