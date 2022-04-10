var readline = require("readline-sync");
var correctUserName = "Nizar";
var correctPassWord = "like";
var balance = 2222;
var userIban = "nl39ingb849569684888";
var isUserLoggedIn = false;

function start() {
  if (isUserLoggedIn === true) {
    show();
  } else {
    login();
  }
}

function login() {
  var userName = readline.question("Enter your username: ");
  if (userName === correctUserName) {
    passWord();
  } else {
    console.log("Username not found. Please try again");
    login();
  }
}

function passWord() {
  var passwordInput = readline.question("Enter your password: ");
  if (passwordInput === correctPassWord) {
    console.log("Welcome");
    isUserLoggedIn = true;
    start();
  } else {
    console.log("Password not found. Please try again");
    passWord();
  }
}

function show() {
  console.log("Your balance", userIban, ":", balance);
  displayMenu();
}
function displayMenu() {
  var selectedOption = readline.question(`
What would you like to do:

a:Deposit
b:Transfer
c:Logout
d:Logout and Quit
Choose a, b, c or d

Your choice: `);
  if (selectedOption === "a") {
    balance = depositAmount(balance);
    show();
  } else if (selectedOption === "b") {
    balance = transfer(balance);
    show();
  } else if (selectedOption === "c") {
    isUserLoggedIn = false;
    start();
  } else if (selectedOption === "d") {
    isUserLoggedIn = false;
    process.exit();
  } else {
    console.log("choose a, b, c or d");
    displayMenu();
  }
}

function depositAmount(balance) {
  var depositMoney = readline.questionFloat(`
How much do you want to deposit?
--------------------------------
Enter an amount: `);
  return depositMoney + balance;
}

function transfer(currentBalance) {
  var transferTo = readline.question(`
To whom do you want to transfer money? 
--------------------------------------
Enter a name: `);
  var transferMoney = readline.questionFloat(`
How much do you want to transfer ?  
---------------------------------- 
Enter an amount: `);
  if (transferMoney > 0) {
    return currentBalance - transferMoney;
  } else {
    console.log("Use a valid number.Try again ");
    transfer(currentBalance);
  }
  // return currentBalance - transferMoney;
}

start();
