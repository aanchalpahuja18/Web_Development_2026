//Closures in JS:

function outer(){
    let name = "Aanchal";

    function inner(){
        console.log(name);
    }

    inner();
}

outer();


function outerFunction(){
    let name = "Aanchal Pahuja";

    function innerFunction(){
        console.log(name); // Here with closures the inner function is binded with the reference of the required data and we can still access the data on calling the inner function even after the execution of the outer function is completed and we might think that now the data is cleared from the memory.
    }

    return innerFunction;
}

let inner = outerFunction();

inner();