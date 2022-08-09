const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')

const server = express()

server.engine('ejs', ejsMate)
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))
server.use(express.static('public'))

server.get('/', (req, res) => {
    res.render('homepage')
})

server.get('/:id', (req, res) => {
    console.log(req.params.id)    
    const path = 'login/' + req.params.id;
    res.render(path)
})

server.listen(3000, () => {
    console.log('actived')  
})