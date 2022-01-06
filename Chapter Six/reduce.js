console.clear();

/**  Reducing values */

let arr = [1,2,3,4,5,6,7,8,9];


// ES6 - 7  Destructuring an array
let destructureArr = [f,s,t,fo,fi,,,] = arr;



// rest operator Destructuring an array
let restDestructure = [a,b,...xs] = arr; 




// for loop and array value sum
let sum = 0;
for(let i = 0; i < arr.length;i++){
    sum += arr[i];
}
// console.log(sum)


// use to Reduce Hight Order method and CallBack Function
let redeceArrayValue = arr.reduce((pre,cur,ind)=>{
    return pre + cur;   
}) 

// console.log(redeceArrayValue)




/** Flatten Array of Objects */
var arrayToObj = [
    {
        key: 'one',
        value: 1
    }, 
    {
        key: 'two',
        value: 2
    },
    {
        key: 'three',
        value: 3
    }
];

// ES5 
const ES5_keyValuePare = arrayToObj.reduce((pre,cur)=>{
    pre[cur.key] = cur.value;
    return pre;
},{})
// console.log(ES5_keyValuePare)


// ES6 
const ES6_keyValuePare = arrayToObj.reduce((pre,cur)=>{
    Object.assign(pre,{ [cur.key] : cur.value})
    return pre;
},{})
// console.log(ES6_keyValuePare)


// ES7
const ES7_keyValuePare = arrayToObj.reduce((pre,cur)=>({...pre, [cur.key] : cur.value}),{})
// console.log(ES7_keyValuePare)




/** Map Using Reduce */

function map(list,cd){
   return list.reduce((arr,item)=>{
        return arr.concat(cd(item))
    },[])
}

const result = map([1,2,3],n => n * n)
// console.log(result)






/** min Value */
const minValue = arr.reduce((arr,item)=>{
    return arr < item ? arr : item;
},Infinity)

// console.log(maxValue)



/** Find Unique Values */

arr = [1,2,1,2,4,5,3,5,4,6,8,0,9,-5,-3,-5]
// reduce method
const uniqueValue = arr.reduce((pre,cur)=>{
    if(pre.indexOf(cur) === -1){
        pre.push(cur)
    }
    return pre;
},[])

// console.log(uniqueValue)


// filter method
const filterValue = arr.filter((val,ind,arr)=>{
    return arr.indexOf(val) === ind;
})
// console.log(filterValue)





/** Array Type Object find unique value */
let things = [
    { name: 'charm', type: 'quark',id: 1},
    { name: 'strange', type: 'quark',id: 2},
    { name: 'proton', type: 'boson',id: 3},
    { name: 'proton', type: 'boson',id: 4},
    { name: 'proton', type: 'boson',id: 5},
    { name: 'prot', type: 'son',id: 6},
    { name: 'ton', type: 'soned',id: 7},
    { name: 'ton', type: 'soned',id: 8},
    { name: 'ton', type: 'soned',id: 9},
  ];


  function findUniqueValue(list, cb){
      let temp = {};
    list.forEach(ele => {
        temp[cb(ele)] = ele;
    });
    return Object.keys(temp).map(item=> temp[item]);
  }

  const aa = findUniqueValue(things, item => item.name)
//   console.log(aa)







/**  Filtering Object Arrays */
let people = [
    {
        id: 1,
        name: "John",
        age: 28
    }, 
    {
        id: 2,
        name: "Jane",
        age: 31
    }, 
    {
        id: 3,
        name: "Peter",
        age: 55
    }
];

let filterArrNameValue = people.filter(item =>{
    return item.name.length < 5;
})
// console.log(filterArrNameValue)

//  Filtering value indexof 
let findIndexofValue = people.filter((list)=>{
    let inFound = false;
    Object.values(list).forEach(val=>{
        if(String(val).indexOf('P') > -1){
            inFound = true;
            return;
        }
    })
    if(inFound) return list;

})
// console.log(findIndexofValue)







/**  Sorting Arrays */

// Default sort
let valueArr = ['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'];

valueArr.sort()



// Alphabetical Sor
let alphabaticalArr = ['s', 't', 'a','K', 'o', 'v', 'E', 'r','o', 'W'];
let alphabaticalSort = alphabaticalArr.sort((a,b)=> String(a).localeCompare(b));




// String sorting by length (Shorted first)
let stringArray = ["zebras", "dogs", "elephants", "penguins"];
let stringShortedFistSort = stringArray.sort((a,b)=>{
    return a.length - b.length;
})




// String sorting by length (longest first)
let stringShortedlongSort = stringArray.sort((a,b)=>{
    return b.length - a.length;
})






// Numerical Sort (ascending)
let numberArray = [100, 50,150,1000,500,250,10, 10000, 1]
let ascendingSort = numberArray.sort((a,b)=> a - b)

// Numerical Sort (Descending)
let descendingSort = numberArray.sort((a,b)=> b - a)



/** Sorting array by even and odd numbers */

// Sorting array by even numbers
let mixArray = [10, 21, 4, 15, 7, 99, 0, 12];
let evenSort = mixArray.sort((a,b)=> {
    return (a & 1) - (b & 1) || a - b 
})



// Sorting array by odd numbers
let oddSort = mixArray.sort((a,b)=> {
    return (b & 1) - (a & 1) || b - a
})








/**  Reversing arrays */

arr.reverse();


// Custom build array reverse method
function customReverse(arr){
    arr.reverse().forEach((item)=>{
       if(Array.isArray(item)){
           customReverse(item)
       } 
    })
    return arr;
}




// Shallow cloning an array
let arrayToClone = [1, 2, 3, 4, 5];
let method_1 = Array.from(arrayToClone);
let method_2 = Array.of(...arrayToClone)
let method_3 = [...arrayToClone];
let method_4 = Array.prototype.slice.call(arrayToClone);
let method_5 = [].slice.call(arrayToClone)





/** Merge two array as key value pair */
let columns = ["Date", "Number", "Size", "Location", "Age"];
let rows = ["2001", "5", "Big", "Sydney", "25"];

let keyToValuePair = rows.reduce((obj,item,ind)=>{
    obj[columns[ind]] = item;
    return obj;
},{})







/**  Object keys and values to array */
let object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
};

let convertArr = [];
for(let key in object){
    convertArr.push([key, object[key]])
}




/**  Sorting multidimensional array */
convertArr.sort((a,b)=>{
    return a[1] - b[1]
})