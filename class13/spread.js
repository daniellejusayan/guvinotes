// spread operator (...) is used to expand an array or iterable into individual elements

// // array copy 
// const array1 = [10, 20, 30, 40, 50]; //original array
// const array2 = array1; // copy by reference, both array1 and array2 point to the same array in memory

// // push the value
// array2.push(100);
// console.log(array1); // Output: [10, 20, 30, 40, 50, 100] // original array is also changed
// console.log(array2); // Output: [10, 20, 30, 40, 50, 100] // copy array is also changed

//spread operator

const array1 = [10, 20, 30, 40, 50]; //original array
const array2 = [...array2]; // copy by value, both array1 and array2 point to different arrays

// push the value
array2.push(100);
console.log(array1); // Output: [10, 20, 30, 40, 50] // original array is not changed
console.log(array2); // Output: [10, 20, 30, 40, 50, 100] // copy array is changed

//merging two arrays
const frontend = ["HTML", "CSS"];
const backend = ["NodeJS", "ExpressJS"];

// const skills = frontend.concat(backend); // merging two arrays using concat method
const skills = [...frontend, ...backend]; // merging two arrays using spread operator
console.log(skills); // Output: ["HTML", "CSS", "NodeJS", "ExpressJS"]

// adding elements
const numbers = [2, 3, 4];
//numbers.unshift(1); // adding element at the beginning
const newNumbers =[1, ...numbers]; // adding element at the beginning using spread operator
console.log(newNumbers); // Output: [1, 2, 3, 4]

// splitting a string to chars
const fname = "DANI";
// const chars = fname.split("");
const chars = [...fname]; // splitting a string to chars using spread operator
console.log(chars); // Output: ["D", "A", "N", "I"]

// change 1 element in object
const student = {
    name: "Dani",
    role: "Student"
}
// const student2 = student; // copy by reference, both student and student2 point to the same object in memory
const student2 = {...student}; // copy by value, both student and student2 point to different objects in memory
student2.name = "Daniella"; // changing the name property of student2 object
student2.role = "Teacher"; // changing the role property of student2 object
console.log(student); // Output: { name: "Dani", role: "Student" } // student object is not changed
console.log(student2); // Output: { name: "Daniella", role: "Teacher" } // student object is not changed

//merge 2 objects
const state = {
    name: "Manila",
}

const country = {
    countryName: "Philipines"
}

//const address = Object.assign({}, state, country); // merging two objects using Object.assign method
const address = {...state, ...country}; // merging two objects using spread operator

const user = {
    name: "Dani",
    city: "Manila"
}

const updatedUser = {
    ...user,
    name: "Patricia", // changing the name property of user object
    country: "Malaysia" // adding a new property to user object
}
console.log(updatedUser); // Output: { name: "Patricia", city: "Manila", country: "Malaysia" }
console.log(user); // Output: { name: "Dani", city: "Manila" } // user object is not changed