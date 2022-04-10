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

// 2. Desired output:
// Array of projects which have more than 20 supporters
// var output = [];
// for (let index = 0; index < projects.length; index++) {
//   const project = projects[index];
//   console.log("check project", project);
//   var projectSupporters = project.supporters;

//   console.log(projectSupporters);
//   if (projectSupporters >= 20) {
//     console.log("check more 20", project);
//   }
//   output.push(project);
// }
// console.log(output);

var project = projects[0];
console.log(
  "supporters",
  project.supporters,
  "BIGGER THAN 20",
  project.supporters > 20
);
var output = [];
for (let index = 0; index < projects.length; index++) {
  const project = projects[index];
  if (project.supporters >= 20) {
    console.log("check supporters", project);
    output.push(project);
  }
}
console.log("CHECK THE OUTPUT", output);
