// // // // function getUser() {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //       resolve('User Loaded');
// // // //     }, 5000);
// // // //   });
// // // // }

// // // // function getPosts() {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //       reject('Posts Shared');
// // // //     }, 20);
// // // //   });
// // // // }

// // // // function getComments() {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //       resolve('Comments Loaded');
// // // //     }, 6000);
// // // //   });
// // // // }

// // // // const userPromise = getUser();
// // // // const postsPromise = getPosts();
// // // // const commentsPromise = getComments();
// // // // // userPromise.then((user) => console.log(user));
// // // // // postsPromise.then((posts) => console.log(posts));
// // // // // commentsPromise.then((comments) => console.log(comments));

// // // // Promise.any([userPromise, postsPromise, commentsPromise])
// // // //   .then((results) => {
// // // //     console.log(results, 'Results');
// // // //   })
// // // //   .catch((error) => console.error(error, 'Error'));
// // // // function volume(length, width, height) {
// // // //   return length * width * height;
// // // // }

// // // // // Curried version
// // // // function curriedVolume(length) {
// // // //   return function (width) {
// // // //     return function (height) {
// // // //       return length * width * height;
// // // //     };
// // // //   };
// // // // }

// // // // const volumeWithLength5 = curriedVolume(5);
// // // // const volumeWithLength5AndWidth4 = volumeWithLength5(4);
// // // // const result = volumeWithLength5AndWidth4(3);

// // // // IIFE Immediately Invoked Function Expression

// // // // (() => {
// // // //   const button = document.createElement('button');
// // // //   button.innerText = 'Buy Now';
// // // //   document.body.appendChild(button);
// // // // })();

// // // // const bankAccount = (function () {
// // // //   let balance = 0;

// // // //   return {
// // // //     deposit(ammount) {
// // // //       balance += ammount;
// // // //       console.log('Deposited:', ammount, 'New Balance:', balance);
// // // //     },
// // // //     withdraw(ammount) {
// // // //       if (ammount > balance) {
// // // //         console.log('❌ Insufficient balance!');
// // // //         return;
// // // //       }
// // // //       balance -= ammount;
// // // //       console.log('Withdrawn:', ammount, 'New Balance:', balance);
// // // //     },
// // // //     getBalance() {
// // // //       console.log('Current Balance:', balance);
// // // //       return balance;
// // // //     },
// // // //   };
// // // // })();

// // // // bankAccount.deposit(100);
// // // // bankAccount.withdraw(30);
// // // // bankAccount.getBalance();

// // // // array.map((cb, i, arr) => { });
// // // // Array.prototype.myMap = function (cb) {
// // // //   let temp = [];
// // // //   for (let i = 0; i < this.length; i++) {
// // // //     temp.push(cb(this[i], i, this));
// // // //   }
// // // //   return temp;
// // // // };
// // // // const num = [
// // // //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// // // // ];
// // // // console.log('Original Array', num);
// // // // //original map
// // // // const mulTwo = num.map((num) => {
// // // //   return num * 2;
// // // // });
// // // // console.log('Original Map', mulTwo);

// // // // //custom map

// // // // Array.prototype.myMap = function (cb) {
// // // //   let temp = [];
// // // //   for (let i = 0; i < this.length; i++) {
// // // //     temp.push(cb(this[i], i, this));
// // // //   }
// // // //   return temp;
// // // // };

// // // // const customTwo = num.myMap((num) => {
// // // //   return num * 2;
// // // // });
// // // // console.log('Custom Polyfill Map', customTwo);

// // // // //default Filter

// // // // const filteredNum = num.filter((num) => {
// // // //   return num % 2 == 0;
// // // // });

// // // // console.log('Original Filter', filteredNum);

// // // // //custom filter

// // // // Array.prototype.myFilter = function (cb) {
// // // //   let tempFil = [];
// // // //   for (let i = 0; i < this.length; i++) {
// // // //     if (cb(this[i], i, this)) tempFil.push(this[i]);
// // // //   }
// // // //   return tempFil;
// // // // };

