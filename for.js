// for loop is used when we want to repeat a block of condition multiple times until the condition becomes false

for (initialization; condition; increment/decrement){
    // code to be executed
}

// init = starting value
// condition = loop that runs until condition is false
// increment/decrement = change the value of a variable in each iteration

let result = "";
for (let i = 1; i <= 5; i++){
    result += i + " "; // result = result + i
}
//print even numbers
for (let i = 2; i <= 10; i += 2){
    console.log(i);
}

//reverse counting
for (let i = 10; i >= 1; i--){
    console.log(i);
}

let sum = 0;
for (let i = 1; i<=100; i++){
    sum += i;
}
console.log(sum);

let mobiles = ["oppo", "vivo", "samsung", "iphone"];
for (let i = 0; i < mobiles.length; i++){
    console.log(mobiles[i]);
}

//print even numbers
for(let i =  2; i <= 20; i+=2) {
    console.log(i);
}

for(let i = 5; i >=1; i--){
    console.log(i);
}

let sum = 0;
for (let i = 1; i < 100; i++){
    sum+=i;
    console.log(sum);
}

let mobiles = ["oppo", "vivo", "samsung", "iphone"];
for (let i = 0; i < mobiles.length; i++){ //index 
    console.log(mobiles[i]); //value
}
