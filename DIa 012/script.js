// Seleciona o elemento do card
const card = document.getElementById('card');

// Adiciona um evento de clique ao card
card.addEventListener('click', function() {
    // Alterna entre adicionar/remover a classe 'flipped'
    card.classList.toggle('flipped');
});

// Alterna a rotação do card ao adicionar a classe 'flipped'
card.addEventListener('click', function() {
    card.querySelector('.card').style.transform = card.classList.contains('flipped') ? 'rotateY(180deg)' : 'rotateY(0deg)';
});
