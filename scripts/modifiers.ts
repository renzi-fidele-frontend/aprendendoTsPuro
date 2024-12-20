//  O readonly serve para definir uma variável que somente pode ser lida e não modificada
//  O private serve para definir uma variável que somente é acessível dentro da classe
// O protected serve para definir uma variável que pode ser usada somente dentro da classe e também poderá ser usada pelas class que a herdam
class Bebida {
   nome: string;
   preco: number;
   readonly tipo = "liquido";
   constructor(nome: string, preco: number) {
      this.nome = nome;
      this.preco = preco;
   }
   mostrar() {
      console.log(`O nome é ${this.nome} e o preço é ${this.preco}`);
   }

   protected calcularEmbalagem() {
      return this.preco * 6;
   }
}

class Embalagem extends Bebida {
   custo: number;
   constructor(nome: string, preco: number) {
      super(nome, preco);
      this.custo = this.calcularEmbalagem();
   }
}

const amarula = new Bebida("Amarula", 680);
const emb_amarula = new Embalagem(amarula.nome, amarula.preco);

// amarula.tipo = "comida";

console.log(emb_amarula);
