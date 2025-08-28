document.addEventListener('DOMContentLoaded', function () {
    // 🛡️ Elementos do menu de acessibilidade
    const runaAcessibilidade = document.getElementById('botao-acessibilidade');
    const bauDeOpcoes = document.getElementById('opcoes-acessibilidade');

    // 🧭 Alterna visibilidade das opções
    runaAcessibilidade.addEventListener('click', function () {
        runaAcessibilidade.classList.toggle('rotacao-botao');
        bauDeOpcoes.classList.toggle('apresenta-lista');
    });

    // 📜 Botões de ajuste de fonte
    const aumentarRunas = document.getElementById('aumentar-fonte');
    const diminuirRunas = document.getElementById('diminuir-fonte');

    let escalaFonteAtual = 1;

    // 🔊 Aumenta o tamanho das runas (fonte)
    aumentarRunas.addEventListener('click', function () {
        escalaFonteAtual += 0.1;
        document.body.style.fontSize = `${escalaFonteAtual}rem`;
    });

    // 🔇 Diminui o tamanho das runas (fonte)
    diminuirRunas.addEventListener('click', function () {
        escalaFonteAtual = Math.max(0.5, escalaFonteAtual - 0.1); // Evita fonte muito pequena
        document.body.style.fontSize = `${escalaFonteAtual}rem`;
    });
});
