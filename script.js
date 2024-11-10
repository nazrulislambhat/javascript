const fruits = new Map([
  ['apples', 500],
  ['bananas', 300],
  ['oranges', 200],
]);

fruits.set('strawberry', 400);
fruits.set('apples', 100);
fruits.set('bananas', 200);
fruits.set('oranges', 300);

console.log(fruits);
console.log(fruits.get('apples'));
console.log(fruits.get(200));
console.log(typeof fruits);
fruits.delete('apples');
console.log(fruits);
console.log(fruits.has('apples'));
console.log(fruits.get('bananas'));
console.log(fruits.keys());
console.log(fruits.values());
