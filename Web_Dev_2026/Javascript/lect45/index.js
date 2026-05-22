//Hoisting in JS:

//function hoisting:

// sayHello();

// function sayHello(){
//     console.log("Hello Duniya");
    
// }

// sayHello();

//Variable hoisting with var:

// console.log(age);
// var age = 22;
// console.log(age);

//Variable hoisting with let, const

// console.log(age);

// let age = 22;
// console.log(age);

// console.log(num);

// const num = 22;
// console.log(num);


//Hoisting with Function Expression:

// greet();
// let greet = function(){
//     console.log("Hello World");
    
// }

// greet();

// console.log(greet);

// var greet = function (){
//     console.log("Hello World!");
    
// }

// greet();


//Class level hoisting:

// let obj = new Human();
// console.log(obj);

// class Human {

// }

//Functions as first class citizens:

//1. assigning function to a variable:

let greet = function(){
    console.log("Greetings for the day!");
}

// greet();

//2. Passing functions as arguments:

function greetMe(greet, myName){
    console.log("Hello ", myName);
    greet();
}

// greetMe(greet, "Aanchal");

//3. Returning functions from function:

function solve(){
    return function(a, b){
        return a**b;
    }
}

let ans = solve();
let finalAns = ans(2,10);
console.log(finalAns);

//4. Passing functions into data structures


let arr = [
    function(a, b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
]

let first = arr[0];
console.log(first(10,5));

let second = arr[1]
console.log(second(50,10));


let third = arr[2];
console.log(third(10,20));


//5. Passing functions as properties of objects:

let obj = {
    weight: 20,
    age: 22,
    height: 180,
    walk: () => {
        console.log("Let's go on a walk!");
    }
}

console.log(obj.age);
obj.walk()
