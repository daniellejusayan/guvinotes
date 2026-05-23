// //break -> exit loop
// //continue -> skip current round but keep the loop running

// //break is used to stop the loop immediately and come out of the loop

// for(let i = 1; i<=5; i++) {
//     if (i===3) {
//         break;
//     }
// }

// //using array 
// let products = ['mouse', 'keyboard', 'laptop'];
// if(products[i] === 'keyboard') {
//     console.log("keyboard is found");
//     break;
// }

// //continue is used to skip the current iteration and mve to the next loop
// for(let i = 1; i <=5; i++) {
//     if (i === 3) {
//         continue; // skip the current iteration when i is 3
//     }
//     console.log(i);
// }

// let students = ["Daniel", "Absent", "John", "Alice", "Bob"];
// for(let i = 0; i < students.length; i++) {
//     if(students[i] === "Absent") {
//         continue;
//     }
//     console.log(students[i]);
// }

for (let i = 1; i <=10; i++) {
    if (i === 3) {
        continue;
    }
    if (i >= 8) {
        break;
    }
    console.log(i);
}node 