const startDate = new Date().getTime();

const endDate = new Date("25 June, 2026 20:00:00").getTime();


function updateTimer(){
    const currentDate = new Date().getTime();
    const totalTime = endDate - startDate;
    const elapsedTime = currentDate - startDate;
    const timeToComplete = endDate - currentDate;
    

    //calculate days, hrs, mins, sec:

    const oneDayInMillis = 24*60*60*1000;
    const oneHrInMillis = 60*60*1000;
    const oneMinInMillis = 60*1000;
    const oneSecInMillis = 1000;

    const days = Math.floor((timeToComplete)/(oneDayInMillis));
    
    const hrs = Math.floor((timeToComplete%(oneDayInMillis))/(oneHrInMillis));
    
    const mins = Math.floor((timeToComplete%(oneHrInMillis))/(oneMinInMillis));
    
    const secs = Math.floor((timeToComplete%(oneMinInMillis))/oneSecInMillis);

    //populating data in ui

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hrs;
    document.getElementById("mins").innerText = mins;
    document.getElementById("seconds").innerText = secs;

    //progress-bar
    const widthCalculate = (elapsedTime/totalTime)*100;
    
    document.getElementById("progress-bar").style.width = widthCalculate + "%";

    if(elapsedTime < 0){
        clearInterval();
        document.getElementById("countdown").innerHTML = "Expired!";
        document.getElementById("progress-bar").style.width = 100 + "%";
    }
    
}

setInterval(updateTimer, 1000);


//Homework functionalities:
//Ask user to enter start and end date,
//Show a notification or send a email when say 5/10 mins are left. 
//Use case of timer : Email received for a live class before 1 hr or half hr or 15min.