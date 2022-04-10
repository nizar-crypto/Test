const fs = require("fs");

const transactions = [
  {
    id: 1,
    date: "08/03/2021",
    amount: 752,
    senderIban: "ES76 3726 0650 8418 7962 8855",
    receiverIban: "FO52 5258 7169 3339 25",
    description: "full-range",
  },
  {
    id: 2,
    date: "26/11/2020",
    amount: 298,
    senderIban: "NL26 GXKT 9871 9484 12",
    receiverIban: "KW55 SSPP 9CAZ KIMX T8QS LUDU 0QBF GW",
    description: "dynamic",
  },
  {
    id: 3,
    date: "22/10/2020",
    amount: 605,
    senderIban: "SK24 8198 4847 3999 7141 4315",
    receiverIban: "EE53 5345 8373 6338 0686",
    description: "6th generation",
  },
  {
    id: 4,
    date: "05/07/2021",
    amount: 169,
    senderIban: "ME29 4951 6539 9947 5366 16",
    receiverIban: "PS20 NBDZ JJ68 F5U5 6MXJ ZDPE 34JR P",
    description: "Optional",
  },
  {
    id: 5,
    date: "10/06/2021",
    amount: 652,
    senderIban: "IT54 L330 4182 081D RUBV 7MG6 MNF",
    receiverIban: "AE67 0452 1440 3300 0712 540",
    description: "Robust",
  },
  {
    id: 6,
    date: "02/09/2020",
    amount: 660,
    senderIban: "MR08 7708 3838 4846 9738 6510 636",
    receiverIban: "FR81 0142 8031 58LP PUUJ IJBQ E77",
    description: "6th generation",
  },
  {
    id: 7,
    date: "22/07/2021",
    amount: 644,
    senderIban: "FR86 7225 8927 89AT JO6L XIKF M57",
    receiverIban: "FR02 8874 4972 81AI Z7IL DJUX 044",
    description: "Customer-focused",
  },
  {
    id: 8,
    date: "09/09/2021",
    amount: 219,
    senderIban: "DO72 UUYX 0356 3455 3636 5807 1247",
    receiverIban: "MD52 WQBC K2GI XKJ4 FRYU HKBG",
    description: "non-volatile",
  },
  {
    id: 9,
    date: "04/09/2020",
    amount: 175,
    senderIban: "LV64 VYUH NBRX JGWY TOYB W",
    receiverIban: "PT83 6531 1895 7261 6809 2886 6",
    description: "zero tolerance",
  },
  {
    id: 10,
    date: "01/10/2020",
    amount: 825,
    senderIban: "FR16 5127 7157 35YB L4BY AOYN E27",
    receiverIban: "ES48 7279 0536 1307 4747 1514",
    description: "Digitized",
  },
  {
    id: 11,
    date: "29/01/2021",
    amount: 407,
    senderIban: "KW25 LGEK 1LKZ EOCY CXXT CUHP HI9H BA",
    receiverIban: "BE38 4899 5957 9345",
    description: "zero defect",
  },
  {
    id: 12,
    date: "23/06/2021",
    amount: 551,
    senderIban: "ME30 3809 0375 2419 5292 43",
    receiverIban: "PL24 5921 1332 4397 9591 5789 8662",
    description: "3rd generation",
  },
  {
    id: 13,
    date: "26/11/2020",
    amount: 46,
    senderIban: "MK81 6718 CFO8 R5EO T03",
    receiverIban: "FI69 7102 3060 7778 38",
    description: "emulation",
  },
  {
    id: 14,
    date: "12/02/2021",
    amount: 980,
    senderIban: "AE48 5594 1191 8832 7912 418",
    receiverIban: "IT60 H420 2787 690O MA2Y 5YZA H67",
    description: "Open-source",
  },
  {
    id: 15,
    date: "23/09/2020",
    amount: 386,
    senderIban: "AE26 5017 2539 2533 5411 426",
    receiverIban: "DE26 7536 1779 1594 9836 66",
    description: "Phased",
  },
  {
    id: 16,
    date: "26/08/2021",
    amount: 281,
    senderIban: "PL43 1076 4229 0877 5660 6660 2670",
    receiverIban: "GT19 POV3 RTUG OQFM XIMF JOCO 6P01",
    description: "Optimized",
  },
  {
    id: 17,
    date: "08/08/2021",
    amount: 64,
    senderIban: "GL92 4732 6621 4926 97",
    receiverIban: "LU21 006M GGSL IED7 CNPX",
    description: "logistical",
  },
  {
    id: 18,
    date: "31/05/2021",
    amount: 271,
    senderIban: "ES80 1478 3487 8128 2363 2299",
    receiverIban: "FR17 1079 5536 68RW AJ2J 9JCY X81",
    description: "extranet",
  },
  {
    id: 19,
    date: "09/02/2021",
    amount: 321,
    senderIban: "DO80 DV13 3274 5197 3255 2973 6982",
    receiverIban: "PL95 2285 7531 1617 5627 3540 2430",
    description: "Universal",
  },
  {
    id: 20,
    date: "04/10/2020",
    amount: 35,
    senderIban: "PS24 PAVM NRHA QUVJ X7XS G9HT PUBP Q",
    receiverIban: "KZ96 051H PYHU LDHP WUQA",
    description: "Networked",
  },
  {
    id: 21,
    date: "17/08/2020",
    amount: 700,
    senderIban: "LT90 0476 4576 3807 1211",
    receiverIban: "ES10 3578 2341 7400 5150 7515",
    description: "exuding",
  },
  {
    id: 22,
    date: "10/08/2020",
    amount: 8,
    senderIban: "GT89 AJ29 QZVF HPTV JCU5 GCYX ZYVR",
    receiverIban: "CH04 3718 09I9 TUUR DTOU K",
    description: "Intuitive",
  },
  {
    id: 23,
    date: "04/04/2021",
    amount: 684,
    senderIban: "BE46 3112 7475 2158",
    receiverIban: "IT88 N315 3146 454L T9VJ XGUX FRV",
    description: "empowering",
  },
  {
    id: 24,
    date: "07/03/2021",
    amount: 924,
    senderIban: "GT20 IOZL 6UKH JPJT TGED 3YUC OXOQ",
    receiverIban: "BA53 9997 9321 5067 3654",
    description: "dynamic",
  },
  {
    id: 25,
    date: "12/09/2021",
    amount: 187,
    senderIban: "MU84 OKZN 7188 4361 2942 1814 451E PV",
    receiverIban: "BG61 ZTJQ 7372 975X N3NK VP",
    description: "Operative",
  },
  {
    id: 26,
    date: "05/12/2020",
    amount: 563,
    senderIban: "SE73 9576 8404 1932 8568 2628",
    receiverIban: "FR69 4132 4155 70AJ WGVH DFPX L52",
    description: "actuating",
  },
  {
    id: 27,
    date: "22/11/2020",
    amount: 895,
    senderIban: "BH88 YELR TDO9 TRG6 MOXC UZ",
    receiverIban: "NL50 DXXO 7884 0841 78",
    description: "static",
  },
  {
    id: 28,
    date: "04/09/2020",
    amount: 792,
    senderIban: "SE05 3787 8446 3146 5962 3617",
    receiverIban: "AD28 0825 7552 MOCY FK7S ZSFL",
    description: "Organized",
  },
  {
    id: 29,
    date: "16/10/2020",
    amount: 699,
    senderIban: "FR77 0290 3719 2601 1MEZ 8MRW J09",
    receiverIban: "GB74 IGEX 2624 8532 3502 66",
    description: "Enhanced",
  },
  {
    id: 30,
    date: "17/09/2021",
    amount: 233,
    senderIban: "BH84 XANT 1P8D YTIR X8YP VX",
    receiverIban: "FR66 3301 2402 621Q UVKR PGUO E12",
    description: "analyzer",
  },
];

