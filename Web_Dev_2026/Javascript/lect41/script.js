// Conditionals / Control Flow statements in JS


//1. if-else statements
let ageOfPerson = 2;
if(ageOfPerson >= 18){
    console.log("Can vote!");
}
else{
    console.log("Cannot vote!");
}

//2. if-else if- else statements:

let number = 5;
if(number == 1){
    console.log('A');
}
else if(number == 2){
    console.log('B');
}
else if(number == 3){
    console.log('C');
}
else if(number == 4){
    console.log('D');
}
else if(number == 5){
    console.log('E');
}
else{
    console.log('F');
}


//3. if-else if (if else) - else ladder:

let num = 4;
let age = 4;
if(num == 1){
    console.log('A');
}
else if(num == 2){
    console.log('B');
}
else if(num == 3){
    console.log('C');
}
else if(num == 4){
    if(age >= 18){
        console.log("I can vote!");
    }
    else{
        console.log("I cannot vote!"); 
    }
    console.log('D');
}
else if(num == 5){
    console.log('E');
}
else{
    console.log('F');
}


//Switch Statements in JS:

let n = 50;

switch(n){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    case 5: console.log('E');
    break;
    default: console.log('Nothing from above');
}