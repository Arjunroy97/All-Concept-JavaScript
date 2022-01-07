console.clear()
/** How to Use Functions in Javascript */


// What is Function and define a JavaScript

function func(){
    console.log(func.name)
}; // Name function
const anonymouss = function(){ anonymouss.name}; // anonymouss function

const arrFuc = () => {arrFuc.name} // ES6 Array function



// How to function invoke
function sums(){
    let a = 5, b = 20;
    let add = a+ b;
    console.log(add)
}
// sum();// call invoke function




// Arguments and perameter of a function
function argPera(a,b){
    console.log(a + b)
}
// argPera(5,5)



// Arguments object in a function
function argumentsFuc(){
    let sum = 0;
    for(let i = 0; i < arguments.length;++i){
        // console.log(argument[i])
        sum += arguments[i]
    }
    // console.log(sum)
}
// argumentsFuc(1,2,3,4,5,6,7,8)
// argumentsFuc(1,2,5,6,8)





// How to return anything form a function
function argumentsFuc(){
    let sum = 0;
    for(let i = 0; i < arguments.length;++i){
        // console.log(argument[i])
        sum += arguments[i]
    }
    return sum;
}
const result = argumentsFuc(1,2,3)
// console.log(result)




// Function Expression in JavaScript
const expressionFuc = function(a,b){
    console.log(a - b);
}
// expressionFuc(2,1)




// Inner function in javaScript
function fullName(great,name){
    function hiftName(){
        if(name){
           return name.split(' ')[0];
        }else{
            return ''
        }
    }
    return great + " " + hiftName()  
}

const outputName = fullName('WellCame','AS Arjun')
// console.log(outputName)



/** function Currying */

function cur(a,b,c){
    return a+ b + c;
}

// detailes cur
function curr(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}




//  Binding `this` and arguments

const obj = {
    num : 5,
    add : function(){
        console.log(this.num)
    }
}
// obj.add()






// Rest Operator use to perameter function 
function catName(catName, ...color){
    color.forEach(item=>{
        log(catName + ' color ' + item)
    })
}   

// catName('suz','white','get','drak','yellow');











// Console log function
const log = console.log.bind(console);

/** Functional Programming */

// pure function
function pure(n){
    log(n * n)
}

// Not pure function
let object = {
    a : 100,
    b : 200
}
let x = 10;
function notPurefuc(){
    x = 100;
}

function notPure(obj){
    obj.a = 200;
    obj.b = 300
    log(obj)
}
// log(notPure(object))
// log(object)



/** First class function 
 * Defination : 
 * 1. A function can be store in a variable
 * 2. A function can be store in a array
 * 3. A function can be store in a object
 * 6. You can create function as need
 * 5. We can pass function as a arguments
 * 6. You can return function form another function
*/

// A function can be store in a variable
function variableStoreFunc(a,b){
    return a + b;
}
const storeVariable = variableStoreFunc(2,3)



// A function can be store in a array
let arrayVariabelStrore = [2,3,4,5,variableStoreFunc]


// A function can be store in a object
let objects = {
    a : 100,
    b : 200,
    objVar :variableStoreFunc 
}



// You can create function as need
// setTimeout(function(){
//     // console.log("Hi I am ayscronuse function")
// },1000)


// We can pass function as a arguments
function pafucArg(cb){
   cb()
}
// pafucArg(returnFuc)

function returnFuc(){
    console.log("hi I am Hight Order function")
}



// You can return function form another function
function mainFuc(){
    return function(){
        console.log("hi i am return function and another function")
    }
}
// mainFuc()()







/** What is Callback Function and Hight order function */
function additionValue(a,b,cb){
    log(cb(a,b))
    
}
// additionValue(2,3, (a,b) => a + b)
// additionValue(2,3, (a,b) => a - b)
// additionValue(2,3, (a,b) => a * b)
// additionValue(2,3, (a,b) => a / b)






/**  implementation of forEach function */
let arr = [1,2,3,4,5,6,7,8,9];
function forEach(val,cb){
    for(let i = 0;i< val.length;++i){
        cb(val[i],i,val)
    }
}
let sumarr = 0;
forEach(arr,(val,ind,arr) => {
    sumarr += val;
})
// console.log(sumarr)





/** implementation of Map function */
function map(val,cb){
    let newArr = [];
    for(let i = 0;i< val.length;++i){
       newArr.push(cb(val[i],i,val))
    }
    return newArr;
}
let maps = map(arr,(val,ind,arr) => {
   return val + 5;
})
// console.log(maps)





/** implementation of filter function */
function filter(val,cb){
    let newArr = [];
    for(let i = 0;i< val.length;++i){
       if(cb(val[i],i,val)){
           newArr.push(val[i])
       }
    }
    return newArr;
}
let filters = filter(arr,(val,ind,arr) => {
    return val%2 !==  0
})
// console.log(filters)





/** implementation of reduce function */
function reduce(val,cb, acc){
    for(let i = 0;i< val.length;++i){
       acc = cb(acc,val[i])
    }
    return acc;
}
let reduces = reduce(arr,(val,ind,arr) => {
    return val + ind
},0)
// console.log(reduces)





/** implementation of find function */
function find(val,cb){
    for(let i = 0;i< val.length;++i){
      if(cb(val[i])){
          return val[i];
      }
    }
}
let finds = find(arr,(val) => {
    return val  === 9
},0)
// console.log(finds)