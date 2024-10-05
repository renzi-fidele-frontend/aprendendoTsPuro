"use strict";
//  Aprendendo sobre instance of, para classes
class Aluno {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDadosAluno() {
        console.log(`Dados do aluno\n-----------------\nNome completo: ${this.nome}\nIdade: ${this.idade}`);
    }
}
class Universitario {
    faculdade;
    constructor(faculdade) {
        this.faculdade = faculdade;
    }
}
const aluno1 = new Aluno("Renzi Fidele", 23);
aluno1.mostrarDadosAluno();
function mostrarAluno(nome, facul) {
    return facul ? new Universitario("UEM") : new Aluno(nome, 21);
}
const alunoFacul = mostrarAluno("Universidade", true);
