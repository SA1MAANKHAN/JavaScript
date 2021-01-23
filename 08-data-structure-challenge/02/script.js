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
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player} `);
}

// 2.
let sum = 0;
for (const val of Object.values(game.odds)) {
  sum += val;
}
console.log(sum / Object.values(game.odds).length);

// 3.
console.log(`${game.odds.team1} odds of victory of ${game.team1}
${game.odds.x} odds of draw 
${game.odds.team2} odds of victory of ${game.team2}`);

// bonus
game.scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};

console.log(game);
