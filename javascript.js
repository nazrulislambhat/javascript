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

//IIFE Immediately Invoked Function Expression

// (() => {
//   const button = document.createElement('button');
//   button.innerText = 'Buy Now';
//   document.body.appendChild(button);
// })();

// const bankAccount = (function () {
//   let balance = 0;

//   return {
//     deposit(ammount) {
//       balance += ammount;
//       console.log('Deposited:', ammount, 'New Balance:', balance);
//     },
//     withdraw(ammount) {
//       if (ammount > balance) {
//         console.log('❌ Insufficient balance!');
//         return;
//       }
//       balance -= ammount;
//       console.log('Withdrawn:', ammount, 'New Balance:', balance);
//     },
//     getBalance() {
//       console.log('Current Balance:', balance);
//       return balance;
//     },
//   };
// })();

// bankAccount.deposit(100);
// bankAccount.withdraw(30);
// bankAccount.getBalance();

// array.map((cb, i, arr) => { });
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };
const nums = [1, 2, 3, 4, 5];
if (!Array.prototype.map) {
  Array.prototype.myMap = function (cb) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
      newArray.push(cb(this[i], i, this));
    }
    return newArray;
  };
  const mulTwoo = nums.myMap((num) => {
    return num * 2;
  });
  console.log(mulTwoo);
}
if (Array.prototype.map) {
  console.log('Supported');
}
if (!Array.prototype.map) {
  console.log('Not Supported');
}
//original map
const mulTwo = nums.map((num) => {
  return num * 2;
});
//custom map

console.log(mulTwo);
