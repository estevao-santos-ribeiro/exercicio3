const button = document.querySelector('button');
const input = document.querySelector('#nome');
const resultado = document.querySelector('#resultado');

button.addEventListener('click', () => {
    const nome = input.value;
    if (nome) {
        resultado.textContent = `Olá, ${nome}!`;
    } else {
        resultado.textContent = 'Por favor, digite seu nome.';
    }
});