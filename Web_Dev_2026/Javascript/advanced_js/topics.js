// Optional Chaining: Check if this exists. If yes continue. If not stop safely.”

let user = {
    name : "Aanchal"
}

// console.log(user.name);

// console.log(user.profile?.age);

//Modules in JS: In bigger projects we don’t keep everything in one file.

//export: means I want other files to use this

//import -> Means: bring code from another file

//this keyword: this refers to the object calling the function.

let user2 = {
   name: "Aanchal",

   greet: function(){
      console.log(this.name);
   }
}

user2.greet();

//Arrow functions do not create their own this

let user3 = {
   name: "Aanchal",

   greet: () => {
      console.log(this.name)
   }
}

user3.greet(); //output will be undefined
//Because arrow function borrows surrounding this

//Mutability -> Mutation means changing original data

//Rule: If using react state, never mutate directly

let arr = [1,2,3];
arr.push(4)

console.log(arr) //This is mutation and react hates it because it tracks state changes.

//eg: 

let todos = ["Study", "Start React"];

let newTodos = [...todos, "Sleep"];
console.log(todos);
console.log(newTodos);


//Event bubbling: Event moves upward.

// button → div → body → html → document -> This is bubbling

//To stop bubbling, we have:
// event.stopPropagation();

//Debouncing: Used mainly in search boxes, It says wait until the user stops typing

// Example:

// Wait 500ms.

// Then API call.

//Without debounce : 10 API Calls,
//With debounce: 1 API call

//Throttling: Allow action only once every fixed interval.

// Difference

// Debounce: Search bar

// Wait until user stops

// Throttle: Scrolling event

// Run repeatedly but limited

