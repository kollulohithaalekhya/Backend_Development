const express=require("express")
const app=express();
const FirstRoute=require("./routes/FirstRouter");
app.use("/",FirstRoute);
app.listen(7000,()=>{
    console.log('Server running');
})