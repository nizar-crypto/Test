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

// 1.
// Input: clubs (& people)
// Desired output: array of clubs with an array of memberNames
// [
//   { name: "Book Club", memberNames: ["Nathalie", "Larry", "Emily", "Adam"] },
//   { name: "Auto Club", memberNames: ["James", "Adam", "Larry"] },
//   // .. etc
// ];

// 2.
// Input: clubs (& people)
// Desired output: An array of clubs which have an american member
// [
//   { name: "Book Club", members: [9, 3, 6, 2] },
//   { name: "Auto Club", members: [1, 2, 3] },
//   { name: "Country Club", members: [7, 5, 8] },
//   { name: "Food Club", members: [5, 1, 6, 7] },
//   { name: "Yoga Club", members: [1, 4, 5, 3, 7] },
//   { name: "Garage Band", members: [1, 3, 8, 9] },
// ];

// 3.
// Input: clubs
// Desired output: clubs sorted in alphabetical order

// 4. (bonus)
// The person who has the most memberships

// 1.
// Input: clubs (& people)
// Desired output:
// [
//   { name: "Book Club", memberNames: ["Nathalie", "Larry", "Emily", "Adam"] },
//   { name: "Auto Club", memberNames: ["James", "Adam", "Larry"] },
//   // .. etc
// ];

// Which club has the most nationalities as members

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
// const name = "Lenny";
// const yogaClub = clubs[4]; // { name: 'Yoga Club', members: [ 1, 4, 5, 3, 7 ] }
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

// Input:
// people
// You can use the array of clubs as well
// Desired output: An array of people who have an array of memberships
// [
//   {
//     id: 1,
//     name: "James",
//     nationality: "GB",
//     memberships: ["Auto Club", "Food Club", "Yoga Club", "Garage Band"],
//   },
//   {
//     id: 2,
//     name: "Adam",
//     nationality: "CA",
//     memberships: ["Book Club", "Auto Club"],
//   },
//   // etc..
// ];
// Strategy:
// - map people
// - take person id
// - filter the clubs for this person
// - use find to check if the id is in the members array
// - map the clubs that remain after the filter -> take only the name of the club
// - return a object, add the memberships key with the value of the array of club names

// const peopleWithMemberships = people.map((person) => {
//   console.log("PERSON ID:", person.id);
//   const clubsOfThisPerson = clubs.filter((club) => {
//     // console.log(
//     //   "ID OF PERSON:",
//     //   person.id,
//     //   "MEMBERS:",
//     //   club.members,
//     //   "IS THIS PERSON A MEMBER:",
//     //   club.members.includes(person.id)
//     // );
//     return club.members.includes(person.id);
//   });
//   console.log(clubsOfThisPerson);
//   const clubNames = clubsOfThisPerson.map((club) => {
//     console.log("CLUB:", club.name);
//     return club.name;
//   });
//   console.log("NAMES:", clubNames);
//   return {
//     id: person.id,
//     name: person.name,
//     nationality: person.nationality,
//     memberships: clubNames,
//   };
// });

// console.log("RESULT:", peopleWithMemberships);

// AFTER CLEANUP:

// const peopleWithMemberships = people.map((person) => {
//   const clubsOfThisPerson = clubs.filter((club) =>
//     club.members.includes(person.id)
//   );
//   const clubNames = clubsOfThisPerson.map((club) => club.name);
//   return {
//     id: person.id,
//     name: person.name,
//     nationality: person.nationality,
//     memberships: clubNames,
//   };
// });

// console.log("RESULT:", peopleWithMemberships);

// NINJA VERSION:

// const peopleWithMemberships = people.map((person) => {
//   const clubNames = clubs
//     .filter((club) => club.members.includes(person.id)) // [{}, {}, {}]
//     .map((club) => club.name); // ["", "", ""]
//   return {
//     id: person.id,
//     name: person.name,
//     nationality: person.nationality,
//     memberships: clubNames,
//   };
// });

// REAL NINJA VERSION:

// const peopleWithMemberships = people.map((person) => ({
//   id: person.id,
//   name: person.name,
//   nationality: person.nationality,
//   memberships: clubs
//     .filter((club) => club.members.includes(person.id))
//     .map((club) => club.name),
// }));

// REAL REAL NINJA (Like Bram would write it:)

// const peopleWithMemberships = people.map((person) => ({
//   ...person, // copy everything from person into this new object
//   memberships: clubs // now add memberships as a new proprty
//     .filter((club) => club.members.includes(person.id))
//     .map((club) => club.name),
// }));

// console.log("RESULT:", peopleWithMemberships);

// Desired output: The name of the most the most "international" club

// const clubsWithNationalities = clubs.map((club) => {
//   const nationalities = club.members.map((memberId) => {
//     const member = people.find((person) => person.id === memberId);
//     return member.nationality;
//   });

//   const uniqueNationalities = nationalities.filter(
//     (nationality, index, allNationalities) =>
//       allNationalities.indexOf(nationality) === index
//   );

//   return {
//     uniqueNationalities: uniqueNationalities,
//     name: club.name,
//     members: club.members,
//   };
// });

// console.log(clubsWithNationalities);
// const mostInternationalClubs = clubsWithNationalities.reduce(
//   (acc, club) => {
//     if (club.uniqueNationalities.length > acc.nationalityCount) {
//       return {
//         nationalityCount: club.uniqueNationalities.length,
//         clubs: [club],
//       };
//     } else if (club.uniqueNationalities.length === acc.nationalityCount) {
//       acc.clubs.push(club);
//       return acc;
//     } else {
//       return acc;
//     }
//   },
//   { nationalityCount: 0, clubs: [] }
// );

// console.log(mostInternationalClubs);

// [ 'DE', 'NL', 'NL', 'NL', 'NL' ] -> ['DE', 'NL']
// let a = ["a", "a", "b", "c", "c", "a"];
// let unique = a.filter((item, i, ar) => {
//   console.log(
//     "ITEM:",
//     item,
//     "INDEX:",
//     i,
//     "ENTIRE ARRAY",
//     ar,
//     "FIRST INDEX WHERE THIS ITEM CAN BE FOUND:",
//     ar.indexOf(item),
//     "FIRST TIME?",
//     ar.indexOf(item) === i
//   );
//   return ar.indexOf(item) === i;
// });
// console.log(unique);

// const clubsWithNationalities = clubs
//   .map((club) => ({
//     uniqueNationalities: club.members
//       .map((memberId) => {
//         const member = people.find((person) => person.id === memberId);
//         return member.nationality;
//       })
//       .filter(
//         (nationality, index, allNationalities) =>
//           allNationalities.indexOf(nationality) === index
//       ),
//     name: club.name,
//     members: club.members,
//   }))
//   .reduce(
//     (acc, club) => {
//       if (club.uniqueNationalities.length > acc.nationalityCount) {
//         return {
//           nationalityCount: club.uniqueNationalities.length,
//           clubs: [club],
//         };
//       } else if (club.uniqueNationalities.length === acc.nationalityCount) {
//         acc.clubs.push(club);
//         return acc;
//       } else {
//         return acc;
//       }
//     },
//     { nationalityCount: 0, clubs: [] }
//   );

// console.log(mostInternationalClubs);
