let jogosAlugados = 1; // Inicializa a contagem de jogos alugados

function alterarStatus(id) {
    // Obtém o elemento HTML do jogo com o ID fornecido
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    // Verifica se o jogo está alugado (verifica se a classe 'rented' existe na imagem)
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        // Se o jogo estiver alugado, pergunta ao usuário se deseja devolver
        let confirmacao = prompt("Deseja devolver? (s/n)");

        // Valida a resposta do usuário
        if (confirmacao === "n") {
            return; // Se o usuário digitar "n", não faz nada
        } else if (confirmacao === "s") {
            // Se o jogo estiver alugado e o usuário confirmar a devolução
            imagem.classList.remove("dashboard__item__img--rented"); // Remove a classe de "alugado" da imagem
            botao.classList.remove("dashboard__item__button--return"); // Remove a classe de "devolver" do botão
            botao.textContent = "Alugar"; // Altera o texto do botão para "Alugar"
            jogosAlugados--; // Decrementa o contador de jogos alugados
            console.log(`Existem ${jogosAlugados} jogos alugados no momento`);
        } else {
            alert('Digite apenas "s" ou "n"'); // Exibe um alerta caso a resposta seja inválida
        }
    } else {
        // Se o jogo não estiver alugado, aluga o jogo
        imagem.classList.add("dashboard__item__img--rented"); // Adiciona a classe de "alugado" à imagem
        botao.classList.add("dashboard__item__button--return"); // Adiciona a classe de "devolver" ao botão
        botao.textContent = "Devolver"; // Altera o texto do botão para "Devolver"
        jogosAlugados++; // Incrementa o contador de jogos alugados
        console.log(`Existem ${jogosAlugados} jogos alugados no momento`);
    }
}