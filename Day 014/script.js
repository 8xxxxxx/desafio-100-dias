// Seleciona o botão de alternância
const toggleButton = document.getElementById('toggle-theme-btn');

// Função para alternar o tema
toggleButton.addEventListener('click', function() {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');
    
    // Alterna o texto do botão dependendo do tema atual
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Alternar para Modo Claro';
    } else {
        toggleButton.textContent = 'Alternar para Modo Escuro';
    }
});
