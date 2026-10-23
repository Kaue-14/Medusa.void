// Teste de cores, guias, preenchimento automático e localização de blocos.
const cliente = { nome: "Medusa", ativo: true, saldo: 125.50 };

function statusCliente(pessoa) {
    if (pessoa.ativo) {
        if (pessoa.saldo > 100) {
            return `Olá, ${pessoa.nome}!`;
        }
        return "Saldo baixo";
    }
    return "Inativo";
}

console.log(statusCliente(cliente));
// Digite `cliente.` na linha abaixo para testar sugestões.
