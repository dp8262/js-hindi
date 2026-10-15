const accountId = 12345;
let accountEmail = "dev123@gmail.com";
var accountPassword = "12345678";
accountCity = "USA";
let accountState; //undefined

accountEmail = "dp573211@gmail.com";
accountPassword = "87654321";
accountCity = "India";
accountState = "Vastral";

console.log(accountId);
//Perfer not use var becuse of issue in block scope and function scope. Use let and const instead of var.
console.table({ accountId,accountEmail, accountPassword, accountCity, accountState });