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
    let flag = false;
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
 