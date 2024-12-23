"use strict";
const corpo = document.querySelector("#corpo");
async function apanharDados() {
    let total = 0;
    let credito = 0;
    let boleto;
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
                let numero = Number(valor.split(",")[0]);
                if (!isNaN(numero))
                    total += numero;
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
                `;
            }
        }
    })
        .catch((err) => console.log("Erro ao fazer requisicao"));
}
apanharDados();
