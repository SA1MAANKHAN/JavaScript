"use strict";

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.co.in/maps/@${latitude},${longitude}`);
      console.log(`https://www.google.co.in/maps/@${longitude},${latitude}`);
    },
    function () {
      alert("cant fetch your location");
    }
  );
