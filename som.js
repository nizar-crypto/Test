/**
 * Berekent de som van de getallen in de array
 */
if (!Array.isArray(arr)) {
  throw new Error("Argument arr is geen array");
}
let som = 0;
arr.forEach((element) => {
  // controleer of element wel een Number type is
  if (typeof element !== "number") {
    throw new Error("Element is niet van het type number");
  }
  som += element;
});
return som;
// Gemiddelde van een rij getallen (basis)
function gemiddelde(arr) {
  // je kunt controleren of arr een array is, echter de som functie doet dit ook al
  // je zou gebruik kunnen maken van de som functie en dan delen door de lengte van de array
  // echter, dan zou je een exception moeten op gooien als niet alleen number types in de array zitten
  // doe je dat niet dan is de array lengte groter dan het aantal getallen dan waar je door moet delen
  // en komt je gemiddelde te laag uit
  return som(arr) / arr.length;
}
Back;
