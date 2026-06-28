// any.. can store any type

// let value: any = "Dani";
// value = 100;
// value = true;
// value = [];
// value = {};

// console.log(value);

let apiResponse: any;
apiResponse = {
    id:1,
    name: "Steve"
}
console.log(apiResponse);
apiResponse = "Server Down";
console.log(apiResponse);

//unknown.. safer version of any
let value1: unknown = "hello";
//typecheck
if(typeof value1 === "string") {
    console.log(value1.toUpperCase());
}

let apiResponse1: unknown = "success";
if(typeof apiResponse1 === "string") {
    console.log(apiResponse1.toUpperCase());
}
console.log(apiResponse1);

//void.. used when a function returns nothing..

function printName(): void {
    console.log("Sharmaine");
}
printName();

function sendNotification(): void {
    console.log("Notification sent");
}
sendNotification();

// arrays.. store multiple of the same type

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

let names: string[] = ["Danielle", "Sharmaine", "Peter"];
console.log(names);

// tuple...fixed number of elements with fixed types
let student: [string, number] = ["Danielle", 25];
console.log(student);

// stores the structured data
let employee: object = {
    id: 101,
    name: "Sarah"
}
console.log(employee);

let name1: string[] = ["Danielle", "Sharmaine", "Peter"];
let name2: string[] = ["Sarah", "John", "Mike"];
let allNames: string[] = [...name1, ...name2]; // spread operator
console.log(allNames);
let allNames1: string[][] = [name1, name2]; // 2D array
console.log(allNames1);