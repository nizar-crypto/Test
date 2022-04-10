var readline = require("readline-sync");

var numbers = [4, 7, 8, 1, 2, 5, 0];

var accumulator = { evenNumber: 0, unevenNumber: 0 };

for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  console.log(" number", number);
  if (number % 2 == 0) {
    console.log("Even Number");
    accumulator.evenNumber = accumulator.evenNumber + 1;
  } else {
    console.log("Uneven Number");
    accumulator.unevenNumber = accumulator.unevenNumber + 1;
  }
}
console.log("Check output", accumulator);
