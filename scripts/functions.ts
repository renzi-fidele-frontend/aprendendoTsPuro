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

// Ex 1
function somarOuConcatenar(a: number, b: number): number;
function somarOuConcatenar(a: string, b: string): string;
function somarOuConcatenar(a: any, b: any) {
   return a + b;
}
const value1 = somarOuConcatenar("Ola", "Maria");

// Ex 2 - Escolher carta

let tipos = ["espada, coração, arroz, ouro"];

interface Carta {
   nome: string;
   nr: number;
}
function escolherCarta(x: Carta[]): number;
function escolherCarta(x: number): Carta;
function escolherCarta(x: any) {
   // Caso seja passado um baralho
   if (typeof x === "object") {
      let cartaEscolhida = Math.floor(Math.random() * x?.length);
      return cartaEscolhida;
   }
   // Caso se escolha uma nr
   else if (typeof x === "number") {
      let tipoEscolhido = Math.floor(x / 13);
      return { nome: tipos[tipoEscolhido], nr: x % 13 };
   }
}

let meuBaralho: Carta[] = [
   { nome: "Diamante", nr: 2 },
   { nome: "Arroz", nr: 10 },
   { nome: "Diamante", nr: 20 },
];

let primeiraCarta = meuBaralho[escolherCarta(meuBaralho)];

let segundaCarta = escolherCarta(5);

// NB: O any não é incluido na lista de overloads