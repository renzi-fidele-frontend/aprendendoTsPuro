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
