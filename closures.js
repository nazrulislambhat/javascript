// // // // // // function outerFunction() {
// // // // // //   let outerVar = 'Outer Function Var';

// // // // // //   function innerFunction() {
// // // // // //     // ✅ defined inside, so it closes over outerVar
// // // // // //     let innerVar = 'Inner Function Var';
// // // // // //     console.log(innerVar); // "Inner Function Var"
// // // // // //     console.log(outerVar); // "Outer Function Var" ✅
// // // // // //   }

// // // // // //   innerFunction(); // call it from inside
// // // // // // }

// // // // // // outerFunction();

// // // // // // //EXPLANATION
// // // // // // //outerFunction runs and returns innerFunction
// // // // // // //closureFunction holds the returned innterFunction
// // // // // // //when we call closureFunction() it still remembers outerVar from outerFunction -- even though outerFunction has finished running. This is closure.
// // // // // // //JavaScript functions keep a reference to their outer lexical environment (the variables available in the function’s scope where they were created). This is what enables closures.

// // // // // // //EXAMPLE 2

// // // // // // // function createCounter() {
// // // // // // //   let count = 0;

// // // // // // //   return function () {
// // // // // // //     count++;
// // // // // // //     console.log(count);
// // // // // // //   };
// // // // // // // }

// // // // // // // createCounter();
// // // // // // // // counter();
// // // // // // // // counter();
// // // // // // // //EXPLAIN
// // // // // // // //createCounter runs & returns a function. The returned function still has access to count() due to closure. Count is preserved between calls - it doesnt reset.

// // // // // // // //TIMER WITH START AND STOP & RESET
// // // // // // // function createTimer() {
// // // // // // //   let time = 0;
// // // // // // //   let intervalId = null;
// // // // // // //   return {
// // // // // // //     start: function () {
// // // // // // //       if (intervalId === null) {
// // // // // // //         console.log('Timer Started!');
// // // // // // //         intervalId = setInterval(() => {
// // // // // // //           time++;
// // // // // // //           console.log(`Time: ${time}`);
// // // // // // //         }, 1000);
// // // // // // //       }
// // // // // // //     },
// // // // // // //     stop: function () {
// // // // // // //       console.log('Timer Stopped');
// // // // // // //       clearInterval(intervalId);
// // // // // // //       intervalId = null;
// // // // // // //     },
// // // // // // //     reset: function () {
// // // // // // //       console.log('Timer Reset!');
// // // // // // //       clearInterval(intervalId);
// // // // // // //       time = 0;
// // // // // // //       intervalId = null;
// // // // // // //     },
// // // // // // //     getTime: function () {
// // // // // // //       console.log(`Time is: ${time}`);
// // // // // // //       return time;
// // // // // // //     },
// // // // // // //   };
// // // // // // // }

// // // // // // // const myTimer = createTimer();

// // // // // // // myTimer.start();

// // // // // // // setTimeout(() => {
// // // // // // //   myTimer.stop();
// // // // // // // }, 8000);
// // // // // // // setTimeout(() => myTimer.getTime(), 5000); // Stops after 5 seconds
// // // // // // // setTimeout(() => myTimer.reset(), 6000);

// // // // // //Seperate Closures

// // // // // function makeCounter() {
// // // // //   let count = 0;

// // // // //   return {
// // // // //     inc: () => ++count,
// // // // //     dec: () => --count,
// // // // //     value: () => count,
// // // // //   };
// // // // // }
// // // // // const countA = makeCounter();
// // // // // const countB = makeCounter();

// // // // // countA.inc();
// // // // // countA.inc();
// // // // // countA.inc();
// // // // // console.log(countA.value());

// // // // // countB.inc();
// // // // // countB.inc();
// // // // // countB.dec();
// // // // // console.log(countB.value());

// // // // // //same closure

// // // // // function makeWallet(initial) {
// // // // //   let balance = initial;

// // // // //   const deposit = (n) => {
// // // // //     balance += n;
// // // // //   };
// // // // //   const withdraw = (n) => {
// // // // //     if (n < balance) {
// // // // //       balance -= n;
// // // // //     } else {
// // // // //       console.log(
// // // // //         'Insufficent Money Cannot Withdraw',
// // // // //         n,
// // // // //         'Your Accout only has',
// // // // //         balance,
// // // // //       );
// // // // //     }
// // // // //   };
// // // // //   const check = () => balance;

// // // // //   return { deposit, withdraw, check };
// // // // // }

// // // // // const wallet = makeWallet(100);
// // // // // // console.log('Initial Balance', wallet.check());
// // // // // // wallet.deposit(20);
// // // // // // console.log('New Balance', wallet.check());
// // // // // wallet.withdraw(170);
// // // // // console.log('Final Balance', wallet.check());
// // // function User(name, age) {
// // //   this.name = name;
// // //   this.age = age;
// // // }
// // // console.log(User.prototype);
// // // User.prototype.greet = function () {
// // //   console.log('Hi I am', this.name, 'and I am', this.age);
// // // };
// // // console.log(User.prototype);

// // // const user1 = new User('Abdullah', 20);
// // // const user2 = new User('Sara', 25);
// // // user1.greet(); // Hi I am Abdullah and I am 20
// // // user2.greet(); // Hi I am Sara and I am 25
// // // console.log(User.prototype);
// // function Animal(name) {
// //   this.name = name;
// // }

// // Animal.prototype.speak = function () {
// //   console.log(this.name, 'makes a sound');
// // };

// // const dog = new Animal('Dog');
// // const cat = new Animal('Cat');

// // dog.speak();
// // cat.speak();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(this.name, 'makes a sound');
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   speak() {
//     super.speak(); // Animal's speak
//     console.log(this.name, 'barks 🐶'); // Dog's extra
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log(this.name, 'meows 🐱'); // completely overrides Animal's speak
//   }
// }

// const animal = new Animal('Animal');
// const dog = new Dog('Rex');
// const cat = new Cat('Whiskers');

// animal.speak();
// dog.speak();
// cat.speak();

class Shape {
  constructor(color) {
    this.color = color;
  }

  describe() {
    console.log('I am a', this.color, 'shape');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  describe() {
    super.describe();
    console.log('I am a circle with radius', this.radius);
  }
}

class Square extends Shape {
  constructor(color, size) {
    super(color);
    this.size = size;
  }
}

const circle = new Circle('red', 5);
const square = new Square('blue', 10);

circle.describe();
square.describe();

console.log(circle instanceof Shape);
console.log(square instanceof Circle);
