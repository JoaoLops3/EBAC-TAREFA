# EBAC Sports - Loja Virtual

## Descrição

Este é o projeto do Módulo 11 do curso EBAC, que consiste em uma loja virtual responsiva para artigos esportivos.

## Funcionalidades

### Layout Responsivo

- **Desktop (1024px+):** Layout com 4 produtos lado a lado
- **Tablet (641px - 1023px):** Layout com 2 produtos por linha
- **Mobile (até 640px):** Layout com 1 produto por linha

### Seções Principais

1. **Header:** Navegação fixa com links para as seções
2. **Sobre a Loja:** Seção com duas colunas (imagem e texto)
3. **Produtos:** Listagem de 4 produtos com imagens, nomes, descrições e botões de ação
4. **Footer:** Rodapé com informações da empresa

### Funcionalidades JavaScript

- Botões "Adicionar ao Carrinho" com feedback visual
- Notificações de confirmação ao adicionar produtos
- Scroll suave na navegação
- Animações e transições CSS

## Tecnologias Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Media Queries)
- JavaScript (ES6+)
- Google Fonts (Roboto)

## Estrutura de Arquivos

```
Exercício Módulo 11/
├── index.html      # Estrutura HTML principal
├── style.css       # Estilos CSS responsivos
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este arquivo
```

## Como Executar

1. Abra o arquivo `index.html` em um navegador web
2. Teste a responsividade redimensionando a janela do navegador
3. Clique nos botões "Adicionar ao Carrinho" para ver as funcionalidades

## Imagens Utilizadas

As imagens são carregadas da API fake-api-tau.vercel.app:

- Bola de futebol
- Tênis esportivo
- Raquete de tênis
- Camiseta esportiva
- Imagem da loja

## Deploy na Vercel

Para fazer o deploy na Vercel:

1. Faça upload dos arquivos para o GitHub
2. Conecte o repositório à Vercel
3. Configure o build para servir arquivos estáticos
4. Acesse o link gerado pela Vercel

## Responsividade

O site se adapta automaticamente a diferentes tamanhos de tela:

- **Desktop:** Layout otimizado para telas grandes
- **Tablet:** Layout intermediário com 2 colunas
- **Mobile:** Layout vertical otimizado para smartphones
