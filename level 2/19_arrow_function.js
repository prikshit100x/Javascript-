// This and arrow keyboard
// this -> referes to current context

const user ={
    username:"prikshit",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);
    }
}
user.welcomeMessage()

user.username="bawa"
user.welcomeMessage()

// in node environemnt this refer to empty object

// in browser global object is window


// function chai(){
//     console.log(this);
// }
// chai()

// in function cant use this




// const chai = function (){
//     let username ="bawa"
//     console.log(this.username);
// }


const chai =()=>{
    let use ="bawa"
    console.log(this);
}

// const addTwo =(num1,num2)=>{
// return num1 + num2
// }

// console.log( addTwo(2,3))


// Implecit return arrow function
// curly braces me return krna pdta arrow function ko vrna ni krte
const addThree =(num1,num2,num3) => num1 +num2+num3

console.log(addThree(1,2,3));

// object ko return krne ke liye paranthesis me wrap krna hona

const addTwo =(num1,num2)=> ({
    username:"bawa"
})

const myArray =[1,2,3,4,5,6]

myArray.forEach(()=>{
    
})





