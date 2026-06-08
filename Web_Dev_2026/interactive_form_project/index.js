//fetching the elements:

let inpName = document.getElementById('name');
let nameDiv = document.getElementById('name-box');
let emailDiv = document.getElementById('email-box');
let ageDiv = document.getElementById('age-box');

let inpAge = document.getElementById('age');

let inpEmail = document.getElementById('email');
let submitBtn = document.getElementById('submit-btn');


//Creating error messages:

let errorMsgName = document.createElement('p');
errorMsgName.innerText = "* Please fill this field"

let errorMsgAge = document.createElement('p');
errorMsgAge.innerText = "* Age must be positive"

let errorMsgEmail = document.createElement('p');

//Validation logic:

function validateName(inpName){
    if(inpName.value === ""){
        inpName.classList.replace('baseBorder', 'redBorder');
        nameDiv.append(errorMsgName);
    }
    else{
        inpName.classList.replace('redBorder','greenBorder');
        errorMsgName.remove();
        return true;
    }
}

function validateAge(inpAge){
    let value = inpAge.value;
    let number = Number(value)
    if(number <= 0){
        inpAge.classList.replace('baseBorder', 'redBorder');
        ageDiv.append(errorMsgAge)
    }
    else{
        inpAge.classList.replace('redBorder','greenBorder');
        errorMsgAge.remove();
        return true;
    }
}

function validateEmail(inpEmail){
    let email = inpEmail.value;
    if(email === ""){
        inpEmail.classList.replace('baseBorder', 'redBorder');
        errorMsgEmail.innerText = "* Please fill this field";
        emailDiv.append(errorMsgEmail);
    }
    else if(email.includes('@') == false){
        inpEmail.classList.replace('baseBorder', 'redBorder');
        errorMsgEmail.innerText = "* Please input a valid email address";
        emailDiv.append(errorMsgEmail);
    }
    else if(email.includes('.') == false){
        inpEmail.classList.replace('baseBorder', 'redBorder');
        errorMsgEmail.innerText = "* Please input a valid email address";
        emailDiv.append(errorMsgEmail);
    }
    else if(email.includes(' ')){
        inpEmail.classList.replace('baseBorder', 'redBorder');
        errorMsgEmail.innerText = "* Please input a valid email address";
        emailDiv.append(errorMsgEmail);
    }
    else{
        inpEmail.classList.replace('redBorder','greenBorder');
        errorMsgEmail.remove();
        return true;
    }
}

function validateInput(event){
    event.preventDefault();
    let nameValidationCheck = validateName(inpName);
    let ageValidationCheck = validateAge(inpAge);
    let emailValidationCheck = validateEmail(inpEmail);
    if(nameValidationCheck == true && ageValidationCheck == true && emailValidationCheck == true){
        alert("Your form has been submitted successfully!")
    }
}


submitBtn.addEventListener('click', validateInput)