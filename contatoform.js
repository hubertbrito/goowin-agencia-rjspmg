function enviarFormulario(event) {
    event.preventDefault();
    const nome = event.target.elements.nome.value;
    const email = event.target.elements.email.value;
    const telefone = event.target.elements.telefone.value;
    const mensagem = event.target.elements.mensagem.value;

    // Validação dos campos
    if (!nome || !email || !telefone || !mensagem) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    // Enviar o formulário
    window.location.href = `mailto:humbertobrito33@gmail.com?subject=Contato do site&body=Nome: ${nome}%0D%0AEmail: ${email}%0D%0ATelefone: ${telefone}%0D%0AMensagem: ${mensagem}`;
  }