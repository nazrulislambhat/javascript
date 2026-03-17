// // // // // // //CREATE A PROMISE
// // // // // // const promise = new Promise((resolve, reject) => {
// // // // // //   let success = true;

// // // // // //   if (success) {
// // // // // //     resolve('resolved');
// // // // // //   } else {
// // // // // //     reject('rejected');
// // // // // //   }
// // // // // // });

// // // // // // //CONSUME A PROMISE

// // // // // // promise
// // // // // //   .then((message) => console.log(message))
// // // // // //   .catch((error) => console.log(error))
// // // // // //   .finally(() => console.log('finakky '));

// // // // // function getUser() {
// // // // //   return new Promise((resolve, reject) => {
// // // // //     setTimeout(() => {
// // // // //       //const user = null;
// // // // //       const user = { name: 'Abdullah', age: 2 };
// // // // //       if (!user) {
// // // // //         reject(new Error('User not found'));
// // // // //       } else {
// // // // //         resolve(user);
// // // // //       }
// // // // //     }, 2000);
// // // // //   });
// // // // // }

// // // // // // getUser()
// // // // // //   .then((user) => {
// // // // // //     console.log('inside .then');
// // // // // //     console.log('1', user.name);
// // // // // //     //throw new Error('Something went wrong');
// // // // // //     console.log('2', user.name);
// // // // // //     return user;
// // // // // //   })
// // // // // //   .then((user) => {
// // // // // //     console.log('age', user.age);
// // // // // //   })
// // // // // //   .catch((err) => {
// // // // // //     console.log('this', err.message);
// // // // // //   });

// // // // // // getUser()
// // // // // //   .then((user) => user.name)
// // // // // //   .then((name) => name.toUpperCase())
// // // // // //   .then((name) => {
// // // // // //     console.log(name);
// // // // // //   });

// // // // // // waits for ALL promises to resolve
// // // // // // if ANY one rejects → immediately goes to .catch

// // // // // // const p1 = Promise.resolve('User ✅');
// // // // // // const p2 = Promise.resolve('Posts ✅');
// // // // // // //const p2 = Promise.reject(new Error('Failed To Fetch'));
// // // // // // const p3 = Promise.resolve('Comments ✅');

// // // // // // Promise.all([p1, p2, p3])
// // // // // //   .then((results) => {
// // // // // //     console.log(results); // ['User ✅', 'Posts ✅', 'Comments ✅']
// // // // // //   })
// // // // // //   .catch((err) => {
// // // // // //     console.log(err.message); // if ANY fails, jumps here
// // // // // //   });

// // // // // // waits for ALL promises to finish (resolve or reject)
// // // // // // never goes to .catch — gives you the result of each

// // // // // const p2 = Promise.reject(new Error('Posts failed ❌'));
// // // // // const p3 = Promise.resolve('Comments ✅');
// // // // // const p1 = Promise.resolve('User ✅');
// // // // // Promise.any([p1, p2, p3]).then((results) => {
// // // // //   console.log(results);
// // // // //   // [
// // // // //   //   { status: 'fulfilled', value: 'User ✅' },
// // // // //   //   { status: 'rejected',  reason: Error('Posts failed ❌') },
// // // // //   //   { status: 'fulfilled', value: 'Comments ✅' }
// // // // //   // ]

// // // // //   // you can filter the successes and failures yourself
// // // // //   // const succeeded = results.filter((r) => r.status === 'fulfilled');
// // // // //   // const failed = results.filter((r) => r.status === 'rejected');
// // // // // });
// // // // // const p1 = new Promise((resolve) => setTimeout(() => resolve('one'), 1000));
// // // // // const p2 = new Promise((resolve) => setTimeout(() => resolve('two'), 5000));
// // // // // const p3 = new Promise((resolve) => setTimeout(() => resolve('three'), 10000));

// // // // // Promise.all([p1, p2, p3])
// // // // //   .then((results) => console.log(results)) // ['one', 'two', 'three']
// // // // //   .catch((err) => console.log(err.message));

