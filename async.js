const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise is Resolved');
  }, 5000);
});

async function handlePromise() {
  const val = await p;
  //our js engine was waiting for promise to resolved
  console.log('before handle promise');
  console.log(val);
  console.log('after handle promise');
}
handlePromise();

// function getData() {
// JS Engine will not wait for the promise to be resolved
//   p.then((res) => console.log(res));
//   console.log('getdata funtion');
// }
// getData();
