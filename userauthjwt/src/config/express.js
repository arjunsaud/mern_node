const express=require("express")
const routes = require("../router/Router")

const app=express()

app.use(express.json({urlencoded:true}))

app.use("/api",routes)

module.exports=app