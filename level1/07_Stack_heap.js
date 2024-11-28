// Memory 2 types
// Stack => primitve datatypes me use hoti, copy milta
// Heap => non primitve datatypes , original data me change hote


let youtubeName ="hiteshchoudharyhindi"


let anothername =youtubeName
anothername="bawa"

console.log(youtubeName); // hitesh
console.log(anothername); // bawa


let user ={
    email:"user@gmail.com",
    upi:"user@upi"
}


let userTwo = user

userTwo.email="bawa@gmail.com"


console.log(user); // new email
console.log(userTwo); // new email