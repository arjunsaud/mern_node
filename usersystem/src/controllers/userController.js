const UserModel=require("../models/userModel")
const UserController = {
    login : (req,res) => {
        const status=req.token
        if(status==="ok"){
            return res.status(200).json({
                message:"Logged In"
            })
        }else{
            return res.status(200).json({
                message:"User Details Do Not Match or Not Found"
            })
        }
    },

    register:(req,res)=>{
        const userDetail=req.body
        const status=req.token
        if(status==="ok"){
            return res.status(200).json({
                message:"User Already Present"
            })
        }
        else {
            UserModel.saveUser(userDetail)
            return res.status(200).json({
                message:"User Registered Successfully"
            }) 
        }
    },
    users:(req,res)=>{
        const users=UserModel.getUser()
        return res.status(200).json({
            usersList:[users]
        })
    }

 }

 module.exports = UserController