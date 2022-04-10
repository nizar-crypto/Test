var readline = require("readline-sync");
var users = [
  { id: 1, name: "Rein", email: "rein@rein.com", yearsXP: 5 },
  { id: 2, name: "Afaf", email: "Afaf@Afaf.com", yearsXP: 2 },
  { id: 3, name: "Bernard", email: "Bernard@Bernard.com", yearsXP: 1 },
  { id: 4, name: "James", email: "James@James.com", yearsXP: 0 },
];

// 2. Desires output: all users with an even id (id's 2 & 4)
var output = [];
var user = users[1];
for (let index = 0; index < users.length; index++) {
  const user = users[index];
  var evenId = user.id;
  // console.log("check id ", evenId);

  if (evenId % 2 == 0) {
    console.log("check if even", user);
    output.push(user); //moved the line inside if to push in the right place
  }
}
console.log(output);
