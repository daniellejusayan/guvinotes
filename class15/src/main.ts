// primitive data types..
//string, number, boolean, null, bigint, symbol, null, undefined

//special types..
//any, unknown, never, void

//collection types
//array tuple, enum, object

//string.. used to store the text
let name: string = "Danielle";
let city: string = "Manila";
let country: string = "Philippines";
console.log(name);
console.log(city);
console.log(country);

let studentName: string = "Peter";
console.log(studentName);

let movie: string = "The Matrix";
console.log(movie);

//number.. used to store integers and decimal values

let age: number = 25;
let price: number = 99.99;
let temperature: number = 36.5;
console.log(age);
console.log(price);
console.log(temperature);


// boolean stores only true or false

let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

let isEmailVerified: boolean = false;
let paymentCompleted: boolean = true;
let courseCompleted: boolean = false;
let productAvailable: boolean = true;

console.log(isAdmin, isEmailVerified, paymentCompleted, courseCompleted, productAvailable);

// null... represents an initial empty value or absence of value
let selectedStudent: null = null;
console.log(selectedStudent);

//undefined.. variable declared but not assigned
let phoneNumber: undefined = undefined;
console.log(phoneNumber);

//bigint.. store large integers
let population: bigint = 7800000000n; // 7.8 billion
console.log(population);