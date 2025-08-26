// // // //A promise in js  represents a value that may be available now or in future or never, Its an object that serves as a place hilder for the result of an async operation -- like fetching data from an api, reading a file or waiting for a timer.

// // // //a promise can have 3 states, pending, fulfilled, rejected

// // // //once a promise is settled (fulfilled or rejected) it become immutable it cannot change state again.

// // // //Creating a promise
// // // // const myPromise = new Promise((resolve, reject) => {
// // // //   let success = true;

// // // //   if (success) {
// // // //     resolve('resolved');
// // // //   } else {
// // // //     reject('failed');
// // // //   }
// // // // });
// // // //comsuming a promise
// // // //we handle promise using .then() .catch() .finally()
// // // // myPromise
// // // //   .then((result) => {
// // // //     console.log(result);
// // // //   })
// // // //   .catch((error) => {
// // // //     console.log(error);
// // // //   })
// // // //   .finally(() => {
// // // //     console.log('Completed');
// // // //   });

// // // //simulating an api call
// // // // function fetchUserData() {
// // // //   return new Promise((resolve, reject) => {
// // // //     console.log('Fetching data.....');

// // // //     setTimeout(() => {
// // // //       let success = Math.random() > 0.5;
// // // //       if (success) resolve({ name: 'Nazrul', age: 25 });
// // // //       else reject('failed to fetch any data');
// // // //     }, 4000);
// // // //   });
// // // // }
// // // // fetchUserData()
// // // //   .then((data) => console.log('Data fetched', data))
// // // //   .catch((error) => console.log('Error', error))
// // // //   .finally(() => console.log('Completed'));

// // // //Promise all
// // // // const promise1 = Promise.resolve(10);
// // // // const promise2 = new Promise((resolve) =>
// // // //   setTimeout(resolve(20), 2000, 'resolved')
// // // // );
// // // // const promise3 = Promise.reject('Error');

// // // // Promise.all([promise1, promise2, promise3])
// // // //   .then((results) => console.log(results))
// // // //   .catch((error) => console.log('Failed', error));
// // // // //promise.race

// // // // const fast = new Promise((reject) => setTimeout(() => reject('fast'), 1000));
// // // // const slow = new Promise((resolve) => setTimeout(() => resolve('slow'), 3000));

// // // // Promise.race([fast, slow]).then((result) => console.log(result.Promise));

// // // function fetchUserData(userId) {
// // //   return new Promise((resolve, reject) => {
// // //     console.log('Fetching user data....');

// // //     setTimeout(() => {
// // //       const users = {
// // //         1: { name: 'Nazrul', age: 22 },
// // //         2: { name: 'Islam', age: 33 },
// // //       };
// // //       const user = users[userId];
// // //       if (user) resolve(user);
// // //       else reject('User Not Found');
// // //     }, 2000);
// // //   });
// // // }

// // // function processUserData(user) {
// // //   return new Promise((resolve) => {
// // //     console.log('Processing User Data...');
// // //     setTimeout(() => {
// // //       user.isActive = true;
// // //       resolve(user);
// // //     }, 1000);
// // //   });
// // // }

// // // fetchUserData(2)
// // //   .then((user) => {
// // //     console.log('User Fetched', user);
// // //     return processUserData(user);
// // //   })
// // //   .then((processedUser) => {
// // //     console.log('User Processed', processedUser);
// // //   })
// // //   .catch((error) => {
// // //     console.log('Error:', error);
// // //   });

// // // const cart = ['shoe', 'phone', 'clock', 'gum'];

// // // //consuming
// // // createOrder(cart)
// // //   .then(function (orderId) {
// // //     console.log('Order Created', orderId);
// // //     return orderId;
// // //   })
// // //   .catch(function (err) {
// // //     console.log(err.message);
// // //   })
// // //   .then(function (orderId) {
// // //     return proceedToPayment(orderId);
// // //   })
// // //   .then(function (paymentInfo) {
// // //     console.log(paymentInfo);
// // //   });

// // // //creating & returning the promise
// // // function createOrder(cart) {
// // //   const pr = new Promise(function (resolve, reject) {
// // //     if (!validateCart(cart)) {
// // //       const err = new Error('Cart is not valid');
// // //       reject(err);
// // //     }
// // //     const orderId = '123343';
// // //     if (orderId) {
// // //       setTimeout(function () {
// // //         resolve(orderId);
// // //       }, 5000);
// // //     }
// // //   });
// // //   return pr;
// // // }
// // // function validateCart(cart) {
// // //   return false;
// // // }
// // // function proceedToPayment(orderId) {
// // //   return new Promise(function (resolve, reject) {
// // //     resolve('Payment Successful');
// // //   });
// // // }
// // const cart = ['shoe', 'phone', 'clock', 'gum'];

