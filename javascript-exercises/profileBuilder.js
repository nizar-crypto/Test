var readline = require("readline-sync");

// Make a profile where user can decide what information they want to share
// what would you like to add: hobby -> key
// what is your hobby: "sailing" -> value

// var profile = {};

// function addToProfile() {
//   var key = readline.question("What would you like to add to your profile? ");

//   console.log("KEY:", key);

//   var value = readline.question("What is your " + key + "? ");

//   console.log("VALUE", value);

// var key = "hobby"
// profile[key] = "Sailing" -> profile["hobby"] = "Sailing"
// A dynamic key (not always the same)
//   profile[key] = value;

//   console.log("Profile so far:", profile); // Profile: { hobby: "Sailing "}

//   addToProfile();
// }

// addToProfile();

// Exercise:

var userProfile = {
  userName: "Nizar",
  language: "",
  level: "",
};

// Give a people a profile object with userName, level and language
userProfile.userName = readline.question("What is your userName? ");
userProfile.language = readline.question("Which language you want to learn? ");
userProfile.level = readline.question("What is your level? ");
console.log(userProfile);
// Allow them to choose a property they want to delete
var deleteProperity = readline.question(
  "Which property would you like to delete? "
);

delete userProfile[deleteProperity];
console.log(userProfile);

// Which property would you like to delete? level

// Output: Profile: { userName: "Rein", language: "JavaScript"}
