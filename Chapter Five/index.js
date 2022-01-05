console.clear();

/**  String and It's Uses in Javascript */

// What is String 


/** String Literal vs Constructor */


// literal string
let str = 'Arjun Singh';


// Constructor string
let strCos = new String("Arjun Singh");
let strCos2 = String("Hi I am Constructor String")



/** What is Escope notation */
let escopeStr = "I\"m Dubble Notation 'and' Escope Notation";




/**
 *  How to Compare to String
 * Rouls: 
 * 1. smaill letter always big e.x: z y,x,w....
 * 2. lower case or letter always smaill e.x: Z,Y,X,W....
 */

let a = 'azb';
let z = 'aAb'
let result = a > z;
console.log(result)





/** String methods always provided in JavaScript */

let fultIntor = 'I am ';
let fullInto = 'Arjun Singh';

// Concate string
let fullName = fultIntor.concat(fullInto,' and my profession Front end Developer')
// console.log(fullName)



// String Method

fultIntor.toUpperCase()
fullInto.toLowerCase()

fultIntor.startsWith("I am") // true seme includes method
fultIntor.endsWith('am ') // true seme includes method

fultIntor.trim()
fultIntor.trimStart()
fultIntor.trimEnd()
fultIntor.split('')






/** How to get length of a string */

fultIntor.length 


// Build-in length functon

let names = 'Arjun Singh';
let len = 0;

while(true){
    if(names.charAt(len) === ''){
        break;
    }else{
        len++
    }
}
console.log(len)