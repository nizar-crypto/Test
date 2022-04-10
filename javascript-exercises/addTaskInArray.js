var readline = require("readline-sync");
var todoList = ["Teach CRUD", "Teach Arrays"];
// Challenges
// - I want to add 1 task that I need to do to my todoList
var task = readline.question("what task you want to add? ");
todoList.push(task);
console.log("LIST:", todoList);

// - I want to remove the first task from the list ("Teach CRUD")
todoList.shift();
console.log("LIST:", todoList);

// // - I want to change "Teach Arrays" to Teach Arrays vs Objects
todoList[1] = "Teach Arrays vs Objects";


// console.log("LIST:", todoList);
