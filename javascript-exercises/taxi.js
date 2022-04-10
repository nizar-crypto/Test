var readline = require("readline-sync");

var costPerKilo = 2;
var distance = readline.questionFloat(
  "how many kilometer have you travelled? "
);
// console.log("you shold pay ", costPerKilo * distance + "$");
function pay(costPerKilo, distance) {
  return distance * costPerKilo + "$";
}
var youPay = pay(costPerKilo, distance);
console.log(youPay);
