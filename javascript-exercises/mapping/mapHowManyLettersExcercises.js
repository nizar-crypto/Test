var readline = require("readline-sync");
var words = ["apple", "bee", "computer", "phone"];

// desired output: [5, 3, 8, 5] (how many letters in each string)

for (var index = 0; index < words.length; index = index + 1) {
  const word = words[index];

  console.log("word: ", word);

  words[index] = word.length;
  console.log(words);
}
var word = "apple";

//1 let letterCount = word.replace(/\s+/g, "").length;
var letterCount = word.length;
console.log(letterCount);

// 2.var number = word.split("");
// console.log("check number", number.length);
