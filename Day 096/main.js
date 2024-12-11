const button = documento.querySelector('button');
const input = documento.querySelector('input');
const url = 'http://localhost:8081';



button.addEventListener('click', () => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: input.value }),

    });
});