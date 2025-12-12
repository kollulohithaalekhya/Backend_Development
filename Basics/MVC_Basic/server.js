import StudentRouter from "../MVC_Basic/Routes/StudentRoutes.js"
import express from "express";
import cors from "cors";
const app=express();
app.use(cors());
app.use(express.json());
app.use('/',StudentRouter);
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
})