"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclosedModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener("click", showModalOverlay);
}

btnclosedModal.addEventListener("click", hideModalOverlay);

overlay.addEventListener("click", hideModalOverlay);

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !modal.classList.contains("hidden")) {
    hideModalOverlay();
  }
});

function hideModalOverlay() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function showModalOverlay() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
