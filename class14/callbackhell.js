// //book ride
// function bookRide(callback) {
//   console.log(`Ride is Booked`);
//   callback({
//     rideID: 123,
//   });
// }

// //find driver

// function findDriver(rideID, callback) {
//   console.log(`Finding driver`);

//   callback({
//     driverName: "Sam",
//   });
// }

// //driver accepts
// function driverAccepts(driver, callback) {
//   console.log(`Driver Accepted`);
//   callback(`Enjoy the ride with ${driver.driverName}`);
// }

// bookRide(function (ride) {
//   findDriver(ride.rideID, function (driver) {
//     driverAccepts(driver, function (message) {
//       console.log(message);
//     });
//   });
// });

// promise chaining.. one promise into another promise

function bookRide() {
  console.log(`Ride is booked`);
  return Promise.resolve({
    rideID: 123,
  });
}

//find the driver
function findDriver(rideID) {
  console.log(`Finding the driver`);
  return Promise.resolve({
    driverName: "Sam",
  });
}

//driver accepts
function driverAccepts(driver) {
  console.log(`Driver Accepted`);
  return Promise.resolve(`Enjoy the ride with ${driver.driverName}`);
}

// bookride(function (ride) {
//   findDriver(ride.rideID, function (driver) {
//     driverAccepts(driver, function (message) {
//       console.log(message);
//     });
//   });
// });


bookRide()
    .then((ride) => {
        return findDriver(ride.rideID);
    })
    .then((driver) => {
        return driverAccepts(driver);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
    .finally(() => {
        console.log(`Ride Completed`);
    });