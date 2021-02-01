"use strict";

const ques = document.querySelector(".ques");

const getData = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.data);

  const random = Math.floor(Math.random() * 25);
  ques.textContent = data.data.children[random].data.title;
};

getData("https://www.reddit.com/r/facts.json");
