const app =require("./src/config/express");
const connectDB=require('./src/config/database');
const {PORT}=require('./src/config/vars');


(()=>{
    app.listen(PORT, ()=>{
        console.log("Server Started");
    })
    connectDB().then(()=>{
        console.log("Connected");
    }).catch(err=>{
        console.log("Unable to Connect"); 
    })    
})()