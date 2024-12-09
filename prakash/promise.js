// Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  const success = true;
  setTimeout(() => {
    if (!success) {
      reject("Operation failed");
    }
    resolve("Operation completed successfully");
  }, 2000);
});

myPromise
  .then((result) => {
    console.log("Success:", result); // Success: Operation completed
  })
  .catch((error) => {
    console.error("Error:", error); // Will be called if the promis eis rejected
  });
