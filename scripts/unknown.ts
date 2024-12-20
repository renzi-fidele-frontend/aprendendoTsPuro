/* Este tipo é igual ao any, só que ele exclui todas as propriedas
e só indicando o tipo com type Safety é que poderei utizar os metodos */
function typeGuard(param: unknown) {
   if (typeof param === "number") {
      console.log("Você passou um número e é " + param);
   } else if (typeof param === "string") {
      console.log("Você passou uma string");
   }
}
