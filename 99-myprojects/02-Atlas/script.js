"use strict";

const cardSec = document.querySelector(".card-sec");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".country-submit");

const flagImg = document.querySelector(".card-flag-img");
const countryCard = document.querySelector(".info-country");
const continentCard = document.querySelector(".info-continent");
const populationCard = document.querySelector(".other-info-1");
const langCard = document.querySelector(".other-info-2");
const currencyCard = document.querySelector(".other-info-3");

let country;
const request = new XMLHttpRequest();
submitBtn.addEventListener("click", function (e) {
  //   e.preventDefault();

  country = inputValidate(input.value);
  input.value = "";
  setTimeout(function () {
    request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();
  }, 200);
});
// try {
//   request.send();
// } catch (err) {
// }

request.addEventListener("load", function () {
  // console.log(this.responseText.length);
  if (this.responseText.length < 100) {
    return;
  }

  cardSec.classList.remove("hidden");
  const [data] = JSON.parse(this.responseText);

  // unhide

  flagImg.src = data.flag;
  countryCard.textContent = data.name;
  continentCard.textContent = data.region;
  populationCard.textContent = `🧑‍🤝‍🧑  ${+(data.population / 100000).toFixed(
    2
  )}M people`;
  langCard.textContent = `🗣️  ${data.languages[0].name}`;
  currencyCard.textContent = `💵  ${data.currencies[0].name}`;
});

function inputValidate(inp) {
  if (inp.toLowerCase() === "india") return "bharat";
  return inp;
}
