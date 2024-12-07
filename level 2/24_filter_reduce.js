const coding =["js","ruby","java","python","cpp"]


const values =coding.forEach((item)=>{
// console.log(item);
return item // undefined
})
console.log(values);

// fro each koi value return ni krta


    // FILTERS
const myNums =[1,2,3,4,5,6,7,8,9,10]
const newNums =myNums.filter((num)=>
    num >5
   )
console.log(newNums);

// Filter return krta


const newNums1 =myNums.filter((num)=>{
return num>9
}
   )

   console.log(newNums1
   );



// By using for each
   const newNums2 =[]


   myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
   })

const books =[
    {title:'Book one',genre:"Fiction",publish:1981,edition:2004},
    {title:'Book Two',genre:"Non -Fiction",publish:1992,edition:2008},
    {title:'Book Three',genre:"History",publish:1999,edition:2007},
    {title:'Book Four',genre:"Non-Fiction",publish:1989,edition:2010},
    {title:'Book Five',genre:"Science",publish:2009,edition:2004},
    {title:'Book six',genre:"Fiction",publish:1987,edition:2010},
    {title:'Book Seven',genre:"History",publish:1986,edition:1996},
    {title:'Book Eight',genre:"Science",publish:2011,edition:2004},
]

let userBooks = books.filter((bk)=> bk.genre==='History')


 userBooks = books.filter((bk)=> bk.publish>=2000)
console.log(userBooks);


// { } scope open krne me return krna hota


