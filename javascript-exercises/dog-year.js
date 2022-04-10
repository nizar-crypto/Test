// line 2 import readline sync
var readline = require("readline-sync");
// here is a variable,it is assigned a value by the user using readline.questionfloat
var userInput = readline.questionFloat("how old are you? ");
console.log(userInput);
// I define a function dogYear it has a parameter(place holder) age (cant have a value)
function dogYear(age) {
  return (age / 7).toFixed(2);
}
// it is a variable and we assign it a value by calling the dogYear function
// and we pass the userInput as an argument
var howOld = dogYear(userInput); //here is user input
console.log(howOld);

// var dogYear = age.toFixed(2);
// console.log((dogYear / 7).toFixed(2));
// 3;
