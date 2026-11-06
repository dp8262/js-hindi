// Immediately Invoked Function Expression (IIFE) in JavaScript
// An IIFE is a function that runs as soon as it is defined.
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

(function chai() {
    // All variables and functions defined here are scoped to this function and cannot be accessed from outside.
    var message = "Hello, I am an IIFE!";
    console.log(message);
}) (); // Output: Hello, I am an IIFE!

( (name) => {
    var message = `Hello, I am an IIFE! My name is ${name}`;
    console.log(message);
} )("Dev");// Output: Hello, I am an IIFE! My name is Dev



const counter = (function () {
  let value = 1;
  return {
    increment() { value++; },
    get() { return value; } // return statement is optional if we have only one line of code
  };
})();

counter.increment();// value is now 2
console.log(counter.get()); // Output: 2

const createPet = function (name) {
  let sex;

  const pet = {
    // setName(newName) is equivalent to setName: function (newName)
    // in this context
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Dev");
console.log(pet.getName()); // Dev

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver