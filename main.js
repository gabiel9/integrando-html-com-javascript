const form = document.getElementById('form-campo');
let formValidacao = bMaiorQueA;

function validacao(valorB) {
    return bMaiorQueA.length > campoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('valor-a');
    const campoB = document.getElementById('valor-b');
    
    const mensagemSucesso = `Parabens o Valor B é maior que o Valor A`;

    formValidacao = validacao(campoA.value)
    if (numbervalid(campoA, campoB)){
        mensagemSucesso.innerHTML = mensagemSucesso;
        document.querySelector('.success-message').style.display = 'none';

    } else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none'; 
    }
});