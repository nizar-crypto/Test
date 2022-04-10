var readline = require("readline-sync");

var sentence = "The quick brown fox jumps over the lazy dog  ";

// What methods would you use to figure out the following:
// Check available methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#

// 1. What method can you use to check wether this sentence contains the word "fox"
var foxInSentence = sentence.includes("fox");
console.log("fox in sentence", foxInSentence);

// 2. What method can you use to check wether this sentence ends with "dog  "
var dogInSentence = sentence.endsWith("dog");
console.log("dog in sentence", dogInSentence);

// 3. What method can you use to check wether this sentence start with "The "
var startWithThe = sentence.startsWith("The");
console.log("Sentence starts with the", startWithThe);

// 4. What method can you use to take of the two spaces at the end of this sentence?
// var takeOffSpace = sentence.substr(-2);
var takeOffSpace = sentence.substring(0, sentence.length - 2);
var takeOffSpace2 = sentence.trimEnd();
console.log(takeOffSpace2);

console.log("Take off spaces", takeOffSpace);

// 5. What method can you use to transform this sentence into an array of words?

// var convertToArray = sentence.split(`,`);

// var convertToArray = sentence.split(``); into ,Letters
// var convertToArray = Array.from(sentence);
var convertToArray = sentence.trim().toLowerCase().split(" ").sort(); //space splits into words

console.log("check split", convertToArray);
