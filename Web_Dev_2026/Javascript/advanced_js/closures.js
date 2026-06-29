//Closures in JS: Inner functions can access the variables of outer functions, and this is known as lexical scope

// The Answer → Closure

// When JavaScript sees this:

// return inner;

// It notices:
// inner function uses variable count from outer function.

// JavaScript says:
// I cannot destroy count.
// inner function still needs it.
// So JS secretly keeps that variable alive.
// This preserved memory is called:
// Closure

//Closure is the mechanism by which JS keeps variables alive for inner functions even after outer function execution finishes.

//Closures do NOT copy variables.

// Many beginners think:
// count = 0
// closure copied count
// Wrong.
// It keeps a reference.
// Meaning same variable is remembered.


//Closure is a function remembers variables from the place where it was created, even after that outer function has finished execution.

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
        
    }

    return inner;
}

let result = outer();

result();
result();
result();