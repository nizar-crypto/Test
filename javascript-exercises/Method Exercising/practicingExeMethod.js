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

// 1. Desired output: ['Brazil', 'South Africa', 'France', 'Colombia', 'France', 'Portugal', 'China', 'Nicaragua', 'Indonesia', 'Thailand', 'Panama', 'China', 'Indonesia', 'Finland', 'Ukraine', 'Colombia', 'Iran', 'Norway', 'Indonesia', 'Bosnia and Herzegovina']
// 2. Desired output: All products which are in stock: [{"id":4,"productName":"Sesame Seed Black","cost":3.11,"inStock":true,"origin":"Colombia"},{"id":5,"productName":"Container - Clear 32 Oz","cost":7.68,"inStock":true,"origin":"France"},{"id":6,"productName":"Lime Cordial - Roses","cost":2.13,"inStock":true,"origin":"Portugal"},{"id":7,"productName":"Bread - Roll, Soft White Round","cost":7.84,"inStock":true,"origin":"China"},{"id":9,"productName":"Tequila - Sauza Silver","cost":6.95,"inStock":true,"origin":"Indonesia"},{"id":10,"productName":"Saskatoon Berries - Frozen","cost":4.9,"inStock":true,"origin":"Thailand"},{"id":12,"productName":"Raspberries - Fresh","cost":9.53,"inStock":true,"origin":"China"},{"id":13,"productName":"Bread Foccacia Whole","cost":8.88,"inStock":true,"origin":"Indonesia"},{"id":14,"productName":"Island Oasis - Peach Daiquiri","cost":2.9,"inStock":true,"origin":"Finland"},{"id":15,"productName":"Bacardi Mojito","cost":6.66,"inStock":true,"origin":"Ukraine"},{"id":16,"productName":"Oil - Sunflower","cost":5.04,"inStock":true,"origin":"Colombia"},{"id":17,"productName":"Wine - Acient Coast Caberne","cost":3.17,"inStock":true,"origin":"Iran"},{"id":18,"productName":"Cookie Dough - Oatmeal Rasin","cost":4.39,"inStock":true,"origin":"Norway"}]
// 3. Desired output: The product which costs: 4.39   {id: 18, productName: "Cookie Dough - Oatmeal Rasin", cost: 4.39, inStock: true, origin: "Norway"}
// 4. Desired output: The product with id 8:   { id: 8, productName: "Squid - U - 10 Thailand", cost: 9.52, inStock: false, origin: "Nicaragua"}
// 5. Desired output: The amount of money it costs to buy 1 of each product: 119.05
// 6. Desired output: The names of all the products and their costs: ['Lettuce - California Mix - € 9.68', 'Island Oasis - Cappucino Mix - € 2.24', 'Pork - Bacon Cooked Slcd - € 6.7', 'Sesame Seed Black - € 3.11', 'Container - Clear 32 Oz - € 7.68', 'Lime Cordial - Roses - € 2.13', 'Bread - Roll, Soft White Round - € 7.84', 'Squid - U - 10 Thailand - € 9.52', 'Tequila - Sauza Silver - € 6.95', 'Saskatoon Berries - Frozen - € 4.9', 'Lettuce - Romaine, Heart - € 6.58', 'Raspberries - Fresh - € 9.53', 'Bread Foccacia Whole - € 8.88', 'Island Oasis - Peach Daiquiri - € 2.9', 'Bacardi Mojito - € 6.66', 'Oil - Sunflower - € 5.04', 'Wine - Acient Coast Caberne - € 3.17', 'Cookie Dough - Oatmeal Rasin - € 4.39', 'Soup - Knorr, French Onion - € 6.96', 'Sauce - Black Current, Dry Mix - € 4.19']
// 7. Desired output: The amount of money it costs to buy 1 of each product which is inStock: 73.18
// 8. Desired output: A array of countries of origin, without duplicates: 15 countries - ['Brazil', 'South Africa', 'France', 'Colombia', 'Portugal', 'China', 'Nicaragua', 'Indonesia', 'Thailand', 'Panama', 'Finland', 'Ukraine', 'Iran', 'Norway', 'Bosnia and Herzegovina']
// 9. Desired output: The cheapest product in ANY array of products: 2.13, not allowed to use find
// 10. Desired output: All products which are a "Mix": [{"id":1,"productName":"Lettuce - California Mix","cost":9.68,"inStock":false,"origin":"Brazil"},{"id":2,"productName":"Island Oasis - Cappucino Mix","cost":2.24,"inStock":false,"origin":"South Africa"},{"id":20,"productName":"Sauce - Black Current, Dry Mix","cost":4.19,"inStock":false,"origin":"Bosnia and Herzegovina"}]
