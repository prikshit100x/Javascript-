const name ="hitesh"
const repoCount =50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String interpolation


// String declare

const gameName = new String("prikshit")


console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


// Substring and slice
const newString =gameName.substring(0,4) // 0 to n-1
console.log(newString);

const anotherString =gameName.slice(0,4)
console.log(anotherString);

 // Trim
const newStringOne = "   prikshit   "

console.log(newStringOne.trim()); // Prikshit


// Replace

const url ="http://hitesh.com/hitesh%20choudhary"


console.log(url.replace('%20','-'));

//includes

console.log(url.includes('sundar')); //false

// converting string to array based on something
console.log(gameName.split('-'));


