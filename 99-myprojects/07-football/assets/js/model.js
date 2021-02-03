"use strict";

const fetchPlayer = async function (playerId) {
  const res = await fetch(
    `https://football-pro.p.rapidapi.com/api/v2.0/players/${playerId}?tz=Europe%2FAmsterdam`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "aab3f37fe6msh9c558325b4d9adep1e984djsn47b8d0f5f8a6",
        "x-rapidapi-host": "football-pro.p.rapidapi.com",
      },
    }
  );
  const data = await res.json();
  console.log(data);
};

fetchPlayer(1743);
