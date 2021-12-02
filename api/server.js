// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model')

const server = express()

server.use(express.json())

server.use('*', (req, res) =>{
  res.status(404).json({
    message: 'its working'
  })
})

server.get('/hello', (req, res) =>{
  res.json({message: 'hello'})
})

server.get('/api/user/:id', async (req,res)=>{
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.status(500).json({
      message:'no go homo',
      error: err.message
    })
  }
})

server.post('/api/users', async (req, res)=>{
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (err) {
    res.status(500).json({
      message:'not working',
      error:err.message
    })
    
  }
})

module.exports = server // EXPORT YOUR SERVER instead of {}
