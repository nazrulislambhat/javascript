function makeCoffee(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${order} is ready`);
    }, 10000);
  });
}

async function getCoffee() {
  const coffee = await makeCoffee('Latte');
  console.log(coffee);
}
getCoffee();
console.log('While waiting, I will be reading a book');
