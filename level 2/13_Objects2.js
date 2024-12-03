// Objects using constrcutor

const tinderUser = new Object()
tinderUser.id="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn= false
console.log(tinderUser);

//Chaining
const regularUser ={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"prikshit",
            lastname:"sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={
    1:"a",
    2:"b"
}

const obj2={
    3:"a", 4:"b"
}

 // const obj3= Object.assign({},obj1,obj2) // Values are combining in empty obj


 //using spread operator

 const obj3 ={...obj1,...obj2}
 console.log(obj3);

 const users =[
    {
        id:1,
        email:"h@gmail.com"
    },{

    },{

    },{

    }
 ]

 console.log( users[0].email)
console.log(tinderUser);


// getting keys of objects

console.log(Object.keys(tinderUser)); // datatype  array

console.log( typeof Object.values(tinderUser)); // type of obj


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true







