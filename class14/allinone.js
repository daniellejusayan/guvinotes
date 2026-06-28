// login user ... fetch products.. add product to the cart.. make the payment

// function login(callback) {
//     console.log(`User is logged in`);
//     callback();
// }

// function getProducts(callback) {
//     console.log(`Products are loaded`);
//     callback();
// }

// function addToCart(callback) {
//     console.log(`Product added to cart`);
//     callback();
// }

// function makePayment(callback) {
//     console.log(`Payment is done`);
//     callback();
// }

// login(function() {
//     getProducts(function() {
//         addToCart(function() {
//             makePayment(function() {
//                 console.log(`All steps completed successfully`);
//             })
//         })
//     })
// })

//promise chaining
function login() {
    return Promise.resolve(`User is logged in`);
}

function getProducts() {
    return Promise.resolve(`Products are loaded`);
}

function addToCart() {
    return Promise.resolve(`Product added to cart`);
}

function makePayment() {
    return Promise.resolve(`Payment is done`);
}

// // promise chaining
// login()
// .then(function(message) {
//     console.log(message);
//     return getProducts();
// }).then(function(message) {
//     console.log(message);
//     return addToCart();
// }).then (function(message) {
//     console.log(message);
//     console.log(`Order completed`)
// }).catch(function(error) {
//     console.log(error);
// })

async function placeOrder() {
    try {
        let loginResult = await login();
        console.log(loginResult);

        let productResult = await getProducts();
        console.log(productResult);

        let cartResult = await addToCart();
        console.log(cartResult);

        let paymentResult = await makePayment();
        console.log(paymentResult);

        console.log(`Order Completed`);
    } catch(error) {
        console.log(error);
    }
}

placeOrder();