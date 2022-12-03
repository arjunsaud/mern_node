const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const SALT=10
const {KEY} =require("../config/vars")

module.exports={
    compareHash:async(plainString,hash)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(plainString,hash),(err)=>{
                if(err){
                    reject(err)
                }
                resolve(true)
            }
        })
    },

    hashPassword:async(plainString)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.hash(plainString,SALT,(err,hash)=>{
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    },

    generateToken:async(email)=>{
        return new Promise((resolve,reject)=>{
            jwt.sign({email},KEY,{
                expiresIn:'1h'
            },(err,token)=>{
                if(err){
                reject(err)
            }
            resolve(token)
            });
            
        })
    }
}