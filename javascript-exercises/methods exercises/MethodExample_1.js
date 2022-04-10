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
const clubsOfJames = clubs.filter((club) => {
  console.log(
    "CLUB MEMBER IDS:",
    club.members,
    "USER ID:",
    user.id,
    "LOGIC:",
    club.members.includes(user.id)
  );
  return club.members.includes(user.id);
});

// After cleanup
// const clubsOfJames = clubs.filter((club) => club.members.includes(user.id));

console.log(clubsOfJames);
