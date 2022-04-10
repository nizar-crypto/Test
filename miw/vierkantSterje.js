// Schrijf nu een functie die weer een vierkant van asterisken print. Je moet nu het aantal asterisken per zijde kunnen meegeven als argument. Zorg ook voor een standaardwaarde voor zijde. Geef de functie een gepassende naam. Test de functionaliteit in je scrip
printVierkant(5);

printVierkant(); // gebruikmakend van een default waarde

/**
 * B: Print vierkant
 * zijde: argument voor lengte zijde
 */
function printVierkant(zijde = 4) {
  str = "";
  for (let hoogte = 0; hoogte < zijde; hoogte++) {
    for (let breedte = 0; breedte < zijde; breedte++) {
      str += "* ";
    }
    if (hoogte !== zijde - 1) {
      str += "\n"; // naar de volgende regel: eventueel de laatste iteratie overslaan
    }
  }
  console.log(str);
}
// printVierkant(5);
// printVierkant();
// function printVierkant(zijde=4){
//     str=''
//     for (let hoogte = 0; hoogte < zijde; hoogte++) {
//       for (let breedte = 0; breedte < zijd; breedte++) {
//          str += '\n'
//       }
//     }
//     console.log(str);
// }
