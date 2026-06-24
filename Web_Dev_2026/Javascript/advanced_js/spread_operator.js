//Spread Operator in JS: open/unpack all the values:

//Need of spread operator:

let arr = [1,2,3,4];

//here no new array is created it's just that the arr2 also points to the same memory location where the arr is pointing so if we make a change into arr2 it also gets reflected in arr
let arr2 = arr;

arr2.push(5);

// console.log(arr);

//Spread Operator:

let array = [1,2,3];
let array2 = [...array]; //here array2 is just a copy of array

//so here array and array2 are pointing to different memory locations and both the arrays created are different.

array2.push(4);

// console.log(array);

let numbers = [10,20,30,40];

//Because spread opens array. equivalent to take all the elements out.
// console.log(...numbers);


//Adding elements while copying:

let orgArr = [1,2,3];

// let newArr = [...orgArr, 4];
//adding element at start;

let newArr = [0, ...orgArr]

// console.log(newArr);

//Spread with objects:

let user = {
    name: "Aanchal",
    age: 22
};

let newUser = {...user};

console.log(newUser);

//add new property:

let updatedUser = {...user, role: "Developer"};

console.log(updatedUser);

//React hates direct mutation.