// // //consuming
// // function createOrder(cart) {
// //   return new Promise((resolve, reject) => {
// //     console.log('Creating Order.....');
// //     setTimeout(() => {
// //       if (!cart || cart.length === 0) {
// //         reject('Cart is empty! Cannot create order');
// //       } else {
// //         const orderId = '12345';
// //         console.log(`Order Created: ${orderId}`);
// //         resolve(orderId);
// //       }
// //     }, 1000);
// //   });
// // }
// // function proceedToPayment(orderId) {
// //   return new Promise((resolve, reject) => {
// //     console.log('Processing Payment.....');
// //     setTimeout(() => {
// //       if (!orderId) {
// //         reject('Invalid Order ID');
// //       } else {
// //         const paymentInfo = { status: 'Success', amount: 100 };
// //         console.log('Payment Successful');
// //         resolve(paymentInfo);
// //       }
// //     }, 1000);
// //   });
// // }

// // function showOrderSummary(paymentInfo) {
// //   return new Promise((resolve, reject) => {
// //     console.log('Generating Order Summary');
// //     setTimeout(() => {
// //       if (!paymentInfo || paymentInfo.status !== 'Success') {
// //         reject('Payment Failed! Cannot Show Summary');
// //       } else {
// //         const summary = `Order Total: $${paymentInfo.amount}`;
// //         console.log('Order Summary:', summary);
// //         resolve(summary);
// //       }
// //     }, 1000);
// //   });
// // }

// // function updateWalletBalance(summary) {
// //   return new Promise((resolve, reject) => {
// //     console.log('Updating Wallet Balance....');

// //     setTimeout(() => {
// //       if (!summary) {
// //         reject('No Summary Balance');
// //       } else {
// //         console.log('Wallet Updated: $100');
// //         resolve('wallet updated successfully');
// //       }
// //     }, 1000);
// //   });
// // }

// // createOrder(cart).then((orderId) =>
// //   proceedToPayment(orderId)
// //     .then((paymentInfo) => showOrderSummary(paymentInfo))
// //     .then((summary) => updateWalletBalance(summary))
// //     .then((finalMessage) => console.log(finalMessage))
// //     .catch((error) => console.error('Error:', error))
// //     .finally(() => console.log('Order Finished'))
// // );



// const cart = ['shoe', 'phone', 'clock', 'gum'];

// // Simulate random failure
// function randomFail() {
//   return Math.random() < 0.3; // 30% chance to fail
// }

// // Mock function to simulate order creation
// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     console.log('Creating order...');
//     setTimeout(() => {
//       if (!cart || cart.length === 0 || randomFail()) {
//         reject('Cart is empty or order creation failed!');
//       } else {
//         const orderId = 'ORD12345';
//         console.log(`Order created: ${orderId}`);
//         resolve(orderId);
//       }
//     }, 1000);
//   });
// }

// // Mock function to simulate payment
// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     console.log('Processing payment...');
//     setTimeout(() => {
//       if (!orderId || randomFail()) {
//         reject('Payment failed! Please try again.');
//       } else {
//         const paymentInfo = { status: 'success', amount: 250 };
//         console.log('Payment successful.');
//         resolve(paymentInfo);
//       }
//     }, 1000);
//   });
// }

// // Mock function to show order summary
// function showOrderSummary(paymentInfo) {
//   return new Promise((resolve, reject) => {
//     console.log('Generating order summary...');
//     setTimeout(() => {
//       if (!paymentInfo || paymentInfo.status !== 'success' || randomFail()) {
//         reject('Failed to generate order summary.');
//       } else {
//         const summary = `Order total: $${paymentInfo.amount}`;
//         console.log('Order Summary:', summary);
//         resolve(summary);
//       }
//     }, 1000);
//   });
// }

// // Mock function to update wallet balance
// function updateWalletBalance(summary) {
//   return new Promise((resolve, reject) => {
//     console.log('Updating wallet balance...');
//     setTimeout(() => {
//       if (!summary || randomFail()) {
//         reject('Failed to update wallet balance.');
//       } else {
//         console.log('Wallet updated: -$250');
//         resolve('Wallet updated successfully!');
//       }
//     }, 1000);
//   });
// }

// // Promise chaining with error handling
// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then((summary) => updateWalletBalance(summary))
//   .then((finalMessage) => console.log(finalMessage))
//   .catch((err) => console.error('Error:', err))
//   .finally(() => console.log('Order process finished.'));