// // // // const filteredNumTwo = num.myFilter((num) => {
// // // //   return num % 2 == 0;
// // // // });
// // // // console.log('Custom Polyfill Filter', filteredNumTwo);

// // // // const reduce = num.reduce((acc, curr, i, arr) => {
// // // //   return acc + curr;
// // // // });

// // // // console.log('Original Reduce Gives Sum', reduce);

// // // // function debounce(fn, delay) {
// // // //   let timer;

// // // //   return function (...args) {
// // // //     const context = this;

// // // //     clearTimeout(timer);

// // // //     timer = setTimeout(() => {
// // // //       fn.apply(context, args);
// // // //     }, delay);
// // // //   };
// // // // }

// // // // // ✅ Simulated API call
// // // // function fakeApiCall(query) {
// // // //   const log = document.getElementById('log');
// // // //   log.innerText =
// // // //     'API called with: ' + query + ' at ' + new Date().toLocaleTimeString();
// // // //   console.log('API called with:', query);
// // // // }

// // // // // ✅ Debounced version of API call
// // // // const debouncedSearch = debounce(fakeApiCall, 600);

// // // // // ✅ Input listener
// // // // const input = document.getElementById('search');

// // // // input.addEventListener('input', function (e) {
// // // //   const value = e.target.value;
// // // //   debouncedSearch(value);
// // // // });
// // // // function debounce(fn, delay) {
// // // //   let timer = null;
// // // //   let hasRun = false;

// // // //   return function (value) {
// // // //     if (!hasRun) {
// // // //       fn(value);
// // // //       hasRun = true;
// // // //     }
// // // //     clearTimeout(timer);

// // // //     timer = setTimeout(() => {
// // // //       fn(value); // ✅ API CALL HERE
// // // //       hasRun = false;
// // // //     }, delay);
// // // //   };
// // // // }

// // // // function fakeApiCall(query) {
// // // //   console.log('API Called', query);
// // // // }

// // // // const deboundedAPI = debounce(fakeApiCall, 1000);

// // // // document.getElementById('search').addEventListener('input', (e) => {
// // // //   console.log('Typing.....');
// // // //   deboundedAPI(e.target.value);
// // // // });
// // // // const products = [
// // // //   'iPhone',
// // // //   'Samsung Galaxy',
// // // //   'Macbook Pro',
// // // //   'nazrul',
// // // //   'bna',
// // // //   'sana',
// // // //   'Asus Laptop',
// // // //   'Dell Monitor',
// // // //   'HP Mouse',
// // // //   'Logitech Keyboard',
// // // //   'AirPods',
// // // //   'Bluetooth Speaker',
// // // //   'Power Bank',
// // // // ];
// // // // function fakeApiCall(query) {
// // // //   const statusEl = document.getElementById('status');
// // // //   const resultsEl = document.getElementById('results');

// // // //   statusEl.innerText = 'API Called for: "' + query + '"';

// // // //   // Filter logic
// // // //   const filtered = products.filter((item) =>
// // // //     item.toLowerCase().includes(query.toLowerCase())
// // // //   );

// // // //   resultsEl.innerHTML = filtered.map((item) => `<li>${item}</li>`).join('');
// // // // }

// // // // // ✅ Leading + Trailing Debounce
// // // // function debounce(fn, delay) {
// // // //   let timer = null;
// // // //   let hasRun = false;

// // // //   return function (value) {
// // // //     // ✅ Leading call
// // // //     if (!hasRun) {
// // // //       fn(value);
// // // //       hasRun = true;
// // // //     }

// // // //     clearTimeout(timer);

// // // //     // ✅ Trailing call
// // // //     timer = setTimeout(() => {
// // // //       fn(value);
// // // //       hasRun = false;
// // // //     }, delay);
// // // //   };
// // // // }

// // // // const debouncedSearch = debounce(fakeApiCall, 600);

// // // // const input = document.getElementById('search');
// // // // const statusEl = document.getElementById('status');

// // // // input.addEventListener('input', (e) => {
// // // //   const value = e.target.value;

// // // //   statusEl.innerText = 'Typing...';
// // // //   debouncedSearch(value);
// // // // });

