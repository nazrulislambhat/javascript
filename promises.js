// // //CREATE A PROMISE
// // const promise = new Promise((resolve, reject) => {
// //   let success = true;

// //   if (success) {
// //     resolve('resolved');
// //   } else {
// //     reject('rejected');
// //   }
// // });

// // //CONSUME A PROMISE

// // promise
// //   .then((message) => console.log(message))
// //   .catch((error) => console.log(error))
// //   .finally(() => console.log('finakky '));

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //const user = null;
//       const user = { name: 'Abdullah', age: 2 };
//       if (!user) {
//         reject(new Error('User not found'));
//       } else {
//         resolve(user);
//       }
//     }, 2000);
//   });
// }

// // getUser()
// //   .then((user) => {
// //     console.log('inside .then');
// //     console.log('1', user.name);
// //     //throw new Error('Something went wrong');
// //     console.log('2', user.name);
// //     return user;
// //   })
// //   .then((user) => {
// //     console.log('age', user.age);
// //   })
// //   .catch((err) => {
// //     console.log('this', err.message);
// //   });

// // getUser()
// //   .then((user) => user.name)
// //   .then((name) => name.toUpperCase())
// //   .then((name) => {
// //     console.log(name);
// //   });

// // waits for ALL promises to resolve
// // if ANY one rejects → immediately goes to .catch

// // const p1 = Promise.resolve('User ✅');
// // const p2 = Promise.resolve('Posts ✅');
// // //const p2 = Promise.reject(new Error('Failed To Fetch'));
// // const p3 = Promise.resolve('Comments ✅');

// // Promise.all([p1, p2, p3])
// //   .then((results) => {
// //     console.log(results); // ['User ✅', 'Posts ✅', 'Comments ✅']
// //   })
// //   .catch((err) => {
// //     console.log(err.message); // if ANY fails, jumps here
// //   });

// // waits for ALL promises to finish (resolve or reject)
// // never goes to .catch — gives you the result of each

// const p2 = Promise.reject(new Error('Posts failed ❌'));
// const p3 = Promise.resolve('Comments ✅');
// const p1 = Promise.resolve('User ✅');
// Promise.any([p1, p2, p3]).then((results) => {
//   console.log(results);
//   // [
//   //   { status: 'fulfilled', value: 'User ✅' },
//   //   { status: 'rejected',  reason: Error('Posts failed ❌') },
//   //   { status: 'fulfilled', value: 'Comments ✅' }
//   // ]

//   // you can filter the successes and failures yourself
//   // const succeeded = results.filter((r) => r.status === 'fulfilled');
//   // const failed = results.filter((r) => r.status === 'rejected');
// });
// const p1 = new Promise((resolve) => setTimeout(() => resolve('one'), 1000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve('two'), 5000));
// const p3 = new Promise((resolve) => setTimeout(() => resolve('three'), 10000));

// Promise.all([p1, p2, p3])
//   .then((results) => console.log(results)) // ['one', 'two', 'three']
//   .catch((err) => console.log(err.message));

// const p1 = new Promise((resolve) => setTimeout(() => resolve('one'), 1000));
// const p2 = new Promise((_, reject) =>
//   setTimeout(() => reject(new Error('failed!')), 5000),
// );
// const p3 = new Promise((resolve) => setTimeout(() => resolve('three'), 8000));

// Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));

// const p1 = new Promise((resolve) => setTimeout(() => resolve('slow 🐢'), 3000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve('fast ⚡'), 500));
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve('medium 🚶'), 1500),
// );

// Promise.race([p1, p2, p3])
//   .then((result) => console.log(result)) // 'fast ⚡'
//   .catch((err) => console.log(err.message));

// const p1 = new Promise((_, reject) =>
//   setTimeout(() => reject(new Error('p1 failed')), 500),
// );
// const p2 = new Promise((_, reject) =>
//   setTimeout(() => reject(new Error('p2 failed')), 300),
// );
// const p3 = new Promise((resolve) =>
//   setTimeout(() => resolve('p3 worked ✅'), 800),
// );

// Promise.any([p1, p2, p3])
//   .then((result) => console.log(result)) // 'p3 worked ✅'
//   .catch((err) => console.log('All failed:', err.errors));

const p1 = new Promise((_, reject) =>
  setTimeout(() => reject(new Error('p1 failed')), 300),
);
const p2 = new Promise((_, reject) =>
  setTimeout(() => reject(new Error('p2 failed')), 500),
);
const p3 = new Promise((_, reject) =>
  setTimeout(() => reject(new Error('p3 failed')), 800),
);

Promise.any([p1, p2, p3])
  .then((result) => console.log(result)) // ❌ never runs
  .catch((err) => {
    console.log(err.constructor.name); // "AggregateError" — not a regular Error!
    console.log(err.errors); // [Error: p1 failed, Error: p2 failed, Error: p3 failed]
  });
