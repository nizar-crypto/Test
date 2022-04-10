var readline = require("readline-sync");
var correctUserName = "Nizar";
var correctPassWord = "like";
var balance = 2222;
var userIban = "nl39ingb849569684888";
var isUserLoggedIn = false;
// var userNameQuestion = readline.question(" Enter your user name, please  ");
// var passWordQuestion = readline.question(" Enter your password , please");
// var checkStatue = "check user state";
function start() {
  console.log("start");
  if (isUserLoggedIn === true) {
    // inloggen();
    show();
  } else {
    userName1();
    // passWord();
  }
}

// function logIn() {
//   var inloggen = readline.keyInPause("welcome , your balance is ", balance);
// var inloggen = readline.keyInPause(isLoggedIn);
// if(inloggen=== true){
//     console.log("next");
// }else(inloggen=== false){
//     console.log(next);
// }
// }

function userName1() {
  var userlog = readline.question("enter your username");
  console.log(userlog);
  if (userlog === correctUserName) {
    // console.log("Enter the password ,please");
    passWord();
  } else {
    console.log(" UserName not found .please, try again");
    userName1();
  }
}

function passWord() {
  var passLog = readline.question("enter your password, please");
  console.log(passLog);
  if (passLog === correctPassWord) {
    console.log("Welcome");
    isUserLoggedIn = true;
    start();
  } else {
    console.log(" Password not found .please, try again");
    passWord();
  }
}

function show() {
  console.log(userIban);
  console.log(balance);
  option();
}
function option() {
  var chooseOption = readline.question(`
    Choose one options please :
    a:Deposit
    b:Transfer
    c: logout
    d:logout and quit
    Choose a, b , c or d`);
  if (chooseOption === "a") {
    // console.log("next");

    var newBalance = depositAmount(balance);
    balance = newBalance; //here I update the amount of the new balance
    // console.log("checking the new balance", balance);
    // console.log("checking return value", newBalance);
    show();
  } else if (chooseOption === "b") {
    // console.log("next");
    //transfer(balance); // here I passed the state (I added befor currentBalance it gave me error because
    // I pass a parameter)
    var balanceAfterTransfer = transfer(balance);
    balance = balanceAfterTransfer;
    console.log("New balance after transfer", balance);
    console.log("return value of the transfer function", balanceAfterTransfer);
    show();
  } else if (chooseOption === "c") {
    isUserLoggedIn = false;
    start();
  } else if (chooseOption === "d") {
    isUserLoggedIn = false;
    process.exit();
  } else {
    console.log("choose a, b , c or d");
    option();
  }
}

function depositAmount(balance) {
  //I don't  have to add another parameter because deposit amount is requested inside this function
  // console.log(" check", balance);
  var depositMoney = readline.questionFloat(`
  How much do you want to deposit?
  --------------------------------
  (enter an amount ,please )`);
  // console.log(depositMoney);
  // console.log(depositMoney + balance);
  return depositMoney + balance;
}
// var total = depositAmount(depositMoney, balance);
// console.log(total);
// function transferMoney() {
// console.log(transfer);
// howMuchTransfer(balance); // we should add as an argument here (remark give the variable a different
// name than parameter)
// }
function depositAmount(balance) {
  //I don't  have to add another parameter because deposit amount is requested inside this function
  // console.log(" check", balance);
  var depositMoney = readline.questionFloat(`
  How much do you want to deposit?
  --------------------------------
  (enter an amount ,please )`);
  // console.log(depositMoney);
  // console.log(depositMoney + balance);
  return depositMoney + balance;
}

function transfer(currentBalance) {
  var transferTo = readline.question(`
  To whom do you want to transfer money? 
  --------------------------------------
   `);
  var transferMoney = readline.questionFloat(
    `How much do you want to transfer ?  
     ---------------------------------- 
     (enter an amount ,please ) `
  );
  return currentBalance - transferMoney;
  console.log(
    "checking math",
    currentBalance - transferMoney
    // currentBalance,
    //transferMoney
  );
}

start();
// var finalBalance = howMuchTransfer(transferMoney, balance);
// console.log("Your balance now is  ", finalBalance);
// depositAmount();
