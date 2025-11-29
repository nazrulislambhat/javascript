// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('User Loaded');
//     }, 5000);
//   });
// }

// function getPosts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Posts Shared');
//     }, 20);
//   });
// }

// function getComments() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Comments Loaded');
//     }, 6000);
//   });
// }

// const userPromise = getUser();
// const postsPromise = getPosts();
// const commentsPromise = getComments();
// // userPromise.then((user) => console.log(user));
// // postsPromise.then((posts) => console.log(posts));
// // commentsPromise.then((comments) => console.log(comments));

// Promise.any([userPromise, postsPromise, commentsPromise])
//   .then((results) => {
//     console.log(results, 'Results');
//   })
//   .catch((error) => console.error(error, 'Error'));
// function volume(length, width, height) {
//   return length * width * height;
// }

// // Curried version
// function curriedVolume(length) {
//   return function (width) {
//     return function (height) {
//       return length * width * height;
//     };
//   };
// }

// const volumeWithLength5 = curriedVolume(5);
// const volumeWithLength5AndWidth4 = volumeWithLength5(4);
// const result = volumeWithLength5AndWidth4(3);
// console.log(result);

https://gemini.google.com/app/1fadaeeaf7ed9dba