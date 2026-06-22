document.addEventListener("DOMContentLoaded", function(){
    let inputBar = document.getElementById("inputBar");
    let searchBtn = document.getElementById("searchBtn");
    let stats = document.querySelector(".stats");
    let easyProgress = document.querySelector(".easy-progress");
    let mediumProgress = document.querySelector(".medium-progress");
    let hardProgress = document.querySelector(".hard-progress");
    let easyLabel = document.querySelector("#easy-label");
    let mediumLabel = document.querySelector("#medium-label");
    let hardLabel = document.querySelector("#hard-label");
    let statsCard = document.querySelector(".stats-card");


    //return true or false based on a regex
    function validateUsername(username){
        if(username.trim() === ""){
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(isMatching == false){
            alert("Invalid username!")
        }
        return isMatching;
    }

    async function fetchUserDetails(username){
        try{
            searchBtn.innerText = "Searching"
            searchBtn.disabled = true;
            // const response = await fetch(url);
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            const targetUrl = 'https://leetcode.com/graphql/';
            //concatenated url: https://cors-anywhere.herokuapp.com/https://leetcode.com/graphql/
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql
            };

            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            console.log(response);
            if(response.ok == false){
                throw new Error("Unable to fetch the user details")
            }
            else{
                const parsedData = await response.json();
                console.log("Logging data: ", parsedData);
                displayUserData(parsedData)
            }
        }
        catch(err){
            stats.innerHTML = `<p>No Data found!</p>`
            
        }
        finally{
            searchBtn.innerText = "Search";
            searchBtn.disabled = false;
        }  
    }

    function updateProgress(solved, total, label, circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`
    }

    function displayUserData(parsedData){
        stats.className = "showData"
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const totalSolvedQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const totalEasySolvedQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const totalMediumSolvedQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const totalHardSolvedQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(totalEasySolvedQues, totalEasyQues, easyLabel, easyProgress);
        updateProgress(totalMediumSolvedQues, totalMediumQues, mediumLabel, mediumProgress);
        updateProgress(totalHardSolvedQues, totalHardQues, hardLabel, hardProgress);

        const cardData = [
            {
                label: "Overall Submissions",
                value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions
            },
            {
                label: "Overall Easy Submissions",
                value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions
            },
            {
                label: "Overall Medium Submissions",
                value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions
            },
            {
                label: "Overall Hard Submissions",
                value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions
            }
        ]

        console.log(cardData);
        statsCard.innerHTML = cardData.map((el) => {
            return `
            <div class = "card">
              <h4>${el.label}</h4>
              <p>${el.value}</p>
            </div>
            `
        }).join("")
        
    }
    searchBtn.addEventListener("click", function(){
        const userName = inputBar.value;
        console.log("Logging username: " + userName);
        if(validateUsername(userName)){
            fetchUserDetails(userName);
        }
        
    })
})

//Notes:

//1. Whenever we have to use the url of graphql then we have to mandatorily send the query requried for graphql.