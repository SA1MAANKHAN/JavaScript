///////////////////////////////////////
// Coding Challenge #1

// (function () {
//   const header = document.querySelector(".h1");
//   header.style.color = "red";
//   return (colorChange = function () {
//     header.style.color = "blue";
//   });
// })();

// document.querySelector(".body").addEventListener("click", colorChange);

(function () {
  const header = document.querySelector(".h1");
  header.style.color = "red";

  document.querySelector(".body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
