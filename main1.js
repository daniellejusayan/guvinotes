let user = {
    name: "venkat",
    city: "bangalore"
};

console.log(user);

//convert js object to json object .. stringify
let jsonData = JSON.stringify(user);
console.log(jsonData);

//sending data to server
//storing in local storage
//api requests

let jsonData1 = ' { "name": "dani", "city": "manila" } ';
console.log(jsonData1);

//convert json to js object.. parse
let user1 = JSON.parse(jsonData1);
console.log(user1);

let data = {
    company: {
        name: "guvi",
        students: [
            {name: "ram"},
            {name: "dani"}
        ]
    }
}

console.log(data.company.name); // this will print "guvi"
console.log(data.company.students[0].name); // this will print "ram"
console.log(data.company.students[1].name); // this will print "dani"

let product = {
    id: 101,
    title: "iphone",
    price: 99999,
    inStock: true,
    color: ["black", "white", "rose gold"],
    specifications: {
        ram: "8GB",
        storage: "256GB"
    },
    reviews: [
        { 
            user: "ram",
            rating: 5,
        }
    ]
}

console.log(product.title);
console.log(product.color[1]);
console.log(product.reviews[0].user);
console.log(product.specifications.ram); 