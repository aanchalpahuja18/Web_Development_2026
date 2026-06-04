// let fPara = document.getElementById('fPara');

// function clickEvent(event){
//     console.log(event);
//     fPara.innerText = "Hello Aanchal";
// }

// fPara.addEventListener('click', clickEvent);

// fPara.removeEventListener('click', clickEvent)

// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.innerText = "Click Done Bhai"
// })

//Avoiding Too Many Listeners Problem:

let paras = document.querySelectorAll('p');

//In the below case we are creating 4 different objects of the functions and it is being referred separately by all the p tags. If we are performing the same action on the occurring of the event then we can pass only one reference of the function for all the paras. 
// for(let i = 0;i<paras.length; i++){
//     paras[i].addEventListener('click', function() {
//         alert(`You have clicked para: ${i+1}`, i);
//     })
// }


//here also we have created 4 mappings for the paragraphs having same listener.
function alertClick(event){
    alert("You have clicked para: " + event.target.textContent)
}

// for(let i = 0;i<paras.length; i++){
//     paras[i].addEventListener('click', alertClick)
// }


//Instead we can do that add the listener directly to the parent element of the paras.

let mydiv = document.getElementById('wrapper')

mydiv.addEventListener('click', alertClick)