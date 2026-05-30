//Accessing the HTML elements by id, class, tag name.

//1. getElementById:

// let firstPara = document.getElementById('fPara')
// console.log(firstPara);

//2. getElementsByClassName:

// let commonElement = document.getElementsByClassName('mainText');
// console.log(commonElement);

//3. getElementByTagName:

// let heading = document.getElementsByTagName('h1');
// console.log(heading);

//Using querySelector and querySelectorAll:

// let firstPara = document.querySelector('#fPara');
// console.log(firstPara.textContent);


// let elements = document.querySelectorAll('.mainText')
// console.log(elements);

//Updating the elements:

// let heading = document.getElementsByTagName('h1');
// heading.innerHTML = '<span>I am MAIN heading</span>'


//Adding the elements:

let newEle = document.createElement('h2');
newEle.textContent = 'I am new element'

let newDiv = document.querySelector('#newDiv')

newDiv.appendChild(newEle)

//Adding the element on our specific position:

let newEle2 = document.createElement('p');
newEle2.innerText = 'I am the para created to insert the element at specific position';

// newDiv.insertAdjacentElement('beforebegin', newEle2)

// newDiv.insertAdjacentElement('afterbegin', newEle2)

// newDiv.insertAdjacentElement('beforeend', newEle2)

// newDiv.insertAdjacentElement('afterend', newEle2)

//Deleting/Removing the element:

newDiv.removeChild(newEle);