// // // // // const p1 = new Promise((resolve) => setTimeout(() => resolve('one'), 1000));
// // // // // const p2 = new Promise((_, reject) =>
// // // // //   setTimeout(() => reject(new Error('failed!')), 5000),
// // // // // );
// // // // // const p3 = new Promise((resolve) => setTimeout(() => resolve('three'), 8000));

// // // // // Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));

// // // // // const p1 = new Promise((resolve) => setTimeout(() => resolve('slow 🐢'), 3000));
// // // // // const p2 = new Promise((resolve) => setTimeout(() => resolve('fast ⚡'), 500));
// // // // // const p3 = new Promise((resolve) =>
// // // // //   setTimeout(() => resolve('medium 🚶'), 1500),
// // // // // );

// // // // // Promise.race([p1, p2, p3])
// // // // //   .then((result) => console.log(result)) // 'fast ⚡'
// // // // //   .catch((err) => console.log(err.message));

// // // // // const p1 = new Promise((_, reject) =>
// // // // //   setTimeout(() => reject(new Error('p1 failed')), 500),
// // // // // );
// // // // // const p2 = new Promise((_, reject) =>
// // // // //   setTimeout(() => reject(new Error('p2 failed')), 300),
// // // // // );
// // // // // const p3 = new Promise((resolve) =>
// // // // //   setTimeout(() => resolve('p3 worked ✅'), 800),
// // // // // );

// // // // // Promise.any([p1, p2, p3])
// // // // //   .then((result) => console.log(result)) // 'p3 worked ✅'
// // // // //   .catch((err) => console.log('All failed:', err.errors));

// // // // // const p1 = new Promise((_, reject) =>
// // // // //   setTimeout(() => reject(new Error('p1 failed')), 300),
// // // // // );
// // // // // const p2 = new Promise((_, reject) =>
// // // // //   setTimeout(() => reject(new Error('p2 failed')), 500),
// // // // // );
// // // // // const p3 = new Promise((_, reject) =>
// // // // //   setTimeout(() => reject(new Error('p3 failed')), 800),
// // // // // );

// // // // // Promise.any([p1, p2, p3])
// // // // //   .then((result) => console.log(result)) // ❌ never runs
// // // // //   .catch((err) => {
// // // // //     console.log(err.constructor.name); // "AggregateError" — not a regular Error!
// // // // //     console.log(err.errors); // [Error: p1 failed, Error: p2 failed, Error: p3 failed]
// // // // //   });

// // // // // function createIterator(arr) {
// // // // //   let index = 0;
// // // // //   return {
// // // // //     next() {
// // // // //       if (index < arr.length) {
// // // // //         return { value: arr[index++], done: false };
// // // // //       } else {
// // // // //         return { value: undefined, done: true };
// // // // //       }
// // // // //     },
// // // // //   };
// // // // // }

// // // // // const iterator = createIterator([10, 20, 30, 40]);

// // // // // console.log(iterator.next());
// // // // // console.log(iterator.next());
// // // // // console.log(iterator.next());
// // // // // console.log(iterator.next());
// // // // // console.log(iterator.next());

// // // // function createPaginator(data, pageSize) {
// // // //   let page = 0;
// // // //   return {
// // // //     next() {
// // // //       const start = page * pageSize;
// // // //       const end = start + pageSize;
// // // //       const chunk = data.slice(start, end);
// // // //       page++;

// // // //       if (chunk.length > 0) {
// // // //         return { value: chunk, done: false };
// // // //       } else {
// // // //         return { value: undefined, done: true };
// // // //       }
// // // //     },
// // // //   };
// // // // }

// // // // const users = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// // // // const pager = createPaginator(users, 2);

// // // // console.log(pager.next().value);
// // // // console.log(pager.next().value);
// // // // console.log(pager.next().value);
// // // // console.log(pager.next().value);
// // // // console.log(pager.next().value);

// // // // // with a normal function you'd need an array or counter outside
// // // // // generator handles it cleanly

// // // // function* idGenerator() {
// // // //   let id = 1;
// // // //   while (true) {
// // // //     // infinite loop — but safe because of yield
// // // //     yield id++;
// // // //   }
// // // // }

