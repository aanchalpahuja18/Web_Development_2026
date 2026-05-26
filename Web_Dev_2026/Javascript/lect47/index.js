// // Classes and Default Parameters in JS:

// //1. Classes:

// class Human {
//     age;
//     #wt;
//     ht;

//     constructor(newAge, newHt, newWt){
//         this.age = newAge;
//         this.newHt = newHt;
//         this.#wt = newWt;
//     }

//     walking(){
//         console.log("I am walking", this.#wt);
//     }
//     running(){
//         console.log("I can run");
//     }

//     //getters and setters:

//     get fetchWeight(){
//         return this.#wt;
//     }
//     set updateHeight(val){
//         this.ht = val;
//     }
// }

// let obj = new Human();
// console.log(obj.age);
// // console.log(obj.#wt);

// obj.ht = 190;
// console.log(obj.ht);

// obj.walking()

// obj = new Human(22, 190, 82);

// console.log(obj.age);



//Classes Practice:

class Human{
    age = 22;
    #wt = 80;
    ht = 180; 

    constructor(newAge, newWt, newHt){
        this.age = newAge;
        this.wt = newWt;
        this.ht = newHt;
    }
    
    walking(){
        console.log("I can walk!", this.#wt);
    }

    running(){
        console.log("I can run!", this.ht, "mtrs");
    }

    get fetchWeight(){
        return this.#wt;
    }

    set updateWeight(value){
        this.#wt = value
    }
}


//creating an object/instantiating the class:

let obj = new Human;

//Accessing the data members and functions of the class:
// console.log(obj.age);

// obj.walking();

// console.log(obj.walking);

//New object using constructor:

// let obj2 = new Human(25, 70, 190);
// console.log(obj2);

// console.log(obj2.ht);

// obj2.running()


//Accessing private members
// console.log(obj.#wt);

// obj.walking();

//Using getters and setters:

// console.log(obj.fetchWeight);

// obj.updateWeight = 90;
// console.log(obj.fetchWeight);



