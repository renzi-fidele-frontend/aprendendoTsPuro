// Acessar dados da api

interface itemLista {
   status: string;
   id: number;
   data: string;
   nome: string;
   formaDePagamento: string;
   email: string;
   valor: number;
   clienteNovo: 0 | 1;
}

const corpo = document.querySelector("#corpo");

async function apanharDados() {
   await fetch("https://api.origamid.dev/json/transacoes.json")
      .then((v) => v.json())
      .then((v: any[]) => {
         if (corpo) {
            console.log(v);
            let arrayNormalizado: itemLista[] = v.map((v) => {
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
