function getData() {
    return new Promise( (resolve,reject) => {
        setTimeout(() =>{ 
            resolve("Data received"); //API Call
        }, 2000);
    });
}
function addData(data) {
    return new Promise( (resolve,reject) => {
        setTimeout(() => resolve("Add Data: " + data), 2000);
    });
}
async function show() {
    let result = await getData();
    console.log(result);
    let add= await addData("123");
    console.log(add);
}

show();
