// tabbed component

"use strict";

const input = document.querySelector(".enter-input");
const number = document.querySelector(".number");
const submitBtn = document.querySelector(".btn-submit");
const trivia = document.querySelector(".trivia-para");

const card = document.querySelector(".card-container");

const getNumberTrivia = async function (number) {
  try {
    const res = await fetch(
      `https://numbersapi.p.rapidapi.com/${number}/trivia?fragment=true&notfound=floor&json=true`,
      {
        // method: "GET",
        headers: {
          "x-rapidapi-key":
            "aab3f37fe6msh9c558325b4d9adep1e984djsn47b8d0f5f8a6",
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        },
      }
    );

    const data = await res.json();
    trivia.textContent = data.text;
  } catch (err) {
    alert(err);
  }
};

let num;

submitBtn.addEventListener("click", function () {
  //   console.log(input.value);
  num = Math.floor(+input.value);

  input.value = "";
  number.textContent = num;

  card.classList.remove("hidden");

  getNumberTrivia(num);
});

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    num = Math.floor(+input.value);
    input.value = "";
    number.textContent = num;

    card.classList.remove("hidden");

    getNumberTrivia(num);
  }
});
