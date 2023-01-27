//////////////////////--------- Level 2-----------/////////////////////

//LET(block scope) , VAR(global scope) , CONST(function scope)
var a//ok
var a//ok
let a
let b //ok
const a
const b //error
var a
{
    const a = 2 //shadowing
}

//declaration with out initialization
var a//ok
let b//ok
const a //error
const a = 5 //ok
//re-initialization
var a = 5
a = 3        //ok
const a = 3
a = 4         //error
let a = 3
a = 6        //ok
var a = 10
let b = 10
const c = 10
console.log(c)

// HOC (Higher order Component) a component takes a component as props and return a component
import './App.css';
import React, { useRef, useState } from 'react'
function App() {
    return (
        <div className="App">
            <h1>HOC </h1>
            <HOCRed cmp={Counter} />
            <HOCGreen cmp={Counter} />
            <HOCBlue cmp={Counter} />
        </div>
    );
}
function HOCRed(props) {
    return <h2 style={{ backgroundColor: 'red', width: 100 }}>Red<props.cmp /></h2>
}
function HOCGreen(props) {
    return <h2 style={{ backgroundColor: 'green', width: 100 }}>Green<props.cmp /></h2>
}
function HOCBlue(props) {
    return <h2 style={{ backgroundColor: 'blue', width: 100 }}>blue <props.cmp /></h2>
}
function Counter() {
    const [count, setCount] = useState(0)
    return <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
}
export default App;

// higher order function(HOF) ??
//higher order function (Higher Orders Functions are functions that perform operations on other functions.)example MAP() FILTER() REDUCE()
const ex = function x() {
    console.log("111")
}
    (function y() { ex() })

// datatypes ??
// function declaration ??
// function expression ??

// IIFF ?? 
const ex1 = function x() {
    console.log("111")
}
    (function y() { ex1() })

// first class function ??  ( Pass a function as an Argument) treated like variable
function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}
greeting(sayHello, "JavaScript!");
// Pass `sayHello` as an argument to `greeting` function
// Output -- Hello, JavaScript!

// call back function??
const paymentSuccess = true
const marks = 90
const enroll = (callback) => {
    console.log("enroll started")
    setTimeout(() => {
        if (paymentSuccess) {
            callback()
        } else {
            console.log("Payment Failed !! ")
        }
    }, 2000)
}
const progress = (callback) => {
    console.log("progress started")
    setTimeout(() => {
        if (marks > 80) {
            callback()
        } else {
            console.log("progress Failed !! ")
        }
    }, 2000)
}
const getCertificate = () => {
    console.log("getCertificate Process started")
    setTimeout(() => {
        console.log("Congratulation....")
    }, 2000)
}
enroll(() => {
    progress(getCertificate)
})
Example -
    enroll(() => {
        progress((getCertificate) => {
            c(() => {
                d(() => {
                    e(() => {
                        f(() => {

                        })
                    })
                })
            })
        })
    })
// it is a call back hell which is very difficult to maintain this call backs thats why promises is come to picture common error handel section is catch()

// promise ??
const paymentSuccess2 = true
const marks2 = 90
const enroll2 = () => {
    console.log("enroll started")
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve()
            } else {
                reject("Payment Failed !! ")
            }
        }, 2000)
    })
    return promise
}
const progress2 = () => {
    console.log("progress started")
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks > 70) {
                resolve()
            } else {
                reject("Progress Failed !! ")
            }
        }, 2000)
    })
    return promise
}
const getCertificate2 = () => {
    console.log("getCertificate Process started")
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congratulation....")
        }, 2000)
    })
    return promise
}
enroll2()
    .then(progress2)
    .then(getCertificate2)
    .then((value) => {
        console.log("last value", value)
    })
    .catch((err) => {
        console.log(err)
    })

// async Await ??
//1.no need to return promise by default async return a promise 
//await is to hold the execution of code(waiting for promise) in js engine after getting the promise execution again started
const paymentSuccess3 = true
const marks3 = 90
const enroll3 = async () => {
    console.log("enroll started")
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSuccess) {
                resolve()
            } else {
                reject("Payment Failed !! ")
            }
        }, 2000)
    })
    return promise
}
const progress3 = async () => {
    console.log("progress started")
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks > 70) {
                resolve()
            } else {
                reject("Progress Failed !! ")
            }
        }, 2000)
    })
    return promise
}
const getCertificate3 = async () => {
    console.log("getCertificate Process started")
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congratulation....")
        }, 2000)
    })
    return promise
}
const head = async () => {
    try {
        await enroll3()
        await progress3()
        const lastFunction = await getCertificate()
        console.log(lastFunction)
    } catch (err) {
        console.log("all err", err)
    }
}
head();

// annonomas function ???
//all build in array and string function return type => MAP() FILTER() REDUCE() sort() 
//split()
//slice() Splice() IndexOf() trim() ??

