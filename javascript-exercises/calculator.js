var readline = require("readline-sync");
var number1 = readline.questionFloat("give a number1 ?");
var number2 = readline.questionFloat("give a number2 ?");

function addition(num1, num2) {
  return num1 + num2;
}
var add = addition(number1, number2);
console.log(add);

// console.log(number1 + number2);
// var readline = require("readline-sync");
// var number1 = readline.questionInt("give a number?");
// var number2 = readline.questionInt("give a number?");
// console.log(number1 + number2);

// function olderThan18(age) {
//   return age > 18; // returns a boolean
// }

// var oldEnough = olderThan18(16);
