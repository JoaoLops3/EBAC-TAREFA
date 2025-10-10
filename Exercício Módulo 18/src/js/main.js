// Código JavaScript para demonstração do Grunt
// Este arquivo será minificado pelo Grunt usando Uglify

(function() {
    'use strict';

    // Função para inicializar a aplicação
    function initApp() {
        console.log('Aplicação inicializada com sucesso!');
        setupEventListeners();
        showWelcomeMessage();
    }

    // Configurar event listeners
    function setupEventListeners() {
        const button = document.getElementById('testButton');
        if (button) {
            button.addEventListener('click', handleButtonClick);
        }
    }

    // Manipular clique do botão
    function handleButtonClick() {
        const output = document.getElementById('output');
        const messages = [
            'Grunt está funcionando perfeitamente! 🎉',
            'JavaScript minificado com sucesso! ✅',
            'LESS compilado para CSS! 🎨',
            'Automatização de tarefas em ação! ⚡'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        if (output) {
            output.textContent = randomMessage;
            output.style.display = 'block';
            
            // Animação simples
            output.style.opacity = '0';
            setTimeout(function() {
                output.style.transition = 'opacity 0.5s ease';
                output.style.opacity = '1';
            }, 100);
        }
    }

    // Mostrar mensagem de boas-vindas
    function showWelcomeMessage() {
        console.log('='.repeat(50));
        console.log('Bem-vindo ao Exercício Módulo 18!');
        console.log('Grunt configurado com sucesso!');
        console.log('Tarefas disponíveis:');
        console.log('  - Compilação LESS → CSS');
        console.log('  - Minificação JavaScript');
        console.log('  - Watch para desenvolvimento');
        console.log('='.repeat(50));
    }

    // Função utilitária para formatar data
    function formatDate(date) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString('pt-BR', options);
    }

    // Função para validar entrada
    function validateInput(input) {
        if (!input || input.trim() === '') {
            return false;
        }
        return true;
    }

    // Função para criar elemento
    function createElement(tag, className, text) {
        const element = document.createElement(tag);
        if (className) {
            element.className = className;
        }
        if (text) {
            element.textContent = text;
        }
        return element;
    }

    // Iniciar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

})();

