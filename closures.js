function outerFunction() {
  let outerVar = 'Outer Function Var';

  function innerFunction() {
    let innerVar = 'Innter Function Var';
    console.log(innerVar);
    console.log(outerVar);
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();
//EXPLANATION
//outerFunction runs and returns innerFunction
//closureFunction holds the returned innterFunction
//when we call closureFunction() it still remembers outerVar from outerFunction -- even though outerFunction has finished running. This is closure.
//JavaScript functions keep a reference to their outer lexical environment (the variables available in the function’s scope where they were created). This is what enables closures.

//EXAMPLE 2

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

createCounter();
// counter();
// counter();
//EXPLAIN
//createCounter runs & returns a function. The returned function still has access to count() due to closure. Count is preserved between calls - it doesnt reset.

//TIMER WITH START AND STOP & RESET
function createTimer() {
  let time = 0;
  let intervalId = null;
  return {
    start: function () {
      if (intervalId === null) {
        console.log('Timer Started!');
        intervalId = setInterval(() => {
          time++;
          console.log(`Time: ${time}`);
        }, 1000);
      }
    },
    stop: function () {
      console.log('Timer Stopped');
      clearInterval(intervalId);
      intervalId = null;
    },
    reset: function () {
      console.log('Timer Reset!');
      clearInterval(intervalId);
      time = 0;
      intervalId = null;
    },
    getTime: function () {
      console.log(`Time is: ${time}`);
      return time;
    },
  };
}

const myTimer = createTimer();

myTimer.start();

setTimeout(() => {
  myTimer.stop();
}, 8000);
setTimeout(() => myTimer.getTime(), 5000); // Stops after 5 seconds
setTimeout(() => myTimer.reset(), 6000);
