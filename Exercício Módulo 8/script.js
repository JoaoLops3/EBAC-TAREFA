// Array para armazenar os contatos
let contatos = [];

// Elementos do DOM
const contactForm = document.getElementById('contactForm');
const contactsTableBody = document.getElementById('contactsTableBody');
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');

// Carrega contatos salvos no localStorage
function carregarContatos() {
    const contatosSalvos = localStorage.getItem('contatos');
    if (contatosSalvos) {
        contatos = JSON.parse(contatosSalvos);
        atualizarTabela();
    }
}

// Salva contatos no localStorage
function salvarContatos() {
    localStorage.setItem('contatos', JSON.stringify(contatos));
}

// Adiciona um novo contato
function adicionarContato(nome, telefone) {
    const contato = {
        id: Date.now(), // ID único baseado no timestamp
        nome: nome.trim(),
        telefone: telefone.trim()
    };
    
    contatos.push(contato);
    salvarContatos();
    atualizarTabela();
    
    // Limpa o formulário
    contactForm.reset();
    
    // Mostra mensagem de sucesso
    mostrarMensagem('Contato adicionado com sucesso!', 'success');
}

// Remove um contato
function removerContato(id) {
    contatos = contatos.filter(contato => contato.id !== id);
    salvarContatos();
    atualizarTabela();
    
    // Mostra mensagem de confirmação
    mostrarMensagem('Contato removido com sucesso!', 'info');
}

// Atualiza a tabela de contatos
function atualizarTabela() {
    if (contatos.length === 0) {
        contactsTableBody.innerHTML = `
            <tr>
                <td colspan="3" class="empty-message">
                    Nenhum contato cadastrado ainda. Adicione seu primeiro contato!
                </td>
            </tr>
        `;
        return;
    }
    
    contactsTableBody.innerHTML = contatos.map(contato => `
        <tr>
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td>
                <button class="delete-btn" onclick="removerContato(${contato.id})">
                    🗑️ Excluir
                </button>
            </td>
        </tr>
    `).join('');
}

// Valida o formulário
function validarFormulario(nome, telefone) {
    if (!nome || !telefone) {
        mostrarMensagem('Por favor, preencha todos os campos!', 'error');
        return false;
    }
    
    if (nome.length < 2) {
        mostrarMensagem('O nome deve ter pelo menos 2 caracteres!', 'error');
        return false;
    }
    
    // Validação básica de telefone (aceita números, espaços, parênteses, hífens)
    const telefoneRegex = /^[\d\s\(\)\-\+]+$/;
    if (!telefoneRegex.test(telefone) || telefone.length < 8) {
        mostrarMensagem('Por favor, insira um telefone válido!', 'error');
        return false;
    }
    
    return true;
}

// Mostra mensagens para o usuário
function mostrarMensagem(texto, tipo) {
    // Remove mensagem anterior se existir
    const mensagemAnterior = document.querySelector('.mensagem-flutuante');
    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }
    
    // Cria nova mensagem
    const mensagem = document.createElement('div');
    mensagem.className = `mensagem-flutuante ${tipo}`;
    mensagem.textContent = texto;
    
    // Estilos da mensagem
    mensagem.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    // Cores baseadas no tipo
    if (tipo === 'success') {
        mensagem.style.backgroundColor = '#28a745';
    } else if (tipo === 'error') {
        mensagem.style.backgroundColor = '#dc3545';
    } else if (tipo === 'info') {
        mensagem.style.backgroundColor = '#17a2b8';
    }
    
    // Adiciona animação CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(mensagem);
    
    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (mensagem.parentNode) {
                mensagem.remove();
            }
        }, 300);
    }, 3000);
    
    // Adiciona animação de saída
    const styleOut = document.createElement('style');
    styleOut.textContent = `
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleOut);
}

// Event listener para o formulário
contactForm.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const nome = nomeInput.value;
    const telefone = telefoneInput.value;
    
    if (validarFormulario(nome, telefone)) {
        adicionarContato(nome, telefone);
    }
});

// Formatação automática do telefone
telefoneInput.addEventListener('input', function(e) {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    
    if (valor.length > 0) {
        if (valor.length <= 2) {
            valor = `(${valor}`;
        } else if (valor.length <= 6) {
            valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        } else if (valor.length <= 10) {
            valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6)}`;
        } else {
            valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
        }
    }
    
    e.target.value = valor;
});

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', function() {
    carregarContatos();
    
    // Foca no campo nome quando a página carrega
    nomeInput.focus();
}); 