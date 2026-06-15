//Async Await in JS:


//creation of async function
// async function getData(){
//     setTimeout(function(){
//         console.log("Aanchal Pahuja");
        
//     }, 3000);
// }

// getData();

//fetch api and importance of await:

// async function getData(){
    //1. get request => async operation

//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    
    //2. parse the response => async operation

//     let data = await response.json();
    //process data
//     console.log(data);
// }

// getData();

//scenario:

//1. prepare url/endpoint => sync operation
//2. fetch data => async operation => await fetch data turns into sync operation
//3. process data => sync operation

//postData:

let options = {
  method: 'POST',
  body: JSON.stringify({
    title: 'Aanchal',
    body: 'Pahuja',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
};

let url = "https://jsonplaceholder.typicode.com/posts";

async function postData(){
    let data = await fetch(url, options);
    console.log(data);
    
}

async function getData(){
    let response = await fetch(url);

    let data = await  response.json();
    console.log(data);
    
}

async function processData(){
    await postData();
    await getData();
}

processData();