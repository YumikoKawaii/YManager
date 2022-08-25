const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Employee = require('./models/employee')

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

server.get('/', (req, res) => {    
    res.render('login/homepage')
})

server.get('/:id', (req, res) => {
    console.log(req.params.id)    
    const path = 'login/' + req.params.id;
    res.render(path)
})

server.post('/signup',async (req, res) => {
    const employee = new Employee(req.body.user)
    await employee.save()
    console.log('data db.saved')
    res.redirect('homepage')
})

server.listen(3000, () => {
    console.log('actived')  
})