"use strict";
//  O readonly serve para definir uma variável que somente pode ser lida e não modificada
//  O private serve para definir uma variável que somente é acessível dentro da classe
// O protected serve para definir uma variável que pode ser usada somente dentro da classe e também poderá ser usada pelas class que a herdam
class Bebida {
    nome;
    preco;
    tipo = "liquido";
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    mostrar() {
        console.log(`O nome é ${this.nome} e o preço é ${this.preco}`);
    }
    calcularEmbalagem() {
        return this.preco * 6;
    }
}
class Embalagem extends Bebida {
    custo;
    constructor(nome, preco) {
        super(nome, preco);
        this.custo = this.calcularEmbalagem();
    }
}
const amarula = new Bebida("Amarula", 680);
const emb_amarula = new Embalagem(amarula.nome, amarula.preco);
// amarula.tipo = "comida";
let m = "ad";
console.log(m.dd);
