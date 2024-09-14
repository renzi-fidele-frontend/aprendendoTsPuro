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
// Ex 3 - Fazendo fetch da api do Origamid
async function getOrigamid() {
    const res = await fetch("https://api.origamid.dev/json/notebook.json")
        .then((v) => v.json())
        .then((v) => {
        console.log(v);
    });
}
getOrigamid();
