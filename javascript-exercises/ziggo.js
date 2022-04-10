var readline = require("readline-sync");
console.log("Los zelf je wifi-probleem op");
console.log("Een diagnose van het probleem en ons advies in een paar stappen");
console.log(`Gaan we samen op zoek naar een oplossing voor betere wifi? We helpen je met:

Checken of er een storing is
De oorzaak van je wifi-probleem opsporen
Een passend advies
`);
readline.keyInPause("aan de slag - druk op v om verder te gaan");
console.log(`Een storing of onderhoud in je buurt?`);
console.log(`Door werkzaamheden of een storing kan de wifi thuis het tijdelijk haperen of het niet doen. Dat bekijken we eerst.

`);
var postcode = readline.question("wat is je postcode ? ");

console.log(postcode);
var huisnummer = readline.question("wat is je huisnummer ? ");
console.log(huisnummer);
var toevoeging = readline.question("wat is je toevoeging ? ");
console.log(toevoeging);
readline.keyInPause("Ga verder - druk op v om verder te gaan");
// console.log(`Heb je een wit Ziggo modem zoals op het plaatje?`);
console.log(
  `Op de afbeelding zie je onze SmartWifi modem (Connectbox) en SmartWifi modem Giga (Connectbox Giga). Deze modems zijn allebei wit.`
);
var connectBox = readline.keyInYN(
  "Heb je een wit Ziggo modem zoals op het plaatje?"
);
console.log(connectBox);
if (connectBox === true) {
  console.log(
    "Een wifi-versterker verbetert het wifi-signaal dat je modem verstuurt. Je kunt een wifi-versterker van Ziggo hebben. Of je hebt ergens anders een versterker gekocht"
  );
  var wifiVersterker = readline.keyInYN("Gebruik je een wifi-versterker?");
  if (wifiVersterker === true) {
    console.log(
      "Misschien is het apparaat waarop je wilt internetten niet goed ingesteld. Controleer op een andere laptop, mobiele telefoon of tablet of je daarmee wel kunt internetten."
    );
  } else {
    console.log(
      "Misschien is het apparaat waarop je wilt internetten niet goed ingesteld. Controleer op een andere laptop, mobiele telefoon of tablet of je daarmee wel kunt internetten"
    );
  }
  var anderApparaat1 = readline.keyInYN(
    "Werkt de wifi wel op een ander apparaat?"
  );
  if (anderApparaat1 === true) {
    console.log("Onze oplossingen");
    console.log(
      "Je hebt een slechte verbinding op één van je apparaten. Dit kun je doen om je wifi beter te laten werken: "
    );
    readline.keyInPause("mijn wifi werkt nog niet");
    console.log("We helpen je verder");
    readline.keyInPause("chat met een specialist ");
  } else {
    console.log(
      "Hiermee test je het bereik van je wifi. Ga met je mobiele telefoon of laptop vlakbij je modem staan. Werkt je wifi hier wel goed? "
    );
    var vlakbijModem = readline.keyInYN("Werkt de wifi wel vlakbij je modem? ");
    if (vlakbijModem === true) {
      console.log("Onze oplossingen");
      console.log(
        "Je hebt geen wifi als je verder van je modem vandaan bent. Dit kun je doen om je wifi beter te laten werken:"
      );
      readline.keyInPause("mijn wifi werkt nog niet ");
      console.log("we helpen je verder");
      readline.keyInPause("chat met een specialist");
    } else {
      console.log("Herstart je modem voordat je verdergaat");
      console.log(
        "Zet je modem uit en weer aan of trek de stekker uit \nhet stopcontact en stop hem er weer in. \nJe modem is na ongeveer 7 minuten volledig opgestart,\n als het witte lampje weer brandt.Na een uur is je wifi weer helemaal op snelheid"
      );
      readline.keyInPause("ik he mijn modem al opnieuw gestart");
      console.log("Kijk of je je modem een betere plek kunt geven ");
      console.log(
        "We weten dat je het modem niet altijd kunt verplaatsen. Maar zet het tijdelijk op minimaal 1,5 meter hoogte en zichtbaar vanaf de plek waar je wilt internetten. Zo kunnen we deze oorzaak uitsluiten "
      );
      readline.keyInPause("mijn modem heeft een goed plek");
    }
    console.log(
      "Wacht minimaal 7 minuten tot het witte lampje op je Ziggo modem weer aanhoudend brandt."
    );
    var witteLapje = readline.keyInYN(
      "Brandt het witte lampje op je Connectbox?"
    );
    if (witteLapje === true) {
      console.log("next");
    } else {
      console.log(
        "Onze oplossingen Er brandt geen wit lampje op je modem. Dit kun je doen om je wifi beter te laten werken:"
      );
      readline.keyInPause("mijn wifi werkt nog niet");
    }
    console.log("We helpen je verder");
    readline.keyInPause("chat met een specialist");
  }

  // when I save it disappears
  // here should stop but it continues
  // var anderApparaat = readline.keyInYN(
  //   "Werkt de wifi wel op een ander apparaat? "
  // );
  // if (anderApparaat === true) {
  //   console.log("onze oplossingen \n Gebruik je eigen wifi");
  // } else {
  //   console.log("next");
  // }
  // readline.keyInPause("Mijn wifi werkt nog niet");
  // console.log("we helpen je verder");
  // readline.keyInPause("chat met specialist");
} else {
  console.log("Heb je een zwart Ziggo modem zoals op het plaatje?");

  var modem = readline.keyInYN(
    "Heb je een zwart wifi-modem van Ziggo, zoals op de afbeelding hierboven?"
  );
  console.log(modem);
  if (modem === true) {
    console.log("next");
    // console.log(
    //   "Een wifi-versterker verbetert het wifi-signaal dat je modem verstuurt. Je kunt een wifi-versterker van Ziggo hebben. Of je hebt ergens anders een versterker gekocht"
    // );
    // console.log("Gebruik je een wifi-versterker?");
  } else {
    console.log(
      `Heb je geen apart wifi-modem maar gebruik je de wifi via de Mediabox XL? `
    );
    var mediabox = readline.keyInYN(
      `Heb je een Mediabox XL zoals op het plaatje? `
    );
    console.log(mediabox);
    if (mediabox === true) {
      console.log("next");
    } else {
      console.log("Wat voor modem heb je?");
      readline.keyInPause("Ga verder - druk op v om verder te gaan");
      console.log(`Heb je een wit Ziggo modem zoals op het plaatje?`);
      console.log(
        `Op de afbeelding zie je onze SmartWifi modem (Connectbox) en SmartWifi modem Giga (Connectbox Giga). Deze modems zijn allebei wit.`
      );
      var connectBox = readline.keyInYN("Ja - druk op v om verder te gaan");
      console.log(connectBox);
      if (connectBox === true) {
        console.log("next");
      } else {
        console.log("Heb je een zwart Ziggo modem zoals op het plaatje?");
        console.log(
          "Heb je een zwart wifi-modem van Ziggo, zoals op de afbeelding hierboven?"
        );
        var zwartZiggo = readline.keyInYN(
          "Heb je een zwart Ziggo modem zoals op het plaatje ?"
        );
        if (zwartZiggo === true) {
          console.log("next");
        } else {
          console.log(
            "Heb je geen apart wifi-modem maar gebruik je de wifi via de Mediabox XL? "
          );
          var mediabox2 = readline.keyInYN(
            `Heb je een Mediabox XL zoals op het plaatje? `
          );
          console.log(mediabox2);
          console.log("we helpen je verder ");
          readline.keyInPause("chat met een specialist");
        }
      }
    }
    // var versterker = readline.keyInYN(
    //   "Werkt de wifi wel op een ander apparaat?"
    // );
    // console.log(versterker);
    // if (versterker === true) {
    //   console.log("Onze oplossingen");
    //   console.log(
    //     "Je hebt een slechte verbinding op één van je apparaten. Dit kun je doen om je wifi beter te laten werken:"
    //   );
    // } else {
    //   console.log("Werkt de wifi wel vlakbij je modem?");
    //   var werkGoed = readline.keyInYN(
    //     "Hiermee test je het bereik van je wifi. Ga met je mobiele telefoon of laptop vlakbij je modem staan. Werkt je wifi hier wel goed?"
    //   );
    //   console.log(werkGoed);
    //   if (werkGoed === true) {
    //     console.log("Herstart je Mediabox XL voordat je verdergaat");
    //     console.log(`Zet je Mediabox XL uit en weer aan of trek de stekker uit het stopcontact en stop hem er weer in.
    //     Wacht daarna 7 minuten tot je mediabox is herstart.`);
    //   }
    // }
  }
}

