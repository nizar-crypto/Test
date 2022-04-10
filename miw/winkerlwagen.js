// winkelwagen maken
// product: naam, prijs
// winkelwagen: product, aantal
// functionaliteit: bereken totaal, print lijst met producten en aantal en subtotaal
const voorraad = [
  { naam: "tomaat", prijs: 0.75 },
  { naam: "sla", prijs: 0.5 },
  { naam: "broccoli", prijs: 1.2 },
];

const winkelwagen = {
  producten: [],
  voegToe: function (nieuw, aantal) {
    // gebruik een bestelregel om product en aantal bij elkaar op te slaan
    // controleer eerst of het product dat moet worden toegevoegd al bestaat
    // simpele overzichtelijk (oude) aanpak
    for (prod of this.producten) {
      if (prod.naam === nieuw.naam) {
        // update alleen aantal
        prod.aantal += aantal;
        return; // stop zoeken en exit functie: omdat functie vrij klein is, is een return hier nog goed te zien
      }
    }
    // product bestaat nog niet, voeg toe
    this.producten.push({
      naam: nieuw.naam,
      prijs: nieuw.prijs,
      aantal: aantal,
    });
  },
  totaal: function () {
    let totaal = 0;
    this.producten.forEach((e) => (totaal += e.prijs * e.aantal));
    return totaal;
  },
  printSubtotalen: function () {
    const bestelregel = [];
    this.producten.forEach((e) =>
      // console.log(`${k.naam} - prijs: ${k.prijs}, aantal: ${v} = ${k.prijs * v}`)
      bestelregel.push({
        naam: e.naam,
        prijs: e.prijs,
        aantal: e.aantal,
        subtotaal: e.prijs * e.aantal,
      })
    );
    console.table(bestelregel);
  },
};

winkelwagen.voegToe(voorraad[0], 5);
winkelwagen.voegToe(voorraad[0], 2);
winkelwagen.voegToe(voorraad[1], 3);

console.log(winkelwagen.printSubtotalen());

console.log(winkelwagen.totaal());
