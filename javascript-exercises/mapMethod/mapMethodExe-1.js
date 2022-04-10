var readline = require("readline-sync");
var users = [
  { id: 1, name: "Rein", email: "rein@rein.com", yearsXP: 5 },
  { id: 2, name: "Afaf", email: "Afaf@Afaf.com", yearsXP: 2 },
  { id: 3, name: "Bernard", email: "Bernard@Bernard.com", yearsXP: 1 },
  { id: 4, name: "James", email: "James@James.com", yearsXP: 0 },
];

var emails = users.map(function (user) {
  return user.email;
});

console.log("EMAILS:", emails);

// MAP:
// - input array (4 elements)
// - output array (4 elements, but the data has been changed)

// 1. desired output: ["rein@rein.com", "Afaf@Afaf.com", "Bernard@Bernard.com", "James@James.com"]
// 2. desired output: [
// { id: 1, name: "anonymous", email: "rein@rein.com", yearsXP: 5 },
// { id: 2, name: "anonymous", email: "Afaf@Afaf.com", yearsXP: 2 },
// { id: 3, name: "anonymous", email: "Bernard@Bernard.com", yearsXP: 1 },
// { id: 4, name: "anonymous", email: "James@James.com", yearsXP: 0 },
// ]

// { id: 3, name: "Bernard", email: "Bernard@Bernard.com", yearsXP: 1 },
// 3. desired output[
// { id: 1, name: "anonymous", email: "rein@rein.com", level: "Medior" },
// { id: 2, name: "anonymous", email: "Afaf@Afaf.com", level: "Junior" },
// { id: 3, name: "anonymous", email: "Bernard@Bernard.com", level: "Junior" },
// { id: 4, name: "anonymous", email: "James@James.com", level: "Beginner" },
// ]
