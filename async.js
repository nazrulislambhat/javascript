const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise P1 is Resolved');
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise P2 is Resolved');
  }, 20000);
});

async function handlePromise() {
  console.log('Hello World');

  const val = await p1;
  console.log('Hello P1');
  console.log(val);

  const val2 = await p2;
  console.log('Hello P2');
  console.log(val2);
}
handlePromise();
