var readline = require("readline-sync");

function start() {
  var input = readline.question(`
  Why do you want to learn programming? 
  -------------------------------------

  a: For my kids
  b: I don't know just give me a language to start with
  c: Just for fun
  d: I'm interested
  e: Improve myself
  f: To make money

  Please enter a, b, c, d, e or f
`);

  if (input === "a") {
    kids();
  } else if (input === "b") {
    console.log("I don't know ,just pick up one for me");
    learnPython();
  } else if (input === "c" || input === "d" || input === "e") {
    brillantIdea();
  } else if (input === "f") {
    makeMoney();
  } else {
    console.log("you should choose a, b, c, d, e or f");
    start();
  }
}

function kids() {
  console.log("Start with scratch, then ...");
  learnPython();
}

function learnPython() {
  console.log("You should learn Python");
}

function brillantIdea() {
  var brillantIdea = readline.keyInYN(
    "Have a brillant idea/platform in mind ?  "
  );
  if (brillantIdea === true) {
    platform();
  } else {
    readline.keyInPause("Nope, just want to get started");
    prefer();
  }
}

function platform() {
  var fieldPlatform = readline.question(`
  Which platform /field? 
  -------------------------------------

  a: 3D Gaming
  b: Mobile
  c: Enterprise
  d: Web
  

  Please enter a, b, c or d
`);
  if (fieldPlatform === "a") {
    learnCPlusPlus();
  } else if (fieldPlatform === "b") {
    mobile();
  } else if (fieldPlatform === "c") {
    enterprise();
  } else if (fieldPlatform === "d") {
    web();
  } else {
    console.log("Please should choose a, b, c or d ");
    platform();
  }
}
function prefer() {
  var choice = readline.question(`
    "I prefer to learn things....choose one? 
    ---------------------------------------
    a: The easy way
    b: The best way
    c: The slightly harder way
    d: The really hard way but easier to pick up other language in the future
    `);
  if (choice === "a") {
    console.log("The easy way");
    learnPython();
  } else if (choice === "b") {
    console.log("The best way");
    learnPython();
  } else if (choice === "c") {
    console.log("The slightly harder way");
    autoManual();
  } else if (choice === "d") {
    console.log(
      "The really hard way but easier to pick up other languages in the future"
    );
    learnCPlusPlus();
  } else {
    console.log("Please you should choose a, b, c or d  ");
    prefer();
  }
}

function autoManual() {
  var car = readline.question(
    `Auto or manual?
  ------------------
  a: Auto
  b: Manual
  Please enter a or b `
  );
  if (car === "a") {
    learnJava();
  } else if (car === "b") {
    learnC();
  } else {
    console.log("Please you should choose a or b ");
    autoManual();
  }
}
function learnC() {
  console.log("you should study C");
}

function mobile() {
  var osSystem = readline.question(
    `Which Os ?   
   -------------
        a:iOS
        b:Android
        Please enter a or b`
  );
  if (osSystem === "a") {
    objectiveC();
  } else if (osSystem === "b") {
    learnJava();
  } else {
    console.log("Please you should choose a or b  ");
    mobile();
  }
}
function web() {
  var twitter = readline.question(
    ` Does your app provides info in real time like Twitter ? 
    ---------------------------------------------------------
    a:yes
    b:no
    `
  );
  if (twitter === "a") {
    learnJavaScript();
  } else if (twitter === "b") {
    trySomething();
  } else {
    console.log("Please you should choose a or b  ");
    web();
  }
}

function notSure() {
  var toy = readline.question(
    `Which one is your favourite toy?
      a:Lego
      b:Lay-Doh
      c:I have an old ugly toy buy I love it
   `
  );
  if (toy === "a") {
    learnPython();
  } else if (toy === "b") {
    learnRuby();
  } else if (toy === "c") {
    learnPhp();
  } else {
    console.log("Please you should choose a, b or c");
    notSure();
  }

  function learnRuby() {
    console.log("You should study Ruby ");
  }
}
function learnPhp() {
  console.log("You should study php");
}

function trySomething() {
  var trying = readline.question(
    `Do you want to try something huge potential but less mature
      a: No
      b: Not sure 
      c: Yes
      Enter a , b or c   `
  );
  if (trying === "a" || trying === "b") {
    notSure();
  } else if (trying === "c") {
    learnJavaScript();
  } else {
    console.log("Please you should choose a ,b or c");
    trySomething();
  }
}

function enterprise() {
  var microsoft = readline.question(`What do you think about the Microsoft ? 
    a. I am a fan
    b. Not bad
    c. Suck !`);

  if (microsoft === "a") {
    learnCSharp();
  } else if (microsoft === "b") {
    learnJava();
  } else if (microsoft === "c") {
    learnJava();
  } else {
    console.log(" Please you should choose a, b or c ");
    enterprise();
  }
}

function makeMoney() {
  var money = readline.question(`make money 
    a.I have a startup idea
    b.Get a job
    Please you should choose a or b `);
  if (money === "a") {
    platform();
  } else if (money === "b") {
    console.log("Get a job");
    getJob();
  } else {
    console.log("Please you should choose a or b");
    makeMoney();
  }
}

function getJob() {
  var field = readline.question(`
    which platform /field? 
  -------------------------------------

  a: 3D Gaming
  b: Mobile
  c: Enterprise
  d:Web
  e: Doesn't matter I just want $$$
  f: I want to work for a big company
  

  Please choose a, b, c , d , e or f
`);
  if (field === "a") {
    learnCPlusPlus();
  } else if (field === "b") {
    mobile();
  } else if (field === "c") {
    enterprise();
  } else if (field === "d") {
    webBackFront();
  } else if (field === "e") {
    dollars();
  } else if (field === "f") {
    bigCompany();
  } else {
    console.log("Please should choose a, b, c or d ");
    getJob();
  }
}
function learnCPlusPlus() {
  console.log("You should learn C++");
}

function bigCompany() {
  var company = readline.question(`
I want to work for a big company
--------------------------------
a: Microsoft
b: Apple
c: Facebook
d: Google 
Please should choose a, b, c or d`);
  if (company === "a") {
    learnCSharp();
  } else if (company === "b") {
    objectiveC();
  } else if (company === "c" || company === "d") {
    learnPython();
  } else {
    console.log("Please should choose a, b, c or d ");
    bigCompany();
  }
}

function dollars() {
  console.log("Doesn't matter I just want $$$");
  learnJava();
}

function webBackFront() {
  var backFront = readline.question(`Web
    a:Back-end("Brains" behind the website")
    b:Front-end (Web interface )
    please, choose a or b `);
  if (backFront === "a") {
    wantToWork();
  } else if (backFront === "b") {
    learnJavaScript();
  } else {
    console.log("Please should choose a or b ");
    webBackFront();
  }
}

function wantToWork() {
  var corporate = readline.question(`
    I want to work for.....
    a:Startup
    b:Corporate
    Please, choose a or b`);
  if (corporate === "a") {
    trySomething();
  } else if (corporate === "b") {
    enterprise();
  } else {
    console.log("Please should choose a, b, c or d ");
    wantToWork();
  }
}
function learnCSharp() {
  console.log("You should study C#");
}
function learnJava() {
  console.log("You should study Java");
}
function learnJavaScript() {
  console.log("You should study Javascript");
}
function objectiveC() {
  console.log("You should study OBJECTIVE-C ");
}

start();
