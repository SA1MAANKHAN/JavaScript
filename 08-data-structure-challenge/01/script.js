"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
let players1 = [];
let players2 = [];

// 2.
let [gk, ...fieldPlayers] = game.players[0];
console.log(gk);
console.log(fieldPlayers);

// 3.
let allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// 4.
let players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6.
function printGoals(...playerGoals) {
  console.log(playerGoals);
  console.log(`Above named players scored ${playerGoals.length} goals`);
}

printGoals(...game.scored);
printGoals("Lewandowski", "Roberto", "Messi");

// 7.
team1 < team2 && console.log("Team1 has more chances of winning");

team1 > team2 && console.log("Team2 has more chances of winning");
