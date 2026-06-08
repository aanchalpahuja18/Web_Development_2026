let pastelColors = [
    "#FFDFD3", // pastel peach
    "#FEEBF6", // pastel pink
    "#E0F7FA", // pastel cyan
    "#D4F8E8", // pastel mint
    "#FFF5BA", // pastel yellow
    "#E8DAFF", // pastel lavender
    "#D6EAF8", // pastel blue
    "#F9E79F", // pastel gold
    "#FADBD8", // pastel coral
    "#EAEDED"  // pastel gray
];

let quotes = [
    "Consistency beats motivation on the days you don't feel like showing up.",
    "Small progress every day compounds into remarkable results.",
    "Debugging is where real learning begins.",
    "The project you build teaches more than the tutorial you watch.",
    "Confidence comes from keeping promises to yourself.",
    "Every expert was once a beginner who refused to quit.",
    "Skills are built through repetition, not inspiration.",
    "Success is often the result of doing ordinary things consistently.",
    "Learning without building creates knowledge; building creates understanding.",
    "The best way to predict your future is to create it."
];


//fetching the elements:

let contentDiv = document.querySelector('.content');
let btn = document.getElementById('btn');
let inspireDiv = document.getElementById('inspire')

let quoteNumber = document.createElement('p');
let quote = document.createElement('h3');
let randomIndex;
let colorIndex;
let previousIndex;


function generateQuote() {
    randomIndex = Math.floor(Math.random()*quotes.length);

    while(randomIndex === previousIndex){
        randomIndex = Math.floor(Math.random()*quotes.length);
    }
    
    colorIndex = Math.floor(Math.random()*pastelColors.length);
    
    quote.innerText = quotes[randomIndex];
    quoteNumber.innerText = `Quote #${randomIndex+1}`
    inspireDiv.append(quoteNumber)
    inspireDiv.append(quote);
    contentDiv.style.backgroundColor = pastelColors[colorIndex];
    previousIndex = randomIndex;
}


btn.addEventListener('click', generateQuote);