"use strict";
// Operador ...rest
// Usar quando a função recebe diversos parametros imprevisiveis
function maiorOuMenor(tipo, ...numeros) {
    if (tipo === "maior") {
        let maior = 0;
        numeros.forEach((nr) => {
            if (nr > maior)
                maior = nr;
        });
        return maior;
    }
    else {
        let menor = Infinity;
        numeros.forEach((nr) => {
            if (nr < menor)
                menor = nr;
        });
        return menor;
    }
}
const maior1 = maiorOuMenor("maior", 2, 3, 4, 10, -1, Infinity);
const menor1 = maiorOuMenor("menor", -10, 3, 5, 29, 40);
console.log(maior1, menor1);
