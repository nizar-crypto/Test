// Welke woord wil je herhaald zien? hup
// Hoe vaak moet het woord getoond worden? 3
// hup hup hup

const woord = prompt("Welke woord wil je herhaald zien? ");
const aantal = prompt("Hoe vaak moet het woord getoond worden? ");
woordenrijAantal(woord, aantal);

/**
 * Woordenrij
 * B: Variabel aantal woorden
 */
// function woordenrijAantal(woord, aantal) {
//   // defineer eerst een lege string die je gaat aanvullen in een loop
//   let str = "";
//   for (let idx = 0; idx < aantal; idx++) {
//     str += woord + " "; // spatie toevoegen
//   }
//   console.log(str);
// }
// const woord = prompt("welke woord wil je herhalde zien:");
// const aantal = prompt("hoe vaak moet het woord getoond worden?");

// woordenherhaald(woord, aantal);
// function woordenherhaald(woord, aantal) {
//   let str = " ";
//   for (let index = 0; index < aantal; index++) {
//     str += woord + " ";
//   }
//   console.log(str);
// }
