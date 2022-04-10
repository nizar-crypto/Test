var readline = require("readline-sync");

var numbers = [4, 7, 8, 1, 2, 5, 0];

// 1. Desired output: all numbers added together (27)
// var output;
// number = numbers[0];
var accumulator = 0;
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  accumulator = accumulator + number;
  console.log("check accumulator", accumulator);
}
console.log("check output", accumulator);
// for (let index = 0; index < numbers.length; index++) {
//   const number = numbers[index];
//   console.log("CHECK", number);
//   accumulator = accumulator + number;
//   console.log("accumulator", accumulator);
// }

// console.log("OUTPUT:", accumulator);
