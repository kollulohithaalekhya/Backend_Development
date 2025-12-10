import StudentRouter from "../MVC_Basic/Routes/StudentRoutes.js"
import express from "express";
const app=express();
app.use('/',StudentRouter);
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})