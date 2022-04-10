var readline = require("readline-sync");
var todoList = ["Teach Objects", "Teach Arrays", "Make a todo app"];

function showList() {
  console.log("Your todo list: ");
  for (var index = 0; index < todoList.length; index = index + 1) {
    console.log(index + 1 + ". ", todoList[index]);
  }
  //   userCrud();
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
  userCrud();
}

function updateTask() {
  // @todo input validation
  showList();
  var taskNumberToUpdate = getTaskNumber("update");
  var updatedTodo = readline.question(
    "What do you want to update or replace with? "
  );
  todoList[taskNumberToUpdate - 1] = updatedTodo;
  userCrud();

  //   if there are 3 element in the todo list: valid input is :1, 2, 3
  //   if there are 6 element in the todo list: valid input is :1, 2, 3, 4, 5, 6
  //   if there are 1 element in the todo list: valid input is :1
  //   1<= \
  //   taskNumberToUpdate <= todoList.length

  //   if (taskNumberToUpdate <= todoList.length && taskNumberToUpdate > 0) {
  //     var updatedTodo = readline.question(
  //       "What do you want to update or replace with? "
  //     );
  //     todoList[taskNumberToUpdate - 1] = updatedTodo;
  //     userCrud();
  //   } else {
  //     console.log("Invalid number, try again. ");
  //     updateTask();
  //   }
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
