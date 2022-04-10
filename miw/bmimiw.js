const readline = require("readline-sync");
const height = readline.questionFloat("how tall are you? ");
const weight = readline.questionFloat("how much do you weigh? ");

function calculateBMI(weight, height) {
  return (weight / (height * height)).toFixed(2);
}
const bmi = calculateBMI(weight, height);
// console.log("Your BMI is  " + bmi);
