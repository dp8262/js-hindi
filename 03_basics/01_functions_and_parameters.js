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