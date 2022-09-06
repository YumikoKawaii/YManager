const mongoose = require('mongoose')
const Job = require('./job')
const Schema = mongoose.Schema;

const companySchema = new Schema({
    logo: {
        type: String,
        default: 'abcd'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    overview: String,
    website: String,
    industry: String,
    companySize: Number,
    headquarters: String,
    found: Number,
    specialties: [String]  ,
    jobs: [
        {
            type: Schema.Types.ObjectId,
            ref:'Job'
        }
    ]
})

module.exports = mongoose.model('Company', companySchema);