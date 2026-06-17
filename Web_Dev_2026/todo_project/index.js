//fetching the elements:
let inputTask = document.getElementById('inputTask');
let inputBtn = document.getElementById('inputBtn');
let todoContent = document.getElementById('todo-content');

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

    // getTodo(){
    //     console.log("Todo's id: " + this.id);
    //     console.log("Todo's created status: " + this.createdAt);
    //     console.log("Todo's text: " + this.text);
    // }
}

function renderTodo(todoArr){
    todoContent.innerHTML = ""
    todoArr.forEach((el) => {
        let todoDiv = document.createElement('div');
        todoDiv.className = "todo-div"
        let todoText = document.createElement('span');
        todoText.className = "todo-text"
        let todoRemove = document.createElement('button');
        todoRemove.className = "todoRemoveBtn";
        let createdText = document.createElement('p');
        let todoTextInfo = document.createElement('div');
        todoText.innerText = el.text;
        todoRemove.innerText = "Done";
        todoDiv.dataset.id = el.id;
        createdText.innerText = `(Created at: ${el.createdAt})`
        createdText.className = "createdText";
        todoTextInfo.className = "todoTextInfo"
        todoTextInfo.append(todoText);
        todoTextInfo.append(createdText)
        todoDiv.append(todoTextInfo);
        todoDiv.append(todoRemove);
        todoContent.append(todoDiv);  
        todoRemove.addEventListener('click', removeTodo);
    })
}

function addTodo(){
    if(inputTask.value === ""){
        alert("Please enter a valid todo!")
    }
    else{
        let todo = new Todo(inputTask.value);
        todoArr.push(todo);
        inputTask.value = "";
        renderTodo(todoArr);
    }
}

inputBtn.addEventListener('click', addTodo);

function removeTodo(event){
    let id = event.target.parentElement.dataset.id;
    let element = event.target.parentElement;
    todoArr = todoArr.filter((el) => el.id != id);
    element.className = "removedTask"
    renderTodo(todoArr)
}