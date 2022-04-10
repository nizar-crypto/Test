function gemiddelde(arr) {
  // je kunt controleren of arr een array is, echter de som functie doet dit ook al
  // je zou gebruik kunnen maken van de som functie en dan delen door de lengte van de array
  // echter, dan zou je een exception moeten op gooien als niet alleen number types in de array zitten
  // doe je dat niet dan is de array lengte groter dan het aantal getallen dan waar je door moet delen
  // en komt je gemiddelde te laag uit
  return som(arr) / arr.length;
}
