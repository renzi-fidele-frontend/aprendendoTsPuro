"use strict";
function sum(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(sum(10, 12));
function mostrarNr(obj) {
    console.log(obj.numero);
}
function Select(element) {
    return document.querySelector(element);
}
const el2 = Select("a");
function somarOuConcatenar(a, b) {
    return a + b;
}
const value1 = somarOuConcatenar("Ola", "Maria");
// Ex 2 - Escolher carta
let tipos = ["espada, coração, arroz, ouro"];
function escolherCarta(x) {
    // Caso seja passado um baralho
    if (typeof x === "object") {
        let cartaEscolhida = Math.floor(Math.random() * x?.length);
        return cartaEscolhida;
    }
    // Caso se escolha uma nr
    else if (typeof x === "number") {
        let tipoEscolhido = Math.floor(x / 13);
        return { nome: tipos[tipoEscolhido], nr: x % 13 };
    }
}
let meuBaralho = [
    { nome: "Diamante", nr: 2 },
    { nome: "Arroz", nr: 10 },
    { nome: "Diamante", nr: 20 },
];
let primeiraCarta = meuBaralho[escolherCarta(meuBaralho)];
let segundaCarta = escolherCarta(5);
// NB: O any não é incluido na lista de overloads
