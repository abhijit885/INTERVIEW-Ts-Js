// Basic types =>
// Union =>
// Dynamic type =>
// Type Aliases => 
// Interface =>
// Tuples =>
// classes =>
// Public,Private,Protected =>
// Getters,Setters => 
// Abstract Class =>
// Generics =>
// Generics in Array =>
// Generics in arrow Function => 
// Generics Classes =>
// Type Narrowing => (IN,AS,InstanceOf,TypeOf,Kind)
// primitive type => string,number,boolean
// Object

////////////////// DESCRIPTIONS //////////////////

//function type => 
function sample (num1:number,num2:number) : number {
    return num1 + num2
}
sample(1,2)

//array 
const User:number[] = []
const User2:string[] = []
const User3:Array<number> = []

//array of object

//Union Type 
let User4 : number | string | boolean

//Tuples => specialized array by TS in stricked order
const user5 : (string|number) [] = [23,"aa"]

//Enums => Restrict user choice 
 enum choice {
    one = 10,
    two = 11,
    three = 13
 }

 //Interface => type of a object
interface user {
    email:string,
    name:string,
    function():string
 }

 //interface VS Type =>1.adding new fields in a interface in existing one ,reopening of interface
 interface user6 {
    email:string,
 }
 interface user6 {
    email:string,
    name:string,
  
 }

 //Classes =>

 //Public , private , Protected =>

 //Getters,Setters => 

 //Abstract Class =>

 //Generics =>

 //Generics in Array =>

//Generics in arrow Function => 

//Generics Classes =>

//Type Narrowing => (IN,AS,InstanceOf,TypeOf,Kind)


