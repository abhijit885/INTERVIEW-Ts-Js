

Scope
// let a = 10//global scope
// console.log(a)
// // {
// //     let a = 10 //or var or const
// //     console.log(a) //let is ok // var is error //const is ok
// // }
// // {
// //     let a = 10 //let is function scope// var or const
// // }
// //console.log(a) let is error // const is error //var is ok because it is function scope
Shadowing
// // function test() {
// //     let a = "hello"
// //     if (true) {
// //         let a = "hi"
// //         console.log(a) //hi
// //     }
// //     console.log(a) //hello
// // }
// // test()

Illigal shadowing
// function test() {
//     var a = "hi"
//     let b = "hello"
//     if (true) {
//         let a = "byyy..."
//         var b = "tata" //illigal shadowing
//         console.log(a)  //byyy...
//         console.log(b)  //b is already define illigal shadowing
//     }
// }
// test()
// for (var i = 0; i < 5; i++) { //var has function scope or global scope
//     setTimeout(function log() {
//         console.log(i)//5,5,5,5,5
//     }, i * 1000);
//     inner(i);
// }
// for (let i = 0; i < 5; i++) { // let has block scope
//     setTimeout(function log() {
//         console.log(i)//0,1,2,3,4
//     }, i * 1000);
//     inner(i);
// }
// for (var i = 0; i < 5; i++) {
//     function inner(i) {
//         setTimeout(function log() {
//             console.log(i)
//         }, i * 1000);
//     }
//     inner(i);
// }
Declaration
// var a//ok
// var a//ok

// let a
// let b //ok

// const a
// const b //error

// let a
// {
//     let a  //shadowing
// }

Declaration with out initialization
// var a//ok
// let a//ok
// const a //error
// const a = 5 //ok

Re - initialization

// var a = 5
// a = 3        //ok

// const a = 3
// a = 4         //error

// let a = 3
// a = 6        //ok

Return

function fullname(fname, lname) {
    var a = fname + "-" + lname
    return a
}
var fn = fullname("abhijit", "saha")
console.log("view", fn)

function add(a, b, c) {
    var z = a + b + c;
    return z
}
function persentage(commingVal) {
    var finalValue = commingVal / 300 * 100
    document.write(finalValue)
    console.log("view", finalValue)
}
var total = add(20, 30, 40);
persentage(total)

Hosting

// console.log(a)//print undefine //var hosted
// var a = 10

// //let hosted in temporal dead zone
// console.log(a)//inside script it will hosted (deceleration and initialization between time)
// let a = 10

// //const hosted in temporal dead zone
// console.log(a)
// const a = 10

// function abc() {
//     console.log(a, b, c);
//     const c = 30; //const hosted in temporal dead zone //they are in scope not declare yat
//     let b = 20;//let hosted in temporal dead zone
//     var c = 10;//undefine
// }
// abc()
Function hosting
// //function are hosted differently .function re hosted with its name and we can function before or after any where it hosted fully
// functionName()//hosted fully
// function functionName() {
//     console.log(x) //undefined
//     var x = 5
// }
// //
// var x = 23
// var fun = function () {
//     console.log(x)//undefind (if vereable present in scope alows see the current scope if vereable not present then only see parent scope)
//     var x = 20
// }



// // MAP() FILTER() REDUCE() sort () split() slice() trim(remove ''/,/.)

// // function show() {

// //const arr = [1, 2, 3, 4, 6, 7, 6, 4, 9, 7]
// //console.log(arr.length)

// //map operation each element of array and return new array
// const multiplyThree = arr.map((item, i, arr) => {
//     return item * 3
// });



// //reduce output to one value of an array . takes 2 thing call back function and initial value
// //crr is the pervious computation value if curr is 0 the takes first element as a value
// // console.log("total addition", arr.reduce((acc, curr,i,arr) => {
// //     acc = acc + curr
// //     return acc
// // }, 2))


// // console.log('greatest', arr.reduce(function (acc, curr) { //previous ,current
// //     if (acc > curr) {
// //         curr = acc
// //     }
// //     return curr
// // }, 0))
// // }



// let stu = [
//     { name: 'abhijit', roll: 3, marks: 80 },
//     { name: 'abhijit', roll: 3, marks: 69 },
//     { name: 'abhijit', roll: 3, marks: 35 },
//     { name: 'abhijit', roll: 3, marks: 55 }
// ]

// let name = []
// for (let i = 0; i < stu.length; i++) {
//     name.push(stu[i].name.toUpperCase())
// }
// const names = stu.map((item) => { item.name.toUpperCase() })
// const maxMarks = stu.filter((item) => { item.marks > 60 && item.roll > 2 })
// const addmarks = stu.reduce((curr, acc) => {
//     acc + curr.marks
// }, 0)
// const namemorethan60 = stu.filter((item) => { item.marks > 60 }).map((item) => item.name)
// const chaining = stu.map((item) => {
//     if (item.marks > 90) {
//         item.marks += 20
//     }
//     return item
// }).filter((item) => {
//     item.marks > 60
// }).reduce((acc, crr) => {
//     acc + crr.marks
// }, 0)
// //Params and arguments
// function squre(num) {//params
//     return num * num
// }
// squre(5)//arguments
// //function declaration

