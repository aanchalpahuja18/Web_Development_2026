//Advanced JS concepts essential for React:

//1. Destructuring: Unpacking the values from arrays or objects. Taking values out of an object/array and storing them directly in variables.

let user = {
    name: "Aanchal",
    age: 22,
    role: "Frontend Developer"
}

//Object destructuring:

// let name = user.name;
// let age = user.age;
// let role = user.role;

// console.log(name);
// console.log(age);
// console.log(role);

//Instead of doing the above we directly do:

//“Take these properties from the object and make variables from them.”
let {name, age, role} = user;

console.log(name);
console.log(age);
console.log(role);

//Important rule: Variable name must match property name

// let {username, age} = user;
//username will give undefined because user has no property called username

//Renaming while destructuring:

let user2 = {
    name: "Aanchal",
    age: 22
};

//Take name property and store it in username
let {name: username} = user2;
console.log(username);

//Array Destructuring:

let numbers = [10, 20, 30, 40];

//Normal way:
// let first = numbers[0];
// let second = numbers[1];

// console.log(first);
// console.log(second);

//Destructuring:

// let [first, second] = numbers;

// console.log(first);
// console.log(second);


//Important difference: Objects -> based on property names and Arrays -> based on position/index

//Skipping values in Arrays:

//The empty comma means skip the value
let [first, , third] = numbers;

console.log(first);
console.log(third);


