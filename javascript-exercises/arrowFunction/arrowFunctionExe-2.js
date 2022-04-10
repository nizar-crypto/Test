var users = [
  { id: 1, name: "Rein", email: "rein@rein.com", yearsXP: 5 },
  { id: 2, name: "Afaf", email: "Afaf@Afaf.com", yearsXP: 2 },
  { id: 3, name: "Bernard", email: "Bernard@Bernard.com", yearsXP: 1 },
  { id: 4, name: "James", email: "James@James.com", yearsXP: 0 },
];

// var emails = users.map(function (user) {
//   return user.email;
// });

var emails = users.map((user) => user.email); //arrow function

// console.log("EMAILS:", emails);

// 2. desired output: [
// { id: 1, name: "anonymous", email: "rein@rein.com", yearsXP: 5 },
// { id: 2, name: "anonymous", email: "Afaf@Afaf.com", yearsXP: 2 },
// { id: 3, name: "anonymous", email: "Bernard@Bernard.com", yearsXP: 1 },
// { id: 4, name: "anonymous", email: "James@James.com", yearsXP: 0 },
// ]
var name = users.map((user) => user.name);
var bernard = users[2];
bernard.name = "anonymous";
bernard.level = "Junior";

if (yearsXP >= 5 && yearsXP > 2) {
  console.log("CHECK LEVEL", "Medior");
}
