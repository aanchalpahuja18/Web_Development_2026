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

//Difference between append and appendChild:

//1. appendChild() is an older method and it appends only nodes that is element nodes and also it appends one node at a time. It returns the appended node. appendChild() only accepts one node. Cannot append text/string directly to the parent element.

//2. append() is a newer and flexible method and it can append multiple elements, strings and multiple items at once. It does not return the appended node. It returns undefined.


let h1 = document.createElement('h1');
h1.innerText = 'Heading element'

let h2 = document.createElement('h2');
h2.innerText = 'Sub Heading element'
newDiv.append(h1, 'Hello World', h2)

//Adding the element on our specific position:

let newEle2 = document.createElement('p');
newEle2.innerText = 'I am the para created to insert the element at specific position';

// newDiv.insertAdjacentElement('beforebegin', newEle2)

// newDiv.insertAdjacentElement('afterbegin', newEle2)

// newDiv.insertAdjacentElement('beforeend', newEle2)

// newDiv.insertAdjacentElement('afterend', newEle2)

//Deleting/Removing the element:

newDiv.removeChild(newEle);


//Difference between remove and removeChild:

//1. remove() directly removes the element itself, we do not need to access the parent element in order to remove the desired element. 

//Syntax:

// element.remove();

//Result:
// Element disappears.
// Easy to use
// No need to access parent.

// h2.remove()


//2. removeChild() here parent removes the child element and we need to first access the parent element to remove the desired child element.

newDiv.removeChild(h1)