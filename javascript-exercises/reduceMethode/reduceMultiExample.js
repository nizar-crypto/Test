var readline = require("readline-sync");
var numbers = [4, 6, 7, 1, 0, 5, 2, 10, 20, 2, 81, 101, 65, 22, 35, 11];

// Desired output:
// small -> smaller than 10
// medium -> bigger or equal to 10 AND smaller than 35
// large -> bigger or equal to 35
// {
//   small: [4, 6, 7, 1, 0, 5, 2, 2],
//   medium: [10, 20, 22, 11],
//   large: [81, 101, 65, 35],
// };

sortTheNumber = numbers.reduce(
  function (accumulator, number) {
    console.log("check accu", accumulator, "check number", number);
    if (number < 10) {
      accumulator.small.push(number);
    } else if (number >= 10 && number < 35) {
      accumulator.medium.push(number);
    } else if (number >= 35) {
      accumulator.large.push(number);
    }
    return accumulator;
  },
  { small: [], medium: [], large: [] }
);
console.log("check the output", sortTheNumber);
