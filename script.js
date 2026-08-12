// Função responsável por gerenciar os cliques nos botões de curtida
function curtir(botao) {
    const contador = botao.querySelector('.like-count');
    let numeroCurtidas = parseInt(contador.innerText);

    if (botao.classList.contains('liked')) {
        // Se o botão já foi curtido, descurte e reduz a contagem
        botao.classList.remove('liked');
        contador.innerText = numeroCurtidas - 1;
    } else {
        // Se ainda não foi curtido, adiciona o estado e aumenta a contagem
        botao.classList.add('liked');
        contador.innerText = numeroCurtidas + 1;
    }
}
