# SwapMarket - Landing Page

Uma landing page moderna e responsiva para uma plataforma de troca de produtos usados, desenvolvida com Bootstrap 5.

## 🚀 Características

- **Design Responsivo**: Adaptável a todos os dispositivos
- **Navegação Suave**: Smooth scroll entre seções
- **Carrossel Interativo**: Apresentação dinâmica de conteúdo
- **Animações CSS**: Efeitos visuais modernos
- **LiveReload**: Atualização automática durante desenvolvimento
- **SEO Otimizado**: Estrutura semântica e meta tags

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Custom)
- Bootstrap 5.3.0
- Bootstrap Icons
- JavaScript (Vanilla)
- Live Server (desenvolvimento)

## 📁 Estrutura do Projeto

```
Project-3-EBAC/
├── index.html          # Página principal
├── styles.css          # Estilos customizados
├── script.js           # JavaScript interativo
├── package.json        # Configuração do projeto
├── vercel.json         # Configuração do Vercel
└── README.md          # Documentação
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone [url-do-repositorio]
cd Project-3-EBAC
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:3000
```

### Comandos Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run dev` - Inicia com watch mode (LiveReload)
- `npm run build` - Prepara para produção
- `npm run deploy` - Deploy na Vercel

## 📱 Seções da Landing Page

### 1. Navbar

- **navbar-brand**: Logo da marca com ícone
- **navbar-expand**: Menu responsivo que se expande em telas maiores
- Navegação suave entre seções

### 2. Hero Section

- Carrossel com 3 slides temáticos:
  - Troca sustentável
  - Economia de dinheiro
  - Consciência ambiental
- Controles de navegação e indicadores

### 3. Como Funciona

- 3 passos simples explicados com ícones
- Cards interativos com hover effects

### 4. Produtos em Destaque

- Grid responsivo de produtos
- Imagens placeholder com categorias
- Badges coloridos para categorização

### 5. Depoimentos

- Testimonials de usuários reais
- Sistema de avaliação com estrelas
- Cards com informações do usuário

### 6. Call-to-Action

- Seção de cadastro com botões de ação
- Background gradiente atrativo

### 7. Footer

- Links organizados por categoria
- Newsletter signup
- Redes sociais
- Informações legais

## 🎨 Customizações CSS

### Variáveis CSS

```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --success-color: #198754;
  --warning-color: #ffc107;
  --danger-color: #dc3545;
  --info-color: #0dcaf0;
}
```

### Classes Utilitárias

- `.fade-in` - Animação de entrada
- `.slide-in-left` - Slide da esquerda
- `.slide-in-right` - Slide da direita
- `.text-gradient` - Texto com gradiente
- `.bg-gradient-primary` - Background gradiente

## 🔧 Funcionalidades JavaScript

### Smooth Scroll

- Navegação suave entre seções
- Offset automático para navbar fixa

### Animações

- Intersection Observer para animações on-scroll
- Delay escalonado para múltiplos elementos

### Carrossel

- Auto-play com pausa no hover
- Navegação por teclado (setas)
- Controles touch para mobile

### Interatividade

- Hover effects em cards
- Loading states em botões
- Sistema de notificações
- Modal para detalhes de produtos

## 📱 Responsividade

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 991px
- **Desktop**: > 992px

### Adaptações Mobile

- Menu hambúrguer
- Cards em coluna única
- Botões full-width
- Carrossel otimizado para touch

## 🚀 Deploy na Vercel

### Configuração Automática

O projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. Execute `npm run deploy` ou use a interface da Vercel
3. O site estará disponível em: `https://seu-projeto.vercel.app`

### Configuração Manual

1. Instale a CLI da Vercel: `npm i -g vercel`
2. Execute: `vercel --prod`
3. Siga as instruções no terminal

## 🎯 SEO e Performance

### Meta Tags

- Viewport responsivo
- Charset UTF-8
- Título otimizado
- Meta description

### Performance

- CSS e JS minificados via CDN
- Lazy loading para imagens
- Service Worker para cache
- Otimização de fontes

## 🔍 Glossário Técnico

### Bootstrap Classes

- **navbar-brand**: Estiliza o logo/marca na navbar
- **navbar-expand**: Controla expansão da navbar em diferentes telas
- **rounded**: Aplica cantos arredondados aos elementos
- **smooth-scroll**: Funcionalidade de rolagem suave

### JavaScript

- **Array**: Estrutura de dados para múltiplos valores
- **LiveReload**: Atualização automática durante desenvolvimento

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**João Gabriel** - Desenvolvido para o Projeto 3 da EBAC

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para suporte, envie um e-mail para [seu-email@exemplo.com] ou abra uma issue no repositório.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
