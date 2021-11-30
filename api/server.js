// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('/model')

const server = express()

server.use(express.json())

server.get('/hello', (req, res) =>{
  res.json({message: 'hello'})
})

module.exports = {}; // EXPORT YOUR SERVER instead of {}
