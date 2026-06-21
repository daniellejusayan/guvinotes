// template literals

let name = "RAM";
// let message = "Hello " + name;
console.log(message); // Output: Hello RAM
let message = `Hello ${name}`; // template literals with backticks and ${} for variable interpolation
console.log(message); // Output: Hello RAM

let firstName = "Dani";
let lastName = "Smith";
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: Dani Smith

let a = 10;
let b = 20;
console.log("sum is " + (a + b)); // Output: sum is 30
console.log(`Sum is ${a + b}`); // Output: Sum is 30

let studentName = "Alice";
let course = "MERN Stack";

// let result = "Student Name: " + studentName + " Course: " + course;
let result = `Student Name: ${ studentName} Course: ${course}`; 
console.log(result); // Output: Student Name: Alice Course: MERN Stack

// let address = 
// "1st main cross \n" + 
// "near arch\n" +
// "tamilnadu\n" +
// "india";
// console.log(address); // Output: 1st main cross etc

let address = `
1st main cross
near arch
tamilnadu
india
`
console.log(address); // Output: 1st main cross etc


