var readline = requier("readline-sync");
var users = [
  { id: 1, name: "Rein", email: "rein@rein.com", yearsXP: 5 },
  { id: 2, name: "Afaf", email: "Afaf@Afaf.com", yearsXP: 2 },
  { id: 3, name: "Bernard", email: "Bernard@Bernard.com", yearsXP: 1 },
  { id: 4, name: "James", email: "James@James.com", yearsXP: 0 },
];

var output = [];

for (let index = 0; index < users.length; index++) {
  const user = users[index];

  var nameContainsAnN = user.name.includes("n");
  if (nameContainsAnN === true) {
    output.push(user);
  }

  console.log("check", nameContainsAnN);
}

console.log("OUTPUT:", output);

// 1. Desired output: all users with 2 years of XP or more
// 2. Desires output: all users with an even id (id's 2 & 4)
