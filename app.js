const express = require("express");
const fs = require("fs");
require("dotenv").config();
const app = express();
const cors = require("cors")

const corsOptions = {
    origin : process.env.FRONTEND_URL,
    methods :['GET','POST','DELETE','UPDATE'],
    allowedHeaders :["Content-Type","Authorization"]
}

app.use(cors(corsOptions))

// app.use(cors({
//     origin:"*"
// }))



PORT = process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.send("Api is working")
})

app.get("/data",(req,res)=>{
    fs.readFile("./data.json","utf8",(err,data)=>{
        if(err){
            res.send("error in reading file")
        }else{
            try {
                const parsedData = JSON.parse(data)
            console.log(parsedData)
            res.send(parsedData)
            } catch (error) {
                res.send("error in parsing")
            }
        }
    })
})


app.listen(PORT,()=>{
    console.log("server started at",PORT)
})
