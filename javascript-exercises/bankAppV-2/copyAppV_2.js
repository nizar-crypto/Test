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
let loggedInUser = null; //null = nothing on purpose

function start() {
  console.log("check start");
  if (loggedInUser === null) {
    login();
  } else {
    console.log("Next feature");
  }
}

function login() {
  //   console.log("check login");
  let userNameInput = readline.question("enter your username: ");
  let passwordInput = readline.question("enter your password: ");
  console.log(userNameInput);
  let foundUser = users.find(function (user) {
    console.log(
      "check user",
      user.userName,
      userNameInput,
      userNameInput === user.userName
    );
    return userNameInput === user.userName;
  });
  console.log("is this the user trying to login", foundUser);
  if (foundUser === undefined) {
    console.log("Username not defined , please try again..");
    login();
  } else {
    console.log(
      "test ",
      foundUser.password,
      passwordInput,
      foundUser.password === passwordInput
    );
    if (foundUser.password === passwordInput) {
      loggedInUser = foundUser;
      start();
    } else {
      login();
    }
  }
}

// function userName() {
//   let userlogin = readline.question("enter your username: ");
//   //   console.log(userlogin);
//   if (userlogin === users.userName.find(userName)) {
//     console.log("check username", "Enter the password ,please");
//     //     // passWord();
//     //   } else {
//     //     console.log(" UserName not found .please, try again");
//     //     userName();
//   }
// }
// userName();

start();

// function isUser(users) {
//   return user.userName === true;
// }

// console.log(users.find(isUser));

// switch (signUp) {
//   case "a":
//     console.log("next");
//     break;
//   case "b":
//     console.log("check");
//     login();
//     break;
// }
