// in js, json data is usually converted
//into objects or array of objects

let students = {
    name: "dani",
    age: 20,
    course: "CE"
};

//iterate JSON object user for..in loop
//user to iterate object keys and values

//loop through object
for(let key in students) {
    console.log(key, ":", students[key]);
}

let products = {
    name: "iphone",
    price: 50000,
    inStock: true,
    color: ["black", "white", "rose gold"],
    delivery: "COD"
}

for(let key in products) {
    console.log(key, " => ", products[key]);
}

//iterate array of JSON objet user for...of loop
let users = [
    {name: "ram", age: 20, city: "bangalore"},
    {name: "dani", age: 22, city: "manila"},
    {name: "john", age: 25, city: "dehli"}
]

//loop through array of objects
for(let user of users) {
    console.log(user.name, "-", user.age, "-",user.city);
}