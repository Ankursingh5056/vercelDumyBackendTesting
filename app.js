const express = require("express");

require("dotenv").config();
const app = express();
const cors = require("cors")

const corsOptions = {
    origin : process.env.FRONTEND_URI,
    methods :['GET','POST','DELETE','UPDATE'],
    allowedHeaders :["Content-Type","Authorization"]
}

app.use(cors(corsOptions))

// app.use(cors({ origin: "*" }));

// app.use(cors({
//     origin:"*"
// }))



PORT = process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.send("Api is working")
})


data=[
  {name: "Ankur"},
  {name: "Ravi"},
  {name: "Simran"},
  {name: "Aarti"},
  {name: "Rahul"},
  {name: "Priya"},
  {name: "Neha"},
  {name: "Karan"},
  {name: "Pooja"},
  {name: "Vikas"},
  {name: "Meena"},
  {name: "Raj"},
  {name: "Suman"},
  {name: "Aman"},
  {name: "Divya"},
  {name: "Mohit"},
  {name: "Komal"},
  {name: "Sanjay"},
  {name: "Rekha"},
  {name: "Nitin"}
]



app.get("/data",(req,res)=>{
    // fs.readFile("./data.json","utf8",(err,data)=>{
    //     if(err){
    //         res.send("error in reading file")
    //     }else{
    //         try {
    //             const parsedData = JSON.parse(data)
    //         console.log(parsedData)
    //         res.send(parsedData)
    //         } catch (error) {
    //             res.send("error in parsing")
    //         }
    //     }
    // })
    if(data.length==0){
        res.send("no data found")
    }
    else{
       res.send(data)
    }
})


app.listen(PORT,()=>{
    console.log("server started at",PORT)
})
