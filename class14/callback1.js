// customer places the order 
function placeOrder(callback) {
    setTimeout(() => {
        console.log(`Order placed successfully`);
        callback();
    }, 1000);
}

// restaurant accepts the order
function acceptOrder(callback) {
    setTimeout(() => {
        console.log(`Restaurant accepts order`);
        callback();
    }, 1000);
}

//restaurant prepares the food
function prepareFood(callback) {
    setTimeout(() => {
        console.log(`Restaurant is preparing your food`)
        callback();
    }, 1000);
}

function assignDeliveryPartner(callback) {
    setTimeout(() => {
        console.log(`Delivery partner is assigned`);
        callback();
    }, 1000);
}

function pickupFood(callback) {
    setTimeout(() => {
        console.log(`Food has been picked up`);
        callback();
    }, 1000);
}

function deliverFood() {
    setTimeout(() => {
        console.log(`Food has been delivered`);
    }, 1000);
}

placeOrder(function() {
    acceptOrder(function() {
        prepareFood(function() {
            assignDeliveryPartner(function() {
                pickupFood(function() {
                    deliverFood();
                })
            })
        })
    })
})

//callback hell should be avoided
placeOrder(() => {
    acceptOrder(() => {
        prepareFood(() => {
            assignDeliveryPartner(() => {
                pickupFood(() => {
                    deliverFood();
                })
            })
        })
    })
})

// states in js
// 1. pending state - when the promise is create and is waiting for the result
// 2. fulfilled state - when the promise is resolved successfully
// 3. rejected state - when the promise is rejected due to some error
