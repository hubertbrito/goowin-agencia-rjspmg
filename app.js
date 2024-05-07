document.addEventListener('DOMContentLoaded', function() {
  var themeButton = document.getElementById('theme-button');

  // Carregue o tema preferido do localStorage
  var preferredTheme = localStorage.getItem('theme');
  if (preferredTheme !== 'dark') {
      // Sempre defina o tema como "light" no localStorage
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-mode');
  } else {
      document.body.classList.add('dark-mode');
  }

  themeButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');

      // Sempre atualize o valor no localStorage
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');

      alterarTema(); // Atualize as imagens e o texto no botão
  });

  alterarTema(); // Atualize as imagens e o texto no botão
});

function alterarTema() {
  var button = document.getElementById('theme-button');
  var image = document.getElementById('theme-icon');
  var logo = document.getElementById('topo-logo');
  var text = document.getElementById('theme-text');
  var menu = document.getElementById('header');

  if (document.body.classList.contains('dark-mode')) {
      button.className = 'modo-escuro';
      image.src = 'assets/sun.png';
      logo.src = 'assets/logo-clara-bola-roxa.png';
      text.textContent = 'Light';
      menu.className = 'menu-dark';
  } else {
      button.className = 'modo-claro';
      image.src = 'assets/moon.png';
      logo.src = 'assets/logo-preta-bola-roxa.png';
      text.textContent = 'Dark';
      menu.className = 'menu-light';
  }
}

  
  
// menu responsivo
const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menus");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);


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
