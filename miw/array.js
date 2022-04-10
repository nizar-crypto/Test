// Array toString
// function toStringErr(arr, delimiter = ' '){
//     // return early (fail fast) met bouncer patroon: guard clausules stoppen uitvoer direct met een meldinguitvoer direct
//     if(!Array.isArray(arr)){t
//         throw new Error('Argument arr is geen array')
//     }

//     let str = ''
//     for (let idx = 0; idx < arr.length; idx++) {
//         str += arr[idx]node
//         if(idx < arr.length - 1 ){
//             str += delimiter
//         }
//     }
//     return str
// }

// /**
//  * Zet de inhoud van een array om in enkele regel
//  * Geef een lege string terug als er geen array
//  * meegegeven wordt
//  * @param arr
//  * @param delimiter scheidingsteken tussen waarden
//  */
function toString(arr, delimiter = " ") {
  let str = "";
  if (Array.isArray(arr)) {
    for (let idx = 0; idx < arr.length; idx++) {
      str += arr[idx];
      if (idx < arr.length - 1) {
        str += delimiter;
      }
    }
  }
  return str;
}
