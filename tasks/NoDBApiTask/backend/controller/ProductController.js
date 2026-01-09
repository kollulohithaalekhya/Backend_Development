const express=require("express");
const data=[
    {
        "id":527,
        "name":"leela",
    },
    {
        "id":529,
        "name":"sai"
    }
];
const GetData=(req,res)=>{
    try{
    return res.status(200).json(data);
    }
    catch{
        return res.status(500).json("error");
    }
}
const PostData=(req,res)=>{
    try{
        if(!req.body){
            return res.status(400).json("Failed");
        }
         data.push(req.body);
        return res.status(201).json({
            message: "Data added successfully"
        });
    }
    catch(err){
        return res.status(500).json("failed");
    }
}
const DeleteData = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);

    if (index < 0) return res.status(404).json({ error: "Not found" });

    data.splice(index, 1);
    res.json({ message: "Deleted successfully" });
  } catch {
    res.status(500).json({ error: "failed" });
  }
};

const UpdateData = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const item = data.find(item => item.id === id);

    if (!item) return res.status(404).json({ error: "Not found" });

    item.name = req.body.name ?? item.name;
    res.json({ message: "Updated successfully", updated: item });
  } catch {
    res.status(500).json({ error: "failed" });
  }
};


module.exports = { GetData, PostData,DeleteData,UpdateData };