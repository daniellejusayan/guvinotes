// arrow functions => function expressions

function greet() {
    return "hello";
}

console.log(greet()); // "hello"

//arrow function ... assigning the function to a variable and used lamda expression
const greet1 = () => {
    return "hello";
};
console.log(greet1()); // "hello"

// no parameters
function sayHi() {
    return "Hi";
}
console.log(sayHi()); // "Hi"

const sayHi = () => "Hi";
console.log(sayHi()); // "Hi"

function getUser() {
return {
    id: 101,
    name: "Daniel"
}
}
console.log(getUser()); // { id: 101, name: 'Daniel' }

const getUser = () => ({
    id: 101,
    name: "Daniel"
});
console.log(getUser()); // { id: 101, name: 'Daniel' }

const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];
// const student = students.find(function(student) {
//     return student.id === 2;
// })

const student = students.find(student => student.id === 2); // arrow function with implicit return
console.log(student); // { id: 2, name: 'Bob' }

const mobiles = ["oppo", "samsung", "iphone"];
// mobiles.forEach(function(mobile) {
//     console.log(mobile);
// });
mobiles.forEach(mobile => console.log(mobile)); // arrow function with implicit return

// this..

// const user = {
//     name: "Dani",
//     showName: function() {
//         //console.log(name) // undefined, because this.name is not used, it will look for name variable in the global scope
//         console.log(this.name); // Dani, because this refers to the user object
//     }
// }

const user = {
    name: "Dani",
    showName: function () {
        setTimeout(() => {
            console.log(this.name); 
        }, 1000);
    }
}

const user = {
    name: "Dani",
    showName: function () {
        setTimeout(() => {
            console.log(this.name); 
        }, 1000);
    }
}


// Dani, because arrow functions do not have their own this, they inherit this from the parent scope, which is the user object in this case
user.showName(); // Dani, because arrow functions do not have their own this, they inherit this from the parent scope, which is the user object in this case