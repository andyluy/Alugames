function alterarStatus(id) {
     // Obtém o elemento HTML do jogo com o ID fornecido
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    // Verifica se o jogo está alugado (verifica se a classe 'rented' existe na imagem)
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        // Se o jogo estiver alugado, muda o status para disponível
        imagem.classList.remove("dashboard__item__img--rented"); // Remove a classe de "alugado" da imagem
        botao.classList.remove("dashboard__item__button--return"); // Remove a classe de "devolver" do botão
        botao.textContent = "Alugar"; // Altera o texto do botão para "Alugar"
    } else {
        // Se o jogo não estiver alugado, muda o status para alugado
        imagem.classList.add("dashboard__item__img--rented"); // Adiciona a classe de "alugado" à imagem
        botao.classList.add("dashboard__item__button--return"); // Adiciona a classe de "devolver" ao botão
        botao.textContent = "Devolver"; // Altera o texto do botão para "Devolver"

    }
}
