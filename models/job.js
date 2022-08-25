const mongoose = require('mongoose')
const Company = require('./company')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    position: {
        type: String,
        required: true
    },
    brief: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    income: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Job', jobSchema);