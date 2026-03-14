What Did Promises Solve?

Before promises, we had to rely on callbacks to handle asynchronous operations. This often led to "callback hell," where callbacks were nested within callbacks, making the code difficult to read and maintain. Promises provided a cleaner and more manageable way to handle asynchronous code by allowing us to chain operations and handle errors more gracefully. With promises, we can write asynchronous code that looks more like synchronous code, improving readability and maintainability.

//example of callback hell
getUser(1, function(user){
getPosts(user.id, function(posts){
getComments(posts[0].id, function(comments){
console.log(comments);
});
})
})

Promises give asysn operation a clean, readable & chainable structure.

A promise is an object that represents the eventual result of an async operation.

Place order - pending
food arrives - fulfulled
out of stock - rejected

a promise has 3 states
pending
fulfilled
rejected

once the promise settles (fulfill or reject) it never changes its state

const Promise = new Promise((resolve, reject) => {
const success = true;

    if(success){
        resolve('Resolved');
    } else {
        reject('Something is wrong');
    }

});

consuming a promsie

.then
console.log(result)
.catch
console.log(error)

Promise CHaning
Each .then returns a new promise so you can chain them. if any of the chain throws an error execution jumps to catch & skips rest of the .then

.finally()

runs whether the promise is fulfilled or rejcted
great for cleanup

fetchUser(1)
.then((user) => console.log(user))
.catch((err) => console.log(err))
.finally(() => console.log("I am done"))



Promise.all

const p1 = fetchUser(1);
const p2 = fetchUser(2);
const p3 = fetchUser(3);

Promise.all([p1, p2, p3]).then((results) =>{
    console.log(results);
})
.catch((err) =>{
    console.log(err.message);
});

all or nothing if one rejects .catch fires immediatly