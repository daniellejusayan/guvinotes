import { add, subtract, PI, firstName, lastName, age} from "./main.js";
import {mobile as phone} from "./main.js";

import greetMain from "./greet.js";
console.log(add(5, 10));
console.log(subtract(10, 5));
console.log(PI);
console.log(firstName);
console.log(lastName);
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);
console.log(`My phone is ${phone}`);

console.log(greetMain("Danielle"));