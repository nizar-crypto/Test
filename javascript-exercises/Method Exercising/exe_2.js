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

// 2. Desired output: All products which are in stock: [{"id":4,"productName":"Sesame Seed Black","cost":3.11,"inStock":true,"origin":"Colombia"},{"id":5,"productName":"Container - Clear 32 Oz","cost":7.68,"inStock":true,"origin":"France"},{"id":6,"productName":"Lime Cordial - Roses","cost":2.13,"inStock":true,"origin":"Portugal"},{"id":7,"productName":"Bread - Roll, Soft White Round","cost":7.84,"inStock":true,"origin":"China"},{"id":9,"productName":"Tequila - Sauza Silver","cost":6.95,"inStock":true,"origin":"Indonesia"},{"id":10,"productName":"Saskatoon Berries - Frozen","cost":4.9,"inStock":true,"origin":"Thailand"},{"id":12,"productName":"Raspberries - Fresh","cost":9.53,"inStock":true,"origin":"China"},{"id":13,"productName":"Bread Foccacia Whole","cost":8.88,"inStock":true,"origin":"Indonesia"},{"id":14,"productName":"Island Oasis - Peach Daiquiri","cost":2.9,"inStock":true,"origin":"Finland"},{"id":15,"productName":"Bacardi Mojito","cost":6.66,"inStock":true,"origin":"Ukraine"},{"id":16,"productName":"Oil - Sunflower","cost":5.04,"inStock":true,"origin":"Colombia"},{"id":17,"productName":"Wine - Acient Coast Caberne","cost":3.17,"inStock":true,"origin":"Iran"},{"id":18,"productName":"Cookie Dough - Oatmeal Rasin","cost":4.39,"inStock":true,"origin":"Norway"}]

const inStockProudcts = products.filter((product) => {
  console.log("check stock", product.inStock === true);
  return product.inStock === true;
});
console.log("Product inStock are: ", inStockProudcts);
const stock = products.filter((product) => {
  console.log(product.inStock === true);
});
