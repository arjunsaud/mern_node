const User=require('../models/userSchema')

const AuthService=require("./auth.services")

const authService=new AuthService(User)


module.exports=authService