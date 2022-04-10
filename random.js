// * Woordenrij
//  * C: Willekeurig aantal woorden: 1 - 10
//  */
function woordenrijWillekeurig(woord) {
  const aantal = Math.floor(Math.random() * 10 + 1); // deze expressie kan ook als default waarde toegepast worden
  let str = "";
  for (let idx = 0; idx < aantal; idx++) {
    str += woord + " "; // spatie toevoegen
  }
  console.log(str);
}

// Math.random als default waarde
function woordenrijWillekeurig(
  woord,
  aantal = Math.floor(Math.random() * 10 + 1)
) {
  // deze expressie kan ook als default waarde toegepast worden
  let str = "";
  for (let idx = 0; idx < aantal; idx++) {
    str += woord + " "; // spatie toevoegen
  }
  console.log(str);
}

const p = {
  naam: "Pietje Puk",
  lengte: 1.85,
  isIngeschreven: true,
};

console.log(`Mijn naam is ${p.naam}`);
console.log(`Ik ben ${p.lengte} lang`);
console.log(`Ik ben ${p.isIngeschreven ? "wel" : "niet"} ingeschreven`);

// JSON en stringinfy
console.log(p); // Object { naam: "Pietje Puk", lengte: 1.85, isIngeschreven: true }
console.log(JSON.stringify(p)); // {"naam":"Pietje Puk","lengte":1.8

// JSON.parse()JSON.parse() zet een JSON-geformateerde string om naar een Javascript object. Dit noemt men deserialiseren.

const str = '{ "naam": "Jan Jansen", "lengte": 1.77, "isIngeschreven": false }';
const p2 = JSON.parse(str);

console.log(`Mijn naam is ${p2.naam}`);
console.log(`Ik ben ${p2.lengte} lang`);
console.log(`Ik ben ${p2.isIngeschreven ? "wel" : "niet"} ingeschreven`);

// hier we Een functie kan gebruikt worden om bewerkingen op de waarden van het object uit te voeren.
// Gebruik het keyword this om te verwijzen naar eigenschappen van het object.
p.voorstellen = function () {
  console.log(`Hallo, mijn naam is ${this.voornaam}!`);
}; // definieren

p.voorstellen(); // uitvoeren

p.printHonden = function () {
  console.log(`${this.voornaam} heeft ${this.honden.length} honden, genaamd: `);
  this.honden.forEach((h) => console.log(`${h.naam} (${h.ras})`));
}; // definieren

p.printHonden(); // uitvoeren
