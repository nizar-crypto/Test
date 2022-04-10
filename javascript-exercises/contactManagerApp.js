var readline = require("readline-sync");
var contactsList = [
  { name: " Nizar", number: "0639321215" },
  { name: "Rein", number: "063456789" },
  { name: "Paul", number: "0639232323" },
];
// console.log("check contacts list", contactsList);

function showList() {
  console.log("Your contacts list: ");
  for (var index = 0; index < contactsList.length; index = index + 1) {
    console.log(
      index + 1 + ". ",
      contactsList[index].name,
      " - ",
      contactsList[index].number
    );
  }
}

function userCrud() {
  showList();
  var selectedOption = readline.question(` 
a. Add a new contact,
b. Update a contact, 
c. Remove a contact

      `);
  //   console.log("check option", selectOption);
  switch (selectedOption) {
    case "a":
      //   console.log("check a");
      createNumContact();
      break;
    case "b":
      //   console.log("check b");
      updateNumContact();
      break;
    case "c":
      console.log("check c");
      removeContact();
      break;
  }
}

function createNumContact() {
  //   console.log("check");
  var newContact = readline.question("Who do you want to add? ");
  //   console.log("check", newContact);
  var newNumber = readline.question("What is the number? ");
  console.log("check number", newNumber);
  contactsList.push({ name: newContact, number: newNumber });
  console.log("check state", contactsList);
  showList();
}

function removeContact() {
  //   console.log("check remove", removeContact);
  var conactToRemove = readline.question(
    `What is the number of the contact you want to remove? `
  );
  contactsList.splice(conactToRemove - 1, 1);
  showList();
}

function updateNumContact() {
  //   console.log("check update", updateNumContact);
  var contactNumberToUpdate = readline.question(
    "what is the contact's number you want to update? (Enter a number 1, 2,...) "
  );
  var contactNumberChoice =
    readline.question(`What do you want to update or replace with 
  a. Name 
  b. Number 
  `);
  switch (contactNumberChoice) {
    case "a":
      console.log("check choice a");
      var newNameToUpdate = readline.question("what is the new name? ");
      console.log("check", newNameToUpdate);
      var contactToUpdate = contactsList[contactNumberToUpdate - 1];
      contactToUpdate.name = newNameToUpdate;
      console.log("check object?", contactToUpdate);
      break;
    case "b":
      console.log("check choice b");
      var newNumberToUpdate = readline.question("Give the new number? ");
      console.log(newNumberToUpdate);
      var numbertToUpdate = contactsList[contactNumberToUpdate - 1];
      console.log("check object?", numbertToUpdate);
      numbertToUpdate.number = newNumberToUpdate;
      break;
  }
  //   contactsList[contactNumberToUpdate - 1] = {
  //     Name: newNameToUpdate,
  //     Number: newNumberToUpdate,
  //   };
  //   console.log("check update state ", contactsList);
  userCrud();
}

// function getContactNumber(action) {
//   showList();
//   var contactNumberToUpdate = readline.questionInt(
//     `Select the contact number which you want to ${action} ?
//   `
//   );
//   console.log("check action", contactNumberToUpdate);
// }
// // getContactNumber();

userCrud();
