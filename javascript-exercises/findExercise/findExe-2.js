var readline = require("readline-sync");
var users = [
  { id: 11, name: "Rein", email: "rein@rein.com", yearsXP: 5 },
  { id: 26, name: "Afaf", email: "Afaf@Afaf.com", yearsXP: 2 },
  { id: 35, name: "Bernard", email: "Bernard@Bernard.com", yearsXP: 1 },
  { id: 41, name: "James", email: "James@James.com", yearsXP: 0 },
];

// users.splice(0, 1); // delete 1 item

// var afaf = users[1];
// console.log(afaf);

// const user = users[1];

// var output;

// for (let index = 0; index < users.length; index++) {
//   const user = users[index];

//   console.log("Check", user.name, user.name === "Afaf");
//   if (user.name === "Afaf") {
//     var output = user;
//     break; // stop the for loop, we found it
//   }
// }

// console.log("AFAF?", output);

// 1. Desired output: user with id 35
user = users[0];
var output;
// var idFind = users.find(id === 35);
// console.log("check user", user.id, user.id === 35);

for (let index = 0; index < users.length; index++) {
  const user = users[index];
  console.log("check user", user.id === 35);
  if (user.id === 35) {
    var output = user;

    break;
  }
}
console.log("check35", output);
