// var readline = require("readline-sync");

// var answer = readline.question("what is your name?");
// console.log(answer);
// var answer = readline.question("what is your name?");

// var currentUser = "Rein";
// console.log("The current user is:", currentUser);
// // var currentUser = "Rein";
// // var job = "developer";
// // var hobby = "playing games";

// // console.log("The current user is:", currentUser);
// // console.log(currentUser, "works as a", job);
// // console.log(currentUser, "enjoys", hobby);
// // //var answer = readline.question("what is your name?");
// // var favoriteActivity = "Programming";
// // console.log(favoriteActivity);

// // var language1 = "Dutch";
// // var language2 = "English";
// // var exoticDestination = "Vancouver, Canada";
// // console.log(currentUser, "speaks", language1, "and", language2);

// // var readline = require("readline-sync");

// // var currentUser = readline.question(
// //   "Please type your username and press enter: "
// // );

// // console.log("The current user is:", currentUser);

// var readline = require("readline-sync");
// var currentUser = readline.question(
//   "Please enter your username and press enter: "
// );
// var favoriteActivity = readline.question("What is your favorite thing to do? ");
// var language1 = readline.question("What is your native language? ");
// var language2 = readline.question("What is your favorite foreign language? ");
// var exoticDestination = readline.question(
//   "What is the furthest you have travelled? "
// );
// var dateOfBirth = readline.question("what is your date of birth? ");
// console.log("The current user is:", currentUser);
// console.log(currentUser, "was born on", dateOfBirth);
// console.log(currentUser, "enjoys", favoriteActivity);
// console.log(currentUser, "speaks", language1, "and", language2);

var readline = require("readline-sync");
var currentUser = readline.question("what is your name?");
var language1 = readline.question("what is your native language?");
var language2 = readline.question("what is your favorite langya");
console.log("the user is ", currentUser.toUpperCase());
console.log(currentUser, "speaks", language1, "and", language2);
var questionNativeLanguage = currentUser + " what is your native language? ";
var language1 = readline.question(questionNativeLanguage);

// var questionForeignLanguage = "Besides " + language1 + " what other language do you speak? "
// var language2 = readline.question(questionForeignLanguage)

// console.log(currentUser, "speaks", language1, "&", language2);
