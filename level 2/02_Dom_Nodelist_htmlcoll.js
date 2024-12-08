// get element by id
document.getElementById('title')

document.getElementById('title').id
// title

document.getElementById('title').className // under the hood browser understand classlist not class. dom strcuture me classsanme krte use
// 'heading'

document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')



document.getElementById('title').setAttribute('class','test') // always overwrite

title.style.backgroundColor='green'
'green'

title.style.padding='20px'
'20px'

title.style.borderRadius='10px'
'10px'
title.textContent
'DOM learning on Chai aur Code'
title.innerHTML
'DOM learning on Chai aur Code'
title.innerText
'DOM learning on Chai aur Code'


// diff be innertext textcontent innerhtml
title.innerText
'DOM learning on Chai aur Code'
title.textContent
'DOM learning on Chai aur Code  test text'
title.innerHTML
'DOM learning on Chai aur Code <span style="display: none;"> test text</span



// query seelctor =? gives only first valuee

tempLiList.style.colour="green"
VM2961:1 Uncaught TypeError: Cannot set properties of undefined (setting 'colour')
    at <anonymous>:1:24
(anonymous) @ VM2961:1
tempLiList[0].style.color="green

// Classname gives html collection
// we cant use foreach on it
// convert it in to array first
tempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
Array.from(tempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
const myConvertedArray = Array.from(tempClassList)
undefined
myConvertedArray
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
myConvertedArray.forEach((li)=>li.style.color="red")