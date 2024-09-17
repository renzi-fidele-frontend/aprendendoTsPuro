"use strict";
const nome = "Renzi";
const idade = 23;
const aluno = { nome, idade };
function somar(a, b) {
    console.log(a + b);
}
somar(1, 2);
// Ex 1 - função toNumber
function toNumber(valor) {
    if (Number(valor)) {
        console.log(Number(valor));
    }
    else {
        console.log("Não dá para converter o valor passado");
    }
}
toNumber(1);
// Ex 2 - Fazendo fetch
async function apanharDummy() {
    const res = await fetch("https://dummyjson.com/test")
        .then((v) => v.json())
        .then((v) => {
        console.log(v);
    });
}
apanharDummy();
async function getOrigamid() {
    const res = await fetch("https://api.origamid.dev/json/notebook.json")
        .then((v) => v.json())
        .then((v) => {
        console.log(v);
    });
}
getOrigamid();
// Ex 4 - Tipagem de arrays
const valores = [1, 2, 3, 4, 5, 6, 7];
const valoresComString = [1, 2, 3, 4, "Angela", "Renzi", 7];
function filtrarMaior(array) {
    let maiorAtual = 0;
    array.map((v) => {
        if (v > maiorAtual)
            maiorAtual = v;
    });
    console.log(`O maior valor do Array é: ${maiorAtual}`);
}
filtrarMaior(valores);
async function getCursos() {
    const res = await fetch("https://api.origamid.dev/json/cursos.json")
        .then((v) => v.json())
        .then((v) => {
        v.map((v) => {
            console.log(v);
        });
    });
}
getCursos();
