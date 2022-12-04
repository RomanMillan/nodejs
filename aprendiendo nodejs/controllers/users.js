const {request, response} = require('express')
const User = require('../models/users')

const getUsers= async(req,res) =>{
    const users = await User.find()
    res.json({users})
}

module.exports = {getUsers}