//fetching the elements:
let inputTask = document.getElementById('inputTask');
let inputBtn = document.getElementById('inputBtn');
let todoContent = document.getElementById('todo-content');
let inputBox = document.getElementById('inputBox');

let errorMsg = document.createElement('p');
errorMsg.innerText = "* Please enter a valid todo!"
errorMsg.className = "errorMsg"

let todoArr = [];

class Todo{
    id; 
    text;
    createdAt;

    constructor(newText){
        this.id = Date.now();
        this.text = newText;
        this.createdAt = (new Date()).toLocaleString();
    }
}

function renderTodo(todoArr){
    todoContent.innerHTML = ""
    todoArr.forEach((el) => {
        let todoDiv = document.createElement('div');
        todoDiv.className = "todo-div"
        let todoText = document.createElement('span');
        todoText.className = "todo-text"
        let todoCompleted = document.createElement('button');
        todoCompleted.className = "todoCompletedBtn";
        todoCompleted.innerText = "Done"
        let todoRemove = document.createElement('button');
        todoRemove.className = "todoRemoveBtn";
        let createdText = document.createElement('p');
        let todoTextInfo = document.createElement('div');
        todoText.innerText = el.text;
        todoRemove.innerText = "Remove";
        todoDiv.dataset.id = el.id;
        createdText.innerText = `(Created at: ${el.createdAt})`
        createdText.className = "createdText";
        todoTextInfo.className = "todoTextInfo"
        todoTextInfo.append(todoText);
        todoTextInfo.append(createdText)
        todoDiv.append(todoTextInfo);
        todoDiv.append(todoCompleted);
        todoDiv.append(todoRemove);
        todoContent.append(todoDiv);  
        todoRemove.addEventListener('click', removeTodo);
        todoCompleted.addEventListener('click', completedTodo);
    })
}

function addTodo(){
    if(inputTask.value.trim() === ""){
        inputBox.append(errorMsg)
    }
    else{
        errorMsg.remove();
        let todo = new Todo(inputTask.value);
        todoArr.push(todo);
        inputTask.value = "";
        renderTodo(todoArr);
    }
}

inputBtn.addEventListener('click', addTodo);

function removeTodo(event){
    // setTimeout(function animation(){
    //     let element = event.target.parentElement;
    //     element.className = "removedTask"
    // }, 100);   
    let id = event.target.parentElement.dataset.id;
    todoArr = todoArr.filter((el) => el.id != id);
    renderTodo(todoArr)
}

function completedTodo(event){
    let parentElement = event.target.parentElement;
    let childDiv = parentElement.querySelector('.todo-text');
    childDiv.classList.add('todo-done')
}