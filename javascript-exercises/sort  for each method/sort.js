const wallets = [
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

// const numbers = [5, 8, 1, -1, 10, 100, 0, 500];

// const sortedNumbers = numbers.sort();

// console.log(sortedNumbers);

// const names = ["Rein", "Afaf", "Nizar", "Gigi"];
// const sortedNames = names.sort();

// console.log(sortedNames);

// const sortedWallets = wallets.sort((walletA, walletB) => {
//   console.count("HOW OFTEN?");
//   console.log("WHAT IS A", walletA.balance);
//   console.log("WHAT IS B", walletB.balance);
//   let returnValue;
//   if (walletB.balance > walletA.balance) {
//     returnValue = 1; // any postive number
//   } else if (walletB.balance < walletA.balance) {
//     returnValue = -1; // any negative number
//   } else {
//     returnValue = 0;
//   }

//   console.log("WE RETURN:", returnValue);
//   return returnValue;
//   // 3 scenarios
//   // nothing should happen: return 0
//   // walletB should move to front of the array, instead walletA: return 1
//   // walletA should move to front of the array, instead walletB: return -1
// });

// const sortedWallets = wallets.sort((a, b) => a.balance - b.balance);

// a -> 2nd element b -> 1st element
// a -> 3rd element b -> 2nd element
// a -> 4th element b -> 3rd element
// a -> 5th element b -> 4th element
// console.log(sortedWallets);

// users.sort((a, b) => a.firstname.localeCompare(b.firstname))
// const sortedWalletsAlphabet = wallets.sort((a, b) =>
//   a.first_name.localeCompare(b.first_name)
// );

// console.log(sortedWalletsAlphabet);

// forEach -> do something for every element (no transformation)
const whatDoesForEachReturn = wallets.forEach((wallet) => {
  //   console.log("ONE AT A TIME:", wallet);
  console.log(`${wallet.first_name}: ${wallet.balance}`);
});

console.log("WHAT DOES THIS RETURN?", whatDoesForEachReturn);
