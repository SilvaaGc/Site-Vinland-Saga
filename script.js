document.addEventListener('DOMContentLoaded', function () {
    // ❄️ Efeito de neve
    function criarNeve() {
        const floco = document.createElement('div');
        floco.classList.add('snowflake');
        floco.textContent = '❄';
        floco.style.left = Math.random() * window.innerWidth + 'px';
        floco.style.fontSize = Math.random() * 24 + 12 + 'px';
        floco.style.animationDuration = Math.random() * 5 + 5 + 's';
        floco.style.opacity = Math.random();
        floco.style.position = 'fixed';
        floco.style.top = '-10px';
        floco.style.zIndex = '9999';
        floco.style.pointerEvents = 'none';
        floco.style.color = '#fff';
        floco.style.animation = 'fall linear infinite';
        document.body.appendChild(floco);
        setTimeout(() => floco.remove(), 10000);
    }
    setInterval(criarNeve, 300);

    // 🧭 Acessibilidade (opcional)
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade?.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    let tamanhoAtualFonte = 1;

    aumentaFonteBotao?.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao?.addEventListener('click', function () {
        tamanhoAtualFonte = Math.max(0.5, tamanhoAtualFonte - 0.1);
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
});
