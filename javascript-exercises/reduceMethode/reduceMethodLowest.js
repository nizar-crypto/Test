var readline = require("readline-sync");
var numbers = [4, 7, 8, 1, 2, 5, 0];

// 1. Desired output: all numbers added together (27)
// 2. Desired output: we start the number 50, subtract numbers in the array (23)
// 3. Desired output: what is the biggest number
// 4. Desired output: { even: [4, 8, 2, 0], uneven: [7, 1, 5] }

var lowestNumberAtTheEnd = numbers.reduce(function (lowestNumberSoFar, number) {
  console.log("check accumlator", lowestNumberSoFar, "CHECK NUMBER", number);
  console.log("Is the current number lowest", number < lowestNumberSoFar);
  if (number < lowestNumberSoFar) {
    return number;
  } else {
    return lowestNumberSoFar;
  }
});
console.log("lowest Number at the end: ", lowestNumberAtTheEnd);
