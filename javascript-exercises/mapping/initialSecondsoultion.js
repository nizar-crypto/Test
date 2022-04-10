var readline = require("readline-sync");

var names = ["Rein Land", "Afaf Ibrahimi", "Max Deurzen"];

// desired output: ["R. L.", "A. I.", "M. D."]
// take first letter of first word, put a dot and a space behind
// take first letter of second word, put a dot behind

// "R. " + "L."

var output = [];

// for (let index = 0; index < names.length; index++) {
//   // var name = "Rein Land"; // ["Rein", "Land"]

//   const name = names[index];

//   var firstLetter = name[0];
//   var splitUpNames = name.split(" ");
//   var lastName = splitUpNames[1];
//   var secondLetter = lastName[0];

//   console.log("first", firstLetter);
//   console.log("Second name", secondLetter);

//   var initials = firstLetter + ". " + secondLetter + ".";

//   console.log(initials);
//   output.push(initials);
// }
// console.log(output);

for (let index = 0; index < names.length; index++) {
  // var name = "Rein Land"; // ["Rein", "Land"]

  const name = names[index];
  var firstInitial = name[0];
  var secondInitial = name.split(" ")[1][0];

  var initials = `${firstInitial}. ${secondInitial}.`;

  console.log(initials);
  output.push(initials);
}
console.log(output);
