// lines of codes run 2 , 3 ,117,(5,6,7,8,9,),118,(11,12..17)
var readline = require("readline-sync"); //import readline
var firstTime = true; //declare the variable (creating a var) and storing true.

function welcome() {
  // here we are defining the welcome function
  console.log("welcome, do you have wifi problems");

  readline.keyInPause("Let us help you press 'v' ");
}
function adressCheck() {
  var postcode = readline.question("What is postcode? ");
  var housenumber = readline.question("What is housenumber? ");
  var toevoeging = readline.question("What is toevoeging? ");

  readline.keyInPause("Go the next step 'v' ");
}

function whiteModemCheck() {
  var connectbox = readline.keyInYN("Do you have a white ziggo modem?");
  if (connectbox === true) {
    extenderCheck();
  } else {
    blackModemCheck();
  }
}

function blackModemCheck() {
  var blackModem = readline.keyInYN("Do you have a black ziggo modem?");

  if (blackModem === true) {
    extenderCheck();
  } else {
    mediaBoxCheck();
  }
}

function mediaBoxCheck() {
  var mediabox = readline.keyInYN("Do you have a mediabox?"); //we ask for input
  if (mediabox === true) {
    extenderCheck();
  } else if (firstTime === true) {
    readline.keyInPause("Go look for your modem - we need to know press'v' ");
    firstTime = false; // we change here the value of the var firstTime to false (line 3)
    whiteModemCheck();
  } else {
    readline.keyInPause("Chat a specialist");
  }
}

function extenderCheck() {
  var extender = readline.keyInYN("Do you use an extender?");

  console.log("next");
  andereApparaat();
}

function andereApparaat() {
  //here we are defining a function for andere apparaat

  var anderApparaat1 = readline.keyInYN(
    "Werkt de wifi wel op een ander apparaat?"
  );
  if (anderApparaat1 === true) {
    // solution(); //here we call funtion solution (it is used many time)
    console.log(
      "Je hebt een slechte verbinding op één van je apparaten. Dit kun je doen om je wifi beter te laten werken: "
    );
    // readline.keyInPause("mijn wifi werkt nog niet");
    dontWork();
    // console.log("We helpen je verder");
    // readline.keyInPause("chat met een specialist ");
    help();
  } else {
    console.log(
      "Hiermee test je het bereik van je wifi. Ga met je mobiele telefoon of laptop vlakbij je modem staan. Werkt je wifi hier wel goed? "
    );
    vlakbijModem(); //here we call the function to ask about modem
  }
}
function vlakbijModem() {
  var vlakbijModem = readline.keyInYN("Werkt de wifi wel vlakbij je modem? ");
  if (vlakbijModem === true) {
    // solution();
    console.log(
      "Je hebt geen wifi als je verder van je modem vandaan bent. Dit kun je doen om je wifi beter te laten werken:"
    );

    dontWork();
    help();
  } else {
    restart();
    place();
    // whiteLamp(); first solution
  }
  // place();
  // redLight(); //here we are defining a function for red light
  // whiteLamp();
}

// function redLight() {
//   var rode = readline.keyInYN(
//     "Brand er een rode Offline melding op je Mediabox XL?"
//   );
//   if (rode === true) {
//     solution();
//   } else {
//     solution();
//     console.log(
//       "Er brandt geen wit lampje op je modem. Dit kun je doen om je wifi beter te laten werken:"
//     );
//     dontWork();
//   }
//   help();
// }
function dontWork() {
  //here we are defining a function for dontWork

  readline.keyInPause("mijn wifi werkt nog niet");
}

function place() {
  //here we are defining a function for place

  console.log("Kijk of je je modem een betere plek kunt geven ");
  console.log(
    "We weten dat je het modem niet altijd kunt verplaatsen. Maar zet het tijdelijk op minimaal 1,5 meter hoogte en zichtbaar vanaf de plek waar je wilt internetten. Zo kunnen we deze oorzaak uitsluiten "
  );
  readline.keyInPause("mijn modem heeft een goed plek");
  whiteLamp(); //the second solution
}
function restart() {
  console.log("Herstart je modem voordat je verdergaat");
  console.log(
    "Zet je modem uit en weer aan of trek de stekker uit \nhet stopcontact en stop hem er weer in. \nJe modem is na ongeveer 7 minuten volledig opgestart,\n als het witte lampje weer brandt.Na een uur is je wifi weer helemaal op snelheid"
  );
  readline.keyInPause("ik he mijn modem al opnieuw gestart");
}
// place();
// solution();

// console.log(
//   "Wacht minimaal 7 minuten tot het witte lampje op je Ziggo modem weer aanhoudend brandt."
// );
function whiteLamp() {
  var witteLapje = readline.keyInYN(
    "Brandt het witte lampje op je Connectbox?"
  );
  if (witteLapje === true) {
    console.log(
      "Onze oplossingenJe hebt een slechte verbinding op één van je apparaten. Dit kun je doen om je wifi beter te laten werken:"
    );
    dontWork();
    help();
  } else {
    console.log(
      "Onze oplossingen Er brandt geen wit lampje op je modem. Dit kun je doen om je wifi beter te laten werken:"
    );
    // readline.keyInPause("mijn wifi werkt nog niet");
    dontWork();
    help();
  }
}
function help() {
  console.log("We helpen je verder");
  readline.keyInPause("chat met een specialist");
}
welcome(); //here we calling the function
adressCheck();
whiteModemCheck();
// blackModemCheck();we dont need this function call it already gets called in line 24
// extenderCheck();
// andereApparaat();
// vlakbijModem();
// whiteModemCheck();
// blackModemCheck();
// witteLampje();
// blackModemCheck();
// mediaBoxCheck();

// function whiteLamp() {
//   var witteLapje = readline.keyInYN(
//     "Brandt het witte lampje op je Connectbox?"
//   );
//   if (witteLapje === true) {
//     // console.log("next");
//     solution();
//   } else {
//     console.log(  "Onze oplossingen Er brandt geen wit lampje op je modem. Dit kun je doen om je wifi beter te laten werken:");}
