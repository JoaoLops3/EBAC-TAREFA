# Projeto Bootstrap - Módulo 13

## 📋 Descrição
Este projeto demonstra o uso avançado do Bootstrap 5 com carousel de imagens, grid responsivo e cards interativos. Desenvolvido para o curso EBAC - Módulo 13.

## ✅ Requisitos Atendidos

### 🎯 Elementos Obrigatórios
- [x] **Projeto Bootstrap**: Criado com Bootstrap 5.3.2 via CDN
- [x] **Carousel de Imagens**: Slider automático com 3 imagens e controles
- [x] **Grid Responsivo**: 
  - Desktop: 3 itens por linha (`col-lg-4`)
  - Tablet: 2 itens por linha (`col-md-6`)
  - Smartphone: 1 item por linha (`col-12`)
- [x] **Cards**: 6 cards com conteúdo sobre tecnologias web
- [x] **Layout Responsivo**: Adapta-se perfeitamente a todos os dispositivos

### 🎨 Recursos Adicionais
- **Navbar Responsivo**: Menu de navegação com links internos
- **Hero Section**: Seção de apresentação com call-to-action
- **Animações CSS**: Efeitos de hover e transições suaves
- **JavaScript Interativo**: Funcionalidades avançadas
- **Acessibilidade**: Atributos ARIA e navegação por teclado
- **Ícones Bootstrap**: Interface mais intuitiva
- **Footer**: Rodapé informativo

## 🏗️ Estrutura do Projeto

```
Exercício Módulo 13/
├── index.html          # Página principal
├── style.css           # Estilos personalizados
├── script.js           # JavaScript interativo
└── README.md           # Documentação
```

## 🚀 Como Usar

1. **Visualização Local**:
   - Abra o arquivo `index.html` em um navegador web
   - Navegue pelas seções usando o menu superior

2. **Deploy na Vercel**:
   ```bash
   # Instalar Vercel CLI (se necessário)
   npm i -g vercel
   
   # Fazer deploy
   vercel
   ```

## 📱 Layout Responsivo

### Desktop (≥992px)
- **Carousel**: Altura 400px com legendas
- **Grid**: 3 cards por linha
- **Navbar**: Menu completo visível

### Tablet (768px - 991px)
- **Grid**: 2 cards por linha
- **Carousel**: Altura reduzida
- **Navbar**: Menu hambúrguer

### Smartphone (<768px)
- **Grid**: 1 card por linha
- **Carousel**: Altura mínima
- **Navbar**: Menu colapsado

## 🎨 Componentes Bootstrap Utilizados

### Layout & Grid
- `container`: Container responsivo
- `row`: Linha do grid
- `col-12 col-md-6 col-lg-4`: Classes responsivas
- `justify-content-center`: Centralização

### Carousel
- `carousel slide`: Componente principal
- `carousel-indicators`: Indicadores
- `carousel-control-prev/next`: Controles
- `carousel-caption`: Legendas

### Cards
- `card`: Container do card
- `card-img-top`: Imagem superior
- `card-body`: Corpo do card
- `card-title`: Título
- `card-text`: Texto descritivo

### Navegação
- `navbar`: Barra de navegação
- `navbar-brand`: Logo/marca
- `navbar-nav`: Lista de links
- `navbar-toggler`: Botão mobile

### Utilitários
- `bg-light/bg-primary/bg-dark`: Cores de fundo
- `text-white/text-center`: Cores e alinhamento
- `py-5/p-4/mb-4`: Espaçamentos
- `shadow-sm`: Sombras
- `rounded`: Bordas arredondadas

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **Bootstrap 5.3.2**: Framework CSS via CDN
- **Bootstrap Icons**: Ícones
- **CSS3**: Estilos personalizados
- **JavaScript ES6+**: Funcionalidades interativas

## 📊 Grid System Detalhado

```html
<!-- Desktop: 3 colunas -->
<div class="col-12 col-md-6 col-lg-4">
  <!-- Card content -->
</div>

<!-- Breakpoints -->
- col-12: 100% largura (mobile)
- col-md-6: 50% largura (tablet)
- col-lg-4: 33.33% largura (desktop)
```

## 🎯 Funcionalidades JavaScript

- **Carousel Automático**: Transição a cada 5 segundos
- **Navegação Suave**: Scroll suave entre seções
- **Menu Ativo**: Destaque da seção atual
- **Animações**: Cards aparecem com fade-in
- **Notificações**: Feedback para ações do usuário
- **Acessibilidade**: Suporte a navegação por teclado

## 🌐 Deploy na Vercel

### Passo a Passo:

1. **Criar conta na Vercel**:
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub

2. **Conectar repositório**:
   - Clique em "New Project"
   - Selecione seu repositório
   - Configure as opções de deploy

3. **Configurações**:
   - **Framework Preset**: Other
   - **Build Command**: (deixe vazio)
   - **Output Directory**: (deixe vazio)
   - **Install Command**: (deixe vazio)

4. **Deploy**:
   - Clique em "Deploy"
   - Aguarde o processo
   - Copie o URL gerado

### Alternativa via CLI:
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

## 📝 Notas de Deploy

- ✅ **Arquivos estáticos**: HTML, CSS, JS funcionam perfeitamente
- ✅ **CDN Bootstrap**: Carregamento externo sem problemas
- ✅ **Imagens**: URLs externas do Unsplash
- ✅ **Responsividade**: Testado em todos os dispositivos

## 🔗 Links Úteis

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Unsplash Images](https://unsplash.com/)

## 👨‍💻 Autor

Desenvolvido como parte do curso EBAC - Módulo 13
**Tecnologias Web Responsivas**

---

*Projeto pronto para deploy na Vercel e entrega na plataforma EBAC! 🚀* 