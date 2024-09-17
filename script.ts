const nome = "Renzi";
const idade = 23;
const aluno = { nome, idade };

function somar(a: number, b: number) {
   console.log(a + b);
}

somar(1, 2);

// Ex 1 - função toNumber
function toNumber(valor: number | string) {
   if (Number(valor)) {
      console.log(Number(valor));
   } else {
      console.log("Não dá para converter o valor passado");
   }
}
toNumber(1);

// Utilizar interface para definir objetos e type para o restante

// -----------------------------------------------------------------

interface respostaApi {
   status: string;
   method: string;
}
// Ex 2 - Fazendo fetch
async function apanharDummy() {
   const res = await fetch("https://dummyjson.com/test")
      .then((v) => v.json())
      .then((v: respostaApi) => {
         console.log(v);
      });
}
apanharDummy();

/*  Ex 3 - Fazendo fetch da api do Origamid
    Dica: A forma mais eficaz é copiar o objeto no developer tools e colar aqui  
*/

interface OrigamidApi {
   nome: string;
   preco: number;
   descricao: string;
   garantia: string;
   seguroAcidentes: boolean;
   empresaFabricante: {
      nome: string;
      fundacao: number;
      pais: string;
   };
   empresaMontadora: {
      nome: string;
      fundacao: number;
      pais: string;
   };
}
async function getOrigamid() {
   const res = await fetch("https://api.origamid.dev/json/notebook.json")
      .then((v) => v.json())
      .then((v: OrigamidApi) => {
         console.log(v);
      });
}
getOrigamid();

// Ex 4 - Tipagem de arrays
const valores = [1, 2, 3, 4, 5, 6, 7];
const valoresComString = [1, 2, 3, 4, "Angela", "Renzi", 7];

function filtrarMaior(array: number[]) {
   let maiorAtual = 0;
   array.map((v) => {
      if (v > maiorAtual) maiorAtual = v;
   });
   console.log(`O maior valor do Array é: ${maiorAtual}`);
}
filtrarMaior(valores);

// Ex 5 - Fazendo fetch dos cursos na api do Origamid
interface cursosOrigamid {
   nome: string;
   horas: number;
   aulas: number;
   gratuito: boolean;
   tags: string[];
   idAulas: number[];
   nivel: "iniciante" | "avancado";
}
async function getCursos() {
   const res = await fetch("https://api.origamid.dev/json/cursos.json")
      .then((v) => v.json())
      .then((v: cursosOrigamid[]) => {
         v.map((v) => {
            console.log(v);
         });
      });
}
getCursos();
