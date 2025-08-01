// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Referência ao formulário
    const form = document.getElementById('cadastroForm');
    const mensagemSucesso = document.getElementById('mensagemSucesso');
    
    // Adiciona evento de submit ao formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        
        // Obtém os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        
        // Validação básica
        if (!nome || !email || !telefone) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validação de e-mail simples
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, digite um e-mail válido.');
            return;
        }
        
        // Simula o envio do formulário
        console.log('Dados do formulário:', {
            nome: nome,
            email: email,
            telefone: telefone
        });
        
        // Mostra mensagem de sucesso
        mensagemSucesso.classList.remove('d-none');
        
        // Limpa o formulário
        form.reset();
        
        // Esconde a mensagem de sucesso após 5 segundos
        setTimeout(() => {
            mensagemSucesso.classList.add('d-none');
        }, 5000);
        
        // Feedback visual no botão
        const botao = form.querySelector('button[type="submit"]');
        const textoOriginal = botao.innerHTML;
        
        botao.innerHTML = '<i class="bi bi-check-circle me-2"></i>Enviado!';
        botao.classList.remove('btn-primary');
        botao.classList.add('btn-success');
        botao.disabled = true;
        
        // Restaura o botão após 3 segundos
        setTimeout(() => {
            botao.innerHTML = textoOriginal;
            botao.classList.remove('btn-success');
            botao.classList.add('btn-primary');
            botao.disabled = false;
        }, 3000);
    });
    
    // Adiciona máscara para o telefone (formato brasileiro)
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        
        if (value.length <= 11) {
            // Aplica máscara: (XX) XXXXX-XXXX
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/^(\d{2})\s(\d{5})(\d)/g, '($1) $2-$3');
            value = value.replace(/^(\d{2})\s(\d{4})(\d)/g, '($1) $2-$3');
            
            e.target.value = value;
        }
    });
    
    // Adiciona validação em tempo real
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.classList.add('is-invalid');
            } else {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        });
    });
}); 