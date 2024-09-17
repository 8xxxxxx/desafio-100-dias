// Seleciona o elemento do bloco de texto e o botão
const blocoTexto = document.getElementById('bloco-texto');
const botaoMudarCor = document.getElementById('botao-mudar-cor');

// Adiciona um evento de clique ao botão
botaoMudarCor.addEventListener('click', function() {
    // Gera uma cor aleatória
    const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Muda a cor de fundo do bloco de texto
    blocoTexto.style.backgroundColor = corAleatoria;
});
