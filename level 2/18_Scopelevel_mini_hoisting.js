// Nested scope

function one(){
    const username ="hitesh"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    console.log(website);
    // two();
}

// one();



// ++++++++++++++ Intersting


function addOne(num){
    return num + 1
}
addOne(5)


const addTwo = function (num){
    return num + 1;
} // expression 
