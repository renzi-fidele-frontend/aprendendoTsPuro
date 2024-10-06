"use strict";
const titulo = document.querySelector(".h3");
if (titulo instanceof HTMLElement) {
    titulo.addEventListener("click", increaseOnClick);
}
function increaseOnClick(event) {
    console.log(event);
}
//  Opcional: Podes utilizar o this para pegar o elemento que disparou o evento
const this_el = document.querySelector(".this");
if (this_el instanceof HTMLElement) {
    this_el.addEventListener("click", usarThis);
}
function usarThis(event) {
    console.log(`Clicaste e o texto interior é: ${this.innerText}`);
}
