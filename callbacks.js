// a callback is a  function that is passed as an argument to another function, and gets executed later, usually after some kind of task is completed. This allows async behaviour. a callback calls back to let you know the work is done.

// function greetFunction(name, cb) {
//   console.log('Hello!' + name);
//   cb();
// }
// function afterGreeting() {
//   console.log('How are you?');
// }
// greetFunction('nazrul', afterGreeting);

// console.log('Start');
// setTimeout(() => {
//   console.log('Inside setTimeout');
// }, 2000);
// console.log('End');

// function fetchData(cb) {
//   console.log('Fetching data...');

//   setTimeout(() => {
//     const data = { user: 'nazrul', age: 25 };
//     cb(data);
//   }, 2000);
// }

// function displayData(data) {
//   console.log(data);
// }

// fetchData(displayData);
// console.log('End');
