// 2 types Object literals
// literal => multiple instance , no singelton
// constrcutor => sindelton => apni type ka ek 

// Object.create constrcutor


const symb1 = Symbol("key1")
const JsUser ={
    name:"Prikshit",
    "full name":"Prikshit Sharma",
    age:18,
    location:"Jaipur",
    email:"prikshit@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"],
    [symb1]:"key1"
}

console.log( JsUser.email)
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
console.log(JsUser[symb1]);


JsUser.email="prikshit@chatgpt.com"





JsUser.greeting = function(){
    console.log(`Hello JS User ${this.name}`);
}

// console.log(JsUser.greeting); // undefined
 console.log(JsUser.greeting());