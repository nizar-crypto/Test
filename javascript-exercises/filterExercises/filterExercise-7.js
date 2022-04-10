var readline = require("readline-sync");
var projects = [
  {
    project: "Tres-Zap",
    country: "China",
    donateIban: "FR17 3912 7853 73RV G0QO DGKH N65",
    donationAmount: 5774,
    supporters: 28,
    active: false,
  },
  {
    project: "Hatity",
    country: "Belgium",
    donateIban: "FI58 7815 7057 6806 73",
    donationAmount: 1542,
    supporters: 44,
    active: true,
  },
  {
    project: "Flexidy",
    country: "Indonesia",
    donateIban: "BA38 9986 8076 1906 1363",
    donationAmount: 5896,
    supporters: 43,
    active: true,
  },
  {
    project: "Domainer",
    country: "Russia",
    donateIban: "SI68 2039 7747 4963 574",
    donationAmount: 3667,
    supporters: 13,
    active: true,
  },
  {
    project: "Alpha",
    country: "Poland",
    donateIban: "MD36 FFII 5KGW YCCD TPCM HZRD",
    donationAmount: 5360,
    supporters: 15,
    active: false,
  },
  {
    project: "Vagram",
    country: "China",
    donateIban: "NL06 JBIN 0005 8741 18",
    donationAmount: 6269,
    supporters: 15,
    active: true,
  },
  {
    project: "Bigtax",
    country: "Tanzania",
    donateIban: "DO71 0XUZ 4405 0789 0632 8584 5323",
    donationAmount: 1476,
    supporters: 42,
    active: true,
  },
  {
    project: "Trippledex",
    country: "Portugal",
    donateIban: "BA96 2331 2755 2934 8254",
    donationAmount: 6229,
    supporters: 35,
    active: true,
  },
  {
    project: "Bitchip",
    country: "Poland",
    donateIban: "GR36 7035 385T DVRS YEMG I7QN T76",
    donationAmount: 42,
    supporters: 3,
    active: true,
  },
  {
    project: "Trippledex",
    country: "China",
    donateIban: "FO18 4681 3187 5928 35",
    donationAmount: 4087,
    supporters: 8,
    active: false,
  },
];

// 5. Desired output:
// Array of projects with a donationAmount between 2000 and 4000
var project = projects[0];
var output = [];
for (let index = 0; index < projects.length; index++) {
  const project = projects[index];
  // var donAmount = project.donationAmount;    // is this good or not ?
  // console.log("check amount", donAmount);
  // var amountLimit =                          // can i make this logic a variable and use it?NO
  var between1000And4000 =
    project.donationAmount >= 1000 && project.donationAmount <= 4000;

  console.log(
    "donationAmount",
    project.donationAmount,
    "EQUAL OR BIGGER THAN 1000 SMALLER OR EQUAL THAN 4000?",
    project.donationAmount >= 1000 && project.donationAmount <= 4000
  );
  // console.log("CHECKING", amountLimit);
  if (between1000And4000) {
    // console.log("the Project", project);
    output.push(project);
  }
}
console.log("check output", output);
