const products = [
  {
    id: 1,
    productName: "Lettuce - California Mix",
    cost: 9.68,
    inStock: false,
    origin: "Brazil",
  },
  {
    id: 2,
    productName: "Island Oasis - Cappucino Mix",
    cost: 2.24,
    inStock: false,
    origin: "South Africa",
  },
  {
    id: 3,
    productName: "Pork - Bacon Cooked Slcd",
    cost: 6.7,
    inStock: false,
    origin: "France",
  },
  {
    id: 4,
    productName: "Sesame Seed Black",
    cost: 3.11,
    inStock: true,
    origin: "Colombia",
  },
  {
    id: 5,
    productName: "Container - Clear 32 Oz",
    cost: 7.68,
    inStock: true,
    origin: "France",
  },
  {
    id: 6,
    productName: "Lime Cordial - Roses",
    cost: 2.13,
    inStock: true,
    origin: "Portugal",
  },
  {
    id: 7,
    productName: "Bread - Roll, Soft White Round",
    cost: 7.84,
    inStock: true,
    origin: "China",
  },
  {
    id: 8,
    productName: "Squid - U - 10 Thailand",
    cost: 9.52,
    inStock: false,
    origin: "Nicaragua",
  },
  {
    id: 9,
    productName: "Tequila - Sauza Silver",
    cost: 6.95,
    inStock: true,
    origin: "Indonesia",
  },
  {
    id: 10,
    productName: "Saskatoon Berries - Frozen",
    cost: 4.9,
    inStock: true,
    origin: "Thailand",
  },
  {
    id: 11,
    productName: "Lettuce - Romaine, Heart",
    cost: 6.58,
    inStock: false,
    origin: "Panama",
  },
  {
    id: 12,
    productName: "Raspberries - Fresh",
    cost: 9.53,
    inStock: true,
    origin: "China",
  },
  {
    id: 13,
    productName: "Bread Foccacia Whole",
    cost: 8.88,
    inStock: true,
    origin: "Indonesia",
  },
  {
    id: 14,
    productName: "Island Oasis - Peach Daiquiri",
    cost: 2.9,
    inStock: true,
    origin: "Finland",
  },
  {
    id: 15,
    productName: "Bacardi Mojito",
    cost: 6.66,
    inStock: true,
    origin: "Ukraine",
  },
  {
    id: 16,
    productName: "Oil - Sunflower",
    cost: 5.04,
    inStock: true,
    origin: "Colombia",
  },
  {
    id: 17,
    productName: "Wine - Acient Coast Caberne",
    cost: 3.17,
    inStock: true,
    origin: "Iran",
  },
  {
    id: 18,
    productName: "Cookie Dough - Oatmeal Rasin",
    cost: 4.39,
    inStock: true,
    origin: "Norway",
  },
  {
    id: 19,
    productName: "Soup - Knorr, French Onion",
    cost: 6.96,
    inStock: false,
    origin: "Indonesia",
  },
  {
    id: 20,
    productName: "Sauce - Black Current, Dry Mix",
    cost: 4.19,
    inStock: false,
    origin: "Bosnia and Herzegovina",
  },
];

// 6. Desired output: The names of all the products and their costs: ['Lettuce - California Mix - € 9.68', 'Island Oasis - Cappucino Mix - € 2.24', 'Pork - Bacon Cooked Slcd - € 6.7', 'Sesame Seed Black - € 3.11', 'Container - Clear 32 Oz - € 7.68', 'Lime Cordial - Roses - € 2.13', 'Bread - Roll, Soft White Round - € 7.84', 'Squid - U - 10 Thailand - € 9.52', 'Tequila - Sauza Silver - € 6.95', 'Saskatoon Berries - Frozen - € 4.9', 'Lettuce - Romaine, Heart - € 6.58', 'Raspberries - Fresh - € 9.53', 'Bread Foccacia Whole - € 8.88', 'Island Oasis - Peach Daiquiri - € 2.9', 'Bacardi Mojito - € 6.66', 'Oil - Sunflower - € 5.04', 'Wine - Acient Coast Caberne - € 3.17', 'Cookie Dough - Oatmeal Rasin - € 4.39', 'Soup - Knorr, French Onion - € 6.96', 'Sauce - Black Current, Dry Mix - € 4.19']
const nameAndCost = products.map((product) => {
  console.log("check ", product.productName, product.cost);
  return product.productName, "-", "€", product.cost;
});
// console.log("The names of all the products and their costs are: ", nameAndCost);
