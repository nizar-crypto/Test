const readline = require("readline-sync");
const users = [
  {
    id: 1,
    userName: "aa",
    password: "abcd1234",
    iban: "AL73 6456 6291 4JSV IMHO CCXB GCYH",
  },
  {
    id: 2,
    userName: "bb",
    password: "abcd123",
    iban: "MR64 1246 3682 7944 2087 5420 395",
  },
  {
    id: 3,
    userName: "rcastledine2",
    password: "EnusG1",
    iban: "LB25 8384 5EMX FQKT AAJM NMOV BZLP",
  },
  {
    id: 4,
    userName: "kdoull3",
    password: "RrAo7f",
    iban: "KW77 JTQI S7IN 7CEF FNPA HZSC DI4A AC",
  },
  {
    id: 5,
    userName: "lwordesworth4",
    password: "b5cyCRO",
    iban: "FR65 3546 9000 267R 9ZEI BCFF 699",
  },
  {
    id: 6,
    userName: "gsyder5",
    password: "5lwuNbwSU9",
    iban: "FR03 6118 0951 22D4 LPYE IFNO 363",
  },
  {
    id: 7,
    userName: "fszymanowski6",
    password: "J9As8hTHne",
    iban: "MR95 7162 5929 7479 7255 0310 417",
  },
  {
    id: 8,
    userName: "btooze7",
    password: "YLXM2DyDl",
    iban: "MR36 9553 8611 7813 1817 4319 734",
  },
  {
    id: 9,
    userName: "lhoodless8",
    password: "ZUpDKQRGJ",
    iban: "IL32 7860 6690 6252 3744 761",
  },
  {
    id: 10,
    userName: "gmaingot9",
    password: "dSrY6dTF",
    iban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
  },
];
const transactions = [
  {
    id: 1,
    date: "08/03/2021",
    amount: 752,
    senderIban: "KW77 JTQI S7IN 7CEF FNPA HZSC DI4A AC",
    receiverIban: "FR03 6118 0951 22D4 LPYE IFNO 363",
    description: "full-range",
  },
  {
    id: 2,
    date: "26/11/2020",
    amount: 298,
    senderIban: "AL73 6456 6291 4JSV IMHO CCXB GCYH",
    receiverIban: "MR36 9553 8611 7813 1817 4319 734",
    description: "dynamic",
  },
  {
    id: 3,
    date: "22/10/2020",
    amount: 605,
    senderIban: "LB25 8384 5EMX FQKT AAJM NMOV BZLP",
    receiverIban: "IL32 7860 6690 6252 3744 761",
    description: "6th generation",
  },
  {
    id: 4,
    date: "05/07/2021",
    amount: 169,
    senderIban: "FR03 6118 0951 22D4 LPYE IFNO 363",
    receiverIban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
    description: "Optional",
  },
  {
    id: 5,
    date: "10/06/2021",
    amount: 652,
    senderIban: "IL32 7860 6690 6252 3744 761",
    receiverIban: "LB25 8384 5EMX FQKT AAJM NMOV BZLP",
    description: "Robust",
  },
  {
    id: 6,
    date: "02/09/2020",
    amount: 660,
    senderIban: "FR03 6118 0951 22D4 LPYE IFNO 363",
    receiverIban: "IL32 7860 6690 6252 3744 761",
    description: "6th generation",
  },
  {
    id: 7,
    date: "22/07/2021",
    amount: 644,
    senderIban: "MR36 9553 8611 7813 1817 4319 734",
    receiverIban: "FR03 6118 0951 22D4 LPYE IFNO 363",
    description: "Customer-focused",
  },
  {
    id: 8,
    date: "09/09/2021",
    amount: 219,
    senderIban: "MR36 9553 8611 7813 1817 4319 734",
    receiverIban: "MR64 1246 3682 7944 2087 5420 395",
    description: "non-volatile",
  },
  {
    id: 9,
    date: "04/09/2020",
    amount: 175,
    senderIban: "FR65 3546 9000 267R 9ZEI BCFF 699",
    receiverIban: "LB25 8384 5EMX FQKT AAJM NMOV BZLP",
    description: "zero tolerance",
  },
  {
    id: 10,
    date: "01/10/2020",
    amount: 825,
    senderIban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
    receiverIban: "MR36 9553 8611 7813 1817 4319 734",
    description: "Digitized",
  },
  {
    id: 11,
    date: "29/01/2021",
    amount: 407,
    senderIban: "FR65 3546 9000 267R 9ZEI BCFF 699",
    receiverIban: "LB25 8384 5EMX FQKT AAJM NMOV BZLP",
    description: "zero defect",
  },
  {
    id: 12,
    date: "23/06/2021",
    amount: 551,
    senderIban: "FR65 3546 9000 267R 9ZEI BCFF 699",
    receiverIban: "AL73 6456 6291 4JSV IMHO CCXB GCYH",
    description: "3rd generation",
  },
  {
    id: 13,
    date: "26/11/2020",
    amount: 46,
    senderIban: "MR95 7162 5929 7479 7255 0310 417",
    receiverIban: "KW77 JTQI S7IN 7CEF FNPA HZSC DI4A AC",
    description: "emulation",
  },
  {
    id: 14,
    date: "12/02/2021",
    amount: 980,
    senderIban: "AL73 6456 6291 4JSV IMHO CCXB GCYH",
    receiverIban: "KW77 JTQI S7IN 7CEF FNPA HZSC DI4A AC",
    description: "Open-source",
  },
  {
    id: 15,
    date: "23/09/2020",
    amount: 386,
    senderIban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
    receiverIban: "IL32 7860 6690 6252 3744 761",
    description: "Phased",
  },
  {
    id: 16,
    date: "26/08/2021",
    amount: 281,
    senderIban: "FR03 6118 0951 22D4 LPYE IFNO 363",
    receiverIban: "IL32 7860 6690 6252 3744 761",
    description: "Optimized",
  },
  {
    id: 17,
    date: "08/08/2021",
    amount: 64,
    senderIban: "KW77 JTQI S7IN 7CEF FNPA HZSC DI4A AC",
    receiverIban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
    description: "logistical",
  },
  {
    id: 18,
    date: "31/05/2021",
    amount: 271,
    senderIban: "MR36 9553 8611 7813 1817 4319 734",
    receiverIban: "KW77 JTQI S7IN 7CEF FNPA HZSC DI4A AC",
    description: "extranet",
  },
  {
    id: 19,
    date: "09/02/2021",
    amount: 321,
    senderIban: "FR65 3546 9000 267R 9ZEI BCFF 699",
    receiverIban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
    description: "Universal",
  },
  {
    id: 20,
    date: "04/10/2020",
    amount: 35,
    senderIban: "FR65 3546 9000 267R 9ZEI BCFF 699",
    receiverIban: "LB25 8384 5EMX FQKT AAJM NMOV BZLP",
    description: "Networked",
  },
  {
    id: 21,
    date: "17/08/2020",
    amount: 700,
    senderIban: "LB25 8384 5EMX FQKT AAJM NMOV BZLP",
    receiverIban: "FR65 3546 9000 267R 9ZEI BCFF 699",
    description: "exuding",
  },
  {
    id: 22,
    date: "10/08/2020",
    amount: 8,
    senderIban: "MR95 7162 5929 7479 7255 0310 417",
    receiverIban: "FR03 6118 0951 22D4 LPYE IFNO 363",
    description: "Intuitive",
  },
  {
    id: 23,
    date: "04/04/2021",
    amount: 684,
    senderIban: "MR95 7162 5929 7479 7255 0310 417",
    receiverIban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
    description: "empowering",
  },
  {
    id: 24,
    date: "07/03/2021",
    amount: 924,
    senderIban: "IL32 7860 6690 6252 3744 761",
    receiverIban: "MR64 1246 3682 7944 2087 5420 395",
    description: "dynamic",
  },
  {
    id: 25,
    date: "12/09/2021",
    amount: 187,
    senderIban: "IL32 7860 6690 6252 3744 761",
    receiverIban: "MR64 1246 3682 7944 2087 5420 395",
    description: "Operative",
  },
  {
    id: 26,
    date: "05/12/2020",
    amount: 563,
    senderIban: "AL73 6456 6291 4JSV IMHO CCXB GCYH",
    receiverIban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
    description: "actuating",
  },
  {
    id: 27,
    date: "22/11/2020",
    amount: 895,
    senderIban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
    receiverIban: "FR65 3546 9000 267R 9ZEI BCFF 699",
    description: "static",
  },
  {
    id: 28,
    date: "04/09/2020",
    amount: 792,
    senderIban: "LB25 8384 5EMX FQKT AAJM NMOV BZLP",
    receiverIban: "AL73 6456 6291 4JSV IMHO CCXB GCYH",
    description: "Organized",
  },
  {
    id: 29,
    date: "16/10/2020",
    amount: 699,
    senderIban: "IL32 7860 6690 6252 3744 761",
    receiverIban: "MR36 9553 8611 7813 1817 4319 734",
    description: "Enhanced",
  },
  {
    id: 30,
    date: "17/09/2021",
    amount: 233,
    senderIban: "MR95 7162 5929 7479 7255 0310 417",
    receiverIban: "IL32 7860 6690 6252 3744 761",
    description: "analyzer",
  },
  {
    id: 31,
    date: "23/09/2021",
    amount: 500,
    senderIban: "AL73 6456 6291 4JSV IMHO CCXB GCYH",
    receiverIban: "AL73 6477 6291 4HjV IMHO CCXB GCYH",
    description: "bla",
  },
];
let loggedInUser = users[1];
// let loggedInUser = null; //null = nothing on purpose