// console.log(
//   "We weten dat je je Mediabox XL niet altijd kunt verplaatsen. Maar zet hem tijdelijk op minimaal 1,5 meter hoogte en zichtbaar vanaf de plek waar je wilt internetten. Zo kunnen we deze oorzaak uitsluiten."
// );
// readline.keyInPause("ik heb mijn mediabox opnieuwe gestart ");
// console.log("Kijk of je je Mediabox XL een betere plek kunt geven");
// console.log(`We weten dat je je Mediabox XL niet altijd kunt verplaatsen. Maar zet hem tijdelijk op minimaal 1,5 meter hoogte en zichtbaar vanaf de plek waar je wilt internetten. Zo kunnen we deze oorzaak uitsluiten.
// `);
// readline.keyInPause("Mijn media xl heeft een goede plek");
// var rode = readline.keyInYN(
//   "Brand er een rode Offline melding op je Mediabox XL?"
// );

// console.log(rode);
// console.log("Wacht minimaal 7 minuten tot de offline melding is verdwenen.");
// if (rode === true) {
//   console.log("Onze oplossingen");
//   var verbinding = readline.keyInPause(
//     "Je hebt een slechte verbinding op één van je apparaten. Dit kun je doen om je wifi beter te laten werken:"
//   );
//   if (verbinding === true) {
//     console.log("bedankt");
//   } else {
//     readline.keyInPause("mijn wifi werkt nog niet");
//   }
// } else {
//   console.log(`Onze oplossingen
//     Er brandt geen wit lampje op je modem. Dit kun je doen om je wifi beter te laten werken:`);
//   var plek = readline.keyInPause("Mijn xl heeft een goede plek");
//   console.log(plek);
//   if (plek === true) {
//     console.log("We helpen je verder, chat met een specialist ");
//   } else {
//     console.log("bedankt");
//   }
// }

// if (modem === true) {
//     console.log(
//       `Een wifi-versterker verbetert het wifi-signaal dat je modem verstuurt. Je kunt een wifi-versterker van Ziggo hebben. Of je hebt ergens anders een versterker gekocht.`
//     );else{}

//   } else {
//
//   }
// }

// readline.keyInPause("Nee - druk op v om verder te gaan");
// console.log(`Gebruik je een wifi-versterker?
// `);
// console.log(
//   `Een wifi-versterker verbetert het wifi-signaal dat je modem verstuurt. Je kunt een wifi-versterker van Ziggo hebben. Of je hebt ergens anders een versterker gekocht.`
// );
// // readlineSync.keyInYN
// readline.keyInPause("Ja - druk op v om verder te gaan");
// readline.keyInPause("Nee - druk op v om verder te gaan");
// console.log(`Werkt de wifi wel op een ander apparaat?`);
// console.log(
//   `Misschien is het apparaat waarop je wilt internetten niet goed ingesteld. Controleer op een andere laptop, mobiele telefoon of tablet of je daarmee wel kunt internetten.`
// );
// readlineSync.keyInYN("ja");
// readlineSync.keyInYN("Nee");
