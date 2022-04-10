var readline = require("readline-sync");
var todoList = [
  { text: "Teach Objects", done: false },
  { done: false, text: "Teach Arrays" },
  { text: "Make a done app", done: true },
];

// [x] Teach Objects
// [ ] Teach Arrays
// [x] Make a todo app

function showList() {
  for (var index = 0; index < todoList.length; index = index + 1) {
    var checkbox;

    if (todoList[index].done === true) {
      checkbox = "[x]";
    } else {
      checkbox = "[ ]";
    }
    console.log(index + 1 + ". ", checkbox, todoList[index].text);
  }
}

function userCrud() {
  showList();
  var selectedOption = readline.question(` [
        a.{ text: "Create new todo ", done: false },
        b.{ text: "Update todo ", done: false },
        c.{ text: "Update todo ", done: false },
        d.{ text: "Logout and Quit ", done: false },
    ];
    `);
  switch (selectedOption) {
    case "a":
      //   console.log("check", "next");
      create();
      break;
    case "b":
      console.log("CHECK b");
      updateTask();
      break;
    case "c":
      console.log("check c");
      removeUserTask();
      break;
    case "d":
      doneOrNot();
      break;
  }
}

function create() {
  console.log("check");
  var newTodo = readline.question("What task do you want to add? ");
  console.log("check newTodo", newTodo);
  todoList.push({ text: newTodo, done: false });
  console.log("check state", todoList);
  showList();
}

function updateTask() {
  console.log("check updateTask");
  var taskNumberToUpdate = readline.questionInt(
    "Select the task number which you want to update it? "
  );
  var updatedTodo = readline.question(
    "What do you want to update or replace with? "
  );
  todoList[taskNumberToUpdate - 1] = { text: updatedTodo, done: false };
  console.log("check update state", todoList);
  doneOrNot();
  showList();
}

function removeUserTask() {
  console.log("check removeUserTask");
  var taskNumberToRemove = readline.questionInt(
    "Select the task's number which you want to remove? "
  );
  todoList.splice(taskNumberToRemove - 1, 1);
  showList();
}

function doneOrNot() {
  showList();
  var taskNumberComplete = readline.questionInt(
    "Which task did you complete? "
  );
  var taskToComplete = todoList[taskNumberComplete - 1];
  taskToComplete.done = true;
  userCrud();
  //   var complete = readline.keyInYN("Is the task complete? ");
  //   console.log("check", complete);
  //   if (complete === true) {
  //     complete === checkbox;
  //     che = "[x]";
  //     console.log("check complete", complete);
  //     showList();
  //   }
}

// showList();
userCrud();
