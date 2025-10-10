// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtém referências aos elementos do formulário
    const formulario = document.getElementById('meuFormulario');
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const mensagem = document.getElementById('mensagem');
    
    // Adiciona evento de submit ao formulário
    formulario.addEventListener('submit', function(evento) {
        // Previne o comportamento padrão do formulário
        evento.preventDefault();
        
        // Obtém os valores dos campos
        const valorA = parseFloat(campoA.value);
        const valorB = parseFloat(campoB.value);
        
        // Valida se os campos estão preenchidos
        if (isNaN(valorA) || isNaN(valorB)) {
            exibirMensagem('Por favor, preencha ambos os campos com números válidos.', 'error');
            return;
        }
        
        // Valida se o campo B é maior que o campo A
        if (valorB > valorA) {
            exibirMensagem('✅ Formulário válido! O número B é maior que o número A.', 'success');
        } else {
            exibirMensagem('❌ Formulário inválido! O número B deve ser maior que o número A.', 'error');
        }
    });
    
    // Função para exibir mensagens
    function exibirMensagem(texto, tipo) {
        mensagem.textContent = texto;
        mensagem.className = `message ${tipo}`;
        mensagem.classList.remove('hidden');
        
        // Rola a página para mostrar a mensagem
        mensagem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Adiciona evento para limpar mensagem quando os campos são alterados
    campoA.addEventListener('input', function() {
        mensagem.classList.add('hidden');
    });
    
    campoB.addEventListener('input', function() {
        mensagem.classList.add('hidden');
    });
}); 