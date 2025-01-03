"use strict";
//  Com generics dá pra saber o que tipo a função retorna, pois extraimos do que é passado como param
function identificar(arg) {
    return arg;
}
const aluno_1 = identificar("Renzi Fidele");
//const aluno_2 = identificar<number>("Renzi Fidele");
//  Ex 1 - Tentar fazer console log com a função acima a cada vez em que ela é chamada
function identificarElogar(arg) {
    console.log(arg.length);
    return arg;
}
const dados = identificarElogar([1, 2, 3, 4, 5, 4, 6, 7]);
const dados_strings = identificarElogar(["Maria", "Angela", "Fidele", "Van", "William"]);
dados_strings.map((v) => v.length);
//  Ex 2 - Função que retorna valores que não são Null
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
const d_aluno = { nome: "Renzi", idade: 23 };
console.log(notNull(d_aluno)?.nome);
notNull(null);
// Generico com extensao
function extrairTexto(el) {
    return { texto: el.innerText, elemento: el };
}
const elTest = document.querySelector("a");
if (elTest) {
    const link_botao = extrairTexto(elTest).elemento.href;
    console.log(link_botao);
}
// Exercio recriar função $ do Jquery
function $el(selector) {
    return document.querySelector(selector);
}
const linkNovo = $el("a")?.href;
// Exercicio criar função que apanha um valor em um objeto
function apanharValor(obj, key) {
    return obj[key];
}
const nomeDele = apanharValor(d_aluno, "idade");
