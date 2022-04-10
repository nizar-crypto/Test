var readline = require("readline-sync");
var europeanGrades = [8, 10, 6, 5, 7, 9, 4, 3];

// transformation: map (same number of inputs as outputs)
// desired output: ["A", "A+", "C", "F", "B+", "A+", "F", "F"]

var output = europeanGrades.map(function (europeanGrade) {
  console.log(" Check GRADES", europeanGrade);
  if (europeanGrade > 0 && europeanGrade < 5.5) {
    return "F";
  } else if (europeanGrade >= 5.5 && europeanGrade < 6) {
    return "D";
  } else if (europeanGrade >= 6 && europeanGrade < 6.5) {
    return "C";
  } else if (europeanGrade >= 6.5 && europeanGrade < 7) {
    return "B";
  } else if (europeanGrade >= 7 && europeanGrade < 7.5) {
    return "B+";
  } else if (europeanGrade >= 7.5 && europeanGrade < 8.5) {
    return "A";
  } else if (europeanGrade >= 8.5) {
    return "A+";
  }
});
console.log("AMERICAN GRADES: ", output);
