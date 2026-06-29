//Rest Operator: Collects all the values IN. Collect all incoming values into array

//Take all incoming values & Collect them in array called numbers
function add(...numbers){
    console.log(numbers);
}

add(1,2,3,4,5,6);

//Problem is basically in the fixed number of parameters & rest solves it as it allows any number of parameters to come and then rest will automatically collect all the parameters coming and it will store it in the array. Rest operator can accept unlimited values.

//Mixing normal plus rest parameters: Here an important rule is to keep the rest operator at the last position and place all the normal parameters before rest to avoid placing the normal parameters in the array created by rest operator

// Because rest collects all remaining elements.

// If it is in middle:
// [a,...rest,b]
// JS cannot know where collection stops.

// function correct(a, b, ...nums){

// }

function introduce(name, ...rest){
    console.log(name);
    console.log(rest);
}

introduce("Aanchal", "HTML", "CSS", "JS");

//Rest operator does not always create an array. Rest operator stores the remaining data in the same structure from which it is collecting ✅


let nums = [10,20,30,40];

let [first, ...rest] = nums;

console.log(first);
console.log(rest);

//JS says “I am collecting remaining array elements, so I’ll store them as an array

let user = {
    name: "Aanchal",
    age: 22,
    city: "Nagpur"
};

let {name, ...details} = user;

console.log(name);
console.log(details);

//JS says: I am collecting remaining object properties, so I’ll store them as an object.


