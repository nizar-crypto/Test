var readline = require("readline-sync");
var words = ["banana", "mom", "stats", "keeper", "wow"];
var output = [];

// desired output: [false, true, true, false, true]
// if the string is reversed, is it the same?
for (let index = 0; index < words.length; index++) {
  const word = words[index];
  var reverseWord = word.split("").reverse().join("");
  console.log(reverseWord);

  if (reverseWord === word) {
    console.log("palindrome");
    output.push(true);
  } else {
    console.log("not palindrome");
    output.push(false);
  }
}
console.log(output);
