let myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleString());



console.log(typeof myDate); // object


let myCreatedDate = new Date(2024,11,1) // date 0 to 11

console.log(myCreatedDate.toDateString());

let myTimeStamp =  Date.now()

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default' ,{
    weekday:"long"
}));


