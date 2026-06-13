//fetching all the elements:

let expName = document.getElementById('expense-name');
let expAmt = document.getElementById('expense-amt');
let expCategory = document.getElementById('category');

let addExpBtn = document.getElementById('add-expense');
let expNameDiv = document.getElementById('exp-name-box');
let expAmtDiv = document.getElementById('exp-amt-box');
let expCatDiv = document.getElementById('exp-cat-box');

let errorMsgName = document.createElement('p');

let errorMsgAmt = document.createElement('p');

let errorMsgCat = document.createElement('p');

class Expense {
    name;
    amount;
    category;
    id;
    constructor(expenseName, expenseAmount, expenseCategory){
        this.name = expenseName;
        this.amount = expenseAmount;
        this.category = expenseCategory
        this.id = Date.now();
    }

    getExpenses() {
        console.log("Name of expense is: " + this.name);
        console.log("Amount of expense is: " + this.amount);
        console.log("Category of expense is: " + this.category);
    }

}

//add Expenses:

let expensesArr = [];

let expenseDiv = document.createElement('div');
let expenseBox = document.getElementById('expense-box');
expenseBox.append(expenseDiv);
let inputForm = document.getElementById('input-box');

let totalExpenses = 0;

let totalInfo = document.createElement('p');
totalInfo.innerText = `Total amt spend is: ${totalExpenses}` 
totalInfo.className = "total-info";

expenseBox.insertAdjacentElement('afterend',totalInfo);

function addExpenses(name, amt, category){
    let expense = new Expense(name, amt, category);
    expensesArr.push(expense);
    showExpenses(expensesArr);
    totalExpenses += Number(expense.amount);
    totalInfo.innerText = `Total amt spend is: ${totalExpenses}` 
    inputForm.reset()
}

function showExpenses(arr){
    expenseDiv.innerHTML = "";
    arr.forEach(element => {
        let expenseList = document.createElement('p');
        expenseList.textContent = `Your spent ${element.amount} on ${element.name}`
        let expenseInfo = document.createElement('div');
        expenseInfo.dataset.id = element.id;
        expenseInfo.append(expenseList)
        let expenseRemove = document.createElement('button');
        expenseRemove.className = "expense-remove";
        expenseRemove.textContent = "Remove expense"
        expenseInfo.append(expenseRemove);
        expenseDiv.append(expenseInfo)
        expenseRemove.addEventListener('click', removeExpense);
    });
}

function removeExpense(event){
    let id = Number(event.target.parentElement.dataset.id);
    let removed = expensesArr.find((element)=>element.id == id);
    expensesArr = expensesArr.filter((el) => el.id != id);
    totalExpenses -= Number(removed.amount);
    totalInfo.innerText = `Total amt spend is: ${totalExpenses}` 
    showExpenses(expensesArr);
}



function validateInputs(name, amt, category){
    if(name == ""){
        errorMsgName.innerText = "Please enter correct value for name!";
        expNameDiv.append(errorMsgName)
        return false;
    }
    else if(amt <= 0){
        errorMsgAmt.innerText = "Please enter correct value for amount!";
        expAmtDiv.append(errorMsgAmt)
        return false;
    }
    else if(category == 'select'){
        errorMsgCat.innerText = "Please enter correct value for category!"
        expCatDiv.append(errorMsgCat)
        return false;
    }
    else{
        errorMsgName.innerText = "";
        errorMsgAmt.innerText = "";
        errorMsgCat.innerText = "";
        return true;
    }
}

function renderExpenses(event){
    event.preventDefault();
    let name = expName.value;
    let amt = expAmt.value;
    let category = expCategory.value
    if(validateInputs(name, amt, category) == true){
        addExpenses(name, amt, category);
    }
    else{
        console.log("Please input correct values"); 
    }
}

addExpBtn.addEventListener('click', renderExpenses)

//filter expenses:

let filterBtn = document.getElementById('filter-btn');
let filterInput = document.getElementById('filterCategory');

function filterExpenses(){
    let expCategory = filterInput.value;

    if(expCategory === 'select'){
        showExpenses(expensesArr);
        return;
    }
    let filteredArr = expensesArr.filter((element) => {
        return element.category == expCategory;
    })
    showExpenses(filteredArr);
}


filterBtn.addEventListener('click', filterExpenses)
