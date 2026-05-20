//Objects in JS:

let obj = {
    // name: "Aanchal Pahuja",
    "full name": "Aanchal Pahuja",
    age: 22,
    weight: 80,
    walk: function(){
        console.log("I walk daily for almost half an hour!");
    }
};

// console.log(obj);
// obj.walk();

console.log(obj["full name"]); // another way to access the keys of objects

let obj2 = obj;
// console.log(obj2); 
//Above is just a shallow copy created as the new reference obj2 is pointing to the same object and there is no new object created at the moment, it is pointing to the same object as that of obj.

//Arrays in JS:

//Creation of Arrays:

//1. Using Array Literals:

let arr = [1, "Aanchal", true, 50];

// console.log(arr);   
// console.log(typeof(arr));


//Traversing over arrays using traditional for loop:

// let len = arr.length;
// for(let i=0;i<len;i++){
//     console.log(arr[i]);
// }

//Accessing the elements of arrays using indexes: Arrays follows a 0-based indexing meaning elements are arranged from 0 to arr.length-1 in the memory;

// console.log(arr[1]);

//2. Using Array Constructor:

let arr2 = new Array(1, 'Pahuja', 50, true);

// console.log(arr2);

//Built-in methods in Arrays:

//1. push(): Inserts the element at the end of the array.

arr2.push('Banana');
arr2.push(1234);
// console.log(arr2);


//2. pop(): Removed the element from the end of the array.

arr2.pop();
// console.log(arr2);

//3. shift(): Removes the element from the starting of the array.

arr2.shift();
// console.log(arr2);

//4. unshift(): Inserts the element at the starting of the array.

arr2.unshift(12);
// console.log(arr2);

//5. slice(): Gives the shallow copy of the array by extracting a new part of the array. Similar to substring method of the string

let arr3 = arr2.slice(1,3);
// console.log(arr3);

// console.log(arr2); // meaning the original array does not change and only a new part of the array is extracted out of the original array keeping the original array as it is.

//6. splice(): If we want to insert, update, remove a specific part from the array we have the splice method.

// console.log(arr2);

let arr4 = arr2.splice(1, 2, 'parv');
// console.log(arr4);

// console.log(arr2); // the splice method makes the changes in the original array as well as it is used to insert, update or delete from the original array.

arr2.splice(1, 0, 'Aanchal');
// console.log(arr2);

//7. map(): It does not change the existing array and returns the values which will be stored in a new array.
let newArr = [10,20,30];

let ans = newArr.map((el) => {
    return el*el;
})

// console.log(newArr);
// console.log(ans);

//8. filter(): It filters the values based on the evaluation of the conditions. If the condition evaluates to (truthy) true then keep that particular element if it evaluates to (falsy) false remove that element / do not add the element to the new array. We do not explicitly have to return true or false javascript does it internally.

//filtering out the even values
newArr = [1,2,3,4,5,6];

ans = newArr.filter((el) => {
    if(el % 2==0){
        return true;
    }
    else{
        return false;
    }
})

// console.log(ans);
// console.log(newArr);


//9. reduce(): It reduces the array elements into a single value which is returned and stored in the acc. 

newArr = [10,20,30,40];

ans = newArr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0); //here the 0 is the initialised value of acc

console.log(ans);
console.log(newArr);


//10. sort(): Sorts the elements of the array in ascending order

let numbers = [9, 7, 4, 2, 1, 5, 3];
numbers.sort();
console.log(numbers);

//practice question: Sort the array in descending order:

numbers.reverse();
console.log(numbers);

//11. indexOf(): It specifies the index of the value specified.

let index = numbers.indexOf(2);
console.log(index);

//12. find(): It finds the elements and returns it once it is found based on the condition written inside the function. It also evaluates to either true or false, if true then it returns that element and stops if false and no element matches the condition then it returns undefined

let result = numbers.find((el) => {
    return el % 2 == 0;
})
console.log(result);

let res2 = [1, 2, null, "Aanchal", "parv", 'pahuja', true, undefined];

let eval = res2.find((el) => {
    if(typeof(el) == 'string'){
        return true;
    }
    else{
        return false;
    }
})

console.log(eval);

//Loops/Methods of arrays: 

//1. forEach loop:

let nums = [10, 20, 30, 40];

nums.forEach((value, index) => {
    console.log("Number: ", value, " Index: ", index);  
})

//2. for-in: If we want to iterate / traverse on enumerable properties like objects:

for(el in obj){
    console.log(el, " : ", obj[el]);   
}

//3. for-of: If we want to iterate/travers over iterable objects like arrays, strings:

let curr = [10,20,30,40];

for(val of curr){
    console.log(val);
    
}

let str = "Aanchal Pahuja"

for(el of str){
    console.log(el);    
}

//Arrays with Functions:

let array = [10,20,30,40,50];

function getSum(array){
    let len = array.length;
    let sum = 0;
    for(let i=0;i<len;i++){
        sum += array[i];
    }
    return sum;
}

let totalSum = getSum(array);
console.log(totalSum);

//Using forEach loop inside arrays:

let getSumForEach = (array) => {
    let sum = 0;
    array.forEach((value) => {
        sum += value;
    })
    return sum;
}   

let total = getSumForEach(array);
console.log(total);







