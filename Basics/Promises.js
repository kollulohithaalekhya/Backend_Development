function s1(id){
    return new Promise((resolve,reject)=>{
        console.log("fun1 called");
        resolve("In this it will get user details",id);

    })

};
function s2(roll)
{
    return new Promise((resolve,reject)=>{
        console.log("fun2 called");
        resolve("In this we will get roll number",roll);

    })
   
};
function s3(subid)
{
    return new Promise((resolve,reject)=>{
        console.log("fun3 called");
        resolve("Here we will get of marks by subid",subid);

    })
};

s1("123").then((result)=>{
return s2(result.roll);
}).then((result)=>{
    return s3(result.subid)
}).then((result)=>console.log(result))
 .catch((error)=>console.log(error));