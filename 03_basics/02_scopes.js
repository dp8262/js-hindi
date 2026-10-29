// Global and local scope

let a = 4625;
if (true) {
    let a = 45;
    const b = 25;
    console.log("INNER: ", a);
}

console.log(a);

// Nastade Scope

function one() {
    const username = "Dev";
    function two() {
        const websit = "youtube";
        console.log(username);
    }
    two();
}
one();

//*************************************** Interesting ***************************************

console.log(addone(5));
function addone(num) {
    return num + 1;
}

// Cannot access 'addTwo' before initialization
// console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(5));

function toCelsius(farenheit) {
    return (8 / 9) * (farenheit - 32);
}
let value = toCelsius(77);

console.log(value);

// A function can return a value back to the code that called it
// The return statement is used to return a value from a function
function myFunction(x, y = 13) {
    return x + y;
}
console.log(myFunction(5));


// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"

//Multiply-nested functions
//Functions can be multiply-nested. For example:
// A function (A) contains a function (B), which itself contains a function (C).
// Both functions B and C form closures here. So, B can access A, and C can access B.
// In addition, since C can access B which can access A, C can also access A.

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)

//Name conflicts
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20 (instead of 10)

//Using the arguments object
function myConcat(separator) {
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(myConcat(", ", "red", "orange", "blue")); // "red, orange, blue, "