// // // //JS maps

// // // // const fruits = new Map([
// // // //   ['apples', 500],
// // // //   ['bananas', 300],
// // // //   ['oranges', 200],
// // // // ]);

// // // // fruits.set('strawberry', 400);
// // // // fruits.set('apples', 100);
// // // // fruits.set('bananas', 200);
// // // // fruits.set('oranges', 300);

// // // // console.log(fruits);
// // // // console.log(fruits.get('apples'));
// // // // console.log(fruits.get(200));
// // // // console.log(typeof fruits);
// // // // fruits.delete('apples');
// // // // console.log(fruits);
// // // // console.log(fruits.has('apples'));
// // // // console.log(fruits.get('bananas'));
// // // // console.log(fruits.keys());
// // // // console.log(fruits.values());

// // // //JS sets
// // // // const letters = new Set(['a', 'b', 'c', 'a']);
// // // // console.log(letters.has('a'));
// // // // console.log(letters);
// // // // let name = 'nazrul';
// // // // // Number(name);
// // // // // console.log(typeof name);

// // // // // let y = '4';
// // // // // console.log(typeof y);
// // // // // let x = +y;
// // // // // console.log(typeof x);
// // // // let nameNum = +name;

// // // // console.log(typeof name); //string
// // // // console.log(name); //nazrul

// // // // console.log(typeof nameNum); //number
// // // // console.log(nameNum); //NaN

// // // // let number = 1703;
// // // // console.log(typeof number);
// // // // console.log(number + 1);

// // // // let numberStr = number.toString();
// // // // console.log(typeof numberStr);
// // // // console.log(numberStr + 1);

// // // // let date = new Date();
// // // // console.log(date.getTime());
// // // // console.log(3 * '3'); //multiply
// // // // console.log(1 + 1 + '2'); //concat
// // // // console.log(true + true); //2
// // // // console.log(1704 - true); //1703
// // // function myDisplayer(some) {
// // //   let demo = document.getElementById('demo');
// // // }

// // // // function firstFun() {
// // // //   myDisplayer('First');
// // // // }
// // // // function secondFun() {
// // // //   myDisplayer('Second');
// // // // }

// // // // firstFun();
// // // // secondFun();

// // // // function myCalculator(n1, n2) {
// // // //   let sum = n1 + n2;
// // // //   return sum;
// // // // }

// // // // let result = myCalculator(167, 2);
// // // // myDisplayer(result);
// // // // function myCalculator(n1, n2, myCallback) {
// // // //   let sum = n1 + n2;

// // // //   myCallback(sum);
// // // // }

// // // // myCalculator(12, 2, myDisplayer);
// // // // for (let step = 0; step < 5; step++) {
// // // //   // Runs 5 times, with values of step 0 through 4.
// // // //   console.log('Walking east one step');
// // // // }
// // // // let shoppingDone = false;
// // // // let childsAllowance;

// // // // if (shoppingDone === true) {
// // // //   childsAllowance = 10;
// // // //   console.log(childsAllowance);
// // // // } else {
// // // //   childsAllowance = 5;
// // // //   console.log(childsAllowance);
// // // // }

// // // // try {
// // // //   alesssrt('Alert');
// // // // } catch (err) {
// // // //   document.getElementById('demo').innerHTML = err.message;
// // // // }
// // // // function getRectArea(width, height) {
// // // //   if (isNaN(width) || isNaN(height)) {
// // // //     throw new Error('Not A Number man');
// // // //   }
// // // // }

// // // // try {
// // // //   getRectArea(3, 'A');
// // // // } catch (e) {
// // // //   console.log(e);
// // // // }
// // // function checkAge(age) {
// // //   if (age < 18) {
// // //     throw 'age must be over 18';
// // //   }
// // //   return 'access granted';
// // // }
// // // try {
// // //   console.log(checkAge(11));
// // // } catch (error) {
// // //   console.log('caught an error:' + error);
// // // }

// // // function divide(a, b) {
// // //   if (b === 0) {
// // //     throw new Error('Cannot divide by zero!');
// // //   }
// // //   return a / b;
// // // }

