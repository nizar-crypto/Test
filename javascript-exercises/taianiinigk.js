var readline = require("readline-sync");
var output = [];

var names = ["Rein Land", "Afaf Ibrahimi", "Max Deurzen"];
for (let index = 0; index < names.length; index++) {
  const name = names[index];
  //   var name = "Rein Land";
  var first = name[0];
  console.log(first);
  var second = name.split(" ");
  console.log(second);
  var secondInitial = second[1][0];
  console.log(secondInitial);
  var intitial = first + "." + secondInitial + ".";
  console.log(intitial);
  output.push(intitial);
}
console.log(output);
