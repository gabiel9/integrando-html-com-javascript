const form = document.getElementById('form-campo');

function validacao(valorB) {
    const maiorQueA = valorB.split ('');
    return maiorQueA.length > campoA;
}

let formValidacao = bMaiorQueA;

form.addEventListener('submit', function(e) {
    const campoA = document.getElementById('valor-a');
    const campoB = document.getElementById('valor-b');
    
    const mensagemSucesso = `Parabens o Valor B é maior que o Valor A`

    formValidacao = validacao(campoA.value)
    if (formValidacao) {
        const containermensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    }
})