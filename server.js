const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Employee = require('./models/employee')
const homepageRoutes = require('./routes/homepage')
const employeeRoutes = require('./routes/employee')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/prototype', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error: "))
db.once("open", () => {
    console.log("database connected")
})

server.engine('ejs', ejsMate)
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))
server.use(express.static('public'))

server.use('/', homepageRoutes)
server.use('/profile', employeeRoutes)

server.get('/', (req, res) => {
    res.render('homepage')
})

server.use('*', (req, res) => {
    res.render('homepage')
})

server.listen(3000, () => {
    console.log('actived')  
})