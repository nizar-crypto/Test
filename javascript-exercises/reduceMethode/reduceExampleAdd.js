var numbers = [5, 7, 8, 1, 2, 5, 0];
console.log(numbers);
// var total = numbers.reduce(function (accumulator, number) {
//   console.log("check accumlator", accumulator, "check number", number);
//   return accumulator + number;
// }, 0);
// console.log("check total", total);

// //accumulator example 50 - number....

// var total = numbers.reduce(function (accumlator, number) {
//   console.log("check accumlator", accumlator, "check number", number);
//   return accumlator - number;
// }, 50);
// console.log("check total", total);

// //biggest number example
// var biggestNumberAtTheEnd = numbers.reduce(function (
//   biggestNumberSoFar,
//   number
// ) {
//   console.log("check accumlator", biggestNumberSoFar, "CHECK NUMBER", number);
//   console.log("Is the current number biggest", number > biggestNumberSoFar);
//   if (number > biggestNumberSoFar) {
//     return number;
//   } else {
//     return biggestNumberSoFar;
//   }
// });
// console.log("biggestNumber at the end: ", biggestNumberAtTheEnd);

// the lowest number example
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
