const marvel_heros =["thor","ironman","spiderman"]

const dc_heros =["spiderman","flash","batman"]

// marvel_heros.push(dc_heros) // Array ke andr array , single lement is array
// console.log(marvel_heros);


// CONCAT
// const all_Heros = marvel_heros.concat(dc_heros)

// console.log(all_Heros); // returs new array


// SPREAD OPERATOR
const all_new_heros =[...marvel_heros,...dc_heros]

// console.log(all_new_heros);


// FLAT 
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

// Converting to array
console.log( Array.isArray("Hitesh")) // false

console.log(Array.from("Prikshit"));


console.log(Array.from({
    name:"Prikshit"
})); // Intersting case , we should declare key ya value se array bnae


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));





