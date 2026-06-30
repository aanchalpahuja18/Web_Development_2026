//fetching required elements

let dateDiv = document.getElementById('dateDiv');
let timeDiv = document.getElementById('timeDiv');
let toggleBtn = document.getElementById('toggle');
let content = document.getElementById('content')

//fetching current date:

let currentDate = new Date();
let formattedDate = currentDate.toDateString()
console.log(currentDate.toDateString());  

let date = document.createElement('p');
date.innerText = formattedDate;

dateDiv.append(date)

//fetching current time:

let currentTime = currentDate.toLocaleTimeString();
console.log(currentTime);

let time = document.createElement('p');
time.innerText = currentTime;

timeDiv.append(time)

//theme switcher:

function changeTheme(){
    if(content.classList.contains('whiteMode')){
        content.classList.replace('whiteMode', 'darkMode')
        toggleBtn.innerText = "Enable Light Mode"
    }
    else{
        content.classList.replace('darkMode', 'whiteMode');
        toggleBtn.innerText = "Enable Dark Mode"
    }
}

toggleBtn.addEventListener('click', changeTheme)
