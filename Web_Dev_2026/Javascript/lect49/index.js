//Object Cloning and Garbage Collector in JS:

//Dynamic Nature of Objects:

let obj = {
    age: 22,
    wt: 80,
    ht: 180
};

// console.log(obj);

obj.color = "white";

// console.log(obj);


//Object Cloning:

//1. Using spread operator:

let src = {
    age: 22,
    wt: 80,
    ht: 180
}

let dest = {...src};

src.age = 90;

// console.log(src);
// console.log(dest);

//2. Using Assign method:

let dest2 = Object.assign({},  src);

src.wt = 90;

// console.log(src);
// console.log(dest2);

//Cloning more than 1 objects into a new one and assigning more than 1 object's properties:

let src2 = {
    value: 100,
    name: "Aanchal Pahuja"
}

let dest3 = Object.assign({},  src, src2);

src.age = 100;

// console.log(src);
// console.log(dest3);

//3. Using Iteration to clone the object:

let dest4 = {};
for(key in src){
    let newKey = key;
    let newVal = src[key];

    //inserting new key and value and cloning the object
    dest4[newKey] = newVal;
}

src.ht = 175;

console.log(src);
console.log(dest4);





