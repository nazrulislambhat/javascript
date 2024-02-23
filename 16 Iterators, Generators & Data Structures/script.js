//forEach method is used to iterate / loop through all the elements of an array & apply a function to each element.
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(doubleElement);
numbers.forEach(displayElement);

function doubleElement(element, index, array) {
  array[index] = element * 2;
}
function displayElement(element) {
  console.log(element);
}
