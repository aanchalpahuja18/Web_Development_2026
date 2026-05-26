//Math and Date Object in JS:

//1. Math Object in JS:

// console.log(Math.PI);

// console.log(Math.max(12,10,100,90,192,23,55));

// console.log(Math.min(12,10,100,90,192,23,55));

// console.log(Math.random()); // generates a random number between 0 and 1

// console.log(Math.abs(-5));

// console.log(Math.sqrt(5));

// console.log(Math.pow(2,10));

// console.log(Math.round(1.5));

// console.log(Math.floor(1.6));

// console.log(Math.ceil(1.1));

// console.log(Math.sin(Math.PI/2));

//2. Date Object in JS:

//1) Method to create a date object
let curr = new Date();

// console.log(curr);

//2) Method to create a date object using custom value:

let newDate = new Date('August 18 2003 3:20')
// console.log(newDate);

//3) Method to create a date object using parameters:

let newDt = new Date(2003, 7, 18, 3)
// console.log(newDt);


//Accessing and Setting values using in-built methods:

console.log(curr.getDate());
console.log(curr.getFullYear());
console.log(curr.getHours());
console.log(curr.getDay());


// console.log(newDt.setDate(20));
console.log(newDt);


console.log(newDt.setFullYear(2007));

console.log(newDt);










