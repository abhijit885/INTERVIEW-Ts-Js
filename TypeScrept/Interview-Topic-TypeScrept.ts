// type scrept help in compile time error handling ,JS only run time 
// TS compile to JS
// compile TS file to Js -> tsc "file name.ts"

// Basic types => 1.Boolean ,2.Number ,3.String ,4.Null ,5.Undefind
//dynamic type or any type => is use any in array ,object,string,number 
// Union => 
// Dynamic type =>
// Type Aliases => //any  types are save a place with a variable like name
type stringOrNumber = string|number|boolean
type userType = {name:string;age:number}
const userDetails = ( id:stringOrNumber,user:stringOrNumber) => void {console.log("log",id,user)}

// Interface => 
// Tuples => //almost like array but the position of the type will fixed by tuples
let b : [number,string,object] = [4,'world',{t:1}]
// classes =>
class Player{
  public name:string;
  private age:number;
  readonly country:string  //inly read possable
   constructor(n:string,a:number,c:string){
      this.name = n;
      this.age = a;
      this.country = c;
   }
   play(){
      console.log("we r",${this.name})
   }
}
const Player1 = new Player("Abhijit",98,"Kol")
const Player2 = new Player("Ram",908,"Kollfkdo")
const Players : Player[] = []
Players.push(Player1)
Players.push(Player2)
console.log(Player1.name) //public
console.log(Player1.age) //private

// Public,Private,Protected =>
// Getters,Setters => 
// Abstract Class =>
// Generics => get type as a variable is called Generics 

// Generics in Array =>
// Generics in arrow Function => 
const addId = (obj) => {
   let id = Math.floor(Math.random() * 100);
   return{...obj,id}
}
let user = addId({
   name: "abhi",
   age: 40 ,
   country : 'eng'
})
addId(user)
// Generics Classes =>
// Type Narrowing => (IN,AS,InstanceOf,TypeOf,Kind)
// primitive type => string,number,boolean
// Object

////////////////// DESCRIPTIONS //////////////////

//function type => 
function sample (num1:number,num2:number,num3?:number,num4="abhijit") : number {
    return num1 + num2
}
sample(1,2)  // ? for optional
let myFunc:Function ;
myFunc =() =>{
   console.log("hello")
}
//function segnature
let userDetails : (id:number|string,userInfo:{
   name:string,
   age:number
}) => void
userDetaile = (id:number,user:{
   name:string,
   age:number
}) 
//array 
const User:number[] = []
const User2:string[] = []
const User3:Array<number> = []

//array of object

//Union Type or like-or 
let User4 : number | string | boolean

//object type 
let c : object 
c={
   name:"abhijit"
}
c=[1,2,3,5] //array is also a type of object

//Tuples => specialized array by TS in stricked order
const user5 : (string|number) [] = [23,"aa"]

//Enums => Restrict user choice 
 enum choice {
    one = 10,
    two = 11,
    three = 13
 }
interface myChoice {
   status :number;
   choiceType : choice.one   //choiceType : choice.two 
}
 //Interface => type of a object like a object skema,building block
interface user {
    email:string,
    name:string,
    function():string
 }
 // in classes interface implement like and any privet property not be implement in class interface to implement create a public method by that access the private data 
 export interface isPlayer {
   public name:string;
   readonly country:string;
   getAge():number
   play():void;
}
//  export class Player implements IsPlayer {
//    constructor(
//    public name:string;
//   private age:number;
//   readonly country:string  //inly read possable
// ){}
// getAge(){         // the public method
//    return this.age
// }
//    play(){}
//  }

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

 //Generic is a block of code reusable for type ,interface ,is like a variable use in type
 //Generic in type => taking the type from user like a variable in <T>
 const addID = <T>(obj: T) => {
   let id = Math.floor(Math.random()* 100)
   return {...obj ,id}
 }
 const user22 =addID({
   name:'abhijit',
   age:40,
   country:'india'
 })

 const addID3 = <T extends {
   name:string;
   age:number;
   country:string
 }>(obj: T) => {
   let id = Math.floor(Math.random()* 100)
   return {...obj ,id}
 }
 const user2 =addID({
   name:'abhijit',
   age:40,
   country:'india'
 })
 
 //Generics in interface => 
 interface APIResponse<T> {
   status:number;
   type:string
   data:T
 }
 const response : APIResponse<object> = {
   status:200,
   type:'good',
   data:{  
      name:"text",
      something:300
   }
 }

 //Generics in Array =>

//Generics in arrow Function => 

//Generics Classes =>

//Type Narrowing => (IN,AS,InstanceOf,TypeOf,Kind)
//IN
in is a JavaScript operator that can be used to check whether a property belongs to a particular object.
The expression returns true or false depending on whether the property belongs to the object.
//AS
That is not vanilla JavaScript, it is TypeScript. as any tells the compiler to consider the typed object as a plain untyped JavaScript object.

The as keyword is a Type Assertion in TypeScript which tells the compiler to consider the object as another type than the type the compiler infers the object to be.
//TypeOf
JavaScript already has a typeof operator you can use in an expression context:

// Prints "string"
console.log(typeof "Hello world");
Try
TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:

let s = "hello";
let n: typeof s;

