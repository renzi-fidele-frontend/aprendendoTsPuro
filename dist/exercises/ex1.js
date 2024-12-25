"use strict";
const corpo = document.querySelector("#corpo");
async function apanharDados() {
    let total = 0;
    let credito = 0;
    let boleto = 0;
    let pago = 0;
    let recusado = 0;
    let aguardando = 0;
    let cancelado = 0;
    let melhorDia;
    await fetch("https://api.origamid.dev/json/transacoes.json")
        .then((v) => v.json())
        .then((v) => {
        if (corpo) {
            let arrayNormalizado = v.map((v) => {
                return {
                    clienteNovo: v["Cliente Novo"],
                    data: v.Data,
                    email: v.Email,
                    formaDePagamento: v["Forma de Pagamento"],
                    id: v.ID,
                    nome: v.Nome,
                    status: v.Status,
                    valor: v["Valor (R$)"],
                };
            });
            let segunda = 0;
            let terca = 0;
            let quarta = 0;
            let quinta = 0;
            let sexta = 0;
            let sabado = 0;
            let domingo = 0;
            arrayNormalizado.forEach(({ nome, email, valor, formaDePagamento, status, data }) => {
                // Calculando o total
                let numero = Number(valor.split(",")[0]);
                if (!isNaN(numero))
                    total += numero;
                // Calculando o total por forma de pagamento
                if (formaDePagamento === "Cartão de Crédito")
                    credito += 1;
                if (formaDePagamento === "Boleto")
                    boleto += 1;
                // Calculando as estatísticas de vendas
                if (status === "Paga")
                    pago += 1;
                if (status === "Recusada pela operadora de cartão")
                    recusado += 1;
                if (status === "Aguardando pagamento")
                    aguardando += 1;
                if (status === "Estornada")
                    cancelado += 1;
                // Calculando o dia da semana com mais vendas
                let dataFormatada = new Date(data);
                let diaDaSemana = dataFormatada.getDay();
                if (diaDaSemana === 0)
                    domingo += 1;
                else if (diaDaSemana === 1)
                    segunda += 1;
                else if (diaDaSemana === 2)
                    terca += 1;
                else if (diaDaSemana === 3)
                    quarta += 1;
                else if (diaDaSemana === 4)
                    quinta += 1;
                else if (diaDaSemana === 5)
                    sexta += 1;
                else if (diaDaSemana === 6)
                    sabado += 1;
                let arrayDias = [segunda, terca, quarta, quinta, sexta, sabado, domingo];
                let maior = Math.max(...arrayDias);
                let index = arrayDias.indexOf(maior);
                if (index === 0)
                    melhorDia = "Segunda-feira";
                else if (index === 1)
                    melhorDia = "Terça-feira";
                else if (index === 2)
                    melhorDia = "Quarta-feira";
                else if (index === 3)
                    melhorDia = "Quinta-feira";
                else if (index === 4)
                    melhorDia = "Sexta-feira";
                else if (index === 5)
                    melhorDia = "Sábado";
                else if (index === 6)
                    melhorDia = "Domingo";
                // Renderizando a lista na tabela
                corpo.innerHTML += `
                <tr>
                   <td>${nome}</td>
                   <td>${email}</td>
                   <td>R$ ${valor}</td>
                   <td>${formaDePagamento}</td>
                   <td>${status}</td>
                   <td>${data}</td>
                </tr>
                `;
            });
            console.log(total);
            // Renderizando as estatísticas
            const estatisticas = document.querySelector("#estatisticas");
            if (estatisticas) {
                estatisticas.innerHTML += `
                <h6>Total: <span id="light">R$ ${total}</span></h6>
                <hr>
                <h6>Cartão de Crédito: <span id="light">${credito}</span></h6>
                <h6>Boleto: <span id="light">${boleto}</span></h6>
                <hr>
                <h6>Pago: <span id="light">${pago}</span></h6>
                <h6>Recusado pela operadora de cartão: <span id="light">${recusado}</span></h6>
                <h6>Aguardando pagamento: <span id="light">${aguardando}</span></h6>
                <h6>Cancelado: <span id="light">${cancelado}</span></h6>
                <h6>Dia da semana com mais vendas: <span id="light">${melhorDia}</span></h6>
                `;
            }
        }
    })
        .catch((err) => console.log("Erro ao fazer requisicao"));
}
apanharDados();
