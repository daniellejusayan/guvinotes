//let, var, const are used to declare the variables in Javascript  

//var

var employeeName = "John Doe";
console.log(employeeName); // Output: John Doe

var city = "Manila";
var city = "Cebu";
console.log(city); // Output: Cebu

var country = "Philippines";
country = "Japan";
console.log(country); // Output: Japan

// function scope

function sayHi() {
    var name = "Daniel";
    console.log("Hi " + name);
}
sayHi(); // Output: Hi Daniel
// console.log(name); // Uncaught ReferenceError: name is not defined

// block scope problem... var is not the block scope

if(true) {
    var age = 30;
    console.log(age); // Output: 30
}
console.log(age); // Output: 30 // var is not block scope, it is function scope

// ================================================

//let 

let value = 100;
console.log(value); // Output: 100

// re assignment is allowed
let firstName = "Ken";
firstName = "Kenji";
console.log(firstName); // Output: Kenji

//re declaration is not allowed
let lastName = "Smith";
// let lastName = "Johnson"; // Uncaught SyntaxError: Identifier 'lastName' has already been declared
console.log(lastName); // Output: Smith

// let is a block scope

if(true) {
    let value1 = 200;
    console.log(value1); // Output: 200
}
// console.log(value1); // Uncaught ReferenceError: value1 is not defined

function sayHello() {
    let value2 = 1000;
    console.log(value2); // Output: 1000
}
sayHello();
// console.log(value2); // Uncaught ReferenceError: value2 is not defined

// ================================================

// const is also block scope

const value3 = 100;
console.log(value3); // Output: 100

//redeclaration is not possible
const value4 = 200;
// const value4 = 300; // Uncaught SyntaxError: Identifier 'value4' has already been declared
console.log(value4); // Output: 200

// reassignment is not possible
const value5 = 500;
// value5 = 600; // Uncaught TypeError: Assignment to constant variable.
console.log(value5); // Output: 500

let a; // let
a = 10;
console.log(a); // Output: 10

var b; // var
b = 20; 
console.log(b); // Output: 20

const c = 30; // const
console.log(c); // Output: 30
// w r t const declaration and init should happen in the same line  

const arr1 = [1,2,3,4,5];
arr1.push(6);
console.log(arr1); // Output: [1, 2, 3, 4, 5, 6] // we can change the content of the array but we cannot reassign the array itself