// // // // const fn = debounce(() => {
// // // //   console.log('API Called2');
// // // // }, 1000);

// // // // fn();
// // // // fn();
// // // // fn();

// // // // function greet(name) {
// // // //   console.log(`Hello ${name} My Name Is ${this.name}`);
// // // // }
// // // // let person = {
// // // //   name: 'This',
// // // // };

// // // // greet.call(person, 'Don');

// // // // function add(a, b) {
// // // //   return a + b;
// // // // }
// // // // let numbers = [3, 2];
// // // // console.log(add.apply(null, numbers));

// // // // let person2 = {
// // // //   name: 'Jhe',
// // // //   greet: function () {
// // // //     console.log(`Hello, my name is ${this.name}.`);
// // // //   },
// // // // };

// // // // let greetPerson = person2.greet.bind(person);
// // // // greetPerson();

// // // function greet(name) {
// // //   console.log(`Hello ${name} I am ${this.name}`);
// // // }
// // // const person = {
// // //   name: 'Don',
// // // };
// // // greet.call(person, 'Nazrul');

// // // function add(a, b) {
// // //   return a + b;
// // // }
// // // const nums = [2, 2];

// // // console.log(add.apply(null, nums));

// // // const person3 = {
// // //   name: 'Jhe',
// // //   greet() {
// // //     console.log(`Hello ${this.name}`);
// // //   },
// // // };

// // // const greetLater = person3.greet.bind(person3);
// // // greetLater();
// // // function greet() {
// // //   console.log(this.message);
// // // }

// // // const obj1 = { message: 'Hello from obj1' };
// // // const obj2 = { message: 'Hello from obj2' };

// // // const bound = greet.bind(obj1);

// // // bound.call(obj2);
// // function greet() {
// //   console.log(this.message);
// // }

// // const obj1 = { message: 'Hello from obj1' };
// // const obj2 = { message: 'Hello from obj2' };

// // const bound = greet.bind(obj1);

// // bound.call(obj2);
// // const obj = {
// //   value: 42,
// //   getValue() {
// //     return this.value;
// //   },
// // };

// // const fn = obj.getValue;
// // console.log(fn.bind(obj)());
// //polyfill for call, apply & bind

// let car1 = {
//   color: 'Red',
//   company: 'Audi',
// };

// function purchaseCar(currency, price) {
//   console.log(
//     `Hi, I have purchased ${this.company} of color ${this.color} for ${currency}${price}`
//   );
// }

// // Function.prototype.myCall = function (context = {}, ...args) {
// //   if (typeof this !== 'function') {
// //     throw new Error('Not Callable');
// //   }

// // Function.prototype.myBind = function (context = {}, ...args) {
// //   if (typeof this !== 'function') {
// //     throw new Error('Not Callable Cannot be bound');
// //   }

// //   context.fn = this;
// //   return function (...newArgs) {
// //     return context.fn(...args, ...newArgs);
// //   };
// // };

// // // purchaseCar.myCall(car1, '$', 100344);
// // const newFunction = purchaseCar.myBind(car1);
// // console.log(newFunction('$', 100));
// function once(fn) {
//   let called = false;

//   return function (...args) {
//     if (called) return;
//     called = true;
//     return fn.apply(this.args);
//   };
// }

// let i = 0;

// let clickButton = document.getElementById('click-button');

// clickButton.addEventListener(
//   'click',
//   function () {
//     i += 1;
//     console.log(i);
//   },
//   { once: true }
// );

// const init = once(() => console.log('hjavs'));

// init();

function once(fn) {
  let ran = false;

  return function (...args) {
    if (!ran) {
      ran = false;
      return fn.apply(this, args);
    }
  };
}

const processPayment = () => {
  const message = document.getElementById('message');
  message.innerText = 'Processing Payment...Done!';
  console.log('Payment API Called');
};

const payOnce = once(processPayment);

const btn = document.getElementById('pay-button');
btn.addEventListener('click', () => {
  payOnce();
  btn.disabled = true;
  btn.innerText = 'Paid';
});
