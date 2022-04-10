var readline = require("readline-sync");
var correctUserName = "Nizar";
var correctPassWord = "like";
var balance = 2222;
var userIban = "nl39ingb849569684888";
var isUserLoggedIn = false;
var checkStatue = "check user state";
function start() {
  console.log("start");
  if (isUserLoggedIn === true) {
    console.log("next");
  } else {
    // userName1();?
    console.log("hello");
  }
}
function inloggen() {
  if (isUserLoggedIn === true) {
    console.log("Welcome");
    return (isUserLoggedIn = true);
  } else {
    userName1();
    inloggen();
  }
}
inloggen();
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
    // console.log("Welcome");
    inloggen();
  } else {
    console.log(" Password not found .please, try again");
    passWord();
  }
}
// userName1();
// start();

function option() {
  var chooseOption = readline.keyInPause(`
    Choose one options please :
    a:Deposit
    b:Transfer
    c: logout
    C`);
}
