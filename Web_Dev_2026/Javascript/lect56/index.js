//Promises in JS:


//Creation of promise:
// let promise = new Promise((resolve, reject) => {
//     setTimeout(function sayMyName(){
//         console.log("Aanchal Pahuja");
//     }, 5000);
    //If nothing is marked then the promise is in the pending state, if we mark as resolved then the promise would be in fulfilled state and if we mark the promise as rejected then the promise will be in rejected state
//     resolve("Promise is resolved!")
// })


//then catch & finally:

let promise1 = new Promise((resolve, reject) => {
    let flag = true;
    if(flag){
        resolve("Promise is resolved");
    }
    else{
        reject("Promise is rejected");
    }
})

//Value passed inside the resolve() can be accessed inside the then() & similarly the value passed inside the reject() can be accessed inside the catch(), Inside the then() we can write the planned task which we need to perform immediately after the promise is resolved and inside the catch() we will catch the errors and handle it.
promise1.then((message) => {
    console.log("Message is: " + message);  
}).catch((error) => {
    console.log("Error is: " + error);
})


//Promise Chaining: When we have multiple then() chained together that is known as promise chaining:

promise1.then((message) => {
    console.log("First message " + message);
    return "Second promise"
}).then((message) => {
    console.log("Second message " + message);
    return "Third promise"
}).then((message) => {
    console.log("Third message " + message);
})
.catch((error) => {
    console.log("Error is: " + error);
    
})
.finally(() => {
    console.log("I am finally, I will be executed everytime");
})

//Promise.all():

let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First")
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "Third")
})

Promise.all([p1, p2, p3])
.then((values) => {
    console.log("Values: " + values);
    
})
.catch((error) => {
    console.log("error: " + error);
    
})