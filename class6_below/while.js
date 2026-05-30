// while loop is used when we want to repeat a block of code again and again until the condition becomes false
// checks the conditions first before executing the code block

let i = 1;
while (i <=5){
    console.log(i); //print the number
    i++;
}

// do while is used when you want to run the code at least 1 time even if the condition is false

let balance = 1000;
let choice; 1;

do {
    console.log("choose your option, savings, current, fixed");
    choice
} while (choice > 0);

let pin = 1234;
let enteredPin = 1111;
let attempts = 1;

while (enteredPin !== pin && attempts < 3) {
    console.log("wrong pin, try again");
    enteredPin = 1234;
    attempts++;
}
console.log("you are logged in");