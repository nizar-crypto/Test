<script>

  const EURO_DOLLAR = 1.23843;
  const EURO_GB_POUND = 0.88459;
  const EURO_YEN = 134.64711;

  // const bedrag = parseInt(
  //   prompt("In te wisselen bedrag (alleen gehele getallen): ")
  // );
  const bedrag = parseInt(prompt(" How much do  you want to exchange "))
  if (Number.isInteger(bedrag)) {
    const keuze = prompt("for which currency ?\n  1: US dollar\n  2: GB pound\n  3: Yen\nVoer uw keuze in:  ? ");
    switch (keuze) {
      case "1":
        alert(`you will have for ${bedrag} EURo ---> ${wissel(bedrag, EURO_DOLLAR).toFixed(2)} 
        usdollar.(koers${EURO_DOLLAR}`);
        break;
      case "2":
        alert(`you will get ${bedrag}---->${wissel(bedrag, EURO_GB_POUND).toFixed(2)}
          GB poound.()Koers${EURO_GB_POUND}`);
        break;
      case "3":
        alert(`you will get ${bedrag}---> ${wissel(bedrag, EURO_YEN).toFixed(2)}Yen.(koers${EURO_YEN}`);
        break;
    }
  

  // if (Number.isInteger(bedrag)) {
  //   const keuze = prompt(
  //     "Voor welke valuta wilt u wisselen?\n  1: US dollar\n  2: GB pound\n  3: Yen\nVoer uw keuze in: "
  //   );
  //   switch (keuze) {
  //     case "1":
  //       alert(
  //         `U krijgt voor ${bedrag} Euro -> ${wissel(bedrag, EURO_DOLLAR).toFixed(
  //           2
  //         )} US Dollar. (Koers ${EURO_DOLLAR})`
  //       );
  //       break;
  //     case "2":
  //       alert(
  //         `U krijgt voor ${bedrag} Euro -> ${wissel(bedag, EURO_GB_POUND).toFixed(
  //           2
  //         )} GB Pound. (Koers ${EURO_GB_POUND})`
  //       );
  //       break;
  //     case "3":
  //       alert(
  //         `U krijgt voor ${bedrag} Euro -> ${wissel(bedrag, EURO_YEN).toFixed(
  //           2
  //         )} Yen. (Koers ${EURO_YEN})`
  //       );
  //       break;
  //     default:
  //       alert("Uw keuze kon niet worden verwerkt");
  //   }
  // } else {
  //   alert("U heeft geen geheel getal ingevoerd");
  // }

  function wissel(bedrag, koers) {
    return bedrag * koers;
  }
