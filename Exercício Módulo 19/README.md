# Exercício Módulo 19 - Boas Práticas CSS (Metodologia BEM)

## 📋 Descrição

Este projeto aplica a metodologia BEM (Block Element Modifier) para organização de CSS, garantindo um código mais escalável, manutenível e semântico.

## 🎯 Metodologia BEM

A metodologia BEM divide os componentes em:

- **Block (Bloco)**: Componente independente e reutilizável (ex: `.produto`)
- **Element (Elemento)**: Parte de um bloco que não faz sentido sozinha (ex: `.produto__imagem`)
- **Modifier (Modificador)**: Variação de um bloco ou elemento (ex: `.produto--destaque`)

### Estrutura de Classes Aplicadas:

```
.produtos                 (Bloco - container)
.produto                  (Bloco - card do produto)
.produto__imagem          (Elemento - imagem do produto)
.produto__nome            (Elemento - nome do produto)
.produto__descricao       (Elemento - descrição do produto)
.produto--destaque        (Modificador - produto em destaque)
```

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- SASS (pré-processador CSS)

## 📁 Estrutura de Arquivos

```
Exercício Módulo 19/
├── index.html
├── package.json
├── README.md
├── src/
│   └── scss/
│       ├── _reset.scss
│       ├── _variables.scss
│       ├── _produtos.scss
│       └── main.scss
└── dist/
    └── css/
        └── main.css
```

## 🚀 Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Compile o SASS (modo watch):

```bash
npm run sass
```

3. Abra o arquivo `index.html` no navegador

## 📝 Observações

- O projeto mantém a mesma aparência visual do original
- As classes foram refatoradas seguindo a convenção BEM
- O CSS foi organizado em módulos SASS para melhor manutenibilidade
- Variáveis SASS foram utilizadas para facilitar futuras customizações

## 👤 Autor

João Gabriel Lopes Aguiar

## 📌 Branch

Este exercício está disponível na branch: `boas_praticas_css`
