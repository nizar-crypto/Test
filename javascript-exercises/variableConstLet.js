// var output = add(2, 4);
// function definition:
// - function keyword
// - these functions are "defined"
//   before the program executes
// - this is known as "hoisting"
// - definitions are pulled to the top (under the hood)
// function add(number1, number2) {
//   console.log("CHECK: ", number1, number2);
//   return number1 + number2;
// }

// console.log("OUTPUT:", output);

// function definition
// - arrow function
// - you save a arrow function in variable
// - arrow functions are not "hoisted"
// - if you call an arrow function before it is defined
// - you get an error!
// var add = (number1, number2) => {
//     console.log("CHECK: ", number1, number2);
//     return number1 + number2;
// };
// var output = add(2, 4);

// console.log("OUTPUT ARROW:", output);

// function syntax (shorter: 1)
// - When a function only returns a new value (maybe it calculates it ...)
// - you can remove the return keyword and the curly braces
// - "implicit" return
// var add = (number1, number2) => number1 + number2;

// var output = add(2, 4);
// console.log("OUTPUT ARROW:", output);

// function syntax (shorter: 1)
// - when you have only 1 parameter, you can leave out the parenthesis
// var allCaps = word => word.toUpperCase();

// var output = allCaps("hello");
// console.log("CHECK:", output);

var numbers = [0, 2, 5, 7, 8];
// output: [0, 4, 5, 7, 16]

// var output = numbers.map((number) => number * 2);
// var output = numbers.map(function (number) {
//   return number * 2;
// });
// console.log("OUTPUT:", output);

// DOES NOT WORK...
// var output = numbers.map((number) => if(number % 2 === 0){
//  number * 2
// } else {
//  number
// })

// DOES WORK
// var output = numbers.map((number) => {
//   if (number % 2 === 0) {
//     return number * 2;
//   } else {
//     return number;
//   }
// });

// Not easy to check.. when you write short straight away
// Might lead to guessing
// var output = numbers.map((number) => console.log("CHECK", number * 2)number * 2); // guessing??

// Write like this first:
var output = numbers.map((number) => {
  console.log("CHECK");
  return number * 2;
});
// When it works:
// - change to this in cleanup phase
var output = numbers.map((number) => number * 2);
console.log("OUTPUT:", output);

// More examples:

var even = numbers.filter((number) => number % 2 === 0);
console.log("EVEN:", even);
var sum = numbers.reduce((acc, number) => acc + number, 0);
console.log("SUM:", sum);

// Complete beginners
// Copy paste, no logs
// Huh!? What happened??

// Beginner:
// Check every 1, 2 lines - understand what is happening
// Check yourself (before you wreck yourself)

// Intermediate Beginner:
// Write a map or reduce in 1 line
// If it doesn't work you add the console.logs to debug
// If error -> ah, I need logs to understand what went wrong
// Guess 1 time -> if not -> check yourself

// Arrow functions and "this", the this keyword
// Some other time
