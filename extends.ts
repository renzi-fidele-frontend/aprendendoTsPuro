class SerVivo {
   nome: string;
   tipo: string;

   estaVivo: boolean;
   constructor(nome: string, tipo: string, estaVivo: boolean) {
      this.nome = nome;
      this.tipo = tipo;
      this.estaVivo = estaVivo;
   }
   mostrarDados() {
      console.log(this);
   }
}

class SerHumano extends SerVivo {
   corDePele: string;
   altura: number;
   idade: number;
   constructor(nome: string, estaVivo: boolean, idade: number, corDePele: string, altura: number) {
      super(nome, "Ser Humano", estaVivo);
      this.idade = idade;
      this.corDePele = corDePele;
      this.altura = altura;
   }
}

const fidele = new SerHumano("Renzi Fidele", true, 23, "Negra", 175);

fidele.mostrarDados();
