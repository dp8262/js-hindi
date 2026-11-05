const users = {
    username: "Dev",
    price: 4625,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
    }
};

users.welcomeMessage();// Dev, Welcome to website
users.username="Vivek";
users.welcomeMessage();// Vivek, Welcome to website

const users1 = () => {
   let username = "Dev";
   console.log(this); // window object
   
};

users1(); // window object

const users2 = (num1, num2) => {
   return num1 + num2;// return statement is optional if we have only one line of code
}

const users3 = (num1, num2) => num1 + num2; // return statement is optional if we have only one line of code

console.log(users2(5, 10)); 

console.log(users3(5, 10)); 
