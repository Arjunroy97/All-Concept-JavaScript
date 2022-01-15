console.clear();


// Object all property

const person = {
    name : 'Arjun Singh',
    age : 26,
    print : function(){
        console.log(`My name is ${this.name} and my age ${this.age}`)
        this.moreMethod();
    },
    moreMethod(){
        console.log('Name : ',this.name)
        console.log('Age : ', this.age)
    }
}

// person.print()


// Funciton use to Objcet
function myFunc(){
    console.log('myFunc')
    // person.moreMethod()
}
// const myFuc = new myFunc().moreMethod



/** Factory pattern function */

const factoryFunction = function (h,w){
   return {
        h,
        w,

        // print method
        print(){
            console.log('I am rectangle')
            this.printMothed()
        },
        printMothed(){
            console.log("My Height : " + this.h)
            console.log("My Weight : " + this.w)
        }

   }
}
const fac = factoryFunction(5,10)
// fac.print()
// fac.printMothed()




/** Controuctor patternt function */
const ConstructFunction = function(h,w){
    this.h;
    this.w;
    this.print = function(){
        console.log('I am rectangle')
            this.printMothed()
    };
    this.printMothed = function(){
        console.log("My Height : " + h)
        console.log("My Weight : " + w)
    }
}
const C = new ConstructFunction(3,2);
// C.print()




/** Call Apply bind function  */
function newFunc(ad,c){
    console.log(this.a + this.b,ad,c)
}
// newFunc.call({a: 5,b:6},3,2)
// newFunc.apply({a: 5,b:6},[3,2])
const bind = newFunc.bind({a: 5,b:6})
bind(1,23)






let person1 = {
    name: 'Arjun',
    age: 25
}

Object.defineProperty(person1, 'name',{
    value: 'Arjun Singh',
    writable: true,
    enumerable: true,
    configurable: true,
})
console.log(person)
person1.name = 'Arjun Roy'
console.log(person1.name)