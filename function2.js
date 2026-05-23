//anonymous function : function without name
// anonymouse function ususally pressends inside function expression, callbacks, timers, event handlers

const add = function /*no name */(a, b) {
    return a + b;
}
console.log(add(5, 10)); // this will work and return 15

//inbuilt js function 
setTimeout(function() {
    console.log("backend api called after 2 seconds");
}, 2000); // this will call the function after 2 seconds

setInterval(function() {
    console.log("running repeatedly every 3 seconds")
}, 3000);// this will call the function repeatedly every 3 seconds

// IIFE (Immediately Invoke Function Expression) : a function that is defined and immediately invoked (called) at the same time
// function that is created immediately and executes immediately after creation
// self executing function

function welcome() {
    console.log("welcome all");
}
welcome(); // this will call the welcome function and print "welcome all"

(function() {
    console.log("Welcome all")
}) (); // this will create an IIFE and immediately invoke it, printing "Welcome all"

// IIFE with parameters
(function(name) {
    console.log("Welcome, " + name + "!");
}) ("Venkat"); // this will create an IIFE with a parameter and immediately invoke it, printing "Welcome, Venkat!"

(function(a, b) {
    console.log(a + b);
}) (5, 10); // this will create an IIFE with two parameters and immediately invoke it, printing 15

//return value from IIFE
const result = (function(a,b) {
    return a + b;
})(100, 20);
console.log(result); // this will create an IIFE that returns the sum of a and b, and assign it to the variable result, printing 120

let user = "admin";
(function() {
let user = "user";
console.log(user); // this will print "user" because the variable user inside the IIFE is different from the global variable user
})();
console.log(user); // this will print "admin" because the global variable user is not affected by the variable user inside the IIFE

//global pollution is when we have too many global variables leading to conflicts and bugs


//price per km = 12
//base fare = 25
//distance = 10
//total fare = base fare + (price per km * distance)

function calculateFare(distance, pricePerKM) {
    const baseFare = 25;
    let totalFare = baseFare + (pricePerKM * distance);
    console.log("Distance: " + distance + " km");
    console.log("Price per km: " + pricePerKM);
    console.log("Total Fare: " + totalFare);
} 
calculateFare(10, 12); // this will call the calculateFare function with distance 10 and price per km 12, printing the distance, price per km and total fare