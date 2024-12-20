"use strict";
class SerVivo {
    nome;
    tipo;
    estaVivo;
    constructor(nome, tipo, estaVivo) {
        this.nome = nome;
        this.tipo = tipo;
        this.estaVivo = estaVivo;
    }
    mostrarDados() {
        console.log(this);
    }
}
class SerHumano extends SerVivo {
    corDePele;
    altura;
    idade;
    constructor(nome, estaVivo, idade, corDePele, altura) {
        super(nome, "Ser Humano", estaVivo);
        this.idade = idade;
        this.corDePele = corDePele;
        this.altura = altura;
    }
}
const fidele = new SerHumano("Renzi Fidele", true, 23, "Negra", 175);
fidele.mostrarDados();
