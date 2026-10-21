//Arrays

const myNumbers = [0,1, 2, 3, 4, 5];
const myFriends = new Array("John", "Jane", "Jack", "Jill");

console.log(myNumbers);
console.log(myNumbers.length);
console.log(myNumbers[3]);

//Array Methods

myNumbers.push(6);
myNumbers.push(7);
myNumbers.pop();
console.log(myNumbers);


// myNumbers.unshift(9);
myNumbers.shift();
console.log(myNumbers);
console.log(myNumbers.indexOf(3)); // 2
console.log(myNumbers.includes(7)); // false

const myNumbers2 = myNumbers.join();
console.log(myNumbers);// 1,2,3,4,5,6
console.log(myNumbers2);// 1,2,3,4,5,6

// Slice and Splice

const myNumbers3 = myNumbers.slice(1, 4);
console.log(myNumbers3); // [2, 3, 4]

const myNumbers4 = myNumbers.splice(1, 3);
console.log(myNumbers4); // [2, 3, 4]
console.log(myNumbers); // [1, 5, 6]


//****************************************************** Arrays *****************************************************

const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

// Concatenation
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);// ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]

// Spread Operator
const allHeroes2 = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes2);// ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]


const anotherArray = [1, 2, 3, 4, 5,[6, 7, 8, 9, 10],11,12,[13, 14, 15,[16, 17, 18, 19, 20]],21,22,[23,24],25];

const flatArray = anotherArray.flat(Infinity);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]l̥

console.log(Array.isArray("Dev")); // false
console.log(Array.from("Dev")); // ["D", "e", "v"]
console.log(Array.from({name: "Dev"})); // [undefined, undefined, undefined, undefined, undefined] (length 5, but no values)l̥

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]