var readline = require("readline-sync");
var contactsList = [
  { name: " Nizar", number: "0639321215" },
  { name: "Rein", number: "063456789" },
  { name: "Paul", number: "0639232323" },
];

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
  switch (selectedOption) {
    case "a":
      createNumContact();
      break;
    case "b":
      updateNumContact();
      break;
    case "c":
      removeContact();
      break;
  }
}

function createNumContact() {
  var newContact = readline.question("Who do you want to add? ");
  var newNumber = readline.question("What is the number? ");
  contactsList.push({ name: newContact, number: newNumber });
  showList();
}

function removeContact() {
  var contactToRemove = getContactNumber("remove");
  contactsList.splice(contactToRemove - 1, 1);
  showList();
}

function updateNumContact() {
  var contactNumberToUpdate = getContactNumber("update"); //I store the number from the user in contactNumberToUpdate
  var contactNumberChoice =
    readline.question(`What do you want to update or replace with 
a. Name 
b. Number
c. Add other data
  `);
  switch (contactNumberChoice) {
    case "a":
      var newNameToUpdate = readline.question("What is the new name? ");
      var contactToUpdate = contactsList[contactNumberToUpdate - 1]; //here we are reading this object
      contactToUpdate.name = newNameToUpdate;
      break;
    case "b":
      var newNumberToUpdate = readline.question("Give the new number? ");
      var contactToUpdate = contactsList[contactNumberToUpdate - 1];
      contactToUpdate.number = newNumberToUpdate;
      break;
    case "c":
      var otherData = readline.question(
        "What kind of info do you want to store? "
      );
      //   console.log("check c", otherData);
      console.log("Data", otherData);
      var value = readline.question("What is your " + otherData + "? ");
      console.log("check data ", value);
      var contactToUpdate = contactsList[contactNumberToUpdate - 1];
      contactToUpdate[otherData] = value; //here we add to
      console.log("check contact", contactToUpdate);

      break;
  }
  userCrud();
}

function getContactNumber(action) {
  showList();
  var contactNumberToUpdate = readline.questionInt(
    `What is the contact's number you want to ${action} ? 
  `
  );
  if (
    contactNumberToUpdate <= contactsList.length &&
    contactNumberToUpdate > 0
  ) {
    return contactNumberToUpdate;
  } else {
    console.log("Invalid number, try again. ");
    return getContactNumbe(action);
  }
}

function addNewDataUpdate() {}
userCrud();
