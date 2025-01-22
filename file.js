
// file system pe system bithana sikhenge
// writeing in Files
// reading from Files
// appending in files




const fs= require('fs');

fs.writeFileSync("./test.txt" , "hey there"); //synchronus it is blocking 

fs.writeFile("./test.txt" , "hey there asynchonus",(err)=> {}); //asynchronus

// const result=fs.readFileSync("./fileUnderstanding.txt", "utf-8");
// console.log(result);  //synchronus read returns the result but asynchronus read don't and it requires a call-backfunction

// console.log(os.cpus().length);

// const result= fs.readFile("./fileUnderstanding.txt", "utf-8",(err,result)=>{
//     if(err)
//     {
//         console.log("error encountered");
//     }
//     else{
//         console.log(result);
//     }

// });