// function name(val) {
//     return val * val
// }
// //function expression
// const squre = function (val) {
//     return val * val
// }
// //annonomas function (noname of function) only in callback or assign in variable
// function (val) {
//     return val * val
// }
// //first class function [function inside function]
// function squre(num) {
//     return num * num
// }
// function desplaySqure(fu) {
//     console.log("squre is " + fn(5))
// }
// desplaySqure(squre);
// //IIFF
// (function (x) {
//     return (function (y) {
//         console.log(x);//1 because of closer lexecal scope every function create  if current scope valye is not find then gose to parent scope
//     })(2)
// })(1)
// //spread vs rest
// function multiply(...nums) {//rest
//     console.log(nums[0] * nums[1])
// }
// var arr = [5, 6]
// multiply(...arr)//spread
// const fn = (a, x, y, ...Numbe) => {
//     console.log(x, y, Numbe)
// }
// fn(5, 6, 3, 2, 9, 6);
// //callback function (CB function is a function passed into another function as a argument which will invok nany of time)
// //map() , filter() , reduce() , setTimeout() have call back function
// //function scope
// var name "abhijit"
// function getscope() {
//     var num1 = 2
//     var num2 = 3
//     function add() {
//         return name + "second " + (num1 + num2)
//     }
//     return add
// }//output abhijit sccond 5
// getscope()

// //function scope (var has global scope let has block scope)
// for (let i = 0; i < 5; i++) { //output 0,1,2,3,4
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000);
// }
// for (var i = 0; i < 5; i++) { //output 5,5,5,5,5
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000);
// }
// // arrow function vs reguler function
// //1 - syntex
// //2 - arguments
// function fn() {
//     console.log(arguments)
// }
// fn(1, 2, 3)

// const fn = () => {
//     console.log(arguments)
// }
// fn(1, 2, 3)
// //"this" keyword
// let user = {
//     username: "abhijit",
//     f1: () => {
//         console.log("this to " + this.username) //this to + undefind this.username points to global
//     },
//     f2() {
//         console.log("this to " + this.username) //this to +  Abhijit this.username points to curren object
//     }
// }
// user.f1();
// user.f2();

// //lexecal scope (from global scope value can access inside a function locally but oposit not possable )
// var username = "abhijit"//global scope
// function local() {
//     console.log(username)//local and lexical
// }
// local()
// //closer ex (access inner function to outer function scope)
// function subscribe() {//global scope
//     var name = "Abhijit"
//     //inner scope
//     function displayname() {
//         //inner scope
//         console.log(name)
//     }
//     displayname()
// }
// subscribe()
// //closer ex
// function name() {
//     var name = "abhijit"
//     function name2(num) {
//         console.log(name, num)
//     }
//     return name2
// }
// name()(5)       //output -- abhijit 5


// let count = 0
//     (function printCount() {
//         if (count === 0) {
//             let count = 1 //shawing
//             console.log(count)//1
//         }
//         console.log(count)//0
//     })()
// //
// function createBass(num) {
//     return function (innerNum) {
//         console.log(innerNum + num)
//     }
// }
// var addSix = createBass(6)
// addSix(10)//log 16
// addSix(21)//log 27
// //currying (passing same veriable again again ,creat higher order function, )
// function f(a) {
//     return function b() {
//         return `${a} ${b}`
//     }
// }
// console.log(f(5))       //log f(b){return `${a} ${b}`}
// console.log(f(5)(6))    //log 5 6
// //sum(2)(6)(1) how??
// function sum(a, b, c) {
//     return a + b + c
// }
// console.log(sum(2, 6, 1)) //log - 9

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
// console.log(sum(2)(6)(1)) //9

// // map vs forEatch
// const numbers = [1, 2, 3, 4, 5];



// //for vs forEatch
// //for is tradisanal
// //foreach operate each element of array but for can increase and decress element and break not possable

// //
// const numbers = [1, 2, 3, 4, 5];

// function addOne(item) {
//     for (let i = 0; i < array.item; i++) {
//         console.log(item[i] + 1);
//     }
// }
// //EX

// addOne(item);



// // for (let i = 0; i < 5; i++) { //output 0,1,2,3,4
// //     setTimeout(function () {
// //         console.log(i)
// //     }, i * 1000);
// // }
// // function name() {
// //     let a = 10
// //     function aa() {
// //         function bb() {
// //             console.log(a)
// //         }
// //         bb()
// //     }
// //     aa()
// // }
// // name()

// function name() {
//     return "hello"
// }
// function name2(helloMessage, str) {
//     console.log((helloMessage() + str))
// }
// name2(name, "abhijit")

// //shadowing



// // functionName()//hosted fully
// // function functionName() {
// //     console.log(x) //undefined
// //     var x = 5
// // }

// // const arr = [9, 1, 2, 1, 1, 3]
// // const name = "abhijit saha"
// // 
// // //const res = arr.push(5)
// // //console.log("push", res)


// // console.log("filter", arr.filter((item) => {
// //     return item > 2
// // }))

// // (function functionName() {
// //     console.log("aaaaaaaaa")
// //     //var x = 5
// // })()  //IFFE
// // const ex = function x() {
// //     console.log("111")
// // }
// //     (function y() {
// //         ex()
// //     })()
// // console.log("1111")
// // (function (x) {
// //     return (function (y) {
// //         console.log(x);
//1 because of closer lexecal scope every function create  if current scope valye is not find then gose to parent scope
// //     })(2)
// // })(1)
// ///////closer


// function show() {
//     //console.log(a)
//     var a = 1
//     var a = 11
//     console.log(a)

//const arr = [1, 2, 3, 4, 6, 7, 6, 4, 9, 7]
//const len = arr.filter(item => item > 5)
// console.log("len", arr.reduce(function (acc, curr) {
//     acc = acc + curr
//     return acc
// }, 2))
//console.log(arr.length)
// console.log('greatest', arr.reduce(function (acc, curr) { //previous ,current
//     if (acc > curr) {
//         curr = acc
//     }
//     return curr
// }, 0))
// }
// function x(){
//     for (var i = 1 ;)
// }