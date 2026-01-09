const express=require("express")
const app=express();
const cors=require("cors");
const ProductRoute=require("./routes/ProductRoute");
app.use(cors());
app.use(express.json())
app.use("/",ProductRoute);
app.listen(7000,()=>{
    console.log('Server running');
})