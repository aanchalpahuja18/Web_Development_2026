//fetching elements:

let body = document.getElementById('body');
let inputBar = document.getElementById('inputBar');
let submitBtn = document.getElementById('submitBtn');
let content = document.getElementById('content');


let githubDiv = document.createElement('div');
githubDiv.className = "githubDiv"
let text = document.createElement('p');
text.innerText = "Your Github Profile is:"
let profileImg = document.createElement('img');
profileImg.className = "profileImg"
let name = document.createElement('p');
let username = document.createElement('p');
let bio = document.createElement('p');
let followers = document.createElement('p');
let following = document.createElement('p');
let publicRepos = document.createElement('p');
let visitProfile = document.createElement('a');
let fetchMsg = document.createElement('p');
fetchMsg.innerText = "Fetching profile..."

let errorMsg = document.createElement('p');
errorMsg.className = "errorMsg"
errorMsg.innerText = "* Please enter a valid github username"

let userNotFound = document.createElement('p');
userNotFound.className = "userNotFound"
userNotFound.innerText = "User not found!"

let url = "https://api.github.com/users";

async function fetchUser(value){
    content.append(fetchMsg);
    let githubProfile = url + "/" + value;
    try{
        let response = await fetch(githubProfile);  
        let data = await response.json();
        if(data.status === 404){
            githubDiv.className = ""
            fetchMsg.remove();
            content.append(userNotFound);
        }
        else{
            fetchMsg.remove();
            userNotFound.remove();
            addProfileInfo(data);
        }
    }
    catch(err){
        console.log("Error is: " + err);
    }
    inputBar.value = ""
}

function addProfileInfo(data){
    githubDiv.className = "githubDiv"
    profileImg.src = data.avatar_url;
    githubDiv.append(text) 
    name.innerText = `Name: ${data.name}`
    username.innerText = `Username: ${data.login}`;
    if(data.bio == null){
        bio.innerText = "No bio available!";
    }
    else{
        bio.innerText = `Bio: ${data.bio}`;
    }
    followers.innerText = `Followers: ${data.followers}`;
    following.innerText = `Following: ${data.following}`;
    publicRepos.innerText = `Public Repos: ${data.public_repos}`;
    visitProfile.href = data.html_url;
    visitProfile.text = "Visit Github Profile";
    visitProfile.target = "_blank"
    githubDiv.append(profileImg)
    githubDiv.append(name)
    githubDiv.append(username)
    githubDiv.append(bio)
    githubDiv.append(followers)
    githubDiv.append(following)
    githubDiv.append(publicRepos)
    githubDiv.append(visitProfile)
    
    body.append(githubDiv)
}

function validateInput(){
    if(inputBar.value.trim() === ""){
        githubDiv.innerHTML = ""
        if(userNotFound.innerText){
            userNotFound.remove()
        }
        content.append(errorMsg);;
        githubDiv.className = ""
    }
    else{
        errorMsg.remove();
        githubDiv.innerHTML = "";
        fetchUser(inputBar.value.trim())
    }
}

submitBtn.addEventListener('click', validateInput)


inputBar.addEventListener('keydown', function (event){
    if(event.key === 'Enter'){
        validateInput();
    }
})