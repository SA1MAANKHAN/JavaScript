"use strict";

// add spoonacular trivia

// const input = document.querySelector(".enter-input");
// const number = document.querySelector(".number");
// const submitBtn = document.querySelector(".btn-submit");
// const trivia = document.querySelector(".trivia-para");
// const card = document.querySelector(".card-container");

// tabs
const tabs = document.querySelectorAll(".btn");
const dateTab = document.querySelector(".btn-date");
const mathTab = document.querySelector(".btn-math");
const numTab = document.querySelector(".btn-num");

// inputs
const inputs = document.querySelectorAll(".input");
const dateInput = document.querySelector(".date-enter-input");
const mathInput = document.querySelector(".math-enter-input");
const numInput = document.querySelector(".num-enter-input");

// input divs

const dateInputDiv = document.querySelector(".date-input");
const mathInputDiv = document.querySelector(".math-input");
const numInputDiv = document.querySelector(".num-input");

// submit buttons
const dateSubmitBtn = document.querySelector(".btn-submit-date");
const mathSubmitBtn = document.querySelector(".btn-submit-math");
const numSubmitBtn = document.querySelector(".btn-submit-num");

// display fact
const factHeading = document.querySelector(".fact-h3");
const fact = document.querySelector(".fact");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ----
// ----

dateTab.addEventListener("click", function () {
  tabs.forEach((tab) => tab.classList.remove("active-tab"));
  dateTab.classList.add("active-tab");
  inputs.forEach((inp) => inp.classList.remove("active-input"));
  dateInputDiv.classList.add("active-input");
  clearFact();
});

mathTab.addEventListener("click", function () {
  tabs.forEach((tab) => tab.classList.remove("active-tab"));
  mathTab.classList.add("active-tab");
  inputs.forEach((inp) => inp.classList.remove("active-input"));
  mathInputDiv.classList.add("active-input");
  clearFact();
});

numTab.addEventListener("click", function () {
  tabs.forEach((tab) => tab.classList.remove("active-tab"));
  numTab.classList.add("active-tab");
  inputs.forEach((inp) => inp.classList.remove("active-input"));
  numInputDiv.classList.add("active-input");
  clearFact();
});

const getDateTrivia = async function (day, month, year) {
  try {
    const resDayMonth = await fetch(
      `https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "aab3f37fe6msh9c558325b4d9adep1e984djsn47b8d0f5f8a6",
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        },
      }
    );

    const dataDayMonth = await resDayMonth.json();
    // display

    factHeading.textContent = `${day} ${monthNames[month - 1]}, ${
      dataDayMonth.year
    }`;
    fact.textContent = dataDayMonth.text;

    // year functionality

    // const resYear = await fetch(
    //   `https://numbersapi.p.rapidapi.com/${+dataDayMonth.year}/year?fragment=true&json=true`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-key":
    //         "aab3f37fe6msh9c558325b4d9adep1e984djsn47b8d0f5f8a6",
    //       "x-rapidapi-host": "numbersapi.p.rapidapi.com",
    //     },
    //   }
    // );
    // const dataYear = await resYear.json();
  } catch (err) {
    alert(err);
  }
};

const getMathTrivia = async function (num) {
  try {
    const res = await fetch(
      `https://numbersapi.p.rapidapi.com/${num}/math?fragment=true&json=true`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "aab3f37fe6msh9c558325b4d9adep1e984djsn47b8d0f5f8a6",
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();

    factHeading.textContent = data.number;
    fact.textContent = data.text;
  } catch (err) {
    alert(err);
  }
};

const getNumTrivia = async function (num) {
  try {
    const res = await fetch(
      `https://numbersapi.p.rapidapi.com/${num}/trivia?fragment=true&notfound=floor&json=true`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "aab3f37fe6msh9c558325b4d9adep1e984djsn47b8d0f5f8a6",
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();

    fact.textContent = data.text;
    factHeading.textContent = data.number;
  } catch (err) {
    alert(err);
  }
};

const dateSubmit = function () {
  if (!dateInput.value) return;
  const date = dateInput.value.split("-");

  // clears input field
  dateInput.value = "";

  // extract day month year
  const day = +date[2];
  const month = +date[1];
  const year = +date[0];

  getDateTrivia(day, month, year);
};

const mathSubmit = function () {
  if (!mathInput.value) return;
  const num = +mathInput.value;

  // clears input field
  mathInput.value = "";

  getMathTrivia(num);
};

const numberSubmit = function () {
  if (!numInput.value) return;
  const num = +numInput.value;

  // clears input field
  numInput.value = "";

  getNumTrivia(num);
};

const clearFact = function () {
  factHeading.textContent = "";
  fact.textContent = "Fact will appear here!";
};

dateSubmitBtn.addEventListener("click", dateSubmit);

dateInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    dateSubmit();
  }
});

mathSubmitBtn.addEventListener("click", mathSubmit);

mathInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    mathSubmit();
  }
});

numSubmitBtn.addEventListener("click", numberSubmit);

numInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    numberSubmit();
  }
});
