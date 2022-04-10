// Random Waarden in Array
const aantal = prompt("Hoeveel getallen wil je genereren? ");
const maximum = prompt("Wat is het grootste getal dat mag voorkomen? ");

const arr = vulArrayRandomGetallen(aantal, maximum);
alert(`Dit zijn de getallen: ${toString(arr, ":")}`);

function vulArrayRandomGetallen(aantal, maximum = 20) {
  arr = [];
  for (let i = 0; i < aantal; i++) {
    arr.push(Math.floor(Math.random() * maximum + 1));
  }
  return arr;
}
// const aantal = prompt("Hoeveel getallen wil je genereren:")
// const maximum= prompt("wat is her grootste getal dat mag voorkomen:");
// cosnt arr =
// function random(aantal,maximum=10){
//     arr=[];
//     for (let i = 0; i < array.length; i++) {
//         arr.push(Math.floor(Math.random()*maximum+1))

//     }return arr;
// }
