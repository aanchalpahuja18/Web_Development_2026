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
        const url = `https://leetcode.com/graphql`;
        try{
            searchBtn.innerText = "Searching"
            searchBtn.disabled = true;
            const response = await fetch(url);
            console.log(response);
            if(response.ok == false){
                throw new Error("Unable to fetch the user details")
            }
            else{
                const data = await response.json();
                console.log("Logging data: " + data);
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
    searchBtn.addEventListener("click", function(){
        const userName = inputBar.value;
        console.log("Logging username: " + userName);
        if(validateUsername(userName)){
            fetchUserDetails(userName);
        }
        
    })
})