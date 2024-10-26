//  Aprendendo a verificar outros tipos
function verificarTipo(x: unknown) {
   if (x instanceof Array) {
      console.log("É um array");
   } else if (x instanceof Date) {
      console.log("É um objeto do tipo date");
   }
   return x;
}

let diaMesAno = new Date().getDate();
let meuAniversario = verificarTipo(diaMesAno);
