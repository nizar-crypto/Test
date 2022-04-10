// Schrijf een functie die korte zinnen kan genereren. De zinnen moeten grammaticaal correct zijn. Echter, de inhoud hoeft nergens op te slaan. Gebruik het gegeven dat je correcte zinnen kunt maken als je onderwerp (Subject), werkwoord (Verb) en Lijdend voorwerp (Object) in de juiste volgorde zet. Gebruik standaard de SVO-volgorde en 3e persoon enkelvoud voor het onderwerp. De zin dient met een hoofdletter te beginnen

// gebruik woordlijsten om daar willekeurig woorden uit te selecteren
// Maak gebruik van functies om je code leerbaar te houden en om codeduplicatie te verminderen
/**
 * Een functie die korte zinnen kan genereren.
 * De zinnen zijn grammaticaal correct.
 * Het maakt zinnen in de SVO-volgorde
 */
function maakZin() {
  const subjects = [
    "het kind",
    "de man",
    "de vrouw",
    "de fiets",
    "het schaap",
    "de maaltijd",
  ];
  const verbs = ["fietst", "eet", "frituurt", "kent", "is", "maakt", "kookt"];
  // gebruik de random functie met de lengte van de array om een
  // woord uit de array te selecteren
  // voor leesbaarheid in een functie gezet
  const zin = `${randomElement(subjects)} ${randomElement(
    verbs
  )} ${randomElement(subjects)}.`;
  return startHoofdLetter(zin);
}

function makesentence() {
  const subjects = [
    "het kind",
    "de man",
    "de vrouw",
    "de fiets",
    "het schaap",
    "de maaltijd",
  ];
  const verbs = ["fietst", "eet", "frituurt", "kent", "is", "maakt", "kookt"];

  const zin = `${randomElement(subjects)} ${randomElement(
    verbs
  )} ${randomElement(subjects)}.`;
  return startHoofdLetter(zin);
}
function randomElement(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument arr is geen array");
  }
  if (arr.length === 0) {
    return " ";
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
}

/**
 * Selecteert willekeurig een element uit een array
 */
function randomElement(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument arr is geen array");
  }
  if (arr.length === 0) {
    return ""; // of null, anders blijft het undefined
  }
  const rndIndex = Math.floor(Math.random() * arr.length);
  return arr[rndIndex];
}

function startHoofdLetter(zin) {
  if (typeof zin !== "string") {
    throw Error("Meegegeven argument is niet van het type string");
  }
  // Eerste letter moet een hoofdletter worden, plak de rest van de string er weer aan vast
  return zin.charAt(0).toUpperCase() + zin.slice(1);
}
