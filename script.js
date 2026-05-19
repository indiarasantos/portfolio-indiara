// ==========================================
// FUNCIONALIDADE 1: ALTERNÂNCIA DE TEMA (CLARO/ESCURO)
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
    // Alterna a classe 'dark-mode' no elemento body
    body.classList.toggle('dark-mode');
    
    // Altera dinamicamente o texto do botão para indicar o estado atual
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Tema Claro';
    } else {
        themeToggleBtn.textContent = 'Tema Escuro';
    }
});

// ==========================================
// FUNCIONALIDADE 2: VALIDAÇÃO E SIMULAÇÃO DO FORMULÁRIO
// ==========================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    // Impede o comportamento padrão de recarregamento da página ao enviar
    event.preventDefault();

    // Captura e limpa os espaços em branco extras dos valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('mensagem').value.trim();

    // Expressão regular (RegEx) para validar o formato estrutural do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificação de segurança: impede o envio se houver campos vazios
    if (nome === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação de formato de e-mail utilizando o método test() do RegEx
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido (exemplo: usuario@dominio.com).');
        return;
    }

    // Exibição da mensagem de confirmação de sucesso exigida no edital
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso!`);
    
    // Limpa todos os campos do formulário após o envio validado com sucesso
    contactForm.reset();
});