// JS single threaded but how perform call back function
// Dev dependency and how to install vs dependency 

// Pass Function as parameter
//EX1
function name() {
    return "hello"
}
function name2(helloMessage, str) {
    console.log((helloMessage() + str))
}
name2(name, "abhijit")
//EX2
// function getData() {
//     alert("Hello from app component")
// }
// <Student data={getData} />
// function Student(props) {
//     return (
//         <div>
//             <h1>Student Component</h1>
//             <button onClick={props.data}>Call Function</button>
//         </div>
//     )
// }
// export default Student;

//setTimeout()
for (var i = 0; i < 5; i++) {
    function name(i) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
    name(i)
}
//or
for (let i = 0; i < 5; i++) {   //output 0,1,2,3,4
    setTimeout(function () {
        console.log(i)
    }, i * 1000);
}
//////////////////////--------- Level 1 Questions-----------/////////////////////

// scope ??
// event loop ??
// call stack ??
// call back quee ??
// microtask quee ??
// lexical scope ??
//currying  ??

// scope chain ??
var e = 10
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e
            }
        }
    }
}
console.log(sum(1)(2)(3)(4)) // output -- 20

// hosting ??

// shadowing ??
function test() {
    let a = "hello"
    if (true) {
        let a = "hi"
        console.log(a) //hi
    }
    console.log(a) //hello
}
test()

// closer ??
function subscribe() {
    var name = "Abhijit" //global scope
    //inner scope
    function displayname() {
        //inner scope
        function thard() {
            console.log(name)
        }
        thard()
    }
    displayname()
}
subscribe()

// illegal Shadowing ??
// temporal dead zone ??

// Polyfill for map() FILTER() REDUCE() ??
//Polyfill for map()
arr.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
};
//Polyfill for filter()
arr.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
};
//Polyfill for reduce()
arr.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
};

//////////////////////---------Difrence-----------/////////////////////

// map() vs forEach()
//map() : if you use map then map can return new array by iterating main array 
//forEach() : this can not return anything ,forEach only iterating main array 
// map return a new array , map have chaining like map().filter() , forEach() no chaining it modified the original array
const multiplyThree = arr.map((item, i, arr) => {
    return item * 3
});
const exForEach = arr.forEach((item, i) => {
    arr[i] = item + 3
});
const result22 = numbers.forEach((item) => {
    return item + 2
})
console.log(multiplyThree, exForEach, arr)

// for vs forEach
//for just loop through the array item initialized from any index is flexible, forEach() have a callback function,for each is more faster then 
var arr = [3, 5, 2, 7, 45, 7]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
arr.forEach((val) => {
    console.log(val)
})

// var VS let VS const
//var : function scope , hoisting possible 
//let : block scope
//const : block scope + value never change
// traditional function vs arrow function
// null vs nan vs undefined 
//NaN : is not a number,type is number,
//undefine : value is not set in variable,
//null : value is set in variable but it is empty,type is object : var a = null //ok

// while vs doWhile 

// spread vs rest

///////////////// Advance Concepts /////////////////////

//data-structure in JS
//make calculator 
//fibonacci series 
//Second Largest Element in Array 

//----------- ES6 -----------

// 1. default parameter
const defaultParam = (x = 2) => {
    return x
}
console.log("ww", defaultParam())
console.log("ww", defaultParam(undefined))

// 2.  spread operator help us to update state in immutable way
const arr = [2, 6, 4, 8, 9, 7, 5, 6]
const arr2 = [2, 6, 4, 8,]
const res = [...arr, 7, 7, 7, 7]//not change in default array,create a copy of array and working on it.
const obj1 = {
    x: 7,
    y: 'abhijit'
}
const obj2 = {
    a: 77,
    b: 'saha'
}
const objSpread = { ...obj2, ...obj1 }
console.log("objSpread", { ...obj2, ...obj1 });
var res2 = arr.push(10, 10)
console.log(arr);
console.log(res);

// 3. rest operator use in function parameter
const func = (q, ...params) => {
    console.log("q", q)
    console.log("a", params)
}
func(4, 5, 6, 7)

// 4. distrcuring
const objDis = {
    name: "aaaa",
    roll: "87"
    // education:{
    //     name:"kaka"
    //     destination:{
    //         city:"ladak"
    //     }
    // }
}
const output = {
    // education:{destination:{city}}
    name
} = objDis
console.log("aqq", output)

//----------- ES 2021 -----------


////////////////////////-------CODE SNEPETS Questions--------//////////////////////////////

//array to string convert
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();

//split()
//string to array convert
var string = "01,Abhijit";
var array2 = string.split(",");
console.log("str to arr ", num4.split(' '))

