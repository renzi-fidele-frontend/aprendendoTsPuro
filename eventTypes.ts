const titulo = document.querySelector(".h3");

if (titulo instanceof HTMLElement) {
   titulo.addEventListener("click", increaseOnClick);
}

function increaseOnClick(event: MouseEvent) {
   console.log(event);
}
