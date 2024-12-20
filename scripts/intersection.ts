//  Type intersection

// Serve para extender types
type Jogo = {
   nome: string;
};

type GtaViceCity = {
   pontuacao: number;
   dataLancamento: Date;
};

function handleTipos(dados: Jogo & GtaViceCity) {
   console.log(dados.dataLancamento);
}

//  Para extender as interfaces
interface Window {
   /**
    * Mostra o número atual de visitantes no site.
    */
   visitantes: number;
}

window.visitantes;
