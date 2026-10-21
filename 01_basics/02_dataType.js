"Use Strict Mode";//treat all js code as newer version of js

// alert(3+3) //We are using nodejs, not browser.
// console.log(3 + 3);

console.log("Hello Dev")

let name = "Dev";
let age = 27;
let isDeveloper = false;


// number => A number representing a numeric value
// bigint => A number representing a large integer
// string => "Dev" or 'Dev' or `Dev`
// boolean => true or false
// null => standalone value that represents nothingness
// undefined => undefined
// symbol => A unique primitive identifier
// object =>A collection of key-value pairs of data {name: "Dev", age: 27, isDeveloper: false}

console.log(typeof name);
console.log(typeof age);
console.log(typeof isDeveloper);
console.log(typeof null);
console.log(typeof undefined);



//*************************************** Data Types Summary ***************************************

//Primitives: number, bigint, string, boolean, null, undefined, symbol

const someNumber = 123;
const score = "4625";
const booleanIsLoggedIn = false;
const someNullValue = null;
let someUndefinedValue;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

const bigIntValue = 1234567890123456789012345678901234567890n;


//Non-Primitives(Reference Types): object, array, function

let person = {
    name: "Dev",
    age: 27,
    isDeveloper: false
};
const hobbies = ["Coding", "Reading", "Gaming"];
const greet = function() {
    console.log("Hello Dev");
}

console.log(typeof person);
console.log(typeof hobbies);
console.log(typeof greet);


//*************************************** Memory Types ***************************************
// Stack Memory: Stores primitive values (number, string, boolean, null, undefined, symbol) and function references.
//  It has a limited size and is faster to access.

let myYoutubeChannel = "Dev Patel";
let myYoutubeChannel2 = myYoutubeChannel; // Copying the value of myYoutubeChannel to myYoutubeChannel2
myYoutubeChannel2 = "Dev Patel 2"; // Changing the value of myYoutubeChannel2
console.log(myYoutubeChannel); // Dev Patel
console.log(myYoutubeChannel2); // Dev Patel 2

// Heap Memory: Stores non-primitive values (objects, arrays, functions).
//  It has a larger size and is slower to access compared to stack memory.   

let userOne = {
    email: "dev@gmail.com",
    upi: "dev@upi",
    age: 27,
    isDeveloper: false
};
let userTwo = userOne; // Copying the reference of userOne to userTwo
userTwo.email = "user2@gmail.com";
console.log(userOne.email); // dev@gmail.com
console.log(userTwo.email); // user2@gmail.com
