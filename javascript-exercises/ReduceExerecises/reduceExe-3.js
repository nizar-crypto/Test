var readline = require("readline-sync");

var numbers = [4, 7, 8, 1, 2, 5, 0];

// 2. Desired output: we start the number 50, subtract numbers in the array (23)
var accumulator = 50;
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  accumulator = accumulator - number;
  console.log("check accumulator", accumulator);
}
console.log("check output", accumulator);
