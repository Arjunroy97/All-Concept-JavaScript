console.clear();

/**  Reducing values */

let arr = [1,2,3,4,5,6,7,8,9];

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