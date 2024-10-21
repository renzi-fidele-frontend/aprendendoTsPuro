//  Com generics dá pra saber o que tipo a função retorna, pois extraimos do que é passado como param
function identificar<T>(arg: T): T {
   return arg;
}

const aluno_1 = identificar("Renzi Fidele");
//const aluno_2 = identificar<number>("Renzi Fidele");

//  Ex 1 - Tentar fazer console log com a função acima a cada vez em que ela é chamada
function identificarElogar<T>(arg: T[]): T[] {
   console.log(arg.length);
   return arg;
}
const dados = identificarElogar([1, 2, 3, 4, 5, 4, 6, 7]);
const dados_strings = identificarElogar(["Maria", "Angela", "Fidele", "Van", "William"]);
dados_strings.map((v) => v.length);

//  Ex 2 - Função que retorna valores que não são Null
function notNull<T>(arg: T) {
   if (arg !== null) return arg;
   else return null;
}

const d_aluno = { nome: "Renzi", idade: 23 };
console.log(notNull(d_aluno)?.nome);
notNull(null);