// // // try {
// // //   console.log(divide(10, 0)); // This will throw an error
// // // } catch (error) {
// // //   console.error(error.name + ': ' + error.message); // Handle the error
// // // }
// // // class CustomError extends Error {
// // //   constructor(message) {
// // //     super(message);
// // //     this.name = 'CustomError';
// // //   }
// // // }

// // // // function validateEmail(email) {
// // // //   if (!email.includes('@')) {
// // // //     throw new CustomError('Invalid email format!');
// // // //   }
// // // //   return 'Email is valid.';
// // // // }

// // // // try {
// // // //   console.log(validateEmail('invalidEmail')); // This will throw an error
// // // // } catch (error) {
// // // //   console.error(`${error.name}: ${error.message}`); // Handle the custom error
// // // // }
// // // // class CustomError extends Error {
// // // //   constructor(message) {
// // // //     super(message);
// // // //     this.name = 'CustomError';
// // // //   }
// // // // }

// // // function validateEmail(email) {
// // //   if (!email.includes('@')) {
// // //     throw new CustomError('Invalid email format!');
// // //   }
// // //   return 'Email is valid.';
// // // }

// // // try {
// // //   console.log(validateEmail('invalidEmail')); // This will throw an error
// // // } catch (error) {
// // //   console.error(`${error.name}: ${error.message}`); // Handle the custom error
// // // } finally {
// // //   console.log('Validation process completed.'); // This will run no matter what
// // // }

// // const helloPromise = new Promise((resolve, reject) => {
// //   const success = true;

// //   if (success) {
// //     resolve('resolved');
// //   } else {
// //     reject('rejected');
// //   }
// // });

// // helloPromise
// //   .then((result) => {
// //     console.log(result);
// //     return new Promise((resolve, reject) => {
// //       resolve('Innter');
// //     });
// //   })
// //   .then((anotherResult) => {
// //     console.log(anotherResult);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   })
// //   .finally((error) => {
// //     console.log('Finally', error);
// //   });

// // async function fetchData() {
// //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

// //   const json = await response.json();
// //   console.log(json);
// // }
// // // fetchData();

// // function outerFunction() {
// //   const outer = 'Outer';

// //   function innerFunction() {
// //     console.log(outer);
// //   }
// //   return innerFunction;
// // }
// // const closure = outerFunction();
// // closure();

// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: 'Bob' });
//     }, 4000);
//   });
// }
// // function fetchUserPosts() {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve(
// //         {
// //           id: 1,
// //           title: 'Software Engineer',
// //           content: 'Hello World',
// //         },
// //         {
// //           id: 2,
// //           title: 'Software Tester',
// //           content: 'Hello World By A Bot',
// //         }
// //       );
// //     });
// //   });
// // }

// // function fetchUserProfile(userId) {
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve({ userId, bio: 'Software Developer', location: 'San Francisco' });
// //     }, 1000);
// //   });
// // }

// async function getUserData() {
//   try {
//     console.log('fetching......');
//     const user = await fetchUser();
//     console.log('Data Recieved', user);
//   } catch (error) {
//     console.log('Error', error);
//   }
// }

// getUserData().then((data) => {
//   console.log(data);
// });

// function sum(...theArgs) {
//   let total = 0;
//   for (const arg of theArgs) {
//     total += arg;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 9, 10));

// function greet(greeting, ...names) {
//   return `${greeting} ${names.join('|')}`;
// }

// console.log(greet('Hello:', 'some', 'nazrul', 'sana', 'abdullah'));
// function Person() {
//   this.age = 0;

//   setInterval(function () {
//     thi.age++;
//     console.log(this);
//     console.log(this.age);
//   }, 2000);
// }

// const p = new Person();
const myElement = document.getElementById('demo');

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    myElement.innerHTML = err;
  }
}

function showPosition(position) {
  myElement.innerHTML =
    'Latitude: ' +
    position.coords.latitude +
    '<br>Longitude: ' +
    position.coords.longitude;
}
