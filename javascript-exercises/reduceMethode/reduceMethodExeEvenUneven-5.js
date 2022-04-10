var readline = require("readline-sync");

var numbers = [4, 7, 8, 1, 2, 5, 0];

var evenUneven = numbers.reduce(
  function (accumulator, number) {
    console.log("check accummlator", accumulator, "check number", number);
    if (number % 2 == 0) {
      accumulator.evenNumber = accumulator.evenNumber + 1;
    } else {
      accumulator.unevenNumber = accumulator.unevenNumber + 1;
    }
    console.log("check the accumlator", accumulator);
    return accumulator;
  },
  {
    evenNumber: 0,
    unevenNumber: 0,
  }
);
console.log("check output", evenUneven);
