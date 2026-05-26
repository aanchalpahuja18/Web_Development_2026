//Default Parameters of Functions in JS:


//1. Single Parameter
function sayHello(myName = "Parv"){
    console.log("Hello", myName);
}

// sayHello("Aanchal");
// sayHello();

//2. Multiple Parameters

function sayMyName(firstName="Parv", lastName="Pahuja"){
    console.log("Greetings!", firstName, lastName);
    
}

// sayMyName("Aanchal", "Pahuja")
// sayMyName("Aanchal")
// sayMyName()

//3. Parameter Dependancy:

function speak(fName = "Parv", lName = fName.toUpperCase()){
    console.log("Heyy!", fName, lName);
}

// speak("Aanchal", "Pahuja")
// speak("Aanchal")
// speak()

//4. Parameters as Objects:

function solve(value = {age:22,wt:80,ht:180}){
    console.log("Value is:", value);
    
}

// solve(20);
// solve();

//5. Parameters as Arrays:


function solveArrays(value = ["Aanchal", "Parv", "Pahuja"]){
    console.log("New Value is:", value);
}

// solveArrays(50);
// solveArrays();

//6. Parameters as null and undefinded:

function values(value = 100){
    console.log("My value is:", value);
}

// values(null)
// values(undefined)

//7. Parameters as Functions:

function getAge(){
    return 22;
}

function printInfo(name, age=getAge()){
    console.log("Heyy!", name, "Your age is", age);    
}

// printInfo("Aanchal", 22)
printInfo("Aanchal")