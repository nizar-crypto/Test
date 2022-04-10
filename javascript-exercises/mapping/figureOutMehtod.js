var readline = require("readline-sync");

var students = [
  "Max",
  "Afaf",
  "Bernard",
  "Arnoud",
  "Sharon",
  "Syakirah",
  "Jamie",
  "Nizar",
];

// What methods would you use to figure out the following:
// Check available methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#

// 1. What method can we use to add a student to this array
students.push("test");
console.log("Check push:", students);

// 2. What method can we use to remove a student from this specific array
students.pop();
console.log("Check pop", students);

students.shift();
console.log("Check shift", students);

students.splice(0, 1);
console.log("check splice", students);
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding 
new elements in place. To access part of an array without modifying it

students = students.slice(0, students.length - 1);
console.log("Check slice", students);

// 3. What method can we use to find the index of student "Arnoud"

// var findWord = students.find(elem = elem ==="Arnoud");

// function isArnoud(students) {
//   return students.Arnoud === "Arnoud";
// }

// console.log(students.find(isArnoud));
console.log("check index of", students.indexOf("Arnoud"));

// 4. What method can we use to check whether student "James" in this array?
// var isInArray = students.indexOf("James");
var isInArray = students.includes("James");

console.log("Check includes", isInArray);

// 5. What method can we use to sort this array alphabetically?
students.sort();
console.log("Check sort", students);
// 6. What method can we use to reverse the order of this array?
var reversed = students.reverse();
console.log("reversed:", students);
