// Tuples são arrays com tipos fixos definidos - [T, T] e não T[]
interface Icoelho {
   nome: string;
   cor: string;
}
const doisCoelhos: [Icoelho, Icoelho] = [
   { nome: "Chico", cor: "Verde" },
   { nome: "Beto", cor: "Vermelho" },
];

console.log(doisCoelhos[1]);
