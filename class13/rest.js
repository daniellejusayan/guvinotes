// Rest operator (...) colelts multiple values into a single array or object

function add(a,b) {
    return a + b;
}

console.log(add(10, 20, 30, 40, 50)); // Output: 30, because only first 2 arguments are considered
// if have indefinite number of values to add, use rest operator

function add(...numbers) {
    let total = 0;
    for(let num of numbers) {
        total += num
    }
    return total;
}

console.log(add(10, 20, 30, 40, 50)); // Output: 150, because all arguments are considered
console.log(add(1, 2, 3)); // Output: 6, because all arguments are considered

function display(failMark, ...passMarks) {
    console.log("Fail Mark: " + failMark); 
    console.log("Pass Marks: " + passMarks);
}

display(35, 50, 60, 70);

const userDetails = {
    id: 101,
    name: "Dani",
    pincode: 600001,
    city: "Manila",
    state: "Luzon",
    country: "Philippines"
}

const {name, ...addressDetails} = userDetails // destructuring assignment with rest operator
console.log(name);

function createProduct(productName, price, ...details) {
    console.log("Product Name: " + productName);
    console.log(addressDetails);
    console.log("Price: " + price);
    console.log("Details: " + details);

}

createProduct(
    "Laptop",
    50000,
    "Manila Caloocan Valenzuela St.",
    "DELL",
    ["16GB RAM"],
    {warranty: "1 year"}
)