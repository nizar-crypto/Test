// In één keer een object met functies definieren
// let op de : ipv = en de komma's tussen de properties
p = {
  voornaam: "James",
  achternaam: "Gosling",
  honden: [
    { naam: "Fikkie", ras: "Maltezer" },
    { naam: "Snuffel", ras: "Vuilnisbak" },
  ],
  voorstellen: function () {
    console.log(`Hallo, mijn naam is ${this.voornaam}!`);
  },

  printHonden: function () {
    console.log(
      `${this.voornaam} heeft ${this.honden.length} honden, genaamd: `
    );
    this.honden.forEach((h) => console.log(`${h.naam} (${h.ras})`));
  },
};

// bekijken welke properties aanwezig zijn met entries()
for (const [key, value] of Object.entries(p)) {
  // plek om nodige bewerkingen uit te voeren
  console.log(`${key}: ${value}`);
}
