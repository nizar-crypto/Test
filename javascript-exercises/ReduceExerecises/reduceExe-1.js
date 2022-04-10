readline = require("readline-sync");
var numbers = [3, 6, -1, 2, 10];
// memorizing a value in between processing
// memoized value, we are memoizing values
var totalSoFar = 20;
var lowestNumberSoFar = -1;

// Desired output: 28
// is this a map? X not array as output, not the same amount of element
// is a filter? X data is transformed, not array as output
// is a find? 28 is not in the array

// reduce (probably)

// var accumulator = 0; // this "gathers" the output

// for (let index = 0; index < numbers.length; index++) {
//   const number = numbers[index];
//   console.log("CHECK", number);
//   accumulator = accumulator + number;
//   console.log("accumulator", accumulator);
// }

// console.log("OUTPUT:", accumulator);

var lowest = null;

for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  console.log("CHECK", number, "LOWEST SO FAR", lowest);
  if (lowest === null) {
    // if we have no lowest number, it will be the first one - to start
    lowest = number;
  } else if (number < lowest) {
    lowest = number; // the current number is éven smaller than the smallest so far
  }
}
