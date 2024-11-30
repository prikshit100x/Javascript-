const score =400
console.log(score);
const balance = new Number(100)
console.log(balance);

//converting number to string
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); //124


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++ MATHS ++++++++++++++++


console.log(Math); // object itself


console.log(Math.abs(-4));  // 4

console.log(Math.round(4.6)); // 5

// CIEL AND FLOOR

console.log(Math.ceil(4.2)); //5

console.log(Math.floor(4.9)); // 4 lowest value lega


console.log(Math.min(4,3,6,3,1)); //1

console.log(Math.random()); // 0 to 1 ke bich me aati values

console.log(Math.floor(Math.random() * 10) + 1);

const min =10
const max =20

console.log(Math.floor(Math.random() * (max-min +1)) + min );

