# Lista de Tarefas - Módulo 9

## Descrição

Aplicação de lista de tarefas desenvolvida para o módulo 9 do curso, utilizando jQuery para manipulação de elementos DOM e controle de eventos.

## Funcionalidades

### ✅ Requisitos Obrigatórios

1. **Formulário de Adição**: Campo de texto para inserir o nome da tarefa e botão para cadastrar
2. **Lista Dinâmica**: Elementos `<li>` são adicionados dinamicamente à lista não ordenada
3. **Efeito de Conclusão**: Clique nos itens aplica `text-decoration: line-through`
4. **jQuery**: Utilização completa do jQuery para manipulação de elementos e eventos

### 🚀 Funcionalidades Extras

- **Estatísticas em Tempo Real**: Contador de tarefas totais e concluídas
- **Validação de Entrada**: Prevenção de tarefas vazias
- **Efeitos Visuais**: Animações suaves (fade-in/fade-out)
- **Duplo Clique**: Remove tarefas com confirmação
- **Tecla Enter**: Adiciona tarefas pressionando Enter
- **Atalho de Limpeza**: Ctrl + Shift + C para limpar todas as tarefas
- **Design Responsivo**: Interface adaptável para diferentes dispositivos

## Estrutura de Arquivos

```
Exercício módulo 9/
├── index.html      # Estrutura HTML principal
├── style.css       # Estilos CSS modernos e responsivos
├── script.js       # Lógica JavaScript com jQuery
└── README.md       # Documentação do projeto
```

## Como Usar

1. **Adicionar Tarefa**:

   - Digite o texto no campo de entrada
   - Clique em "Adicionar Tarefa" ou pressione Enter

2. **Marcar como Concluída**:

   - Clique uma vez no item da lista
   - O texto receberá uma linha através (strikethrough)

3. **Remover Tarefa**:

   - Duplo clique no item para removê-lo
   - Confirme a remoção no diálogo

4. **Limpar Todas as Tarefas**:
   - Pressione Ctrl + Shift + C
   - Confirme a limpeza no diálogo

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com gradientes e animações
- **jQuery 3.7.1**: Manipulação de DOM e eventos
- **JavaScript ES6+**: Lógica da aplicação

## Características Técnicas

### jQuery Implementado

- `$(document).ready()`: Inicialização quando DOM está pronto
- `$('#element')`: Seletores de elementos
- `.on()`: Manipulação de eventos
- `.append()`: Adição de elementos
- `.toggleClass()`: Alternância de classes CSS
- `.fadeIn()/.fadeOut()`: Animações
- `.val()`: Manipulação de valores de inputs
- `.text()`: Manipulação de conteúdo de texto

### Eventos Implementados

- `submit`: Envio do formulário
- `click`: Clique em tarefas
- `dblclick`: Duplo clique para remoção
- `keypress`: Tecla Enter
- `keydown`: Atalhos de teclado

## Instalação e Execução

1. Clone o repositório
2. Abra o arquivo `index.html` em um navegador web
3. A aplicação funcionará imediatamente (jQuery carregado via CDN)

## Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis

## Autor

Desenvolvido para o curso EBAC - Módulo 9
