let score ="4625";

// console.log(score, typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber, typeof valueInNumber);

// "4625" => 4625
// "4625abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "Dev" => true
// null => false; undefined => false

let someNumber = 123;
let stringNumber = String(someNumber);
console.log(stringNumber, typeof stringNumber);

// 123 => "123"
// true => "true"; false => "false"
// null => "null"; undefined => "undefined"

let date = new Date();
console.log(date, typeof date);
// date => "Mon Jun 10 2024 12:34:56 GMT+0530 (India Standard Time)" => "Mon Jun 10 2024 12:34:56 GMT+0530 (India Standard Time)"
// date => "Mon Jun 10 2024 12:34:56 GMT+0530 (India Standard Time)" => 1710000000000
// date => "Mon Jun 10 2024 12:34:56 GMT+0530 (India Standard Time)" => "2024-06-10T07:04:56.000Z"



//*************************************** Operations ***************************************

let value1 = 5;
let value2 = 10;
let value3 = value1 + value2;
console.log(value3);

// 5 + 10 => 15
// 5 - 10 => -5
// 5 * 10 => 50
// 5 / 10 => 0.5
// 5 % 10 => 5
// 5 ** 10 => 9765625

//*************************************** String Concatenation ***************************************

let firstName = "Dev";
let lastName = "Patel";
let fullName = firstName + " " + lastName;
console.log(fullName);

// "Dev" + " " + "Patel" => "Dev Patel" 
// "Dev" + 27 => "Dev27"
// "Dev" + true => "Devtrue"
// "Dev" + null => "Devnull"
// "Dev" + undefined => "Devundefined"
// "Dev" + {} => "Dev[object Object]"
// "Dev" + [] => "Dev"
// "Dev" + function(){} => "Devfunction(){}"
// "Dev" + Symbol() => "DevSymbol()"
// "Dev" + new Date() => "DevMon Jun 10 2024 12:34:56 GMT+0530 (India Standard Time)"
// "Dev" + NaN => "DevNaN"
// "Dev" + Infinity => "DevInfinity"

let gameScore = 100;
++gameScore;
let message = `Your game score is: ${gameScore}`;
console.log(message);
// Your game score is: 101