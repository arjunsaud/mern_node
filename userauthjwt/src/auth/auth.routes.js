const AuthController = require('./auth.controller')

const authRouter=require('express').Router()

authRouter.post('/login',AuthController.login)
authRouter.post('/register',AuthController.register)

module.exports=authRouter