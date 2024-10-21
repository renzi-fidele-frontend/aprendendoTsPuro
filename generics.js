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