function start() {
  if (loggedInUser === null) {
    signupOrLogin();
  } else {
    showBalance();
    displayMenu();
  }
}
function showBalance() {
  // console.log("check balance", loggedInUser.iban);
  const balance = calculateBalance();
  // console.log("filter transactions", userTransactions);
  console.log("Your balance is: €", balance);
}

function calculateBalance() {
  const userTransactions = transactions.filter(function (transaction) {
    return (
      transaction.receiverIban === loggedInUser.iban ||
      transaction.senderIban === loggedInUser.iban
    );
  });
  const balance = userTransactions.reduce((accum, transaction) => {
    if (loggedInUser.iban === transaction.receiverIban) {
      return accum + transaction.amount;
    } else {
      return accum - transaction.amount;
    }
  }, 0);
  return balance;
}

function login() {
  const userNameInput = readline.question("Enter your username: ");
  const foundUser = users.find((user) => userNameInput === user.userName);
  if (foundUser === undefined) {
    console.log("Username not defined, please try again..");
    login();
  } else {
    checkPassword(foundUser); // here pass an argument for the foundUser
  }
}
function checkPassword(user) {
  //here add parameter to accessthe local variable (foundUser)in another function
  const passwordInput = readline.question("Enter your password: ");
  if (user.password === passwordInput) {
    loggedInUser = user; //here is reassigning change the state of let (null)
    start();
  } else {
    console.log("Sorry, password not correct, try again ");
    login();
  }
}
function signupOrLogin() {
  const signUp = readline.question(
    `Do you want to make an account? 
   a.Yes.
   b.No, I have already one
   (Select a or b.)`
  );
  if (signUp === "a") {
    makeAccount();
  } else if (signUp === "b") {
    login();
  } else {
    console.log("Choose a or b");
    signupOrLogin();
  }
}
function makeAccount() {
  const newUserName = readline.question("Type your new username ");
  const foundUser = users.find((user) => newUserName === user.userName);
  if (foundUser === undefined) {
    const newPassword = readline.question("Type your new password ");
    const ibanNumber = readline.question("Type your IBAN ");
    users.push({
      id: users.length + 1,
      userName: newUserName,
      password: newPassword,
      iban: ibanNumber,
    });
    login();
  } else {
    console.log("This username is already taken, try another username");
    makeAccount();
  }
}
function login() {
  const userNameInput = readline.question("Enter your username: ");
  const foundUser = users.find((user) => userNameInput === user.userName);
  if (foundUser === undefined) {
    console.log("Username not defined, please try again..");
    login();
  } else {
    checkPassword(foundUser); // here pass an argument for the foundUser
  }
}

