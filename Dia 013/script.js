// Função para formatar a hora no estilo HH:MM:SS
function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Função para atualizar o relógio em tempo real
function updateClock() {
    // Captura o horário local da máquina
    const now = new Date();
    const clockElement = document.getElementById('clock');
    
    // Atualiza o conteúdo do elemento com o horário formatado
    clockElement.textContent = formatTime(now);
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função uma vez para exibir o horário imediatamente ao carregar a página
updateClock();
