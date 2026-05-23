//using Object.keys() method to get the keys of an object
let product = {
    name: "iphone",
    color:"black",
    price: 50000,
    inStock: true
}

//get all the keys
let keys = Object.keys(product);
console.log(keys); // this will print an array of keys ["name", "color", "price", "inStock"]

//loop keys
keys.forEach(key => {
    console.log(key, " => ", product[key]);
});

keys.forEach(function(key) {
    console.log(key, " => ", product[key]);
})

//return all the object values

let person = {
    name: "dani",
    age: 20,
    city: "manila",
    island: "luzon"
}

//get the values
let values = Object.values(person);
console.log(values); // this will print an array of values ["dani", 20, "manila", "luzon"]

//loop values
values.forEach(value => {
    console.log(value);
})

values.forEach(function(value) {
    console.log(value);
});

//return both key and values

let laptop = {
    brand: "dell",
    RAM: "8GB",
    price: 50000,
}

let entries = Object.entries(laptop);
console.log(entries); // this will print an array of key-value pairs [["brand", "dell"], ["RAM", "8GB"], ["price", 50000]]

//loop key-value pairs
for(let[key,value] of entries) {
    console.log(key, " => ", value);
}

//foreach used for the arrays
let students = [
    {name: "ram", age: 20, city: "bangalore"},
    {name: "dani", age: 22, city: "manila"},
    {name: "john", age: 25, city: "dehli"}
]

students.forEach(s => {
    console.log(s.name, "-", s.age, "-", s.city);
})

students.forEach(student => {
    console.log(student.name, "-", student.age, "-", student.city);
});

students.forEach(function(student) {
    console.log(student.name, "-", student.age, "-", student.city);
});

let school = {
    schoolName: "GUVI",
    students: [
        {name: "ram",
            marks: {
                html: 90,
                css: 85
            }
        },
        {name: "sita",
            marks: {
                html: 99,
                css: 100
            }
        }
    ]
}

school.students.forEach(s => {
    console.log(s.name);
    Object.entries(s.marks).forEach(([sub,mark]) => {
        console.log(sub, " => ", mark);
    })
})

//loop through students
school.students.forEach(student => {
    console.log("Student: ", student.name);
    
    //loop through marks of each student
    for(let subject in student.marks) {
        console.log(subject, " => ", student.marks[subject]);
    }
})