// // // // const generateId = idGenerator();

// // // // console.log(generateId.next().value); // 1
// // // // console.log(generateId.next().value); // 2
// // // // console.log(generateId.next().value); // 3
// // // // // can call this forever — never runs out
// // // // await pauses until the Promise resolves — then gives you the value
// // // function getUser() {
// // //   const user = new Promise((resolve) =>
// // //     setTimeout(() => resolve({ name: 'Abdullah', age: 20 }), 2000),
// // //   );
// // //   console.log(user); // waits 2s then prints { name: 'Abdullah', age: 20 }
// // // }

// // // getUser();
// // // function getUser() {
// // //   return new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       //resolve({ name: 'abdullah' });
// // //       reject(new Error('User not found!')); // simulating failure
// // //     }, 1500);
// // //   });
// // // }

// // // async function load() {
// // //   const user = await getUser(); // if this rejects → jumps to catch
// // //   console.log(user.name); // ❌ never runs
// // // }

// // // load();
// // function getUser() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => resolve({ name: 'Abdullah', id: 1 }), 1000);
// //   });
// // }

// // function getPosts(userId) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => reject(new Error('server down!')));
// //   });
// // }

// // async function load() {
// //   try {
// //     console.log('step 1 — fetching user...');
// //     const user = await getUser();
// //     console.log('step 2 — got user:', user.name);

// //     console.log('step 3 — fetching posts...');
// //     const posts = await getPosts(user.id);
// //     console.log('step 4 — got posts:', posts);
// //   } catch (err) {
// //     console.log('something failed:', err.message);
// //   } finally {
// //     console.log('step 5 — always runs');
// //   }
// // }

// // load();
// /*
// Interview Question 1:
// Write an async function called fetchUserData that:

// Calls getUser() which returns a Promise
// Waits for the result
// Logs the user's name
// Handles any errors that might occur

// You don't need to write getUser() itself — just assume it exists and returns a Promise that resolves with { name: 'Abdullah', age: 20 }
// */

// // function getUser() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve({ name: 'Abdullah', age: 20 });
// //       //reject(new Error('User Not Found 404'))
// //     }, 2000);
// //   });
// // }

// // async function fetchUserData() {
// //   try {
// //     const user = await getUser();
// //     console.log('User Found', user.name);
// //   } catch (err) {
// //     console.log(err.message);
// //   } finally {
// //     console.log('I AM DONE');
// //   }
// // }

// // fetchUserData();
// // getUser();

// /*
// Interview Question 2:
// You have three functions — getUser(), getPosts(), and getNotifications() — all return Promises and each takes 2 seconds.
// Write an async function that fetches all three.
// There are two ways to do it — write both and explain the difference between them.
// */

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: 'Abdullah' });
//     }, 2000);
//   });
// }

// function getPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(['p1', 'p2', 'p3']);
//     }, 2000);
//   });
// }

// function getNotifications(postId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(['N1', 'N2', 'N3']);
//     }, 2000);
//   });
// }

// async function getAllData() {
//   try {
//     const user = await getUser();
//     console.log(user.name);

//     const posts = await getPosts();
//     console.log(posts);

//     const notifications = await getNotifications();
//     console.log(notifications);
//   } catch (err) {
//     console.log(err.message);
//   } finally {
//     console.log('Done');
//   }
// }

// // async function getAllData() {
// //   try {
// //     const [user, posts, notifications] = await Promise.all([
// //       getUser(),
// //       getPosts(),
// //       getNotifications(),
// //     ]);
// //     console.log(user, posts, notifications);
// //   } catch (err) {
// //     console.log(err.message);
// //   } finally {
// //     console.log('Done');
// //   }
// // }

// getAllData();
// // async function fetchData() {
// //   console.log('A');
// //   const user = await getUser(); // takes 2 seconds
// //   console.log('B');
// //   const posts = await getPosts(); // takes 1 second
// //   console.log('C');
// // }

// // fetchData();
// // console.log('D');
