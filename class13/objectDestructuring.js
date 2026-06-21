const student = {
    name: "Dani",
    age: 25,
    role: "Student"
}

// const name = student.name;
// const age = student.age;
// const role = student.role;

const {name:studentName, age:studentAge, role:studentRole, city = "Manila"} = student; // destructuring assignment

console.log(studentName); // Output: Dani
console.log(studentAge);
console.log(studentRole);
console.log(city); // Output: Manila, because city property is not present in student object, so it takes the default value