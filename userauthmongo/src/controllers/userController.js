const User=require("../models/userModel")
const UserController = {
    login : async(req,res) => {
        const {username,password}=req.body
        try {
            const user=await User.findOne({username,password})
            if(user!==null) return res.status(200).json({message:"Logged In"})
            else return res.status(200).json({message:"User Details Do Not Match"})
        } catch (error) {
            console.log(error);   
        }
    },

    register:async(req,res)=>{
        const {username,password}=req.body
        try {
            const user=await User.findOne({username:username})
            if(user===null){
                const doc =new User({username,password})    
                await doc.save((err)=>{
                    if(!err) return res.status(200).json({message:"User Registered"})
                    else return res.status(200).json({message:err.message})
                })
            }else{
                return res.status(200).json({
                    message:"User Already Present"
                })
            }
        } catch (error) {
            console.log(error);
        }

    },
    getAllUsers:async (req,res)=>{
        try {
            const users=await User.find()
            return res.status(200).json({
                usersList:users
            })    
        } catch (error) {
            console.log(error);
        }
    }

 }

 module.exports = UserController