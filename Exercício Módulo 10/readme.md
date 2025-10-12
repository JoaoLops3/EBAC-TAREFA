# Exercício Módulo 10 - Plugins jQuery

## 📋 Descrição

Projeto de formulário de cadastro para venda de veículos, desenvolvido com jQuery e plugins populares. Implementa carousel de imagens, validação de formulário e máscaras de entrada.

## 🎯 Requisitos Atendidos

- ✅ **Carousel funcionando em slides** - Slick Carousel com autoplay
- ✅ **Validação de formulário** - jQuery Validate com mensagens em português
- ✅ **Máscaras operativas** - jQuery Mask em telefone, CPF e CEP

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- jQuery 1.11.0
- **Plugins:**
  - [Slick Carousel](https://kenwheeler.github.io/slick/) - Carousel responsivo
  - [jQuery Validate](https://jqueryvalidation.org/) - Validação de formulários
  - [jQuery Mask](https://igorescobar.github.io/jQuery-Mask-Plugin/) - Máscaras de input

## 🚀 Como Executar

### Opção 1: Abrir diretamente

Basta abrir o arquivo `index.html` no navegador.

### Opção 2: Servidor local

```bash
# Com Python 3
python3 -m http.server 8000

# Com Node.js (npx)
npx http-server -p 8000

# Depois acesse: http://localhost:8000
```

## ⚙️ Funcionalidades

### 1. Carousel de Imagens

- Rotação automática a cada 3 segundos
- Navegação por dots
- 3 slides com imagens de veículos premium

### 2. Validação de Formulário

Campos obrigatórios:

- Nome completo
- E-mail (com validação de formato)
- Telefone
- CPF
- Endereço completo
- CEP

**Comportamento:**

- Mensagens de erro em português (PT-BR)
- Alert de sucesso ao enviar
- Alert de erro se campos estiverem inválidos
- Reset do formulário após envio

### 3. Máscaras de Input

- **Telefone:** `(00) 00000-0000`
- **CPF:** `000.000.000-00`
- **CEP:** `00000-000`

## 📁 Estrutura do Projeto

```
Exercício Módulo 10/
├── assets/
│   ├── slide1.png          # Imagem Porsche
│   ├── slide2.png          # Imagem BMW
│   └── slide3.png          # Imagem Ford
├── js/
│   ├── jquery.mask.min.js
│   ├── jquery.validate.min.js
│   ├── messages_pt_BR.min.js
│   └── main.js             # Código principal
├── index.html
├── main.css
└── README.md
```

## 💡 Conceitos Aplicados

- Manipulação do DOM com jQuery
- Integração de plugins jQuery
- Validação client-side
- Formatação de inputs
- Carousel responsivo
- Event handling
- Form submission

## 🎨 Características Visuais

- Design limpo e moderno
- Paleta de cores profissional (azul #007bff)
- Layout responsivo
- Sombras e bordas arredondadas
- Transições suaves nos botões
- Focus states nos inputs

## 📱 Responsividade

- Adaptação para mobile (breakpoint 768px)
- Altura do carousel ajustável
- Margens otimizadas para telas pequenas

## 🔧 Possíveis Melhorias Futuras

- [ ] Atualizar jQuery para versão mais recente
- [ ] Validação de dígitos verificadores do CPF
- [ ] Integração com API ViaCEP para buscar endereço
- [ ] Substituir alerts por modals ou toasts
- [ ] Adicionar mais validações (número mínimo de caracteres)
- [ ] Implementar envio real para backend
- [ ] Testes automatizados

## 📝 Observações

- Projeto desenvolvido como parte do curso EBAC
- Foco em aprendizado de plugins jQuery
- Código comentado para facilitar compreensão

---

**Desenvolvido por:** João Gabriel  
**Módulo:** 10 - Plugins jQuery  
**Curso:** EBAC - Escola Britânica de Artes Criativas e Tecnologia
