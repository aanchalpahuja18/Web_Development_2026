//Using .style property to access the styling of css using js

// let fPara = document.getElementById('fPara');

//To fetch/get the existing styling of the element
// fPara.style

//To set the styling of the element using .style property:

// fPara.style.backgroundColor = 'hotpink'

//To set the multiple styling using cssText: It also removes the existing styling while setting the style property using cssText

//To fetch/get the existing styling of the element

//fPara.style.cssText 

//To set the styling of the element using .cssText property:

//fPara.style.cssText = 'background-color: yellow; color: blue; padding: 2rem'

//setAttribute: It also removes the existing styling while setting the style property using this property

// let sPara = document.getElementById('sPara');

//To fetch/get the existing styling of the element

// sPara.setAttribute

//To set the styling of the element using .setAttribute property:

// sPara.setAttribute('class', 'sPara');
// sPara.setAttribute('style', 'background-color: green; color: white; padding: 0.8rem')

//className:

//To fetch/get the existing className of the element:

// sPara.className;

//To set the className of the element and it replaces the existing value of the element:

// sPara.className = "newPara myPara"

//classList:

//add():

let fDiv = document.getElementById('fDiv');


//To fetch/get the existing className of the element:
fDiv.classList

//To set the className of the element and it replaces the existing value of the element:

fDiv.classList.add('myDiv');
fDiv.classList.add('latestDiv');

//remove():

fDiv.classList.remove('myDiv');

//contains():

fDiv.classList.contains('latestDiv')

//toggle():

fDiv.classList.toggle('darkMode')