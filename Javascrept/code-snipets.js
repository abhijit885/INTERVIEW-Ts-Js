

 /* var VS let VS const */
//var : function scope , hoisting possible ,global scope, can re assigned 
//let : block scope
//const : block scope + value never change

/* Scope */ 
var a = 6
console.log(a) //ok
{
    var a = 6
}
console.log(a) //ok 
{
    let a = 6
}
console.log(a) //error also for const
let a = 4
console.log(a)
const a = 4
console.log(a)
//es6 scop + shadowing
function test() { //shadowing
    let a = "Hello"
    if (true) {
        let a = "Hi"
        console.log(a)
    }
    console.log(a)
}
test()
function test2() {
    var a = "Hii"
    let b = "Byy"
    if (true) {
        let a = "Hii"
        var b = "Byy"
        console.log(a) //shadowing
        console.log(b) //Illigal shadowing
    }
}


//declaration let and const not be declear in same scopr var can 
var a//ok 
var a//ok
let a
let a //error
const a
const a //error 
var a
{
    const a = 2 //shadowing
}

//declaration with out initialization
var a//ok
let b//error
const a //error
const a = 5 //ok
//re-initialization
//re-assign not possible in const
var a = 5
a = 3        //ok
const a = 3
a = 4         //error
let a = 3
a = 6        //ok

/*hosting */ // => declear all vereable top of the code at creation phase
console.log(aa, BB)
const aa = 10
let BB = 10 //hested in temoiral ded zone (we get it in scrept section in inspect => console =>sources =>add breakpoint and run ) output undefind
console.log(aa)
var aa = 10 //hested output undefind 

var x = 21;
var fun = function () {
    console.log(x); //undefine
    var x = 20;
};
fun(); //OUTPUT undefine

//JS execution context have 2 things(creation phase, execution phase)

// temporal dead zone ??
is the time between decration and initialization(in the scope but not yeat declared) let and const veriable
const and let are hosted in temporal ded zone
function name() {
    console.log(AA, BB, CC) //AA=undefind initize the function but not initalize the veriable yeat
    const AA = 20
    let BB = 30
    var CC = 40
}

/* null vs nan vs undefined */ 
//NaN : is not a number,type is number,
function sample(num1, num2) {
    return num1 + num2
}
sample("aaa", 2)  //output : NaN
//undefine : value is not set in variable,
//null : value is set in variable but it is empty,type is object : var a = null //ok
//void is nothing there completely absent but undefine is not define but it is a value

/* HOC */ //(Higher order Component) a component takes a component as props and return a component
import React, { useState } from 'react'
import './App.css'
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

/* Curring */
const sum = (x) => {
    return (y) => {
        return (z) => {
            return x + y + z
        }
    }
}
const sum1 = sum(2)
const sum2 = sum(3)
const sum3 = sum(4)
console.log(sum3)

/* higher order function(HOF) */
//higher order function (Higher Orders Functions are functions that perform operations on other functions.)example MAP() FILTER() REDUCE(). A Higher-Order function is a function that receives a function as an argument or returns the function as output.
//For example, Array.prototype.map, Array.prototype.filter and Array.prototype.reduce are some of the Higher-Order functions built into the language.
const ex = function x() {
    console.log("111")
}
    (function y() { ex() })
//    Without Higher-order function

const arr1 = [1, 2, 3];
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
// prints [ 2, 4, 6 ]
console.log(arr2);
//    With Higher-order function map
const arr1 = [1, 2, 3];
const arr2 = arr1.map(function (item) {
    return item * 2;
});
console.log(arr2);

//Without Higher-order function
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 },
];
const fullAge = [];
for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
        fullAge.push(persons[i]);
    }
}
console.log(fullAge);

//With Higher-order function filter
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 },
];
const fullAge = persons.filter(person => person.age >= 18);
console.log(fullAge);

/* datatypes */
1. String 
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

