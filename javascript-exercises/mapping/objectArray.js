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
//   output.push(user.email);
// }
// console.log(output);
// 1. desired output: ["rein@rein.com", "Afaf@Afaf.com", "Bernard@Bernard.com", "James@James.com"]
// 2. desired output: [
// { id: 1, name: "anonymous", email: "rein@rein.com", yearsXP: 5 },
// { id: 2, name: "anonymous", email: "Afaf@Afaf.com", yearsXP: 2 },
// { id: 3, name: "anonymous", email: "Bernard@Bernard.com", yearsXP: 1 },
// { id: 4, name: "anonymous", email: "James@James.com", yearsXP: 0 },
// ]
// var anonymousOutput = [];
// var anonymous = users[2];
// for (let index = 0; index < users.length; index++) {
//   const user = users[index];
//   user.name = "anonymous";
//   console.log("check anonymous", user);
//   anonymousOutput.push(user);
// }
// console.log("output check", anonymousOutput);
// 3. desired output[
// { id: 1, name: "anonymous", email: "rein@rein.com", level: "Medior" },
// { id: 2, name: "anonymous", email: "Afaf@Afaf.com", level: "Junior" },
// { id: 3, name: "anonymous", email: "Bernard@Bernard.com", level: "Junior" },
// { id: 4, name: "anonymous", email: "James@James.com", level: "Beginner" },
// ]
var bernard = users[2];
bernard.name = "anonymous";
bernard.level = "Junior";

if (yearsXP >= 5 && yearsXP > 2) {
  console.log("CHECK LEVEL", "Medior");
}
// elseif (yearsXP<= 2 && yearsXP>1) {
//     console.log("check Juniou", "Junior");
// }else{
//     console.log("Beginner");
// }
// console.log("check bernard", bernard);

// var patients = [
//   { height: 1.79, weight: 82 },
//   { height: 1.85, weight: 78 },
// ];

// var id = users.map((item) => item.id);
// var name = users.map((item) => item.name);
// var email = users.map((item) => item.email);
// var yearsXP = users.map((item) => item.yearsXP);

// console.log(id, name, email, yearsXP);
// var output = [];

// // for (let index = 0; index < users.length; index++) {
// //   const email = users[index];
// //   var email = users.map((item) => item.email);
// //   var emails = users;
// //   console.log(email);
// //   output.push(email);
// // }

// console.log("===================================");
// var emails = Object.values(users);

// console.log("test", emails);

// var usersEmail = Object.values(users[2]);
// console.log("test2222", usersEmail);
