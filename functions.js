// function in javascript is the reusable block of code that performs a specific task.
// used to reuse the code, avoid repetition, and organize the logic

// function functionName(parameters)

// 1. Function Declaration: A normal function created using function keyword, it can be called before its declaration (hoisting)
function welcome() {
    console.log("hello, everyone!");
}
welcome();

//with Parameters:
function sayHi(name) {
    console.log("welcome, " ,name, "!"); 
}
sayHi("Alice");

function add(num1, num2) {
    return num1 + num2;
}
let result = add(5, 10);
console.log(result);

//even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

// find largest 
function findLargest(num1, num2) {
    if (num1 > num2) {
        return "num1 is larger";
    } else {
        return "num2 is larger";
    }
}

function printNumbers() {
    for(let i = 1; i <=5; i++) {
        console.log(i);
    }
}
printNumbers();

// function calling into another function

function greet(name) {
    return "Hello, " + name + "!";
}
function displayMessage(message) {
    let message = greet("Venkat"); // another function
    console.log(message);
}
displayMessage();

// default parameter

function multiply(a,b) {
    return a * b;
}
console.log(multiply(5, 10)); // this will work and return 50
console.log(multiply(5)); // this will return NaN because b is undefined
console.log(multiply()); // this will return NaN because both a and b are undefined

//login validation

function validateLogin(username, password) {
    if (username === "admin" && password === "password123") {
        return "Login Successful";
    } else {
        return "Invalid Credentials";
    }
}

console.log(validateLogin("admin", "password123")); // this will return "Login Successful"
console.log(validateLogin("user", "password123")); // this will return "Invalid Credentials"

// 2. Function Expression - storing a function inside a variable, (not hoisted)
// functions are treated like values so we can assign them to varables

const add = function (a,b) {
    return a + b;
}
console.log(add(5, 10)); // this will work and return 15

//even odd

const checkEvenOdd = function(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const welcomeUser = function(name) {
    return "Welcome, " + name + "!";
}
welcomeUser("Venkat");

//shopping cart
const calculateTotal = function(price, quantity) {
    let total = price * quantity;
    return total;
}
console.log(calculateTotal(100, 5)); // this will return 500

//