//array destructuring allows us to extract values from an array and store them in variables easily

const mobiles = ["OPPO", "Samsung", "iPhone", "Vivo", "Realme"];

// const mobile1 = mobiles[0];
// const mobile2 = mobiles[1];
// const mobile3 = mobiles[2];
const [firstFew, ...last] = mobiles; // destructuring assignment
console.log(firstFew);
console.log(last); // rest operator collects the remaining values into an array

// i wanted to get only firs two values
const names = ["Dani", "Ken", "Kenji", "Daniella", "Daniel"];

//const one = names[0];
//const two = names[1];

const [one, two] = names; // destructuring assignment

console.log(one);
console.log(two);

//default values
const usernames = ["Dani"];
// const name = usernames[0];
// const role = usernames[1] || "Developer"; // if usernames[1] is undefined, role will be "Developer"

const [name, role = "Developer"] = usernames; // destructuring assignment with default value
console.log(name, role);

const order = [
    "ORD123",
    "Chicken Biryani",
    299,
    "delivered"
];

// const orderId = order[0];
// const itemName = order[1];
// const amount = order[2];
// const deliveryStatus = order[3];


const [orderId, itemName, amount, deliveryStatus] = order;

console.log(orderId);
console.log(itemName);
console.log(amount);
console.log(deliveryStatus);
