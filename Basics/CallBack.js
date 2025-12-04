function getUserDetailes(id,getUserSubjects){
    console.log("getting user details by id",id);
    getUserSubjects({userROll:"678"})
}
function getUserSubjects(userROll,getUserMarks){
 console.log("getting user subjects by roll number",userROll);
 getUserMarks({subid:"en-1"});
}
function getUserMarks(userSubId){
    console.log("getting user marks with subId",userSubId);
}
getUserDetailes("123",function(userROll){
    getUserSubjects(userROll,function(userSubId){
        getUserMarks(userSubId);
    })
})