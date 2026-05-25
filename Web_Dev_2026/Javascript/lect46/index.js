// I) Scopes in JS:

//1. Global Scope: Variables declared with var, let, const inside the global scope are accessible anywhere in the entire file.

// var age = 22;

// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age);
// }

// function sayHello(){
//     console.log("Hi", age);
// }

// sayHello();

// for(let i = 0;i<2; i++){
//     console.log("I am", age);
    
// }


//Function Scope: Variables declared with var, let and const inside the function scope are accessible only inside the function body and not anywhere else outside the function.

function sayHello(){
    let height = 180;
    console.log(height);
    var weight = 60;
    console.log(weight);
    const age = 22;
    console.log(age);
}

// sayHello();

// console.log(weight);
// console.log(age);
// console.log(height);

//Block Scope: Variables declared with var are not block scoped and they can be accessed outside the blocks as well. whereas variables declared with let and const are block scoped and are not accessible outside the scope of the block.

// console.log(age);

// {
//     var age = 22;
// }

// console.log(age);

//   console.log(height);
// if(true){
//     var height = 180;
// }

//   console.log(height);


// console.log(weight);

// for(let i = 0;i<2;i++){
//     var weight = 80;
//     console.log(i);
// }

// console.log(weight);

//Using let and const:

// console.log(age);
// {
//     let age = 22;
// }

// console.log(age);


// console.log(height);
// {
//     const height = 180;
// }

// console.log(height);


// II_ Temporal Dead Zone: The region between the accessing of the variable and its initialization with let or const is known as temporal dead zone. As in this region the values of the variable declared with let and const are not accessible since the variables declared with let & const are not hoisted that's why there value cannot be accessed.


//The region between line 95 and 98 is known as temporal dead zone
console.log(marks);
console.log("Hi");
console.log("Hello");
const marks = 100;
console.log(marks);



