// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de adicionar ao carrinho
    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
    
    // Adiciona evento de clique para cada botão
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            // Obtém o nome do produto do elemento pai
            const produto = this.closest('.produto');
            const nomeProduto = produto.querySelector('h3').textContent;
            
            // Simula adição ao carrinho
            adicionarAoCarrinho(nomeProduto);
        });
    });
    
    // Função para adicionar produto ao carrinho
    function adicionarAoCarrinho(nomeProduto) {
        // Mostra mensagem de confirmação
        const mensagem = `Produto "${nomeProduto}" adicionado ao carrinho!`;
        
        // Cria um elemento de notificação
        const notificacao = document.createElement('div');
        notificacao.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #27ae60;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            z-index: 1000;
            font-weight: 500;
            animation: slideIn 0.3s ease;
        `;
        notificacao.textContent = mensagem;
        
        // Adiciona a notificação ao body
        document.body.appendChild(notificacao);
        
        // Remove a notificação após 3 segundos
        setTimeout(() => {
            notificacao.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notificacao.parentNode) {
                    notificacao.parentNode.removeChild(notificacao);
                }
            }, 300);
        }, 3000);
        
        // Adiciona efeito visual ao botão
        const botao = event.target;
        botao.style.backgroundColor = '#27ae60';
        botao.textContent = 'Adicionado!';
        
        setTimeout(() => {
            botao.style.backgroundColor = '#3498db';
            botao.textContent = 'Adicionar ao Carrinho';
        }, 1000);
    }
    
    // Adiciona estilos CSS para animações
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
    document.head.appendChild(style);
    
    // Adiciona scroll suave para os links de navegação
    const linksNavegacao = document.querySelectorAll('header nav a');
    
    linksNavegacao.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 