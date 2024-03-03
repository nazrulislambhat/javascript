// //Push

// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// // array.push(9);
// // // console.log(array);
// // // array.pop(9);
// // // console.log(array);

// // //shift
// // let shiftEl = array.shift();
// // console.log(shiftEl);
// // console.log(array);

// // const numbersShift = [100, 200, 300, 400, 500];
// // let number;
// // while ((number = numbersShift.shift()) !== undefined) {
// //   console.log(number);
// // }
// // console.log(numbersShift);

// // //unshift
// // const numbersUShift = [100, 200, 300, 400, 500];
// // let numberU = 0;
// // numbersUShift.unshift(numberU);
// // console.log(numbersUShift);

// // //Slice Method
// //Splice

// // const array = [2, 3, 4, 5, 6, 7, 8, 9];
// // array.splice(8, 0, 11, 22);
// // console.log(array);
// // let languages = ['C', 'C++', 'Java', 'JavaScript'];
// // languages.splice(0, 2, 'Python', 'Ruby', '');
// // console.log(languages);
// const array = [2, 3, 4, 5, 6, 7, 8, 9];
// // let includesArray = array.includes(15);
// // console.log(includesArray);

// let modEl = array.find((element) => {
//   element % 2 == 0;
// });
// console.log(modEl);

//find prime number using find

function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([1, 12, 4, 9, 17].find(isPrime));
