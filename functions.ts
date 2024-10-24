function sum(a: number, b: number, c?: number) {
   return a + b + (c ? c : 0);
}
console.log(sum(10, 12));

// Definindo a interface de metodos de objeto
interface MostrarNumeroInterface {
   numero: number;
   mostrar(nr: number): number;
}
function mostrarNr(obj: MostrarNumeroInterface) {
   console.log(obj.numero);
}

/* Aprendendo sobre function overload
O Overload serve para condicionalmente definir o tipo de retorno de acordo com o tipo de param recebido
*/
function Select(element: "a"): HTMLAnchorElement;
function Select(element: "button"): HTMLButtonElement;
function Select(element: "table"): HTMLTableElement;
function Select(element: "svg"): SVGElement;
function Select(element: string) {
   return document.querySelector(element);
}
const el2 = Select("a");
