# Projeto Gulp - Exercício Módulo 16-EBAC

Este projeto implementa um sistema de automação de tarefas usando Gulp.js para compilação de SASS, compressão de imagens e minificação de JavaScript.

## 📋 Funcionalidades

- **Compilação de SASS**: Converte arquivos SCSS em CSS minificado e otimizado
- **Compressão de Imagens**: Otimiza imagens JPG, PNG, GIF, SVG e WEBP
- **Minificação de JavaScript**: Concatena e minifica arquivos JavaScript
- **Autoprefixer**: Adiciona prefixos CSS automaticamente
- **Watch Mode**: Monitora mudanças nos arquivos e recompila automaticamente

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/JoaoLops3/Exercicio-Modulo-16.git
cd Exercicio-Modulo-16
```

2. Instale as dependências:

```bash
npm install
```

## 📁 Estrutura do Projeto

```
gulp/
├── src/                    # Arquivos fonte
│   ├── scss/              # Arquivos SASS/SCSS
│   │   └── main.scss
│   ├── js/                # Arquivos JavaScript
│   │   ├── main.js
│   │   └── utils.js
│   └── images/            # Imagens originais
├── dist/                  # Arquivos processados
│   ├── css/              # CSS compilado
│   ├── js/               # JavaScript minificado
│   └── images/           # Imagens comprimidas
├── gulpfile.js           # Configuração do Gulp
├── package.json          # Dependências do projeto
└── README.md            # Este arquivo
```

## 🛠️ Comandos Disponíveis

### Tarefas Individuais

```bash
# Compilar SASS
npx gulp sass

# Comprimir imagens
npx gulp images

# Minificar JavaScript
npx gulp js
```

### Tarefas Compostas

```bash
# Executar todas as tarefas
npx gulp build

# Monitorar mudanças e recompilar automaticamente
npx gulp watch

# Tarefa padrão (equivale a build)
npx gulp
```

## 📦 Dependências

### Principais

- **gulp**: ^4.0.2 - Task runner principal
- **gulp-sass**: ^5.1.0 - Compilação de SASS
- **sass**: ^1.69.0 - Compilador SASS

### Otimização

- **gulp-imagemin**: ^7.1.0 - Compressão de imagens
- **gulp-uglify**: ^3.0.2 - Minificação de JavaScript
- **gulp-concat**: ^2.6.1 - Concatenação de arquivos
- **gulp-clean-css**: ^4.3.0 - Minificação de CSS
- **gulp-autoprefixer**: ^8.0.0 - Prefixos CSS automáticos

## 📊 Resultados dos Testes

### ✅ Compilação SASS

- Arquivo `main.scss` compilado com sucesso
- CSS gerado com minificação e autoprefixer
- Variáveis SASS processadas corretamente

### ✅ Compressão de Imagens

- **6 imagens** comprimidas com sucesso
- **Economia de 770 kB** (39.4% de redução)
- Formatos suportados: JPG, PNG, GIF, SVG, WEBP

### ✅ Minificação JavaScript

- Arquivos concatenados em `main.min.js`
- Código otimizado e comprimido
- Funcionalidades preservadas

## 🔧 Configuração do Gulpfile

O arquivo `gulpfile.js` contém:

- **Caminhos dos arquivos**: Configuração flexível de origem e destino
- **Tarefas individuais**: Cada tipo de processamento em função separada
- **Tarefa build**: Executa todas as tarefas em sequência
- **Tarefa watch**: Monitora mudanças e recompila automaticamente
- **Exportação de tarefas**: Tarefas disponíveis via linha de comando

## 📝 Exemplo de Uso

1. **Desenvolvimento**:

```bash
npm run watch
```

Este comando inicia o modo watch que monitora mudanças nos arquivos e recompila automaticamente.

2. **Produção**:

```bash
npm run build
```

Este comando executa todas as tarefas uma vez para gerar os arquivos finais.

## 🎯 Objetivos Alcançados

- [x] Criação do Gulpfile com tarefas de SASS
- [x] Implementação de compressão de imagens
- [x] Implementação de compressão de JavaScript
- [x] Testes bem-sucedidos de todas as funcionalidades
- [x] Estrutura de projeto organizada
- [x] Documentação completa

## 👨‍💻 Autor

**João Lopes** - Desenvolvido como parte do Exercício do Módulo 16

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Data de Criação**: 21/09/2025  
**Versão**: 1.0.0  
**Status**: ✅ Concluído