/* Function */
// function declaration ??Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
function functionName(parameters) {
    // code to be executed
}
function myFunction(a, b) {
    return a * b;
}
// function expression ??After a function expression has been stored in a variable, the variable can be used as a function:
const x = function (a, b) { return a * b };
let z = x(4, 3);

/* IIFF */ 
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
(function () {
    // …
})();

(() => {
    // …
})();

(async () => {
    // …
})();
const ex1 = function x() {
    console.log("111")
}
    (function y() { ex1() })


/* first class function */ 
//( Pass a function as an Argument) treated like variable,when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
const foo = () => {
    console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
function sayHello() {
    return "Hello, ";
}
function greeting(hello, name) {
    console.log(hello() + name);
}
greeting(sayHello, "JavaScript!");
// Pass `sayHello` as an argument to `greeting` function
// Output -- Hello, JavaScript!
//Returning a function
function sayHello() {
    return () => {
        console.log("Hello!");
    };
}

/* call back function */
 // pass a function as a parameter to another function
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

//Callback Hell
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

//Asynchronous Function == it takes some time ? => by default JS is synchronous but some time the order of execution need to change that time we use callBack functions which are asynchronous, like the function takes some time to complete the job that place we use asynchronous function after 2 sec function will call. EX : setTimeOut() ,  setInterval() 
EX: 1
console.log("line 1")
setTimeout(() => {
    console.log("callBack")
}, 2000);
console.log("line 3")

EX: 2
console.log("line 1")
setTimeout(function () {
    console.log("callBack")
}, 2000);
console.log("line 3")


/* promise */
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
    return
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

/* async Await */
//1.no need to return promise by default async return a promise 
//await is to hold the execution of code(waiting for promise) in js engine after getting the promise execution again started
//EXAMPLE-1
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
//EXAMPLE-2
const F1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("F1 Promise resolve value !! ");
    },5000);
});
const F2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("F2 Promise resolve value !! ");
    },2000)
});
async function handelPromise(){
    console.log("handelPromise started");
    const val1 = await F1;
    console.log("val1");
    console.log(val1);
    const val2 = await F2;
    console.log("val2");
    console.log(val2);
};
handelPromise();
console.log("Welcome to JS");

/* annonomas function */
//all build in array and string function return type => MAP() FILTER() REDUCE() sort() 
//split()
//slice() Splice() IndexOf() trim() ??

/* JS single threaded but how perform call back function */
//JS execution is not pause. Function execution is suspended 
// dependency vs Dev dependency
// -normal dependency is for project function purpous ,if use -dev in here will increse js bundle size  
// -dev mins package is using for development purpous

/* Pass Function as parameter */
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
//hoisting??
// event loop ??
// call stack ??
// call back quee ??
// microtask quee ??
// lexical scope ??
//currying  ??

/* scope chain */
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

/* hosting */

/* shadowing */
function test() {
    let a = "hello"
    if (true) {
        let a = "hi"
        console.log(a) //hi
    }
    console.log(a) //hello
}
test()

/* closer */
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

/* illegal Shadowing */


/* Polyfill for map() FILTER() REDUCE() */
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

/*Generator Function */
//The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.but whenever it needs to generate a value, it does so with the yield keyword rather than return. 
function* generator(i) {
    yield i;
    yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20
//////////////////////---------Difrence-----------/////////////////////

/* map() vs forEach() */
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

/* for vs forEach */
//for just loop through the array item initialized from any index is flexible, forEach() have a callback function,methods perform operate on every array item.for each is more faster then for 
var arr = [3, 5, 2, 7, 45, 7]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
arr.forEach((val) => {
    console.log(val)
})

// traditional function vs arrow function

// 1- syntex 
function abc (num) {
    return num * num
}
const abc = (num) => {
    return num * num
}
// 1- implicit return in normal function 
function abc (num) {
    return num * num
}
const abc = (num) => num * num
// 3 - arguments 
function fn2() {
    console.log(arguments)
}
fn(1,2,3) //prints all arguments
const fn1 = () => {
    console.log(arguments)
}
fn(1,2,3);
// 4 - this keyword 
let user = {
    username: "abhijit saha",
    fun3: () => {
        console.log("this keyword" + this.username)
    },
    fun4() {
        console.log("this keyword"  + this.username)
    },
};

user.fun3();
user.fun4();

// while vs doWhile 



///////////////// Advance Concepts /////////////////////

//data-structure in JS
//make calculator 
//fibonacci series 
//Second Largest Element in Array 
//second Lowest number in array


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
    console.log("...params", ...params)
}
func(4, 5, 6, 7)

