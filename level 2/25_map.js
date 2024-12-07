const myNumbers =[1,2,3,4,5,6,7,8,9,10]

 // const newNums =myNumbers.map ((num)=> num+10)
 // console.log(newNums);


 const newNums =myNumbers
 .map((num)=> num * 10)
 .map((num)=> num +1)
 .filter((num)=> num>=40)

 console.log(newNums);


 // REDUCE => for adding shopping cart bill


 const myNums =[1,2,3]

 const myTotal= myNums.reduce(function(acc,currval){
    return acc+currval
 },0) // 0 is acc value

 console.log(myTotal);

 const myttl = myNums.reduce((acc,curr)=>{
   return acc +curr
 },0)

 console.log(myttl);



 const shoppingCart =[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"Mobile dev course",
        price:5999
    },
    {
        itemname:"DSA course",
        price:6999
    },
 ]


 const pricetopay= shoppingCart.reduce((acc,item)=>( acc +item.price),0)


 console.log(pricetopay);