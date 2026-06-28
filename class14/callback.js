// callback function that is passed as an argument to another function and executed later after some task is completed

// a callback function that is passed into another function and called inside that function when needed.

//without callback

//main function

function sendNotification() {
    console.log("Notification sent to customer");
}

function sendSMS() {
    console.log("SMS sent to customer");
}

function updateOrderStatus() {
    console.log("Order status changed to READY")
}

function generateInvoice() {
    console.log("Invoice generated");
}

function prepareFood() {
    console.log("Preparing food...");
    //actions are hardcoded and executed in a sequence, which is not flexible and cannot be changed easily
    sendNotification();
    sendSMS();
    updateOrderStatus();
    generateInvoice();
    //sendEmail();
}

// call the main function
prepareFood();

// with callback we can make our prepareFood function as reusable


// main function but reusable
// function prepareFood(callback) {
//     console.log("Preparing food...");
//     //actions are hardcoded and executed in a sequence, which is not flexible and cannot be changed easily
//     callback();
// }
// prepareFood(sendNotification);
// prepareFood(sendSMS);
// prepareFood(updateOrderStatus);
// prepareFood(generateInvoice);