// Arquivo externo (script.js)

function validarEmail(email) {
    const regexEmail = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return regexEmail.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");

    emailInput.addEventListener("blur", function () {
        const emailValue = emailInput.value;

        if (!validarEmail(emailValue)) {
            alert("Por favor, insira um email válido.");
        }
    });
});


function validarTelefone(telefone) {
    // Expressão regular para validar o formato do telefone (xx) xxxxx-xxxx
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regexTelefone.test(telefone);
}

document.addEventListener("DOMContentLoaded", function () {
    const telefoneInput = document.getElementById("telefone");

    telefoneInput.addEventListener("blur", function () {
        const telefoneValue = telefoneInput.value;

        if (!validarTelefone(telefoneValue)) {
            alert("Por favor, insira um telefone válido no formato (xx) xxxxx-xxxx.");
        }
    });
});

function enviarParaWhatsApp() {
    const nomeValue = document.getElementById("nome").value;
    const emailValue = document.getElementById("email").value;
    const telefoneValue = document.getElementById("telefone").value;
    const nomeEmpresaValue = document.getElementById("nomeEmpresa").value;
    const servicoValue = document.getElementById("servico").value;
    const mensagemValue = document.getElementById("mensagem").value;

    // Verifica se todos os campos estão preenchidos
    if (!nomeValue || !emailValue || !telefoneValue || !nomeEmpresaValue || !servicoValue || !mensagemValue ) {
        alert("Preencha todos os campos corretamente antes de enviar.");
        return; // Impede o envio se algum campo estiver vazio
    }

    // Validação do campo "Email" (formato válido)
    const regexEmail = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!regexEmail.test(emailValue)) {
        alert("Por favor, insira um email válido.");
        return;
    }

   

    // Todos os campos estão preenchidos e validados, envie para o WhatsApp
    const numeroWhatsApp = "55 21 970267055"; // Substitua pelo número correto
    const mensagemWhatsApp = `Nome: ${nomeValue}%0AEmail: ${emailValue}%0ATelefone: ${telefoneValue}%0ANome da empresa: ${nomeEmpresaValue}%0AServiço: ${servicoValue}%0AMensagem: ${mensagemValue}`;

    // Crie o link para enviar para o WhatsApp
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemWhatsApp}`;

    // Redirecione para o link do WhatsApp
    window.open(linkWhatsApp, '_blank');
}
