console.clear()
/** Logic and condition in progamming */

let num =10;
let addNum= '';
if(10 > num){
    addNum += 'I am Big Number'
}else{
    addNum += 'Hi i am Smaill Number'
}
// console.log(addNum)



let number = 4;

if( number % 2 === 0){
    console.log(number + ' This Number is Even')
}else{
    console.log(number + ' This Number is Odd')
}



/** Switch Statement and condition */

let mark = 70;

switch(true){
    case mark >= 90: 
    console.log("Great : A+");
    break;

    case mark >= 80 : 
    console.log("Great : A");
    break;

    case mark >= 70 : 
    console.log("Great : A-");
    break;

    case mark >=60 : 
    console.log("Great : B")
    break;

    case mark >= 50 : 
    console.log("Great : C");
    break;

    case mark >= 40 :
    console.log("Great : D");
    break;

    case mark >= 33 :
    console.log("Great : E");
    break;

    default : console.log("You are Fill")

}



/** Tarnary Operator */

num = 10;

let parnaryResult = num > 40 ? 'This number is True' : 'This number is False'
console.log(parnaryResult)




/** And or Odd Operator */

let trueFalse = true;

trueFalse && console.log("This is True Number")

trueFalse || console.log("Hello My Number is False")