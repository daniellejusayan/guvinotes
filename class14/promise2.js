function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    //check the credentials
    if (username === "admin" && password === "12345") {
      resolve(`Login Successful`);
    } else {
      reject(`Login Failed`);
    }
  });
}

loginUser("admin", "12345")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Unable to login, please enter the valid credentials");
  })
  .finally(() => {
    console.log(`Login Completed`);
  });
