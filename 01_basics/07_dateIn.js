//Dates => Object 

let myDate = new Date(); 
console.log(myDate);// Mon Jun 10 2024 12:34:56 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());// Mon Jun 10 2024
console.log(myDate.toTimeString());// 12:34:56 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());// 2024-06-10T07:04:56.000Z
console.log(myDate.toLocaleString());// 6/10/2024, 12:34:56 PM
console.log(myDate.toLocaleDateString());// 6/10/2024
console.log(myDate.toLocaleTimeString());// 12:34:56 PM
console.log(myDate.getFullYear());// 2024
console.log(myDate.getMonth());// 5 (Months are zero-indexed, so January is 0 and December is 11)
console.log(myDate.getDate());// 10
console.log(myDate.getDay());// 1 (Days are zero-indexed, so Sunday is 0 and Saturday is 6)
console.log(myDate.getHours());// 12
console.log(myDate.getMinutes());// 34
console.log(myDate.getSeconds());// 56
console.log(myDate.getMilliseconds());// 123
console.log(myDate.getTime());// 1710000000000 (Milliseconds since January 1, 1970, 00:00:00 UTC)