function displayMenu() {
  const balance = calculateBalance();
  console.log("check the balacne", balance);
  var selectedOption = readline.question(`
What would you like to do:

a:Transfer ${balance > 0 ? "" : "(Not enough balance)"}
b:Logout
Select a or b

Your choice: `);
  if (selectedOption === "a" && balance > 0) {
    // console.log("next");
    transfer();
    showBalance();
  } else if (selectedOption === "b") {
    loggedInUser = null;
    // process.exit();
    start();
  } else {
    console.log(`Select ${balance > 0 ? "a or " : ""} b`);
    displayMenu();
  }
}
function transfer() {
  let transferTo = readline.question(`
To whom(To which iban) do you want to transfer money? 
--------------------------------------
Enter a name(iban): `);
  // if (user.iban.includes(transferTo)) {
  //   console.log("check IBAN");

  const isIbanAvailable = users.find((user) => {
    // console.log(user.iban, "input iban", transferTo, user.iban === transferTo);
    // if (user.iban === transferTo) {
    return user.iban === transferTo;
    // } else {
    //   console.log("Iban is not included, try another iban ");
    //   transfer();
    // }
  });
  if (isIbanAvailable === undefined || transferTo === loggedInUser.iban) {
    console.log("Iban is not included, try another iban ");
    transfer();
  }
  // console.log("CHECK", isIbanAvailable);
  const balance = calculateBalance();
  let transferMoney = readline.questionFloat(`
  //   How much do you want to transfer ?
  //   ----------------------------------
  // Enter an amount: `);
  console.log(
    "check the two values",
    balance,
    transferMoney,
    transferMoney > balance
  );
  if (transferMoney > balance) {
    console.log("You don't have enough balance, try again ");
    transfer();
  }
  console.log("check transfer", transferMoney);
  if (transferMoney <= 0) {
    console.log("Sorry, please enter a positive number ");
    return transfer();
  }
  let description = readline.question("Add a description here: ");
  const transaction = {
    id: transactions.length,
    date: new Date(),
    amount: transferMoney,
    senderIban: loggedInUser.iban,
    receiverIban: transferTo,
    description: description,
  };
  console.log(transaction);
  transactions.push(transaction);
  showBalance();
  displayMenu();
}

// // function createTransaction(){
//   transaction.senderIban === loggedInUser.iban
//   const userReceiverIban= readline.question(`
//   To which Iban you want to transfer money?
//   -----------------------------------------
//   Enter Iban:  `)

// }

start();
// the mistake here i put the if before push transaction , and it is beter to use if with a good logic (if)
// and return to stop and then I call the transfer to repeat if the balance isn't valid (-100)
