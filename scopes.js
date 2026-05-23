// Scopes in JavaScript: Global scope, Function scope, Block scope
// where the variables can be accessed in the code
// controls the visibility and lifetime of the variables in the code

// 1: global scope: is accessible from anywhere in the code, 
// variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code. 
// However, it's generally recommended to avoid using global variables as they can lead to conflicts and make the code harder to 
// maintain.
 // a variable declared outside of all the functions and blocks
// 2. function scope:
// 3. block scope:
// 4. lexical scope:
// 5. local scope: 


let websitename = "HCL GUVI";

function showWebsite() {
    console.log(websitename); // this will work because websitename is in the global scope and can be accessed inside the function
}
showWebsite();
console.log(websitename); // this will also work because websitename is in the global scope and can be accessed outside the function


//function scope: variables declared inside the fucntion can only be accessed by that function, not outside

function hello() {
    let name = "Daniel"; //function scope / local scope, this variable can only be accessed inside the hello function
    console.log(name);
}
hello(); // this will work because name is declared inside the function and can be accessed by the function
 console.log(name); // this will result in an error because name is not accessible outside the function

 //block scopes: variables declared using let and const inside the block { } (if, for, while, switch)

 if(true) {
    let value = 100;
    console.log(value);
 }

 console.log(value); // this will result in an error because value is not accessible outside the block

 // lexical scope / closure/ inner functions.. inner functions can access the variables from the outer functions, 
 // but the outer functions cannot access the variables from the inner functions

 function outer() { //outer function
    let outerVar = "I am outer var"; //var of the outer function
    function inner() {
        console.log(outerVar); // this will work because inner function can access the variables from the outer function
    }
    inner(); // calling the inner function inside the outer function
 }
    outer(); // calling the outer function to execute the code

    let country = "india"; // global variable

    function first() {
        let state = "TamilNadu"; // variable of the first function
        function second() {
            let city = "Chennai"; // variable of the second function
            console.log(country); // this will work because second function can access the global variable
            console.log(state); 
            console.log(city); 
    }
    first(); // calling the first function to execute the code
}