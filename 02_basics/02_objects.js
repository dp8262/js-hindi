//Object literals =>Object.create
const mySymbol=Symbol("Key1");
const jsUser={
    name:"Dev",
    "fullName":"Patel Dev",
    age:27,
    [mySymbol]:"myKey1",
    location:"Ahmedabad",
    email: "dp573211@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday","Sunday"]
}
console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
console.log(jsUser[mySymbol]);

jsUser.email= "Dev123@gmail.com";
// Object.freeze(jsUser);
console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello Dev");
}
jsUser.greeting2=function(){
    console.log(`Hello your age ${this.age}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());


//*********************************************** singleton **********************************************

// singleton object
// const tinderUser= new  Object();

// non singleton object
const tinderUser = {};
tinderUser.id ="123ABC";
tinderUser.name="Dev";
tinderUser.isLoggedIn=false;
console.log(tinderUser);

const regularUser={
    email:"Dev123@gmail.com",
    fullName:{
        userfullname:{
            firstname:"Dev",
            lastname:"Patel"
        }
    }
};
console.log(regularUser);


const obj1={  1:"A", 2:"B"};
const obj2={  3:"C", 4:"D"};
const obj3={  5:"E",6:"F"};

// const obj4=Object.assign({},obj1,obj2,obj3);
const obj4={...obj1, ...obj2, ...obj3};
console.log(obj4);


const users=[
    {
        id:1,
        email: "vk123@gmail.com",
        isLoggedIn: false,
        geolocation: "Ahmedabad"
    },
     {
        id:2,
        email: "dev123@gmail.com",
        isLoggedIn: true,
        geolocation: "Rajkot"
    },
     {
        id:3,
        email: "parth123@gmail.com",
        isLoggedIn: false,
        geolocation: "Morbi"
    }
]
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


//**************************************** Destructuring Object ****************************************
