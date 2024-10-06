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

class Universitario {
   faculdade: string;
   constructor(faculdade: string) {
      this.faculdade = faculdade;
   }
}

const aluno1 = new Aluno("Renzi Fidele", 23);
aluno1.mostrarDadosAluno();

function mostrarAluno(nome: string, facul: boolean) {
   return facul ? new Universitario("UEM") : new Aluno(nome, 21);
}

const alunoFacul = mostrarAluno("Universidade", true);

if (alunoFacul instanceof Universitario) console.log(alunoFacul.faculdade);
if (alunoFacul instanceof Aluno) console.log(alunoFacul.nome);

// Exercicio instanceof - Selecionar botão e atualizar o link
const el = document.querySelector("#btn");

function alterarLink(novoLink: string) {
   console.log("running");
   if (el instanceof HTMLAnchorElement) {
      el.href = novoLink;
      console.log("Link alterado com sucesso");
   }
}
alterarLink("https://origamid.com");

// Exercicio 2 - Alterar cor e borda dos elementos de classe link
const links = document.querySelectorAll(".link");
links.forEach((el) => {
   if (el instanceof HTMLElement) {
      el.style.border = "2px solid blue";
      el.style.color = "orange";
      el.style.backgroundColor = "white";
   }
});
