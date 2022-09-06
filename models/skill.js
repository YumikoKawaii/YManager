const mongoose = require('mongoose')
const Company = require('./company')
const Employee = require('./employee')
const Schema = mongoose.Schema;

const skillSchema = new Schema({

    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    skill: {
        type: String,
        required: true
    },
    place: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Company'
    }

})

module.exports = mongoose.model('Skill', skillSchema)