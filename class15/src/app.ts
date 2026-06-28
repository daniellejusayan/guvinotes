let name: string = "Danielle";
name = '100';
console.log(name);

let age: number = 25 // static typing..
// age = "twenty five"; // dynamic typing.. this will throw an error because age is of type number
// age = true; // this will also throw an error because age is of type number
// age = {}; // this will also throw an error because age is of type number
console.log(age);

function add(a:number, b:number): number {
    return a + b;
}

console.log(add(10, 40)); // 50
// console.log(add(true, false)); // this will throw an error because the function add expects two numbers as arguments

// let age1: number = "eighteen"; // this will throw an error because age1 is of type number
// if(age1 > 18) {
//     console.log("eligible"_;)
// }
