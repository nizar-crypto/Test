const readline = require("readline-sync");
const users = [
  {
    id: 1,
    userName: "aa",
    password: "abcd1234",
    telephoneNumber: "2104399416",
  },
  {
    id: 2,
    userName: "bb",
    password: "abcd123",
    telephoneNumber: "5295657329",
  },
  {
    id: 3,
    userName: "cc",
    password: "abcd12",
    telephoneNumber: "9188519392",
  },
  {
    id: 4,
    userName: "ldonalson3",
    password: "F4kbABVnCKE",
    telephoneNumber: "5873307466",
  },
  {
    id: 5,
    userName: "atowey4",
    password: "me9Gcz",
    telephoneNumber: "5745641606",
  },
  {
    id: 6,
    userName: "bsimeoni5",
    password: "MDCZbp6HaXm",
    telephoneNumber: "1984338072",
  },
  {
    id: 7,
    userName: "dschole6",
    password: "hXR6RgK",
    telephoneNumber: "7416397367",
  },
  {
    id: 8,
    userName: "vhecks7",
    password: "zHkMSFGP",
    telephoneNumber: "2172085677",
  },
  {
    id: 9,
    userName: "acosgrave8",
    password: "g4bLwYya8",
    telephoneNumber: "7044121977",
  },
  {
    id: 10,
    userName: "jcristoforetti9",
    password: "fS3LLBerXNTp",
    telephoneNumber: "9456000508",
  },
];
const messages = [
  {
    id: 1,
    date: "21/9/2021",
    senderNumber: "0368530140",
    receiverNumber: "6426756601",
    content:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    readUnread: false,
  },
  {
    id: 2,
    date: "21/9/2021",
    senderNumber: "0124276717",
    receiverNumber: "4033782060",
    content:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    readUnread: true,
  },
  {
    id: 3,
    date: "5/9/2021",
    senderNumber: "3366182687",
    receiverNumber: "2094110826",
    content: "Curabitur in libero ut massa volutpat convallis.",
    readUnread: false,
  },
  {
    id: 4,
    date: "25/8/2021",
    senderNumber: "1888708549",
    receiverNumber: "9770167894",
    content:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    readUnread: false,
  },
  {
    id: 5,
    date: "12/8/2021",
    senderNumber: "2030439770",
    receiverNumber: "7833586064",
    content:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    readUnread: false,
  },
  {
    id: 6,
    date: "25/9/2021",
    senderNumber: "4379305627",
    receiverNumber: "4850723306",
    content:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    readUnread: true,
  },
  {
    id: 7,
    date: "30/8/2021",
    senderNumber: "0128963212",
    receiverNumber: "4529852369",
    content:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    readUnread: false,
  },
  {
    id: 8,
    date: "20/8/2021",
    senderNumber: "4702389270",
    receiverNumber: "4044564477",
    content:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    readUnread: false,
  },
  {
    id: 9,
    date: "25/8/2021",
    senderNumber: "2787051359",
    receiverNumber: "6840107167",
    content: "Suspendisse potenti. Nullam porttitor lacus at turpis.",
    readUnread: false,
  },
  {
    id: 10,
    date: "22/9/2021",
    senderNumber: "3926628707",
    receiverNumber: "8193278208",
    content:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    readUnread: false,
  },
  {
    id: 11,
    date: "13/8/2021",
    senderNumber: "4324497982",
    receiverNumber: "4814467834",
    content:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    readUnread: false,
  },
  {
    id: 12,
    date: "6/9/2021",
    senderNumber: "8383886284",
    receiverNumber: "6333897299",
    content:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    readUnread: true,
  },
  {
    id: 13,
    date: "14/9/2021",
    senderNumber: "6112234335",
    receiverNumber: "0184321956",
    content: "Suspendisse potenti.",
    readUnread: false,
  },
  {
    id: 14,
    date: "12/8/2021",
    senderNumber: "7816883900",
    receiverNumber: "2243425424",
    content: "In eleifend quam a odio.",
    readUnread: false,
  },
  {
    id: 15,
    date: "7/9/2021",
    senderNumber: "2606498488",
    receiverNumber: "1760400211",
    content: "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    readUnread: false,
  },
  {
    id: 16,
    date: "15/9/2021",
    senderNumber: "4878290021",
    receiverNumber: "3085354905",
    content:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    readUnread: true,
  },
  {
    id: 17,
    date: "10/9/2021",
    senderNumber: "9448852363",
    receiverNumber: "8467496738",
    content:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    readUnread: false,
  },
  {
    id: 18,
    date: "11/8/2021",
    senderNumber: "6477378655",
    receiverNumber: "9308650989",
    content:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    readUnread: false,
  },
  {
    id: 19,
    date: "19/8/2021",
    senderNumber: "3388892881",
    receiverNumber: "2104399416",
    content:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    readUnread: false,
  },
  {
    id: 20,
    date: "26/8/2021",
    senderNumber: "2104399416",
    receiverNumber: "5865060732",
    content:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    readUnread: false,
  },
];
let loggedInUser = users[0];
// let loggedInUser = null;
// console.log("check user", loggedInUser);

function start() {
  if (loggedInUser === null) {
    signupOrLogin();
  } else {
    // console.log("next");
    showMessages();
  }
}
function showMessages() {
  const numberOfMessages = "calculateMessages()"; // put it in a string to check;
  console.log("The number of messages : ", numberOfMessages);
}
function calculateMessages() {
  const userMessages = messages.filter((message) => {
    console.log(
      message.receiverNumber === loggedInUser.telephoneNumber,
      message.senderNumber === loggedInUser.telephoneNumber
    );
    //     return (
    //       message.receiverNumber === loggedInUser.telephoneNumber ||
    //       message.senderNumber === loggedInUser.telephoneNumber
    //     );
  });
  //   console.log("check calulate", userMessages);
  //   const numberOfMessages = userMessages.reduce((accu, message) => {
  //     if (loggedInUser.telephoneNumber === message.receiverNumber) {
  //       //   console.log("check accu", accu);
  //       //   console.log("checkmessages", );
  //       return accu + message.readUnread;
  //     } else {
  //       return accu - message.readUnread;
  //     }
  //   }, 0);
  //   console.log("check number", numberOfMessages);
  //   return "hello world";
}
// showMessages();
calculateMessages();
// function signupOrLogin() {
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
// }

function makeAccount() {
  const newUserName = readline.question("Type your new username: ");
  const foundUser = users.find((user) => newUserName === user.userName);
  if (foundUser === undefined) {
    const newpassword = readline.question("Type your new password: ");
    const telephoneNumber = readline.question("Enter your number:  ");
    users.push({
      id: users.length + 1,
      userName: newUserName,
      password: newpassword,
      telephoneNumber: telephoneNumber,
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
    checkpassword(foundUser);
    // console.log("check password");
  }
}
function checkpassword(user) {
  const passwordInput = readline.question("Enter your password:   ");
  if (user.password === passwordInput) {
    loggedInUser = user;
  } else {
    console.log("Sorry, password is incorrect, try again ");
  }
}

start();
signupOrLogin();
