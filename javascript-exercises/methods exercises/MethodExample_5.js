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

// Desired output: The name of the most the most "international" club

const clubsWithNationalities = clubs.map((club) => {
  const nationalities = club.members.map((memberId) => {
    const member = people.find((person) => person.id === memberId);
    return member.nationality;
  });

  const uniqueNationalities = nationalities.filter(
    (nationality, index, allNationalities) =>
      allNationalities.indexOf(nationality) === index
  );

  return {
    uniqueNationalities: uniqueNationalities,
    name: club.name,
    members: club.members,
  };
});

console.log(clubsWithNationalities);
const mostInternationalClubs = clubsWithNationalities.reduce(
  (acc, club) => {
    if (club.uniqueNationalities.length > acc.nationalityCount) {
      return {
        nationalityCount: club.uniqueNationalities.length,
        clubs: [club],
      };
    } else if (club.uniqueNationalities.length === acc.nationalityCount) {
      acc.clubs.push(club);
      return acc;
    } else {
      return acc;
    }
  },
  { nationalityCount: 0, clubs: [] }
);

console.log(mostInternationalClubs);

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
