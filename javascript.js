const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 55, 43, 1234, 5, 432, 23, 34, 5456, 54, 456, 4356,
  12, 1, 42, 345, 456, 74,
];

// const double = arr.map(function (x) {
//   return x * 2;
// });
// console.log(double);

// const binary = arr.map((x) => x.toString(2));
// console.log(binary);
// console.log(arr);
const even = arr.filter((x) => x % 2 == 0);
console.log(even);
