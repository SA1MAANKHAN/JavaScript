// function nameToInitials(naam) {
//   let newName = naam.split(" ");
//   let initials = [];
//   for (const nameString of newName) {
//     initials.push(nameString[0]);
//   }
//   return initials.join("").toLowerCase();
// }

// username = nameToInitials("lionel messi");
// console.log(username);

const array = [300, -122, -341, 600, 200, 1100, -350, -120, 880, -50, -70];

let deposit = array.filter(function (ele) {
  return ele > 0;
});

console.log(deposit);
