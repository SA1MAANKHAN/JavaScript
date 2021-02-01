// mobile support

"use strict";

const gameBox = document.querySelectorAll(".game-box");
const gameBoxes = document.querySelector(".game-boxes");
const winMsg = document.querySelector(".win-msg");
const activePlayer0 = document.querySelector(".active-player-0");
const activePlayer1 = document.querySelector(".active-player-1");
const reset = document.querySelectorAll(".reset-btn");
const resetPlayer0 = document.querySelector(".player-0-reset");
const resetPlayer1 = document.querySelector(".player-1-reset");
const winnerPlayer0 = document.querySelector(".winner-player-0");
const winnerPlayer1 = document.querySelector(".winner-player-1");

let activePlayer = 0;
let roundWon;
let chalkAudio = new Audio("chalk.mp3");
let winnerAudio = new Audio("Tada.mp3");

const options = ["O", "X"];

let gameState = ["", "", "", "", "", "", "", "", ""];

// active player
gameBox.forEach((box) =>
  box.addEventListener("click", function () {
    //   if (box.textContent === "") {
    if (box.textContent === "" && !roundWon) {
      chalkAudio.play();
      setTimeout(function () {
        box.textContent = options[activePlayer];
        gameState[box.id] = activePlayer;

        if (hasWon()) return;

        if (activePlayer === 0) {
          activePlayer0.classList.remove("now-active");
          activePlayer1.classList.add("now-active");
        }
        if (activePlayer === 1) {
          activePlayer0.classList.add("now-active");
          activePlayer1.classList.remove("now-active");
        }
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
      }, 200);
    }
  })
);

reset.forEach((Res) => Res.addEventListener("click", resetGame));

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function hasWon() {
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    winnerAudio.play();

    if (activePlayer === 0) {
      resetPlayer1.classList.remove("hidden");
      winnerPlayer0.classList.remove("hidden");
    } else {
      resetPlayer0.classList.remove("hidden");
      winnerPlayer1.classList.remove("hidden");
    }
    return true;
  }
}

function resetGame() {
  chalkAudio.play();
  setTimeout(() => {
    gameState = ["", "", "", "", "", "", "", "", ""];
    roundWon = false;

    activePlayer = 0;
    activePlayer1.classList.remove("now-active");
    activePlayer1.classList.remove("now-active");
    activePlayer0.classList.add("now-active");

    gameBox.forEach((box) => (box.textContent = ""));

    resetPlayer1.classList.remove("hidden");
    resetPlayer0.classList.remove("hidden");
    resetPlayer1.classList.add("hidden");
    resetPlayer0.classList.add("hidden");

    winnerPlayer1.classList.remove("hidden");
    winnerPlayer0.classList.remove("hidden");
    winnerPlayer1.classList.add("hidden");
    winnerPlayer0.classList.add("hidden");
  }, 200);
}
