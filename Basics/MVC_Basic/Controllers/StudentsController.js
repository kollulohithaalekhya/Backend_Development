const getStudents=(req,res)=>{
    let stddata={"name":"alekhya","roll":123};
    res.status(200).json({data:stddata});
}
const addStudents=(req,res)=>{
    res.status(201).json({message:"Data Recieved"});
}
const deleteStudents=(req,res)=>{
    res.status(200).json({message:"Deleted"});
}
const UpdateStudents=(req,res)=>{
    res.status(200).json({message:"updated"});
}
export {getStudents,addStudents,deleteStudents,UpdateStudents};