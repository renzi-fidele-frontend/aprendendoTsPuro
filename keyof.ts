// Serve para definir se uma variavel é chave de um objeto
interface DadosDummy {
   nome: string;
   idade: number;
   peso: number;
}

let pessoa: keyof DadosDummy;

pessoa = "nome";
pessoa = "idade";
