// Arquivo de utilitários JavaScript
const Utils = {
    // Função para formatar data
    formatDate: function(date) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(date).toLocaleDateString('pt-BR', options);
    },
    
    // Função para validar email
    validateEmail: function(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    
    // Função para gerar ID único
    generateId: function() {
        return Math.random().toString(36).substr(2, 9);
    },
    
    // Função para capitalizar primeira letra
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    
    // Função para remover acentos
    removeAccents: function(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    },
    
    // Função para truncar texto
    truncateText: function(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    }
};

// Função para detectar dispositivo móvel
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para obter parâmetros da URL
function getUrlParams() {
    const params = {};
    const urlSearchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlSearchParams) {
        params[key] = value;
    }
    return params;
}

// Função para copiar texto para clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Texto copiado para clipboard!');
        return true;
    } catch (err) {
        console.error('Erro ao copiar texto:', err);
        return false;
    }
}

// Função para fazer download de arquivo
function downloadFile(data, filename, type) {
    const file = new Blob([data], {type: type});
    const a = document.createElement('a');
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}
