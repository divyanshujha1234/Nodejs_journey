
//v8 enigine is intregated with cpp
//node js is javascript runtime enviroment
//npm(node package manager) init  is to create pacakge.json file
//window object is not available


const math = require("./math");    //built-in pacakge can me required directly
const {add , sub} = require("./math"); //
console.log(math);
console.log(add(2,3));
