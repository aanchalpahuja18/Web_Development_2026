// Classes and Default Parameters in JS:

//1. Classes:

class Human {
    age;
    #wt;
    ht;

    constructor(newAge, newHt, newWt){
        this.age = newAge;
        this.newHt = newHt;
        this.#wt = newWt;
    }

    walking(){
        console.log("I am walking", this.#wt);
    }
    running(){
        console.log("I can run");
    }

    //getters and setters:

    get fetchWeight(){
        return this.#wt;
    }
    set updateHeight(val){
        this.ht = val;
    }
}

let obj = new Human();
console.log(obj.age);
// console.log(obj.#wt);

obj.ht = 190;
console.log(obj.ht);

obj.walking()

obj = new Human(22, 190, 82);

console.log(obj.age);
console.log(obj.ht);