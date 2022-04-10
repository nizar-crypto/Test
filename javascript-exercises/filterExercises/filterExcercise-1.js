var readline = require("readline-sync");
var users = [
  { id: 1, name: "Rein", email: "rein@rein.com", yearsXP: 5 },
  { id: 2, name: "Afaf", email: "Afaf@Afaf.com", yearsXP: 2 },
  { id: 3, name: "Bernard", email: "Bernard@Bernard.com", yearsXP: 1 },
  { id: 4, name: "James", email: "James@James.com", yearsXP: 0 },
];

// var output = [];

// for (let index = 0; index < users.length; index++) {
//   const user = users[index];

//   var nameContainsAnN = user.name.includes("n");
//   if (nameContainsAnN === true) {
//     output.push(user);
//   }

//   console.log("check", nameContainsAnN);
// }

// console.log("OUTPUT:", output);

// 1. Desired output: all users with 2 years of XP or more
// console.log("check user", user);
var output = [];
// var user = users[0];

for (let index = 0; index < users.length; index++) {
  const user = users[index];
  var twoYearsExperience = user.yearsXP;
  // console.log("check 2 years ", twoYearsExperience);

  if (twoYearsExperience >= 2) {
    console.log("CHEK if", user);
    output.push(user); //
  }
}
console.log("CHECK OUTPUT", output);
