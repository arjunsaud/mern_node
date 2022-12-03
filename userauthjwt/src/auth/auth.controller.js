const authService = require(".")

const AuthController={
    login:async(req,res)=>{
        const {email,password}=req.body

        try {
            const loggedinuser=await authService.attemptLogin(email,password)
            return  res.status(200).json({
                message:"LoggedIn Successfully",
                user:loggedinuser
            })
        } catch (error) {
            return  res.status(401).json({
                message:"Not Authorized",
                error:error.message
            })
        }
    },

    register:async(req,res)=>{
        const {email,password}=req.body
        try {
            const userRegistered=await authService.registerUser(email,password)
            return res.status(200).json({
                message:"User Registered",
                user:userRegistered
            })

        } catch (error) {
            return  res.status(400).json({
                message:"Error Occured",
                error:error.message
            })
        }

    }
}


module.exports=AuthController