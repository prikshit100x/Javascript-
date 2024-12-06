// for of loop

const arr = [1,2,3,4]

for (const iterator of arr) {
    console.log(iterator);
    // 1 2 3 4 
}


const greetings ="Hello world!"
for(const greet of greetings){
    console.log(greet);
}


//MAPS => obj that holds key-value pairs , unique , no duplicates

const map = new Map()

map.set('IN','India')
map.set('US','UNITES STATES OF AMERICA')
map.set('fR','France')

console.log(map);


for (const [key,value] of map) {
    console.log(key,':-',value);
}

// for objects

const myObject ={
    'game1':'NFS',
    'GAME2':'Spiderman'
}

// for (const [key,value] of myObject) {
    // myObject is not iteratable
    /* console.log(key,':-',value); */
// }



// for in for object
const myObj ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myObj){
    console.log(key +" " + myObj[key] );
}

//for array

const programming =["js","rb","py","java","cpp"]


for(const key in programming){
    console.log(programming[key]);
}

// diff bw for of and for in 
// in for in => we get keys
// in for of => we get values



// maps

// for(const key in map){
//     console.log(key);
// }

// for in map me ni hota use


const coding =["js","ruby","java","python","cpp"]


// for each loop => ijected in array
// high order function

coding.forEach( function(item){
console.log(item);
} )

coding.forEach((item)=>{
console.log(item);
})


// passing function in for each
function printMe(item){
console.log(item);
}

coding.forEach(printMe)


// other para in for each


coding.forEach((item,index,arr)=>{
console.log(item);
console.log(index);
console.log(arr);
})

// array ke andr objects
// for each marega tui iski

const myCoding =[
    {
        languagename:"javascript",
        langfile:"js"
    },
    {
        languagename:"java",
        langfile:"java"
    },
    {
        languagename:"python",
        langfile:"py"
    }


]


myCoding.forEach( (item)=>{
console.log(item.languagename);
})