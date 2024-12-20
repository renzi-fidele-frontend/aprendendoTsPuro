interface Alimento {
   nome: string;
   preco: number;
}

// Libs

// 1 - Caso a lib seja utilizada através de um método e não da sua instância global
interface JQuery {
   /** The last carousel you'll ever need. */
   slick: (options?: {}) => void;
}

// 2 - Caso declare const slick: any;
