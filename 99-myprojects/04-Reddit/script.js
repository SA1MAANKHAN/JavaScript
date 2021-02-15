"use strict";

// use welcome animation

const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

// facts
// const getData = async function (url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data.data);

//   const random = Math.floor(Math.random() * 25);
//   ques.textContent = data.data.children[random].data.title;
// };

// getData("https://www.reddit.com/r/facts.json");

// ----------------------------------------------------------------------

// tifu
// const getData = async function (url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data.data);

//   const random = Math.floor(Math.random() * 25);
//   question.textContent = data.data.children[random].data.title;
//   answer.textContent = data.data.children[random].data.selftext;
// };

// getData("https://www.reddit.com/r/tifu.json");

// ------------------------------------------------------------------------

// today i learned
// const getData = async function (url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data.data);

//   const random = Math.floor(Math.random() * 25);
//   question.textContent = `Today I learned ${data.data.children[
//     random
//   ].data.title.slice(4)}`;

//   answer.textContent = `By ${data.data.children[random].data.author}`;
// };

// getData(`https://www.reddit.com/r/todayilearned.json`);
