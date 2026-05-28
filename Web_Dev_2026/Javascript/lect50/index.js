//Error Handling in JS:

//Types of Errors:

//1. Compile time error: Occurs before the execution of the program, at the time of parsing the code into machine understandable format.

//SyntaxError
// console.log(1;

//2. Run time error: Occurs at the time of execution of program.

//ReferenceError: x is not defined
// console.log(x);


//try-catch:

// try{
//     console.log("Inside the try block");
//     console.log(x);
//     console.log("try block ends here!");
// }
// catch(err){
//     console.log("Inside catch block");
//     console.log("Your error is here: ", err);  
// }

//try-catch-finally: finally block will be executed if there is an error or there is not an error. It will run everytime.

//I) when error occurs:
// try{
//     console.log("Inside the try block");
//     console.log(x);
//     console.log("try block ends here");
// }
// catch(err){
//     console.log("Inside catch block!");
//     console.log("Error info: ", err);
// }
// finally{
//     console.log("I will run everytime whether error occurs or not!");
// }


//II) no error occurs:

// try{
// console.log("try block starts");
// console.log("Hey there!");
// console.log("try block ends");
// }
// catch(err){
//     console.log("catch block starts");
//     console.log("Hello World");
//     console.log("catch block ends");
// }
// finally{
//     console.log("finally block starts");
//     console.log("I am finally");
//     console.log("finally block ends");
    
// }

//Custom errors:

//eg-1:
// try{
//     console.log("Inside try block");
//     console.log(x);
// }
// catch(err){
//     throw new Error("Bhai pehle declare krdo then print krna")
// }

//eg-2:

let errorCode = 100;
if(errorCode === 100){
    throw new Error("Invalid Json object")
}