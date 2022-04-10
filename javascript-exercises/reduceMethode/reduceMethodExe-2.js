var readline = require("readline-sync");
var numbers = [4, 7, 8, 1, 2, 5, 0];

// 1. Desired output: all numbers added together (27)
// 2. Desired output: we start the number 50, subtract numbers in the array (23)
// 3. Desired output: what is the biggest number
// 4. Desired output: { even: [4, 8, 2, 0], uneven: [7, 1, 5] }

var total = numbers.reduce(function (accumulator, currentElementOfArray) {
  console.log(
    "ACCUMULATOR:",
    accumulator,
    "CURRENTVALUE:",
    currentElementOfArray
  );
  return accumulator + currentElementOfArray; // 0 + 4 -> 4, 4 + 7 -> 11
}, 0);

// console.log("TOTAL:", total);

// var output = numbers.reduce(function (accumulator, number) {
//   //   accumulator = 50; // set to 50 everytime!
//   console.log("ACC:", accumulator, number);
//   var newAccumulator = accumulator - number;
//   console.log("New:", newAccumulator);
//   return newAccumulator;
// }, 50);

// ????
// NUMBER? 4
// NUMBER? undefined
// NUMBER? undefined
// NUMBER? undefined
// NUMBER? undefined
// NUMBER? undefined
