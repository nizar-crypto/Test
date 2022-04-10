var readline = require("readline-sync");

var readline = require("readline-sync");
var names = ["Rein Land", "Afaf Ibrahimi", "Max Deurzen"];
var output = [];
// desired output: ["R.", "A.", "M."]

for (let index = 0; index < names.length; index++) {
  const name = names[index];

  var names = ["Rein Land", "Afaf Ibrahimi", "Max Deurzen"];
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

  let initials = [...name.matchAll(rgx)] || [];

  initials = (
    (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
  ).toUpperCase();

  console.log(initials);
  output.push(initials);
}
console.log(output);
// desired output: ["R. L.", "A. I.", "M. D."]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// "rein land"getInitials(name);
// getInitials()
// var name = "Rein";
// var intitial = "rein".getInitials(name);
// console.log("check initial", initial);

// "Tommy Lee Jones".getInitials();

let name = "Rein land";
let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

let initials = [...name.matchAll(rgx)] || [];

initials = (
  (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
).toUpperCase();

console.log(initials);
