"use strict";
const titulo = document.querySelector(".h3");
if (titulo instanceof HTMLElement) {
    titulo.addEventListener("click", increaseOnClick);
}
function increaseOnClick(event) {
    console.log(event);
}
