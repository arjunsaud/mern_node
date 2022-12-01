const express=require("express")
const router = require("../routes/userRoutes")
const mongoose = require('mongoose');
require('dotenv').config()
const app=express()

app.use(express.json({urlencoded:true}))
mongoose.connect(process.env.MONGO_URL,(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("Database Connected");
    }
});

app.use('/',router)

module.exports=app