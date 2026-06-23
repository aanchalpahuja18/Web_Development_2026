const startDate = new Date().getTime();
console.log(startDate);

const endDate = new Date("25 June, 2026 20:00:00").getTime();
console.log(endDate);


function updateTimer(){
    const currentDate = new Date().getTime();
    const totalTime = endDate - startDate;
    const elapsedTime = currentDate - startDate;
    const timeToComplete = endDate - currentDate;
    console.log(timeToComplete);
    

    //calculate days, hrs, mins, sec:

    const oneDayInMillis = 24*60*60*1000;
    const oneHrInMillis = 60*60*1000;
    const oneMinInMillis = 60*1000;
    const oneSecInMillis = 1000;

    const days = Math.floor((timeToComplete)/(oneDayInMillis));
    console.log(days);
    
    const hrs = Math.floor((timeToComplete%(oneDayInMillis))/(oneHrInMillis));
    console.log(hrs);
    
    const mins = Math.floor((timeToComplete%(oneHrInMillis))/(oneMinInMillis));
    console.log(mins);
    
    const secs = Math.floor((timeToComplete%(oneMinInMillis))/oneSecInMillis);
    console.log(secs);
    


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