const func3 = (a,p,q, ...params,x,y) => { // rest operater is always at last perameter (a,p,q,x,y,...params)
    console.log( p,q)
  
}
func(4, 5, 6,)

const func2 = (...params) => {
    let sum = 0;
    params.forEach((par) => {
        sum = sum + par;
    })
    return sum
}
console.log(func(4, 5, 6, 7));

// 4. distrcuring
const objDis = {
    name: "aaaa",
    roll: "87",
    education:{
        name:"kaka",
        destination:{
            city:"ladak"
        }
    }
}
const output = {
    education:{destination:{city}},
    name
} = objDis
console.log("aqq", output)
console.log("aqq", output.education.destination.city); // Output: aqq ladak

//----------- ES 2021 -----------
//1.GlobalThis

///////////////////-------CODE SNEPETS Questions--------////////////////

/* increment */
var number = 42
console.log(number++) //42
console.log(number)   //43
console.log(++number)   //44
console.log(number)       //44
console.log(number--) //44
console.log(number) //43
console.log(--number) //42
console.log(number) //42
var num = (++number) + (number++) //43 + 43 = 86
var num = (number++) + (++number) //42 + 44 = 86
var num = (--number) + (number--) //41 + 41 = 82
var num = (number--) + (--number) //42 + 40 = 82

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
        index) => arr.indexOf(item) === index);//indexOf() return 1 for true -1 for false
    //OR
    var arr = ["apple", "mango", "apple",
        "orange", "mango", "mango"];

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    console.log(removeDuplicates(arr));
    //OR 
    var arr = ["apple", "mango",
        "apple", "orange", "mango", "mango"];

    function removeDuplicates(arr) {
        var unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
    console.log(removeDuplicates(arr));
    //OR
    var arr = ["apple", "mango",
        "apple", "orange", "mango", "mango"];

    function removeDuplicates(arr) {
        var unique = arr.reduce(function (acc, curr) {
            if (!acc.includes(curr))
                acc.push(curr);
            return acc;
        }, []);
        return unique;
    }
    console.log(removeDuplicates(arr));
}

