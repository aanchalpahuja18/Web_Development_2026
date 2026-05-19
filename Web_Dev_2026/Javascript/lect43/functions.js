//Functions in Javascript: A block of code which perfoms a specific task anywhere/anytime required in the entire code.

//function creation: it won't run until function has been called which executes the lines of code written inside the body of the function.

function sayMyName(){
    console.log("Aanchal Pahuja");
}

//function call: function call used to execute the function

// sayMyName();

//examples functions:

//functions with loops:
function printCounting(){
    for(let i=1; i<= 50; i++){
        console.log(i);
        
    }
}

// printCounting();

//functions with input (parameters)

//In the function declaration the value passed is called as parameter
function printNum(num){
    console.log(num);
}

//here the value is called as argument
// printNum(55); 

//functions with multiple parameters:

function getAverage(num1, num2){
    let sum = (num1 + num2)/2;
    console.log(`Average of ${num1} and ${num2} is: ${sum}`);
}

// getAverage(2, 10);

//return keyword in functions: It returns the value to us in the place where the function has been called. 

function getSum(num1, num2, num3){
    let sum = num1 + num2 + num3;
    return sum;
}

let sum = getSum(2, 3, 5);
// console.log("Sum of three numbers is: ", sum);

function getMyName(firstName, lastName){
    let fullName = firstName + " " + lastName
    return `Hi ${fullName}!`;
}

// console.log(getMyName("Aanchal", "Pahuja"));

//Function expression:

let getMultiplication = function(a, b){
    return a*b;
}

// console.log(getMultiplication(2, 20));

const getSquare = function(num){
    return num**2;
}

// console.log(getSquare(10));


//Arrow Functions:

//Using Function Declaration:
function getExpDec(x, y) {
    return x ** y;
}

console.log(getExpDec(2, 10));

//Using Function Expression:
let getExpUsingExpress = function(x, y){
    return x**y;
}

console.log(getExpUsingExpress(2, 10));

//Using Arrow Functions:
let getExp = (x, y) => {
    return x**y;
}

console.log(getExp(2, 10));



