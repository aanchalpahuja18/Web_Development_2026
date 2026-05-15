//Variables in JS:

//1. var was deprecated because it does not support block scope and only supports global and function scope. Also it does not allow variable hositing which created issues. Also due to the redeclaration and reassignment of variabled declared with 'var', there were issues faced while debugging. 

//var - global scope
var age = 22;
console.log(age);

//var - function scope
function scope() {
    var age = 18;
    console.log(age);
}

//scope();

//Reassignment possible with var
var age = 22;
age = 20;

//Redeclaration possible with var
var age = 22;
var age = "Aanchal";


//var - does not support block scope
if(true){
    var age = 22;
    console.log(age);
}

console.log(age);


//2. let 

//Every variable created with let are by default block scoped. We can reassign the value to the variables created with let but we cannot redefine variables using let.

let age = 20;
console.log(age);

// let - block scoped
{
    let age = 20;
}

console.log(age);


//let - reassignment of variables

let age = 20;
console.log(age);

age = "Aanchal"
console.log(age);

//let - Redefinition of variables using let is not possible and it gives Syntax Error

let age = 20;

let age = "Aanchal";

//3. const 
//Every variable created with const have block scoped and also are is used to consist constant values. We cannot reassign the value to the variables created with let and we cannot redefine variables using let.


//const -> Block scoped
const age = 20;
console.log(age);

{
    const num = 20;
}

console.log(num);

//const -> reassignment not possible and gives TypeError: Assignment to constant variable.

const age = 20;
console.log(age);

age = 30;
console.log(age);

//const -> Redefinition not possible and gives SyntaxError : Identifier 'age' has already been declared

const age = 20;
const age = 40;


// Datatypes in JS:

//Primitive Datatypes: number, boolean, string, null, undefined, bigint, symbol

let marks = 20;
marks = "Aanchal";
marks = true;

console.log(marks);

marks = null;
console.log(typeof(marks));


let number;
console.log(number);
console.log(typeof(nubnber));

let bigNumber = 12749750297294298312938129472094720937129471294739471294719047120947129471209471947171271917091274901274124912049041292741227398377989847864728739879139832836983983898379319693912698369369836983866398369863819236983619836298632362983686398639863926496482649284612649264982469646498461286;

console.log(bigNumber);
console.log(typeof(bigNumber));


