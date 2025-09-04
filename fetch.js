// const API_URL = 'https://api.github.com/users/atlassian';
// async function handlePromise() {
//   //returns a response object. it has a body that is a readable stream. To convert it into json tyou will have to do .json & that json is also a promise. once resolved it will give the value. whereever you have async code wrap it insde a try block

//   //fetch().then(res => res.json()).then(res => console.log(res))
//   try {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();

//     console.log(jsonValue);
//   } catch (err) {
//     console.log(err);
//   }
// }
// handlePromise();
