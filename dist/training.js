"use strict";
const form = document.getElementById("form");
window.userData = {};
form.addEventListener("keyup", (e) => {
    if (e.target instanceof HTMLInputElement) {
        window.userData = { [e.target?.id]: e.target.value };
        localStorage.setItem("userData", JSON.stringify(window.userData));
    }
});
