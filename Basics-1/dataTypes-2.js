// Primitive

// 7 types: String, Numbers, Booleans, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIN = false;
const outsideTemp = null;
let userEmail; // let userEmail = undefined

const id = Symbol("123");

// Reference (Non primitive)

// Array, Objects, Functions

// const anime = ["Aot", "Bleach", "TBATE"]
// let muObj = {
//     name: "ADARSH",
//     age: 18
// }

// const myFunction = function () {
//     console.log("Hello World");
// }
// myFunction()

// console.log(typeof myFunction);
console.log(typeof isLoggedIN);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
        Number => number
        String  => string
        Boolean  => boolean
        null  => object
        undefined  =>  undefined
        Symbol  =>  symbol
        BigInt  =>  bigint

2) Non-primitive Datatypes
        Arrays  =>  object
        Function  =>  function
        Object  =>  object
 */



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Adarsh"

let anotherName = myName
anotherName  = "Adarsh Jha" // in pass by value we get copy of the variable
console.log(myName);
console.log(anotherName);

let 