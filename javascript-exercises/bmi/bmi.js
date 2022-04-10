var readline = require("readline-sync");
var tall = readline.questionFloat("how tall are you? ");
var weight = readline.question("how much do you weigh? ");
var bmi = (weight / (tall * tall)).toFixed(2);
// console.log(bmi);
// if bmi <18 we want to console log you might be under weight
// if bmi >18 but < 25 we want to say looks good
// if bmi is bigger than 25 we want to say you might be over weight
if (bmi < 18) {
  bmi = "you might be under weight";
} else if (bmi > 18 && bmi < 25) {
  bmi = "we want to say looks good";
} else {
  bmi = "you might be over weight";
}
console.log(bmi);
