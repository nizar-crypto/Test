var readline = require("readline-sync");
users = [
  {
    walletId: "15wJnVWxHW1bGK7oRErARZjuJdqvKhJdEN",
    first_name: "Parker",
    last_name: "Filippo",
    email: "pfilippo0@yahoo.com",
    balance: 45.55,
    ip_address: "193.149.16.215",
  },
  {
    walletId: "1NoXtjfctfD7Nik22MbjygVdvkFZJfpzXE",
    first_name: "Jorrie",
    last_name: "Empson",
    email: "jempson1@ucoz.ru",
    balance: 24.13,
    ip_address: "46.183.83.114",
  },
  {
    walletId: "18pREDsEPeZsYAabWNStSC7e4h7DSBoyXy",
    first_name: "Ely",
    last_name: "Ilett",
    email: "eilett2@hud.gov",
    balance: 22.67,
    ip_address: "253.35.252.223",
  },
  {
    walletId: "1HJvS7C3LhepKB6Yy2avpjt9RPFWv19FoA",
    first_name: "Kassi",
    last_name: "Spickett",
    email: "kspickett3@umich.edu",
    balance: 19.61,
    ip_address: "76.95.133.53",
  },
  {
    walletId: "1Gyze6EmWhqLrC7BBtdQCptsg26rmHadA8",
    first_name: "Nickie",
    last_name: "Stanyard",
    email: "nstanyard4@ed.gov",
    balance: 14.35,
    ip_address: "8.18.92.123",
  },
  {
    walletId: "1HjD3Uo2HkgEaLhsbmYdHGJev3VUFyqLHP",
    first_name: "Ferdinanda",
    last_name: "Wanden",
    email: "fwanden5@woothemes.com",
    balance: 99.68,
    ip_address: "254.204.54.76",
  },
  {
    walletId: "1EsBagXkZa9erRhjxNoBXVdZFsFbPqrcFw",
    first_name: "Grazia",
    last_name: "Grebert",
    email: "ggrebert6@ameblo.jp",
    balance: 29.93,
    ip_address: "241.48.126.194",
  },
  {
    walletId: "1NmWFHfjgPcEiBponZghgVS8NcTmgENr9P",
    first_name: "Chloette",
    last_name: "Ranyelld",
    email: "cranyelld7@mit.edu",
    balance: 27.42,
    ip_address: "27.158.174.68",
  },
  {
    walletId: "1DVAJtsHEjuBqCeCAt7Qjkp44a5brWig2a",
    first_name: "Mellisent",
    last_name: "Cuell",
    email: "mcuell8@lycos.com",
    balance: 39.45,
    ip_address: "153.154.204.157",
  },
  {
    walletId: "1EMY6NFF5R7hs88ha7MSuWp32d7RnCAy6B",
    first_name: "Flss",
    last_name: "Hofner",
    email: "fhofner9@omniture.com",
    balance: 59.56,
    ip_address: "220.156.123.166",
  },
];

// 4. Desired output:
// balance * 38.755,46 (bitcoin price)
// in millions of euros
// [
//     {
//       walletId: "15wJnVWxHW1bGK7oRErARZjuJdqvKhJdEN",
//       user: "P. F.",
//       eurosMillion: 1.76
//     },

//     {
//       walletId: "1NoXtjfctfD7Nik22MbjygVdvkFZJfpzXE",
//       user: "J. E.",
//       eurosMillion: 0.94,
//     },
//     {
//       walletId: "18pREDsEPeZsYAabWNStSC7e4h7DSBoyXy",
//       user: "E. I.",
//       eurosMillion: 0.88,

// x1-initial
// x2-add new object property with a formula
// X3- delete first and last name and eamil balance and ip address
// 4-make for loop and combine
var output = [];
for (let index = 0; index < users.length; index++) {
  const user = users[index];
  //   var user = users[1];

  var firstInitial = user.first_name[0];
  //   console.log("check", firstInitial);

  var secondInitial = user.last_name[0];
  //   console.log("check second", secondInitial);

  var initials = firstInitial + "." + secondInitial + ".";
  console.log(initials);
  user.user = initials;

  var bitcoin = parseFloat(((user.balance * 38755.46) / 1000000).toFixed(2)); //the number was balance * 38.755,46 (bitcoin price) it gave me unexpected number about 46 why)
  user.eurosMillion = bitcoin;

  //   console.log("check eurosMillion", eurosMillion);
  // console.log(bitcoin);

  //delete multi properties
  //   var finalUser = initials + eurosMillion;
  var propertiesToDelete = [
    "first_name",
    "last_name",
    "email",
    "balance",
    "ip_address",
  ];
  for (let index = 0; index < propertiesToDelete.length; index++) {
    //second way
    const key = propertiesToDelete[index];
    delete user[key];
  }
  // delete user.first_name;//first way
  //   delete user.last_name;
  //   delete user.email;
  //   delete user.balance;
  //   delete user.ip_address;
  //   output.push(finalUser),
  console.log("check USER", user);
}
console.log(output);

// var project = projects[0];

// console.log(project);

// // If we want to convert this:
// // country, donateIban, donationAmount, active
// // Into a datatype: Array

// var propertiesToDelete = [
//   "first_name",
//   "last_name",
//   "email",
//   "balance",
//   "ip_address",
// ];

// for (let index = 0; index < propertiesToDelete.length; index++) {
//   var keyToDelete = propertiesToDelete[index];
//   console.log("key:", keyToDelete);
//   delete user[keyToDelete];
// }

// console.log("AFTER:", user);
