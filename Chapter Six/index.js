console.clear()
/** Array and It's Uses in Javascript */

/** What is Array */
// Array is Object\


/** How to declear in javaScript */

 let arr = []; // literal array

 let constArr = new Array();




 /** How to Tarverse an Array in JavaScript */
arr = [1,2,3,4,5,6,7,8,9];
// basic for loop
for(let i = 0; i < arr.length;i++){
    // console.log(arr[i])
}

// for of loop
for(let i of arr){
    // console.log(i)
}


// use to function
function forLoopArray(arr){
    for(let i = 0;i< arr.length;i++){
       arr[i];
    }
    return arr
}
// console.log(forLoopArray(arr))





/** Insert, Update, replace, Delete an Array in JavaScript */
// 1 method Insert & replace or Update
arr[0] = 10;
arr[1] = 11;
arr[arr.length -1] = 52;
arr.push(54)
arr.unshift(45)

// 2 method 
arr.splice(1,0,256)



// Delete Array
arr.shift();
arr.pop()
arr.splice(0,2)





/** How to Search Data from an Array in JavaScript */
let find = 3
let isFound = false;
for(let i = 0; i < arr.length;i++){
    if(find === arr[i]){
        console.log("Data Found in Index " + i)
        isFound = true;
        break;
    }
}

if(!isFound){
    console.log("Data Not Found")
}

const findDate = arr.find(val=>val === find)
// console.log(findDate)





/** how to Reverse Array Element Completed */

for(let i = 0; i < (arr.length /2); i++){
    let tamp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = tamp
}