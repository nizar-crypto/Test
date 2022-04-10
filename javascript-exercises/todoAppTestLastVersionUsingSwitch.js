var readline = require("readline-sync");
var todoList = ["Teach Objects", "Teach Arrays", "Make a todo app"];

function showList() {
  console.log("Your todo list: ");
  for (var index = 0; index < todoList.length; index = index + 1) {
    console.log(index + 1 + ". ", todoList[index]);
  }
}

function userCrud() {
  showList();
  var selectedOption = readline.question(`
What would you like to do:
a:Create new todo
b:Update todo
c:Delete todo
d:Logout and Quit
Choose a, b, c or d
Your choice: `);
  switch (selectedOption) {
    case "a":
      create();
      break;
    case "b":
      updateTask();
      break;
    case "c":
      removeUserTask();
      break;
    case "d":
      process.exit();
      break;
    default:
      console.log("Select a, b, c or d ");
      userCrud();
      break;
  }
}

function create() {
  var newTodo = readline.question("What task do you want to add? ");
  todoList.push(newTodo);
  userCrud();
}

function updateTask() {
  var taskNumberToUpdate = getTaskNumber("update");
  var updatedTodo = readline.question(
    "What do you want to update or replace with? "
  );
  todoList[taskNumberToUpdate - 1] = updatedTodo;
  userCrud();
}
function getTaskNumber(action) {
  showList();
  var taskNumberToUpdate = readline.questionInt(
    `Select the task number which you want to ${action} ? 
  `
  );
  if (taskNumberToUpdate <= todoList.length && taskNumberToUpdate > 0) {
    return taskNumberToUpdate;
  } else {
    console.log("Invalid number, try again. ");
    return getTaskNumber(action);
  }
}
function removeUserTask() {
  var taskNumberToRemove = getTaskNumber("remove");
  todoList.splice(taskNumberToRemove - 1, 1);
  userCrud();
}
userCrud();
