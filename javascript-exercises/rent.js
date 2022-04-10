var readline = require("readline-sync");
var salary = readline.questionFloat("How much is your salary ?");
var rent = readline.questionFloat("How much is your rent ?");
console.log("the percentage of the rent is  " + (rent / salary) * 100 + "%");
