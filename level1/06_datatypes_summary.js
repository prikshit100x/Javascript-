//Datatypes 
// kis base pe store or access kr skte us base pe datatypes ke categoriation hai
// 1> primitive datatypes (no refrence only copy)
// 7 types:
// String
//Number
//Boolean
//Null
//BigInt
//Unfdefined
// Symbol


//2> Non primitve => Reference
//Array Objects Functions


const score =100
const scoreValue =100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id=Symbol('123')
const anotherId = Symbol('123')
// same value give different symbols
console.log(id === anotherId); // false



const bigNumber = 342356435421243n


const heros = ["shaktiman","naagraj","doga"]


let myObj=
{
    name:"hitesh",
    age:22,
}


const myFunction =function(){
console.log("Hello World!");
}

console.log(typeof bigNumber);
console.log(typeof null); // Object

console.log(typeof id);