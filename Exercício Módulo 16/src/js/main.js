// Arquivo JavaScript principal
console.log('Aplicação iniciada!');

// Função para mostrar mensagem de boas-vindas
function showWelcomeMessage() {
    const message = 'Bem-vindo ao projeto Gulp!';
    console.log(message);
    return message;
}

// Função para animar elementos
function animateElements() {
    const elements = document.querySelectorAll('.card');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Função para adicionar eventos aos botões
function addButtonEvents() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Função para fazer requisições AJAX
function makeAjaxRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

// Função utilitária para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    showWelcomeMessage();
    animateElements();
    addButtonEvents();
    
    console.log('Todas as funções foram inicializadas!');
});
