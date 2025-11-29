const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved');
  }, 10000);
});

// async function handlePromise() {
//   const value = await p;
//   console.log(value);
// }
// handlePromise();

function getData() {
  p.then((res) => console.log(res));
  console.log('Hey');
}
getData();
