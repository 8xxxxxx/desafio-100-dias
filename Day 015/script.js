// Seleciona o campo de texto e o contador de caracteres
const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');

// Adiciona um evento que monitora a digitação no campo de texto
inputText.addEventListener('input', () => {
    // Atualiza o número de caracteres conforme o texto é digitado
    charCount.textContent = inputText.value.length;
});
