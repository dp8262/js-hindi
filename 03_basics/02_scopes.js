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

