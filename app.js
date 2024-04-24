document.addEventListener('DOMContentLoaded', function() {
  var themeButton = document.getElementById('theme-button');

  // Defina o tema escuro como padrão
  if (!localStorage.getItem('theme')) {
      document.body.classList.add('dark-mode');
  }

  themeButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');

      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');

      alterarTema(); // Atualize as imagens e o texto no botão
  });

  // Carregue o tema preferido do localStorage
  var preferredTheme = localStorage.getItem('theme');
  if (preferredTheme === 'light') {
      document.body.classList.remove('dark-mode');
  } else {
      document.body.classList.add('dark-mode');
  }
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




//form que leva pro whatsapp
function enviarParaWhatsApp() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var nomeEmpresa = document.getElementById("nomeEmpresa").value;
    var servico = document.getElementById("servico").value;
    var mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !telefone || !nomeEmpresa || !servico || !mensagem) {
      alert('Todos os campos são obrigatórios!');
      return;
    }


    // Substitua o número abaixo pelo número de WhatsApp da sua empresa
    var numeroWhatsApp = "5521970267055";

    var textoMensagem = "Nome: " + nome + "%0A" + " " +
                        "Email: " + email + "%0A" +" " +
                        "Telefone: " + telefone + "%0A" + " " +
                        "Nome da Empresa: " + nomeEmpresa + "%0A" + " " +
                        "Serviço: " + servico + "%0A" + " " +
                        "Mensagem: " + mensagem;

    var linkWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroWhatsApp + "&text=" + textoMensagem;

    window.open(linkWhatsApp, '_blank');
}