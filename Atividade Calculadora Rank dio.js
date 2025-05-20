function calcularRank(vitorias, derrotas) {
    // 1. Calculando o saldo de vitórias
    var saldoVitorias = vitorias - derrotas;

    // 2. Definindo o nível com base no saldo de vitórias
    var nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // 4. Exibindo a mensagem final
    console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`);
}

// Teste da função
console.log(calcularRank(75, 25));
