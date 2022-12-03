const { compareHash, hashPassword, generateToken } = require("./auth.helper")

class AuthService{
    User
    constructor(User) {
        this.User=User
    }
    async attemptLogin(email,password){
        try {
            const user=await this.User.findOne({email})
            if(!user)
            throw new Error("Authentication Failed")
            const isValidPassword=compareHash(password,user.password)
            if(!isValidPassword)
            throw new Error("Authentication Failed")

            const isToken=await generateToken(user.email)
            if(!isToken) throw new Error("Authentication Failed")

            let loggedInUser=user._doc
            loggedInUser.token=isToken
            delete loggedInUser.password
            return loggedInUser
        } catch (error) {
            throw error   
        }
    }

    async registerUser(email,password){
        try {
            const user=await this.User.findOne({email})
            if(user) throw new Error("User Already Present")
            const hashPass=await hashPassword(password)
            const newUser=await new this.User({email,password:hashPass}).save()
            delete newUser.password
            return newUser

        } catch (error) {
            throw error
            
        }
    }
}


module.exports=AuthService