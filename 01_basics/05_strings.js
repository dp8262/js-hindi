//***************************************** Strings Methods *****************************************
const myName = "Dev Patel";
const myAge = 27;

// console.log("My name is " + myName + " and I am " + myAge + " years old.");

// Template literals (backticks) allow for easier string interpolation and multi-line strings.
console.log(`My name is ${myName} and I am ${myAge} years old.`);


const gameName= new String("GTA V");
console.log(gameName[0]); // G
console.log(gameName.length); // 4
console.log(gameName.toUpperCase()); // GTA V
console.log(gameName.toLowerCase()); // gta v
console.log(gameName.includes("GTA")); // true
console.log(gameName.startsWith("GTA")); // true
console.log(gameName.endsWith("V")); // true
console.log(gameName.indexOf("V")); // 4
console.log(gameName.replace("GTA", "Grand Theft Auto")); // Grand Theft Auto V
console.log(gameName.split(" ")); // ["GTA", "V"]
console.log(gameName.trim()); // GTA V
console.log(gameName.charAt(0)); // G
console.log(gameName.charCodeAt(0)); // 71
console.log(gameName.concat(" is a popular game.")); // GTA V is a popular game.
console.log(gameName.repeat(3)); // GTA VGTA VGTA V
console.log(gameName.slice(0, 3)); // GTA
console.log(gameName.substring(0, 3)); // GTA
console.log(gameName.substr(0, 3)); // GTA
console.log(gameName.valueOf()); // GTA V
console.log(gameName.toString()); // GTA V
console.log(gameName.localeCompare("GTA V")); // 0
console.log(gameName.match(/GTA/)); // ["GTA"]
console.log(gameName.search(/GTA/)); // 0

const url = "https://www.example%20.com";
console.log(url.replace("%20", ""));// https://www.example.com
console.log(url.includes("test"));// false