//find highest element in array 
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;
for (i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
console.log(largest);
//find 2nd highest element in array 
var secondMax = function () {
    var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};
var arr = [20, 120, 111, 215, 54, 78];
var max = Math.max.apply(null, arr);
console.log("first MAX ", max);
arr.splice(arr.indexOf(max), 1);
var secondMax = Math.max.apply(null, arr);
console.log("first MAX ", secondMax);
var arr = [20, 120, 111, 215, 54, 78];

// Sort the array in descending order
var sortedArr = arr.sort(function(a, b) {
  return b - a;
});

// Retrieve the second element (index 1) from the sorted array
var secondHighest = sortedArr[1];

console.log("Second Highest:", secondHighest);

// reverse a array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();//.reverse() change the original array
function reverseArr(input) {
    var ret = new Array;
    for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

var a = [3, 5, 7, 8]
console.log(0 >= 0)
console.log(a1[0])
var b = reverseArr(a1);
console.log(b)
// reverse a string 
const fruits = "Mango";
// console.log(fruits.reverse());//.reverse() change the original array
function reverseArr(input) {
    fruits.split(",")
    var ret = '';
    for (var i = input.length - 1; i >= 0; i--) {
        ret = ret + fruits[i]
    }
    return ret;
}
console.log("HOC",reverseArr(fruits))
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
const array = [10, 11, 3, 20, 5];

const greaterThanTen = array.find(element => element > 10); //find only return 1 element
const array = [10, 11, 3, 20, 5];

const greaterThanTen2 = array.filter(element => element > 10);

console.log(greaterThanTen2) //[11, 20]

console.log(greaterThanTen)//11
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
//list of repete element and there count
let arr = [2, 6, 2, 9, 9, 7, 3, 4, 3, 6, 5, 2, 6, 7, 4, 3, 7]
y = arr.sort()
let counter = 1;
y.map((item, index) => {
    if (y[index] == y[index + 1]) {
        counter = counter + 1
    } else {
        console.log(item + "is" + counter + "times");
        counter = 1
    }
})
const XX = [1, 2, [3, 4, [5, 6]]]
//output will be = [1,2,3,4,5,6]
console.log( XX.flat(2))
const y = XX.toString()
const yy = y.slice(",")
const finalArray = []
yy.map(item => {
    finalArray.push(parseInt(item))
})
console.log(finalArray)
// remove duplicate elements from string 
//Frecuency of charecters in a given string 
//find smallest element in array 
const numbers2 = [2, 5, 9, 1, 6, 7, 4, 8, 0];
let result2 = numbers2[0]
for (i = 0; i < numbers2.length; i++) {
    if (numbers2[i] < result) {
        result2 = numbers2[i]
    }
}
console.log(result);
//OR
const numbers3 = [5, 9, 6, 7, 2, 4, 8];
const result3 = Math.min.apply(Math, numbers3);
console.log(result3);
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

//ForEach(),method calls a function for each element in an array.,method calls a function for each element in an array.
//syntex - > array.forEach(function(currentValue, index, arr), thisValue)
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
    arr[index] = item * 10;
}
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
    sum += item;
}
// reverse a given number
function revStr(q){
    return  Number(q.toString().split("").reverse().join(''))
    //console.log(typeof reversedStr);
    }
    console.log(revStr(12))
//
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

#Eco System(what is the purposes)
1.webpack is for bundling
2.babel

/*
Object copy => when ever we asign a object in a veriable that time value is not assign in the veriable, reference is assign so it is a issue it not happend in vereable. it can resolved by shalow copy / deep copy. Shalli copy only work in one level of object 1. distructure object 2. Object.assign({},obj). and in deep copy using JSON.parse(JSON.stringify(obj))
*/

/*
DOM => It represents the entire UI(User Interface) of the web application as the tree data structure. It is a structural representation of HTML elements of a web application in simple words. Whenever there is any change in the state of the application UI, DOM is updated and represents the change.
Virtual DOM => object is the same as a real DOM object, except that it is a lightweight copy. This means that it cannot manipulate on-screen elements. Moreover, upon any change of a property, it only updates the corresponding nodes and not the entire tree. That makes it a quick and efficient alternative.
**Diffing algorithm in virtual DOM => by this react compare the real dom and vertual dom and only update the updated node in jsx.React uses virtual DOM to enhance its performance.
REACT.js actual dom is slow thats why react use the virtual dom whenever change the state and render in component that time react change only the node or state change thats why very first 
*/
annonymous function
class component / functional component
pure component

// Yarn VS Npm?
/*
Yarn => Facebook developed Yarn in 2016 as a replacement for NPM. It was designed to offer more advanced features that NPM lacked at the time (such as version locking) and create a more secure, stable, and efficient product.
However, since Yarn was released, NPM has added several crucial features. In its current state, Yarn is now more of an alternative to NPM rather than a replacement.

NPM => is the default package manager for Node.js with a CLI tool that helps install, manage, and remove Node.js packages. It also enables users to share open-source Node.js packages.
*/
