const score = 42;
const balance = new Number(100);
console.log(balance); // [Number: 100]
console.log(balance.valueOf()); // 100
console.log(balance.toString()); // "100"
console.log(balance.toFixed(2)); // "100.00"
console.log(balance.toExponential(2)); // "1.00e+2"
console.log(balance.toPrecision(4)); // "100.0"
console.log(balance.toLocaleString("en-IN"));// "100.00" example:- 10,00,000


//*************************************** Math Object ***************************************
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.abs(-5)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.random()); // 0.12345678901234567 (random number between 0 and 1)
console.log(Math.random() * 100); // 12.345678901234567 (random number between 0 and 100)


const min=10;
const max=20;
const randomNumber=Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber); // Random number between 10 and 20 (inclusive)