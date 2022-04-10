var readline = require("readline-sync");

var userProfile = {
  level: "beginner",
};

userProfile.userName = readline.question("What is your userName? ");

// allow users to specify which language they want to learn, store it in the profile
userProfile.language = readline.question("Which language you want to learn? ");
// allow users to change their level to intermediate or expert (if they want)
begginerLevel();
function begginerLevel() {
  var begginerQuestion = userProfile.level;
  readline.keyInYN(
    `Are you a beginner? 
--------------------
`
  );
  if ((begginerQuestion = true)) {
    languageLevel();
  } else {
    console.log("Ok.Move to the next question ");
    begginerLevel();
  }
}

// function languageLevel() {
//   var level = readline.question(
//     `Would you like to change your level to intermediate or expert?
//          a:Intermediate
//          b.Expert

//        Select a or b`
//   );
//   if (level === "a") {
//     console.log("Intermediate");
//   } else if (level === "b") {
//     console.log("Expert");
//   } else {
//     console.log("select a or b ");
//     languageLevel();
//   }
// }

// readline.question(
//   `Would you like to change your level to intermediate or expert?
//   a:intermediate
//   b.expert

// Select a or b
//     `
// );
// // // if (userProfile.level === "a" || userProfile.level === "b") {
// //   console.log(userProfile.level);
// // } else {
// //   console.log("select a or b ");
// // }
// // allow users to be anonymous - ask them if they want to delete their username
// delete userProfile.userName;
// // readline.keyInYN(`If you like to anonymous , you can delete your username?
// // a: yes
// // b:No
// // Select a or b `);
// // var anonymous =
// //   readline.keyInYN(`If you like to anonymous , you can delete your username?
// // a: yes
// // b:No
// // Select a or b `);
// // if (anonymous === "a") {
// //   delete userProfile.userName;
// // } else if (anonymous === "b") {
// //   console.log("Ok,move to the next question ");
// // } else {
// //   console.log("Choose a or b ");
// // }

console.log("YOUR PROFILE:", userProfile);
