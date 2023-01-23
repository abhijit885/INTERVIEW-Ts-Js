//////////////////////--------- Level 2-----------/////////////////////
//HOC(Higher order Component) a component takes a component as props and return a component
// higher order function(HOF) ??
// datatypes ??
// function declaration ??
// function expression   ??
// IIFF ??
// first class function ??
// call back function??
// Spread,Rest??
// annonomas function ???
//all build in array and string function return type => MAP() FILTER() REDUCE() sort() split() slice() Splice() IndexOf() trim() ??
// Polyfill for map() FILTER() REDUCE() ??
// Async and awate vs Promice ??
// JS single threaded but how perform call back function
// Dev dependency and how to install vs dependency 

//////////////////////--------- Level 1-----------/////////////////////

// scope ??
// event loop ??
// call stack ??
// call back quee ??
// microtask quee ??
// lexical scope ??
// scope chain ??
// hosting ??
// shadowing ??
// closer ??
// illegal Shadowing ??
// temporal dead zone ??

//////////////////////---------Difrence-----------/////////////////////

// map() vs forEach()
// for vs forEach
// var VS let VS const
// traditional function vs arrow function
// null vs nan vs undefined 
// while vs doWhile 
// spread vs rest

/////////////////////////--------style----------///////////////////

// display:'flex',
// flex-wrape:"wrape",
// zindex,
// position:'absolute',

///////////////// Advance Concepts /////////////////////

//data-structure in JS
//make calculator 
//fibonacci series 
//Second Largest Element in Array 

////////////////////////-------CODE SNEPETS Questions--------//////////////////////////////

// array to string convert
// reverse a array , reverse a string 
// string to array convert
// sort a array 
// search a array element
// filter a array
// array in ascending or descending order
// remove duplicate elements from array and string 
//find smallest element in array 
//find 2nd smallest element in array 
////////////////////////-------CODE SNEPETS--------//////////////////////////////

// var number = 42
// console.log(number++) //42
// console.log(number)   //43
// console.log(++number)   //44
// console.log(number)       //44
// console.log(number--) //42
// console.log(number) //41
// console.log(--number) //41
// console.log(number) //41
// var num = (++number) + (number++) //43 + 43 = 86
// var num = (number++) + (++number) //42 + 44 = 86
// var num = (--number) + (number--) //41 + 41 = 82
// var num = (number--) + (--number) //42 + 40 = 82

//console.log(7>5>1)
//console.log(4<7>2)

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));
// expected output: 1
// Start from index 2
// console.log(beasts.indexOf('bison', 2));
// expected output: 4
// console.log(beasts.indexOf('giraffe'));
// expected output: -1
// no changes in main array go thtough all item if true execution stop and return
// no changes in main array go thtough all item if true execution stop and return

var num = [1, 3, 8, 6, 7, 4, 6]
var result = num.find((item, index, arr) => {
    return item > 3
}, this)
console.log(result)
//if not find return -1,try to find any element exist in arr main arr unchanged

var num2 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result2 = num2.findIndex((item, index, arr) => {
    //return item > 6
    return !(item % 2)
})
console.log(result2)
// return a array , not modifi original array , if nothing exist return blank []

var num3 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result3 = num3.filter((item, index, arr) => {
    return item > 30
})
console.log(result3)
// ctart and end is the position mot index ,if not find return blank []

const num4 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result4 = num4.slice(-3, 8)
console.log(result4)
// modify the existing array and return which are deleted frome array , (start,how many item will delete,added elements)

const num5 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result5 = num5.splice(2, 2, 22, 33)
console.log(result5)
console.log(num5)
//original array unchanged , add 2 array 

const num6 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const num66 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result6 = num6.concat(num66)
console.log(result6)
// add some element end of array ,change in original array 

const num7 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result7 = num7.push(10000)
const result77 = num7.push([100, 200])
console.log(num7)
console.log(result77)
//like for loop , loop through a array and operation on every element it , original array unchanged,return array

const num8 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result8 = num8.map((item) => {
    return item * 2
})
console.log(result8)
// oiginal array unchanged,return a single value,(previous,current,currentIndex,arr) , 2nd peramiter where you want to start from

const num9 = [1, 2, 3, 8, 6, 7, 4, 6, 2]
const result9 = num9.reduce((previous, current, currentIndex, arr) => {
    return previous + current
}, 0)
console.log(result9)
//for in loop operate in object

const objEx = {
    name: 'abh',
    roll: 12,
    address: 'kolkata'
}
for (property in objEx) {
    console.log(property + 2)
}
// for of any etarable object like array,object,string

const arrEx = [5, 6, 4, 9, 2, 7, 3]
for (element of arrEx) {
    console.log(element + 2)
}
//for in etaret all elements and return the index if the value

const arrEx2 = [5, 6, 4, 9, 2, 7, 3]
for (element in arrEx2) {
    console.log(element)
}
//for of etaret all elements and return the value

const arrEx3 = 'I LOVE CODE'
for (element2 of arrEx3) {
    console.log(element2)
}
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

// es6 default perameter
const defaultParam = (x = 2) => {
    return x
}
console.log("ww", defaultParam())
console.log("ww", defaultParam(undefined))

//... spread ,help us to update state in immutable way
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

//...rest use in function peramiter
const func = (q, ...params) => {
    console.log("q", q)
    console.log("a", params)
}
func(4, 5, 6, 7)

//distrcuring
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

//array to string convert
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();
//string to array convert
var string = "01,jejejej";
var array2 = string.split(",");
//remove dublecat elements from array and string 
var arr = ["apple", "mango", "appleaaa",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return arr.filter((item,
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
//find 2nd hughest element in array 
var secondMax = function () {
    var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};


