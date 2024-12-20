"use strict";
// Excede o nr de props mais ainda assim aceita
const obj = { name: "Objeto teste", size: 5, dado: { pesado: true } };
const obj2 = { name: "Objeto 2", size: 3, dado: { pesado: false } };
function mostrarTamanho(obj) {
    console.log("O tamanho é: " + obj.size);
}
mostrarTamanho(obj);
// UtilityTypes
// 1 - Partial
// Com o Partial podemos definir uma nova interface através de uma existente, só que agora todas as props serão opcionais ?.
function mostrarNome(obj) {
    // Agora é preciso fazer opcional chaining para que valide
    if (typeof obj.name === "string")
        console.log(obj.name.toLocaleLowerCase);
}
const artigo = { titulo: "Como ser o melhor", privado: false, views: 100, data_publicacao: 12313324 };
