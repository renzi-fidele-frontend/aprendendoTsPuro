"use strict";
const corpo = document.querySelector("#corpo");
async function apanharDados() {
    let total = 0;
    let credito = 0;
    let boleto = 0;
    let pago;
    let recusado;
    let aguardando;
    let cancelado;
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
            arrayNormalizado.forEach(({ nome, email, valor, formaDePagamento, status }) => {
                // Calculando o total
                let numero = Number(valor.split(",")[0]);
                if (!isNaN(numero))
                    total += numero;
                // Calculando o total por forma de pagamento
                if (formaDePagamento === "Cartão de Crédito")
                    credito += 1;
                if (formaDePagamento === "Boleto")
                    boleto += 1;
                // Renderizando a lista na tabela
                corpo.innerHTML += `
                <tr>
                   <td>${nome}</td>
                   <td>${email}</td>
                   <td>R$ ${valor}</td>
                   <td>${formaDePagamento}</td>
                   <td>${status}</td>
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
                <h6>Pago: <span id="light">R$ ${pago}</span></h6>
                <h6>Recusado pela operadora de cartão: <span id="light">R$ ${recusado}</span></h6>
                <h6>Aguardando pagamento: <span id="light">R$ ${aguardando}</span></h6>
                <h6>Cancelado: <span id="light">R$ ${cancelado}</span></h6>
                <h6>Dia da semana com mais vendas: <span id="light">R$ ${melhorDia}</span></h6>
                `;
            }
        }
    })
        .catch((err) => console.log("Erro ao fazer requisicao"));
}
apanharDados();
