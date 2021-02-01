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

function inputValidate(inp) {
  if (inp.toLowerCase() === "india") return "bharat";
  return inp;
}

function getCountryData(country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => {
      if (!response.ok)
        throw new Error("country not found! , Try different Name ");

      return response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => alert(err));
}

function renderCountry(data) {
  // unhide
  cardSec.classList.remove("hidden");

  flagImg.src = data.flag;
  countryCard.textContent = data.name;
  continentCard.textContent = data.region;
  populationCard.textContent = `👩‍🦱  ${+(data.population / 100000).toFixed(
    2
  )}M people`;
  langCard.textContent = `🗣️  ${data.languages[0].name}`;
  currencyCard.textContent = `💵  ${data.currencies[0].name}`;
}

function whereAmI(lat, lang) {
  fetch(`https://geocode.xyz/${lat},${lang}?geoit=json`)
    .then((response) => {
      if (!response.ok) throw new Error("Something went train, Try Again");
      return response.json();
    })
    .then((data) => getCountryData(data.country))
    .catch((err) => alert(err));
}

let country;

submitBtn.addEventListener("click", function () {
  country = inputValidate(input.value);
  input.value = "";
  getCountryData(country);
});

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    country = inputValidate(input.value);
    input.value = "";
    getCountryData(country);
  }
});

// getscurrentlocation

// navigator.geolocation.getCurrentPosition((data) =>
//   whereAmI(data.coords.latitude, data.coords.longitude)
// );