//remove duplicate elements from array
var arr22 = ["apple", "mango", "Banana",
    "orange", "mango", "mango"];
function removeDuplicates(arr) {
    return arr22.filter((item,
        index) => arr.indexOf(item) === index);
}

//find highest element in array 
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}

//find 2nd highest element in array 
var secondMax = function () {
    var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};

// reverse a array , reverse a string 
// sort a array (high to low)
console.log("sort", arr.sort((function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})))

// sort a array (low to high)
console.log("sort", arr.sort((function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})))

// search a array element

// filter a array
// filter run condition on each element of array and pushed in output array
const len = arr.filter((item) => {
    return item > 5
});

// array in descending order
console.log("sort", arr.sort((function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})))

// array in ascending order 
console.log("sort", arr.sort((function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})))
// remove duplicate elements from string 
//find smallest element in array 
//find 2nd smallest element in array 

//--------Array Build in Functions---------

// 1. indexOf()
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
//expected output: 1
//Start from index 2
console.log(beasts.indexOf('bison', 2));
//expected output: 4
console.log(beasts.indexOf('giraffe'));
//expected output: -1
//no changes in main array go through all item if true execution stop and return

// 2. find()
var num = [1, 3, 8, 6, 7, 4, 6]
var result = num.find((item, index, arr) => {
    return item > 3
}, this)
console.log(result)
//if not find return -1,try to find any element exist in arr main arr unchanged

// 3. findIndex()
var num2 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result2 = num2.findIndex((item, index, arr) => {
    //return item > 6
    return !(item % 2)
})
console.log(result2)
// return a array , not modify original array , if nothing exist return blank []

//3. filter()
var num3 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result3 = num3.filter((item, index, arr) => {
    return item > 30
})
console.log(result3)
// start and end is the position mot index ,if not find return blank []

//4. slice()
const num4 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result4 = num4.slice(-3, 8)
console.log("cut string ", num4.slice(0, 5))
console.log(result4)
// modify the existing array and return which are deleted from array , (start,how many item will delete,added elements)



//5. splice()
const num5 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result5 = num5.splice(2, 2, 22, 33)
console.log(result5)
console.log(num5)
//original array unchanged , add 2 array 

//6. conCat()
const num6 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const num66 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result6 = num6.concat(num66)
console.log(result6)
// add some element end of array ,change in original array 
//7. push()
const num7 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result7 = num7.push(10000)
const result77 = num7.push([100, 200])
console.log(num7)
console.log(result77)
//like for loop , loop through a array and operation on every element it , original array unchanged,return array
//8. map()
const num8 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result8 = num8.map((item, i, arr) => {
    return item * 2
})
console.log(result8)
// original array unchanged,return a single value,(previous,current,currentIndex,arr) , 2nd parameter where you want to start from

//9. reduce()
const num9 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result9 = num9.reduce((previous, current, currentIndex, arr) => {
    return previous + current
}, 0)
console.log(result9)
console.log("total addition", num9.reduce((acc, curr, i, arr) => {
    acc = acc + curr
    return acc
}, 3))

//--------String Build in Functions---------

//-------LOOP--------
//for in loop operate in object // in for index 
const objEx = {
    name: 'abh',
    roll: 12,
    address: 'kolkata'
}
for (property in objEx) {
    console.log(property + 2)
}
// for of any etarable object like array,object,string,return values //of for value

const arrEx = [5, 6, 4, 9, 2, 7, 3]
for (element of arrEx) {
    console.log(element + 2)
}
//for in etaret all elements and return the index if the value exist

const arrEx2 = [5, 6, 4, 9, 2, 7, 3]
for (element in arrEx2) {
    console.log(element)
}
//for of etaret all elements and return the value

const arrEx3 = 'I LOVE CODE' //etaret through all charecters
for (element2 of arrEx3) {
    console.log(element2)
}
////////////////////////-------OutPut Base Questions--------//////////////////////////////

// var number = 42
// console.log(number++)    //42
// console.log(number)      //43
// console.log(++number)    //44
// console.log(number)      //44
// console.log(number--)    //42
// console.log(number)      //41
// console.log(--number)    //41
// console.log(number)      //41
// var num = (++number) + (number++) //43 + 43 = 86
// var num = (number++) + (++number) //42 + 44 = 86
// var num = (--number) + (number--) //41 + 41 = 82
// var num = (number--) + (--number) //42 + 40 = 82

//console.log(7>5>1)
//console.log(4<7>2)

//object methods keys return a array wth the object keys,values return a array wth the object values,entries return a array wth the object keys value pare in a array of array,
const objEx4 = {
    name: 'abh',
    roll: 12,
    address: 'kolkata'
}
const keys = Object.keys(objEx4)
const values = Object.values(objEx4)
const entries = Object.entries(objEx4)
console.log(keys)
console.log(values)
console.log(entries)



