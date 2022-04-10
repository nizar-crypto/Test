var readline = require("readline-sync");
var distances = ["2 miles", "3 kilometers", "4 kilometers", "1.5 miles"];

// if miles X -> take number X * by 1.61 X
// if kilometers -> take the number

// var distancesKM = [];

// for (let index = 0; index < distances.length; index++) {
//   const distance = distances[index];

//   if (distance.includes("miles")) {
//     console.log("CHECK MILES?");
//     var number = parseFloat(distance);
//     console.log("HOW MANY?", number);
//     var kilometers = number * 1.61;
//     console.log("KM", kilometers);
//     distancesKM.push(kilometers);
//   } else if (distance.includes("kilometers")) {
//     var kilometers = parseFloat(distance);
//     console.log("KM", kilometers);
//     distancesKM.push(kilometers);
//   } else {
//     console.log("ERROR");
//   }
// }

// console.log("KM array", distancesKM);

// 1 mile = 1.61 km
// desired output: [ 3.22, 3, 4, 2.41]

// var distances = ["2 miles", "3 kilometers", "4 kilometers", "1.5 miles"];
var output = distances.map(function (distance) {
  console.log("DISTANCE", distance);
  if (distance.includes("miles")) {
    return parseFloat(distance) * 1.61;
  } else {
    return parseFloat(distance);
  }
});

console.log("RESULT:", output);
