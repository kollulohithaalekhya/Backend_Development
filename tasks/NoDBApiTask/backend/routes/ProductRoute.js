const express=require("express");
const ProductController=require("../controller/ProductController")
const route=express.Router();
route.get('/get-data',ProductController.GetData);
route.post('/post-data',ProductController.PostData);
route.delete("/delete/:id", ProductController.DeleteData);
route.put("/update/:id", ProductController.UpdateData);

module.exports=route;