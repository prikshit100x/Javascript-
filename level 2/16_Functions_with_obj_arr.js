// function calculateCartPrice(...num1){
//     return num1
  
//   }
//   console.log(calculateCartPrice(200,300,400));

  function calculateCartPrice(val1,val2,...num1){
    return num1
  
  }
  console.log(calculateCartPrice(200,300,400));

  // Objects in function


  const user ={
    username:"hitesh",
    price:199
  }

  function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
  }

 /*  handleObject(user) */


 handleObject({
    username:"prikshit",
    price:77
 })


 const myNewArray =[200,400,100,600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

//  console.log(returnSecondValue(myNewArray));


console.log(returnSecondValue([200,300,400]));