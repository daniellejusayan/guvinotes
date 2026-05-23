// let age = 22;
// let hasLiscence = true;
// if(age >= 18 && hasLiscence){
//     console.log("You can drive");
// } else {
//     console.log("You cannot drive");
// }

// let x = 15;
// let y = 45
// let z = 30;
// if (x > y && x > z){
//     console.log("x is the greatest");
// } else if (y > x && y > z){
//     console.log("y is the greatest");
// } else {
//     console.log("z is the greatest");
// }

// let ageCheck = 25;
// let passport = true;
// let visa = false;
// if (ageCheck >= 18) {
//     if (passport) {
//         if (visa) {
//             console.log("you can travel");
//         } else {
//             console.log("you need a visa to travel");
//         }
//     } else {
//         console.log("you need a passport to travel");
//     }
// } else {
//     console.log("you are not old enough to travel");
// }

welcome(); //calling the function before its declaration, this is possible due to hoisting in JavaScript

function welcome() {
    console.log("hello, everyone!");
}

something(); // calling the var function before its declaration, this will result in an error 
                // because var functions are not hoisted like function declarations
var something = function() {
    console.log("something");
}
something();

// hosting is a JavaScript mechanism where variables and function declarations are moved to the top 
// of their containing scope during the compilation phase. This allows you to use functions and variables 
// before they are declared in the code. However, only function declarations are fully hoisted, 
// while variable declarations using var are hoisted but not initialized until their actual declaration 
// is reached in the code.

//only var declarations are hoisted, let and const are not hoisted.

console.log(name);
var name = "daniel";

console.log(city);
let city = "New York";

console.log(country);
const country = "USA";

function welcome() {
    console.log("halu");
}
welcome();

welcome2(); // this will work because function declarations are hoisted
function welcome2() {
    console.log("hi again");
}

var something;
something(); // this will result in an error because var functions are not hoisted like function declarations
something = function() {
    console.log("something");
}

