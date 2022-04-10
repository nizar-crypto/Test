var readline = require("readline-sync");
var todoList = ["Teach Objects", "Teach Arrays", "Make a todo app"];

function showList() {
  console.log("Your todo list: ");
  for (var index = 0; index < todoList.length; index = index + 1) {
    console.log(index + 1 + ". ", todoList[index]);
  }
  userCrud();
}

function userCrud() {
  var selectedOption = readline.question(`
What would you like to do:
a:Create new todo
b:Update todo
c:Delete todo
d:Logout and Quit
Choose a, b, c or d
Your choice: `);
  if (selectedOption === "a") {
    create();
  } else if (selectedOption === "b") {
    updateTask();
  } else if (selectedOption === "c") {
    removeUserTask();
  } else if (selectedOption === "d") {
    process.exit();
  } else {
    console.log("Select a, b, c or d ");
    userCrud();
  }
}

function create() {
  var newTodo = readline.question("What task do you want to add? ");
  todoList.push(newTodo);
  showList();
}

function updateTask() {
  // @todo input validation
  var taskNumberToUpdate = readline.questionInt(
    "Select the task number which you want to update it? "
  );
  var updatedTodo = readline.question(
    "What do you want to update or replace with? "
  );
  todoList[taskNumberToUpdate - 1] = updatedTodo;
  showList();
}

function removeUserTask() {
  var taskNumberToRemove = readline.questionInt(
    "Select the task's number which you want to remove? "
  );
  todoList.splice(taskNumberToRemove - 1, 1);
  showList();
}
showList();
