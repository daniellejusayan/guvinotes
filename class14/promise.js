// pending state.. neither resolved() nor rejected()... new Promise() as an inbuilt JS Object

// creating the promise

const promise1 = new Promise((resolve, reject) => {

})

console.log(promise1); // Promise { <pending> }

// promise is created, operation is waiting.. no success / no failure.. state remains the pending state

// in promise, for the success state... we need to use .then syntax

const promise2 = new Promise((resolve, reject) => {

    let letsGoToMovie = false;
    let letsGoToRestaurant = true;

    if(letsGoToMovie) {
        resolve(`Going to the movie`);
    } else if(letsGoToRestaurant) {
        resolve(`Going to the restaurant`);
    } else {
        reject(`Not going anywhere`);
    }
})

promise2.then((result) => {
    console.log(result);
}).then((result2) => {
    console.log(result2);
}).catch(error => {
    console.log(error);
})
