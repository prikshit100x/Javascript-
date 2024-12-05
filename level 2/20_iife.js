// immediately involked function expressions (IIFE)

// global scope se cheje pollute hoti hai  , so wo polltion atleast this scope me tho ni hona chhaye
function chai(){
    // named iiefe
    console.log(`DB CONNECTED`);
}

chai();

// (function defintion)(execution call)


(function addtwo(){
    console.log("added two");
})();
 // to ene iife we have to use ; to sop the execution





(()=>{
    console.log(`DB CONNECTED`);
} )();


// passing value in iife

// un named iife
((name)=>{
console.log(`my name is ${name}`);
})('prikshit')








