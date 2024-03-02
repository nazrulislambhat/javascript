//Push

const array = [1, 2, 3, 4, 5, 6, 7, 8];

// array.push(9);
// console.log(array);
// array.pop(9);
// console.log(array);

//shift
let shiftEl = array.shift();
console.log(shiftEl);
console.log(array);

const numbersShift = [100, 200, 300, 400, 500];
let number;
while ((number = numbersShift.shift()) !== undefined) {
  console.log(number);
}
console.log(numbersShift);

//unshift
const numbersUShift = [100, 200, 300, 400, 500];
let numberU = 0;
numbersUShift.unshift(numberU);
console.log(numbersUShift);

//Slice Method