const users = [
  {
    id: 1,
    userName: "aa",
    password: "abcd1234",
    iban: "AL73 6456 6291 4JSV IMHO CCXB GCYH",
  },
  {
    id: 2,
    userName: "bb",
    password: "abcd123",
    iban: "MR64 1246 3682 7944 2087 5420 395",
  },
  {
    id: 3,
    userName: "rcastledine2",
    password: "EnusG1",
    iban: "LB25 8384 5EMX FQKT AAJM NMOV BZLP",
  },
  {
    id: 4,
    userName: "kdoull3",
    password: "RrAo7f",
    iban: "KW77 JTQI S7IN 7CEF FNPA HZSC DI4A AC",
  },
  {
    id: 5,
    userName: "lwordesworth4",
    password: "b5cyCRO",
    iban: "FR65 3546 9000 267R 9ZEI BCFF 699",
  },
  {
    id: 6,
    userName: "gsyder5",
    password: "5lwuNbwSU9",
    iban: "FR03 6118 0951 22D4 LPYE IFNO 363",
  },
  {
    id: 7,
    userName: "fszymanowski6",
    password: "J9As8hTHne",
    iban: "MR95 7162 5929 7479 7255 0310 417",
  },
  {
    id: 8,
    userName: "btooze7",
    password: "YLXM2DyDl",
    iban: "MR36 9553 8611 7813 1817 4319 734",
  },
  {
    id: 9,
    userName: "lhoodless8",
    password: "ZUpDKQRGJ",
    iban: "IL32 7860 6690 6252 3744 761",
  },
  {
    id: 10,
    userName: "gmaingot9",
    password: "dSrY6dTF",
    iban: "PK54 JROM QRQV 6ZHD JGN5 X7LB",
  },
];

// 1. We need a array of ibans of the users in our app
// 2. Nice to have a function that gives us a random iban (that exists)
// 3. We loop over all transactions
//      - and we replace senderIban and receiverIban
//      - with 2 ibans that exist in our app
// potential problem
// - a transaction cannot have the same sender and receiver ...
// 4. finally, write the new array of transaction to a file,
// so we can copy paste it, or send via discord

// 1
const ibans = users.map((user) => user.iban);
// console.log("CHECK IBANS:", ibans);

// 2
function randomIban(allIbans) {
  //   console.log("ALL:", allIbans);
  // get a random element from an array ...
  var randomIban = allIbans[Math.floor(Math.random() * allIbans.length)];
  //   console.log("randomIban", randomIban);
  return randomIban;
}

// problem: no duplicates

function randomIbanPair(allIbans) {
  const iban1 = randomIban(ibans);
  const iban2 = randomIban(ibans);
  if (iban1 === iban2) {
    console.log("OH NO! 2 SAME IBANS!");
    return randomIbanPair(allIbans);
  }
  return { senderIban: iban1, receiverIban: iban2 };
}

// randomIban(ibans);
// 3 loop over transactions
const newTransactions = transactions.map((transaction) => {
  console.log("1 tr", transaction);
  const ibanPair = randomIbanPair(ibans);
  console.log("IBANPAIR", ibanPair);
  transaction.senderIban = ibanPair.senderIban;
  transaction.receiverIban = ibanPair.receiverIban;
  return transaction;
});

console.log("NEW:", newTransactions);

fs.writeFileSync("./transactiondata.json", JSON.stringify(newTransactions));
