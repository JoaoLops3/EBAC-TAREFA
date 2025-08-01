# Exercício Módulo 12 - Bootstrap

## Descrição

Este projeto implementa um formulário de cadastro utilizando Bootstrap 5 via CDN, conforme solicitado no exercício do Módulo 12.

## Funcionalidades

### ✅ Requisitos Atendidos

- [x] Bootstrap adicionado via CDN
- [x] Formulário de cadastro com campos:
  - Nome completo
  - E-mail
  - Telefone
- [x] Botão de envio
- [x] Classes do Bootstrap aplicadas nos elementos

### 🎨 Recursos Adicionais

- **Design Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Validação em Tempo Real**: Feedback visual para campos válidos/inválidos
- **Máscara de Telefone**: Formatação automática no formato brasileiro
- **Mensagem de Sucesso**: Feedback após envio do formulário
- **Ícones Bootstrap**: Interface mais intuitiva
- **Validação de E-mail**: Verifica formato correto

## Estrutura do Projeto

```
Exercício Módulo 12/
├── index.html          # Página principal com o formulário
├── script.js           # JavaScript com funcionalidades
└── README.md           # Documentação do projeto
```

## Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Preencha os campos obrigatórios:
   - **Nome**: Digite seu nome completo
   - **E-mail**: Digite um e-mail válido
   - **Telefone**: Digite o número com DDD (formatação automática)
3. Clique em "Enviar Cadastro"
4. Veja a mensagem de sucesso e o feedback visual

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **Bootstrap 5.3.2**: Framework CSS via CDN
- **Bootstrap Icons**: Ícones para melhor UX
- **JavaScript**: Funcionalidades interativas
- **CSS**: Estilos do Bootstrap

## Classes Bootstrap Utilizadas

### Layout

- `container`: Container responsivo
- `row`: Linha do grid
- `col-md-6 col-lg-5`: Colunas responsivas
- `justify-content-center`: Centralização

### Componentes

- `card`: Card container
- `card-header`: Cabeçalho do card
- `card-body`: Corpo do card
- `shadow`: Sombra no card

### Formulário

- `form-control`: Estilo dos inputs
- `form-label`: Labels dos campos
- `form-text`: Texto de ajuda
- `btn btn-primary btn-lg`: Botão principal grande
- `d-grid`: Botão em largura total

### Utilitários

- `bg-light`: Fundo claro
- `bg-primary`: Fundo azul
- `text-white`: Texto branco
- `text-center`: Texto centralizado
- `py-5`: Padding vertical
- `p-4`: Padding geral
- `mb-3`, `mb-4`: Margin bottom
- `me-1`, `me-2`: Margin end (direita)

### Estados

- `is-valid`: Campo válido
- `is-invalid`: Campo inválido
- `d-none`: Elemento oculto

## Branch Git

Para criar a branch conforme solicitado:

```bash
git checkout -b exercicio_bootstrap
git add .
git commit -m "Exercício Módulo 12 - Formulário Bootstrap"
git push origin exercicio_bootstrap
```

## Autor

Desenvolvido como parte do curso EBAC - Exercício Módulo 12
