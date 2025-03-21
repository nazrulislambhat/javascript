// //A promise in js  represents a value that may be available now or in future or never, Its an object that serves as a place hilder for the result of an async operation -- like fetching data from an api, reading a file or waiting for a timer.

// //a promise can have 3 states, pending, fulfilled, rejected

// //once a promise is settled (fulfilled or rejected) it become immutable it cannot change state again.

// //Creating a promise
// // const myPromise = new Promise((resolve, reject) => {
// //   let success = true;

// //   if (success) {
// //     resolve('resolved');
// //   } else {
// //     reject('failed');
// //   }
// // });
// //comsuming a promise
// //we handle promise using .then() .catch() .finally()
// // myPromise
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log('Completed');
// //   });

// //simulating an api call
// // function fetchUserData() {
// //   return new Promise((resolve, reject) => {
// //     console.log('Fetching data.....');

// //     setTimeout(() => {
// //       let success = Math.random() > 0.5;
// //       if (success) resolve({ name: 'Nazrul', age: 25 });
// //       else reject('failed to fetch any data');
// //     }, 4000);
// //   });
// // }
// // fetchUserData()
// //   .then((data) => console.log('Data fetched', data))
// //   .catch((error) => console.log('Error', error))
// //   .finally(() => console.log('Completed'));

// //Promise all
// // const promise1 = Promise.resolve(10);
// // const promise2 = new Promise((resolve) =>
// //   setTimeout(resolve(20), 2000, 'resolved')
// // );
// // const promise3 = Promise.reject('Error');

// // Promise.all([promise1, promise2, promise3])
// //   .then((results) => console.log(results))
// //   .catch((error) => console.log('Failed', error));
// // //promise.race

// // const fast = new Promise((reject) => setTimeout(() => reject('fast'), 1000));
// // const slow = new Promise((resolve) => setTimeout(() => resolve('slow'), 3000));

// // Promise.race([fast, slow]).then((result) => console.log(result.Promise));

// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     console.log('Fetching user data....');

//     setTimeout(() => {
//       const users = {
//         1: { name: 'Nazrul', age: 22 },
//         2: { name: 'Islam', age: 33 },
//       };
//       const user = users[userId];
//       if (user) resolve(user);
//       else reject('User Not Found');
//     }, 2000);
//   });
// }

// function processUserData(user) {
//   return new Promise((resolve) => {
//     console.log('Processing User Data...');
//     setTimeout(() => {
//       user.isActive = true;
//       resolve(user);
//     }, 1000);
//   });
// }

// fetchUserData(2)
//   .then((user) => {
//     console.log('User Fetched', user);
//     return processUserData(user);
//   })
//   .then((processedUser) => {
//     console.log('User Processed', processedUser);
//   })
//   .catch((error) => {
//     console.log('Error:', error);
//   });


