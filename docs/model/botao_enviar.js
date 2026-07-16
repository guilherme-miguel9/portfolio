/**
 * Envia a mensagem do formulário de contato via WhatsApp.
 * @param {Event} event - O evento de submissão do formulário.
 */
function enviarMensagem(event) {
  // Evita o recarregamento padrão da página
  if (event) {
    event.preventDefault();
  }

  const nomeInput = document.getElementById("nome");
  const mensagemInput = document.getElementById("mensagem");

  if (!nomeInput || !mensagemInput) {
    console.error("Campos do formulário não encontrados.");
    return false;
  }

  const nome = nomeInput.value.trim();
  const mensagem = mensagemInput.value.trim();

  if (!nome || !mensagem) {
    alert("Por favor, preencha todos os campos antes de enviar.");
    return false;
  }

  // Número do WhatsApp de destino. Deixamos vazio caso o usuário queira configurar depois
  // ou abre o seletor de contatos do WhatsApp se for para link genérico.
  const telefone = ""; 

  const texto = `Olá Guilherme, me chamo ${nome}!\n\n${mensagem}`;

  // Formata o link do WhatsApp
  const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(
    texto
  )}`;

  // Abre em uma nova aba
  window.open(link, "_blank");

  // Limpa o formulário após o envio
  nomeInput.value = "";
  mensagemInput.value = "";

  return false;
}
