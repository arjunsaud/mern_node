const express = require('express')
const UserController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post('/login',UserController.login)
userRouter.post('/register',UserController.register)
userRouter.get('/users',UserController.getAllUsers)

module.exports = userRouter