console.clear()
/** Introduction to Loops in Programming */
// -for loop
// -while loop
// -for of loop
// -for in loop



/** This is for loop in javaScript */

let array = [1,2,3,4,5,6,7,8,9];

// use to for loop
for(let i = 0; i <= array.length; i++){
    console.log('Index Number : '+ i +' Array Value : ' + array[i])
};



// while loop
let i = 0;
while(i < 10){
    console.log(i)
    i++
}



// Use to While loop and Create game 
while(true){

    let mark = Math.floor(Math.random() * 10 + 1)
    if(mark == 6){
        console.log("Your are Win")
        break;
    }else{
        console.log("You Have God",mark)
    }
}





/** Standard usage */
for(let i = 0; i <= 10; i++){
    console.log(i)
}



// Multiple declarations
const strArrs= ['a','b','c','d','e','f','g'];
const strArr = 'Arjun Singh'
for(let i = 0;i < strArr.length;i++){
    console.log(strArr[i])
}



// Changing the increment
for(let i = 0; i < 10;i+=3){
    console.log(i)
}



// Decremented for loop
for(let i = 10; i >= 0; --i){
    console.log(i)
}



// For of loop
for( let i of strArr){
    console.log(i)
}


// for in loop
for(let key in strArr){
    console.log("index " + key + " value " + strArr[key])
}




// Continuing a "for" Loop

for(let i =0; i < 10; i++){
    if(3 === i){
        // continue;
        break;
    }
    console.log(i)
}
