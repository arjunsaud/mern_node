const express = require('express')
const UserController = require('../controllers/userController')
const checkUser=require("../checkUser")

const userRouter = express.Router()

userRouter.post('/login',checkUser,UserController.login)
userRouter.post('/register',checkUser,UserController.register)
userRouter.get('/users',UserController.users)

module.exports = userRouter