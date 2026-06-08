//Code 1: 

// const t1 = performance.now();

// for(let i = 1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para: " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("Perfomance of 1st code: " + (t2 - t1));

//Code 2:

// const t3 = performance.now();

// let myDiv = document.createElement('div');

// for(let i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = "I am para " + i;
//     myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();

// console.log("Performance of code 2 is: " + (t4-t3));


//Optimal Performance using document fragment:


const t1 = performance.now();

let fragment = document.createDocumentFragment();

for(let i = 1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "Para " + i + " assemble!"
    //the below line does not take any reflow & repaint so this is an optimal approach
    fragment.appendChild(para);
}

//the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);

const t2 = performance.now();

console.log("Perfomance of optimal code is: " + (t2-t1));
