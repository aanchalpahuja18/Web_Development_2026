//Higher order functions: A Higher Order Function is a function that either:
// 1. Takes another function as an argument
// OR
// 2. Returns another function

//eg: map: here map is a higher order function since it takes a function as the argument and the inner function which is passed inside the map() is called as a callback function

let arr = [1,2,3];

let newArr = arr.map(function(el){
    return el*el;
})

//map internally does the below:

// for(each element){
//    apply your function
//    store returned value
// }

//Internally JS does the looping like below for higher order functions.
//for(let i=0;i<nums.length;i++){
//    callback(nums[i]);
// }

// eg: filter logic:
// for(each element){
//    if callback returns true
//       keep it
//    else
//       remove it
// }

console.log(newArr);

//JS says:

// “Why repeat the loop?
// I’ll handle looping internally.
// You just tell me what operation to do.”

// That is Higher Order Functions.

// Difference:

// map() → returns new array
// filter() → returns filtered array
// forEach() → returns nothing

