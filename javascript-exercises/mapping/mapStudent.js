var readline = require("readline-sync");

var students = ["Arnoud", "Bernard", "max", "afaf", "Syakirah"];
console.log(students);

for (var index = 0; index < students.length; index = index + 1) {
  const student = students[index];

  console.log("1 student: ", student);

  students[index] = student.toLowerCase();
  console.log(students);
}

students.sort();

console.log(students);
