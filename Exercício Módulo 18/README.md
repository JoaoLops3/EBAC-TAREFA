# Exercício Módulo 18 - Grunt

Este projeto demonstra o uso do Grunt para automatização de tarefas:

## Funcionalidades

- ✅ Compilação de LESS para CSS
- ✅ Minificação de JavaScript com Uglify
- ✅ Watch para desenvolvimento automatizado
- ✅ Organização de arquivos em src/ e dist/

## Estrutura do Projeto

```
Exercício Módulo 18/
├── src/
│   ├── less/
│   │   ├── variables.less
│   │   ├── mixins.less
│   │   └── main.less
│   └── js/
│       └── main.js
├── dist/
│   ├── css/
│   │   └── main.css (gerado)
│   └── js/
│       └── main.min.js (gerado)
├── index.html
├── package.json
├── Gruntfile.js
└── README.md
```

## Como Usar

### Instalação

```bash
npm install
```

### Executar Tarefas

```bash
# Executar todas as tarefas (compilar LESS e minificar JS)
npm run build

# ou (se tiver Grunt instalado globalmente)
npx grunt

# Modo watch (desenvolvimento)
npm run watch

# ou
npx grunt watch
```

## Tarefas do Grunt

- `npm run build` ou `npx grunt` - Executa less e uglify
- `npx grunt less` - Compila arquivos LESS para CSS
- `npx grunt uglify` - Minifica arquivos JavaScript
- `npm run watch` ou `npx grunt watch` - Observa mudanças e executa tarefas automaticamente

## Tecnologias Utilizadas

- Grunt
- grunt-contrib-less
- grunt-contrib-uglify
- grunt-contrib-watch
