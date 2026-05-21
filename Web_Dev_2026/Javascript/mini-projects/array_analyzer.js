let numbers = [10, 20, 15, 40, 8, 30];
console.log("Original array is: ", numbers);


function totalSum(numbers){
    let total = numbers.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return total;
}


function findAverage(numbers){
    let average = totalSum(numbers)/numbers.length;
    return average;
}

function getMaximum(numbers){
    let maxi = -Infinity;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] > maxi){
            maxi = numbers[i];
        }
    }
    return maxi;
}

function getMinimum(numbers){
    let mini = Infinity;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] < mini){
            mini = numbers[i];
        }
    }
    return mini;
}

function getEven(numbers){
    let even = numbers.filter((num) =>{
        return num % 2 ==0;
    })
    return even;
}


function getSquares(numbers){
    let squares = numbers.map((num) => {
        return num**2;
    })
    return squares;
}

// function sortInAsc(numbers){
//     let ascending = numbers.sort();
//     return ascending;
// }

// function sortInDesc(numbers){
//     return sortInAsc(numbers).reverse();
// }

function findANumber(num){
    let result = numbers.find((el) => {
        return el === num;
    })
    if(result == undefined){
        console.log("Number not found!");
    }
    else{
        console.log("Number is found in the array");
    }
}

function countEvenOdd(numbers){
    let countEven = 0;
    let countOdd = 0;
    numbers.forEach((el) => {
        if(el % 2 === 0){
            countEven++;
        }
        else {
            countOdd ++;
        }
    })
    console.log("Total even numbers are: ", countEven);
    console.log("Total odd numbers are: ", countOdd);
}

console.log("Array Analyzer Results Are OUT!!!");
console.log("---------------------------------");
console.log("Total: ", totalSum(numbers));
console.log("Average: ", findAverage(numbers));
console.log("Maximum Number is: ", getMaximum(numbers));
console.log("Minimum Number is: ", getMinimum(numbers));
console.log("Even Numbers: ", getEven(numbers));
console.log("Squares of Numbers: ", getSquares(numbers));
// console.log("Sorting the array in ascending order: ", sortInAsc(numbers));
// console.log("Sorting the array in descending order: ", sortInDesc(numbers));
findANumber(8);
countEvenOdd(numbers);

//Sorting in ascending and descending order is pending, Will complete it after learning comparator. 






