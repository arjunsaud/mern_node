const express=require("express")
const router = require("./src/routes")

const app=express()

app.use(express.json({urlencoded:true}))

app.use('/',router)

app.listen(8000,()=>{
    console.log("Server Running on Port 8000");
})