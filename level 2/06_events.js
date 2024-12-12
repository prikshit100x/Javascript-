// Sequentially language
// events activity pe evoke hote hai


// default false hota
// false true hoti 

// types of events
// timestamp
// defaultprevented
// target , toElement, srcElement , currentTarget
// clientX clientY, scrrenX , y
// altkey , ctrlkey , keycode


// Event propogation
// false event bubbling => bottom se top 
// true event capturing => top se bottom ul se owl






document.getElementById('images').addEventListener('click',(e)=>{

    console.log("clicked inside ul ");
},false)


document.getElementById('bbird').addEventListener('click',(e)=>{

    console.log("owl is clicked");
},false)

document.getElementById('google').addEventListener('click',(e)=>{
    log
e.preventDefault();

})