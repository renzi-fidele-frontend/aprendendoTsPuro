"use strict";
// Acessar dados da api
const corpo = document.querySelector("#corpo");
async function apanharDados() {
    await fetch("https://api.origamid.dev/json/transacoes.json")
        .then((v) => v.json())
        .then((v) => {
        if (corpo) {
            console.log(v);
            let arrayNormalizado = v.map((v) => {
                return {
                    clienteNovo: v["Cliente Novo"],
                    data: v.Data,
                    email: v.Email,
                    formaDePagamento: v["Forma de Pagamento"],
                    id: v.ID,
                    nome: v.Nome,
                    status: v.Status,
                    valor: Number(v["Valor (R$)"]),
                };
            });
            arrayNormalizado.forEach(({ nome, email, data, formaDePagamento, status }) => {
                corpo.innerHTML += `
                <tr>
                   <td>${nome}</td>
                   <td>${email}</td>
                   <td>${data}</td>
                   <td>${formaDePagamento}</td>
                   <td>${status}</td>
                </tr>
                `;
            });
        }
    })
        .catch((err) => console.log("Erro ao fazer requisicao"));
}
apanharDados();
