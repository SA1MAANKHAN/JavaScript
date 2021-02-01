"use strict";
//------api key------------
// eDPlJHPFtQAD00ML9NWLaJmuxew7KOY0KNaRQT8q

const section = document.querySelector("sec");
let img;

const getData = async function (url) {
  const response = await fetch(url);
  const data = await response.json();

  img = document.createElement("img");
  img.src = data.photos[0].img_src;

  console.log(data.photos[0].img_src);
};

// getData(
//   "https://api.nasa.gov/planetary/apod?api_key=eDPlJHPFtQAD00ML9NWLaJmuxew7KOY0KNaRQT8q"
// );

// --------mars rover images----------------------
getData(
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
);

// --------Near earth objects------------------
// getData(
//   "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=eDPlJHPFtQAD00ML9NWLaJmuxew7KOY0KNaRQT8q"
// );
