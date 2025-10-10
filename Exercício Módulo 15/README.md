# Exercício Módulo 15 - Conversão CSS para SASS

Este projeto demonstra a conversão de CSS tradicional para SASS com uso de variáveis, mixins e módulos.

## Estrutura do Projeto

```
Exercício módulo 15/
├── sass/
│   ├── _variables.scss    # Variáveis SASS (cores, fontes, tamanhos)
│   ├── _mixins.scss      # Mixins reutilizáveis
│   ├── _base.scss        # Estilos base e reset
│   ├── _header.scss      # Estilos do cabeçalho
│   ├── _products.scss    # Estilos dos produtos
│   ├── _responsive.scss  # Media queries e responsividade
│   └── main.scss         # Arquivo principal que importa todos os módulos
├── index.html
├── styles.css            # CSS compilado
├── package.json
└── README.md
```

## Características SASS Implementadas

### 1. Variáveis

- Cores principais e secundárias
- Fontes e pesos
- Tamanhos e espaçamentos
- Breakpoints para responsividade
- Configurações de grid

### 2. Mixins

- `reset`: Reset global com font-family
- `container`: Container centralizado
- `flex-center`: Flexbox com alinhamento
- `button-style`: Estilo padrão para botões
- `product-grid`: Grid responsivo para produtos
- `tablet` e `mobile`: Media queries

### 3. Módulos

- Separação lógica dos estilos em arquivos específicos
- Uso da sintaxe moderna `@use` em vez de `@import`
- Importação organizada no arquivo principal

## Requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente vem com o Node.js)
- Git (opcional, para clonagem)

## Como Baixar e Usar

### 1. Baixar o Projeto

#### Opção 1: Clone via Git

```bash
git clone https://github.com/seu-usuario/exercicio-modulo-15.git
cd exercicio-modulo-15
```

#### Opção 2: Download ZIP

1. Acesse o repositório no GitHub
2. Clique no botão "Code" (verde)
3. Selecione "Download ZIP"
4. Extraia o arquivo em sua máquina
5. Abra o terminal na pasta extraída

### 2. Instalação das Dependências

```bash
npm install
```

### 3. Compilação do SASS

```bash
# Compilação única
npm run sass-build

# Compilação com watch (desenvolvimento)
npm run sass
```

### 4. Visualizar o Projeto

Abra o arquivo `index.html` em seu navegador ou use um servidor local:

```bash
# Usando Python (se instalado)
python -m http.server 8000

# Usando Node.js (se instalado)
npx http-server

# Usando Live Server (extensão do VS Code)
# Clique com botão direito no index.html e selecione "Open with Live Server"
```

### Estrutura SASS

O arquivo `main.scss` importa todos os módulos na ordem correta:

```scss
@use "variables" as *;
@use "mixins" as *;
@use "base";
@use "header";
@use "products";
@use "responsive";
```

## Troubleshooting

### Problemas Comuns

**Erro: "sass: command not found"**

```bash
# Instale o SASS globalmente
npm install -g sass

# Ou use npx
npx sass sass/main.scss styles.css
```

**Erro: "Cannot find module"**

```bash
# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

**CSS não atualiza no navegador**

- Verifique se o SASS está compilando corretamente
- Limpe o cache do navegador (Ctrl+F5)
- Verifique se o arquivo `styles.css` está sendo gerado

## Benefícios da Conversão

1. **Manutenibilidade**: Variáveis centralizadas facilitam mudanças globais
2. **Reutilização**: Mixins evitam repetição de código
3. **Organização**: Módulos separados por funcionalidade
4. **Escalabilidade**: Estrutura preparada para crescimento do projeto
5. **Sintaxe Moderna**: Uso de `@use`


## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
