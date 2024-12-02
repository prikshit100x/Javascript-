// Array

const myArr =[0,1,2,3,4,5, true,"hitesh"]

console.log(typeof myArr); // Object

console.log(myArr[0]);

// array make shallow copy => same reference point || deep copy => no reference point


const myHeros =["shaktiman","nagraj"]


const myArr2 = new Array(1,2,3,)

//Array methods

myArr.push(6)
console.log(myArr); // Add At Last

myArr.pop()

myArr.unshift(0)
console.log(myArr); // Add at start

myArr.shift();

console.log(myArr); // delete from start


console.log(myArr.includes(6)); // boolean  result true

console.log(myArr.indexOf(6)); // -1 cux exist hi ni krti

const newArr = myArr.join(); // bind kr deta and typeof string kr deta

console.log(newArr);
console.log(myArr);

// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log("og" , myArr);
console.log(myn1); // 0 to n-1

const myn2 = myArr.splice(1,3)
console.log("og" , myArr);
console.log(myn2); // 0 to n . last range bi include bi hoti

// splice original array ko bi manipulate krta