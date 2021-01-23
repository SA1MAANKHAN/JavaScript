"use strict";

let randomNumber, myguess, currentScore, highScore;
highScore = 0;

startit();

console.log("randomnumber:" + randomNumber);
console.log(myguess);

document.querySelector(".check").addEventListener("click", getInputValue);
document.querySelector(".check").addEventListener("click", function () {
  //   valid input

  // checking if gucurrentScoreess is right
  if (myguess == randomNumber) {
    document.querySelector(".message").textContent = "🎉 Correct !";
    document.querySelector(".number").textContent = randomNumber;
    document.getElementById("body").style.backgroundColor = "#60b347";

    // highscore changing
    if (highScore < currentScore) {
      highScore = currentScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    currentScore--;
    document.querySelector(".score").textContent = currentScore;

    // hinting about the guess
    if (myguess > randomNumber) {
      if (myguess - 1 == randomNumber || myguess - 2 == randomNumber) {
        document.querySelector(".message").textContent = "a little big";
      } else if (myguess > 20) {
        document.querySelector(".message").textContent = "Only b/w 1 and 20";
      } else {
        document.querySelector(".message").textContent = "too big";
      }
    } else {
      // for some reason this part is not working
      if (myguess + 1 == randomNumber || myguess + 2 == randomNumber) {
        document.querySelector(".message").textContent = "a little low";
      } else if (myguess < 1) {
        document.querySelector(".message").textContent = "Only b/w 1 and 20";
      } else {
        document.querySelector(".message").textContent = "too low";
      }
    }
  }
});

// again button
document.querySelector(".again").addEventListener("click", startagain);

// inputing guessed number
function getInputValue() {
  myguess = document.querySelector(".guess").value;

  //  guess
  console.log(myguess);
}

function startit() {
  currentScore = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
}

function startagain() {
  currentScore = 20;
  document.querySelector(".score").textContent = currentScore;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log("newrandom: ", randomNumber);

  //   background reset
  document.getElementById("body").style.backgroundColor = "#222";

  document.querySelector(".number").textContent = "?";
}
