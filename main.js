const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.lenght >= 2;
}

form.addEventListener('submit', function(e) {
    let FormEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito} depositando para o cliente: ${nomeBeneficiario} - conta: ${numeroContaBeneficiario}`;

    if (!validaNome(nomeBeneficiario.value )) {
        alert(mensagemSucesso);
    } else {
        alert("Tudo certo");
    }
})

console.log(form);