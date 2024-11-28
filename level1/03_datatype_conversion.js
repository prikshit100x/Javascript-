let score = '33abc'
console.log(typeof score); // Number

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN


let score1 = undefined
console.log(typeof score1); // Number

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1); // NaN



// "33" =>> 33
// "33abc" =>> NaN, type number
//true =>1 , false =>0


// Number to boolean
let isLoggedIn = "prikshit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
//" empty string" => false
//"filled string" => true






