//Functions and parameters

function sayMyName() {
    console.log("D");
    console.log("E");
    console.log("V");
}
sayMyName();


function addTwoNumbers(number1, number2) {
    // return number1+number2;
    let result = number1 + number2;
    return result;
}
const result = addTwoNumbers(46, 25);
console.log("Result:", result); //

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username.")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("DEV"));

function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(100, 200, 450, 785, 1000));


function handleObject(anyObject) {
    return `Username is ${anyObject.username} and price is ${anyObject.price}`;
}
console.log(handleObject({ username: "Dev", price: 4625 }));


function handleArray(getArray) {
    return getArray;
}
console.log(handleArray([145, 235, 185, 702]));

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(46);
  }
  B(25);
}
A(99); // Logs 170 (which is 99 + 25 + 46)

function outside() {
  const x = 555;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(100)); // 200 (instead of 10)