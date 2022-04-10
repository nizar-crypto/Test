var readline = require("readline-sync");
var europeanGrades = [8, 10, 6, 5, 7, 9, 4, 3];

// transformation: map (same number of inputs as outputs)
// desired output: ["A", "A+", "C", "F", "B+", "A+", "F", "F"]
var americanGrades = [];

for (let index = 0; index < europeanGrades.length; index++) {
  const euroGrade = europeanGrades[index];

  if (euroGrade > 0 && euroGrade < 5.5) {
    americanGrades.push("F");
  } else if (euroGrade >= 5.5 && euroGrade < 6) {
    americanGrades.push("D");
  } else if (euroGrade >= 6 && euroGrade < 6.5) {
    americanGrades.push("C");
  } else if (euroGrade >= 6.5 && euroGrade < 7) {
    americanGrades.push("B");
  } else if (euroGrade >= 7 && euroGrade < 7.5) {
    americanGrades.push("B+");
  } else if (euroGrade >= 7.5 && euroGrade < 8.5) {
    americanGrades.push("A");
  } else if (euroGrade >= 8.5) {
    americanGrades.push("A+");
  }
}

console.log(americanGrades);

// 1. Read & Understand the problem
// - input data
// - desired output

// 2. Make a plan
// - write down how you can transform 1 piece of data
// - "pseudo code" -> just use normal language

// 3. Writing the code (for 1 element at time)
// - Start looking for the methods or
// operators to transform your data
// - Apply conditional statments if needed

// 4. Generalise your solution (apply to all)
// - Use a for loop to transform all elementens
