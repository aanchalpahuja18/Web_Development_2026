//Mini Banking System Project

let balance = 1000;
let transactionHistory = [];

function deposit(amount){
    balance += amount;
    let str = `Deposited ${amount} to your account`
    transactionHistory.push(str);
}

function withdraw(amount){
    if(amount > balance){
        console.log("Insufficient Balance!");
        return;
    }
    else{
        balance -= amount;
        let str = `Withdrawn ${amount} from your account`
        transactionHistory.push(str);
    }
}

function showBalance(){
    console.log("Current balance is:", balance);
}

function showTransactionHistory(){
    for(let i=0;i<transactionHistory.length;i++){
        console.log(transactionHistory[i]);
    }
}

function checkTransactionType(type){
    let transactionType = [];
    if(type === 'deposit'){
       transactionType =  transactionHistory.filter((el) => {
           return el.includes("Deposited");
       })
    }
    else if(type === 'withdraw'){
        transactionType = transactionHistory.filter((el) => {
           return el.includes("Withdrawn");
        })
    }
    else{
        console.log("Invalid type!");
        
    }
    return transactionType;
}

showBalance();
deposit(1000);
deposit(2000);
withdraw(1000);
showTransactionHistory();
withdraw(10000);
showBalance()

let typeOfTransaction = checkTransactionType("deposit");
console.log(typeOfTransaction);
