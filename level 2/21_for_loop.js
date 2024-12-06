// Loops => iterations

for (let i=0;i<=5;i++){
   console.log(i);

}


for (let i = 0; i <= 10; i++) {
    const element = i;

    if(element==5){
        console.log("5 is best number");
    }
    console.log(element);
}



for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value : ${i}`);
   for(let j=0;j<=10;j++){
     console.log(`Inner loop value is ${j}`);
   }
    
}



let myArray =["flash","btman","superman"]




for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    console.log(myArray.length
    );
}


//KEYWORDS =>  BREAKA const TINUE

for (let index = 1; index <=20 ; index++) {

   /*  if(index==5){
        console.log("5 is detected");
        break;
    } */


// continue => ek baar skip kr do . restart kr do next value se
         if(index==5){
        console.log("5 is detected");
        continue;
         }


    console.log(`value of i is ${index}`);
    
}











