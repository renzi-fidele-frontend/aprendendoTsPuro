"use strict";
//  Aprendendo a verificar outros tipos
function verificarTipo(x) {
    if (x instanceof Array) {
        console.log("É um array");
    }
    else if (x instanceof Date) {
        console.log("É um objeto do tipo date");
    }
    return x;
}
let diaMesAno = new Date().getDate();
let meuAniversario = verificarTipo(diaMesAno);
/* Aprendendo a prever o possível retorno de um tipo de dado
   somente utilizar em casos de funções que retornam um boolean
*/
function isString(arg) {
    return typeof arg === "string";
}
function resolve(data) {
    if (isString(data)) {
        // Consegui prever o tipo
        console.log(data.toLowerCase());
    }
}
// Type Assertions - as
// Ajuda a afirmar o tipo, para que eu possa acessar as propriedades do objeto
const elVideo = document.getElementById("#video");
/* Afirmando que o tipo é VideoElement para que eu possa utilizar as suas propriedas
 */
elVideo.volume;
// Em alguns casos posso utilizar o operador !. para afirmar que a variável sempre será null
const el3 = document.querySelector("#el3");
el3.href = "https://olamundo.com";
