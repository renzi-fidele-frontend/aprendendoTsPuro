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
