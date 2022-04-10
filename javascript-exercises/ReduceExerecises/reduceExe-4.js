var readline = require("readline-sync");

var numbers = [4, 7, 8, 1, 2, 5, 0];

// 3. Desired output: what is the biggest number

var biggest = null;
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  if (biggest === null) {
    biggest = number;
  } else if (number > biggest) {
    biggest = number;
  }
  console.log("Check number", number, ",biggest so far", biggest);
}
