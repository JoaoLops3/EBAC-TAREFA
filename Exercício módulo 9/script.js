$(document).ready(function() {
    // Variáveis para controle das tarefas
    let totalTasks = 0;
    let completedTasks = 0;
    
    // Função para atualizar as estatísticas
    function updateStats() {
        $('#totalTasks').text(totalTasks);
        $('#completedTasks').text(completedTasks);
    }
    
    // Manipulador do formulário para adicionar tarefas
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        
        const taskText = $('#taskInput').val().trim();
        
        // Verifica se a tarefa não está vazia
        if (taskText === '') {
            alert('Por favor, digite uma tarefa válida!');
            return;
        }
        
        // Cria o elemento <li> com a nova tarefa
        const newTask = $('<li>').text(taskText);
        
        // Adiciona a tarefa à lista
        $('#taskList').append(newTask);
        
        // Limpa o campo de entrada
        $('#taskInput').val('');
        
        // Atualiza o contador de tarefas
        totalTasks++;
        updateStats();
        
        // Adiciona efeito de fade-in na nova tarefa
        newTask.hide().fadeIn(500);
    });
    
    // Manipulador de clique nas tarefas para marcar como concluída
    $('#taskList').on('click', 'li', function() {
        const $task = $(this);
        
        // Alterna a classe 'completed' para aplicar/remover o efeito de linha
        $task.toggleClass('completed');
        
        // Atualiza o contador de tarefas concluídas
        if ($task.hasClass('completed')) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        
        updateStats();
        
        // Adiciona efeito visual de feedback
        $task.css('transform', 'scale(1.02)');
        setTimeout(() => {
            $task.css('transform', '');
        }, 200);
    });
    
    // Adiciona funcionalidade de duplo clique para remover tarefa
    $('#taskList').on('dblclick', 'li', function() {
        const $task = $(this);
        
        // Confirma a remoção
        if (confirm('Deseja remover esta tarefa?')) {
            // Atualiza contadores
            totalTasks--;
            if ($task.hasClass('completed')) {
                completedTasks--;
            }
            
            // Remove a tarefa com efeito de fade-out
            $task.fadeOut(300, function() {
                $(this).remove();
                updateStats();
            });
        }
    });
    
    // Adiciona funcionalidade de tecla Enter no campo de entrada
    $('#taskInput').on('keypress', function(e) {
        if (e.which === 13) { // Tecla Enter
            $('#taskForm').submit();
        }
    });
    
    // Adiciona funcionalidade para limpar todas as tarefas
    $(document).on('keydown', function(e) {
        // Ctrl + Shift + C para limpar todas as tarefas
        if (e.ctrlKey && e.shiftKey && e.which === 67) {
            if (confirm('Deseja remover todas as tarefas?')) {
                $('#taskList').empty();
                totalTasks = 0;
                completedTasks = 0;
                updateStats();
            }
        }
    });
    
    // Inicializa as estatísticas
    updateStats();
    
    // Adiciona algumas tarefas de exemplo (opcional)
    const exampleTasks = [
        'Estudar jQuery',
        'Fazer exercícios do módulo 9',
        'Revisar código JavaScript',
        'Praticar manipulação de DOM'
    ];
    
    // Adiciona tarefas de exemplo após um pequeno delay
    setTimeout(() => {
        exampleTasks.forEach(task => {
            const newTask = $('<li>').text(task);
            $('#taskList').append(newTask);
            totalTasks++;
        });
        updateStats();
    }, 1000);
}); 