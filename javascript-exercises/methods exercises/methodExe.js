const people = [
  { id: 1, name: "James", nationality: "GB" },
  { id: 2, name: "Adam", nationality: "CA" },
  { id: 3, name: "Larry", nationality: "US" },
  { id: 4, name: "Fred", nationality: "NL" },
  { id: 5, name: "Anna", nationality: "NL" },
  { id: 6, name: "Emily", nationality: "DE" },
  { id: 7, name: "Lenny", nationality: "US" },
  { id: 8, name: "Cara", nationality: "NL" },
  { id: 9, name: "Nathalie", nationality: "NL" },
];

const clubs = [
  { name: "Book Club", members: [9, 3, 6, 2] },
  { name: "Auto Club", members: [1, 2, 3] },
  { name: "Country Club", members: [7, 5, 8] },
  { name: "Food Club", members: [5, 1, 6, 7] },
  { name: "Yoga Club", members: [1, 4, 5, 3, 7] },
  { name: "Garage Band", members: [1, 3, 8, 9] },
  { name: "Pool Club", members: [6, 4, 5, 8, 9] },
];

// Input:
// const user = people[0];
// and you can use the clubs & people arrays

// Desired ouput: An array of clubs that this user belongs to:
// [
//   { name: "Auto Club", members: [1, 2, 3] },
//   { name: "Food Club", members: [5, 1, 6, 7] },
//   { name: "Yoga Club", members: [1, 4, 5, 3, 7] },
//   { name: "Garage Band", members: [1, 3, 8, 9] },
// ];

// Strategy:
// - start with clubs array
// - filter: keep if the id the of user is in the member array
//  - look for the values we need: the member array, the id of this use
// const clubsOfJames = clubs.filter((club) => {
//   console.log(
//     "CLUB MEMBER IDS:",
//     club.members,
//     "USER ID:",
//     user.id,
//     "LOGIC:",
//     club.members.includes(user.id)
//   );
//   return club.members.includes(user.id);
// });

// After cleanup
// const clubsOfJames = clubs.filter((club) => club.members.includes(user.id));

// console.log(clubsOfJames);

// Input:
// const user = people[4]; // Anna
// const club = clubs[5]; // Garage band

// Desired output: Is Anna in the garage band?
// false

// Strategy:
//
// We are looking for 1 thing -> .find
// console.log(
//   "USER ID:",
//   user.name,
//   "CLUBS",
//   club,
//   "IS THIS ID IN THIS ARRAY:",
//   club.members.includes(user.id)
// );

// Input:
const name = "Lenny";
const yogaClub = clubs[4]; // { name: 'Yoga Club', members: [ 1, 4, 5, 3, 7 ] }
// We can use people, clubs as well if we want

// Desired output: Is there a user with name Lenny in the yogaclub?
// true

// Strategy:
// - we are looking for 1 thing: we can use find
// - find the id of Lenny using the people array
// - then I go to clubs if the id in the member

// console.log("CLUB:", yogaClub);
// console.log("NAME", name);
// console.log("ALL PEOPLE", people);
// const lenny = people.find((person) => {
// console.log(
//   "PERSON:",
//   person,
//   "NAME OF THE PERSON:",
//   person.name,
//   name,
//   "RIGHT PERSON:",
//   person.name === name
// );
//   return person.name === name;
// });

// console.log("LENNY ID?", lenny.id, yogaClub.members.includes(lenny.id));
// const lennyInYogaClub = yogaClub.members.includes(lenny.id);
// console.log("LENNY IN YOGACLUB:", lennyInYogaClub);

// AFTER CLEANUP:

// const lenny = people.find((person) => person.name === name);
// const lennyInYogaClub = yogaClub.members.includes(lenny.id);
// console.log("LENNY IN YOGACLUB:", lennyInYogaClub);

// NINJA VERSION
// const ninjaVersion = yogaClub.members.includes(
//   people.find((person) => person.name === name).id
// );
// console.log(ninjaVersion);

// Input: Array of clubs
// Desired output: Array of clubs, with member nationalities
// const clubs = [
//   {
//     name: "Book Club",
//     members: [9, 3, 6, 2],
//     nationalities: ["NL", "US", "DE", "CA"],
//   },
//   { name: "Auto Club", members: [1, 2, 3], nationalities: ["GB", "CA", "US"] },
//   ... etc...
// ];

// Strategy:
// - map:
//  - input array -> all clubs, output: same number of clubs (all),
//  - data is different -> nationalities is added

// const clubsWithNationalities = clubs.map((club) => {
//   console.log("CLUB:", club);
//   const nationalities = club.members.map((memberId) => {
//     // console.log("ONE MEMBER ID:", memberId);
//     const member = people.find((person) => {
//       //   console.log(
//       //     "ONE PERSON ID",
//       //     person.id,
//       //     "COMPARE TO:",
//       //     memberId,
//       //     "IS THIS IS MEMBER?",
//       //     person.id === memberId
//       //   );

//       return person.id === memberId;
//     });
//     // console.log("MEMBER:", member.nationality);
//     return member.nationality;
//   });
//   console.log("NATIONALITIES", nationalities);
//   const newClub = {
//     nationalities: nationalities,
//     name: club.name,
//     members: club.members,
//   };

//   console.log("NEW CLUB:", newClub);
//   return newClub;
// });

// console.log("OUTPUT:", clubsWithNationalities);

// AFTER CLEANUP:

// const clubsWithNationalities = clubs.map((club) => {
//   const nationalities = club.members.map((memberId) => {
//     const member = people.find((person) => person.id === memberId);
//     return member.nationality;
//   });

//   return {
//     nationalities: nationalities,
//     name: club.name,
//     members: club.members,
//   };
// });

// console.log("OUTPUT:", clubsWithNationalities);

// NINJA VERSION:

// const clubsWithNationalities = clubs.map((club) => ({
//   nationalities: club.members.map(
//     (memberId) => people.find((person) => person.id === memberId).nationality
//   ),
//   name: club.name,
//   members: club.members,
// }));

// console.log("OUTPUT:", clubsWithNationalities);
