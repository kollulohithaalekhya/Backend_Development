const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const FirstRoute = require("./Routes/firstRoute")
app.use(cors())
app.use(express.json());
app.use(express.json());
app.use(cors());
app.use("/", require("./Routes/firstRoute"));

mongoose.connect("mongodb+srv://alekhyakollu_db_user:Home156@cluster0.ifpxjdd.mongodb.net/")
.then(res =>{
    console.log("DB is Connected")
})
.catch(err =>{
    console.log("error in connecting DB",err)
})

app.use("/",FirstRoute);

app.listen(9000,()=>{
    console.log("Server Started at 9000")
})