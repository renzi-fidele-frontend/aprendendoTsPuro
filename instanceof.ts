//  Aprendendo sobre instance of, para classes

class Aluno {
   nome: string;
   idade: number;

   constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
   }
   mostrarDadosAluno() {
      console.log(`Dados do aluno\n-----------------\nNome completo: ${this.nome}\nIdade: ${this.idade}`);
   }
}

const aluno1 = new Aluno("Renzi Fidele", 23);
aluno1.mostrarDadosAluno();
