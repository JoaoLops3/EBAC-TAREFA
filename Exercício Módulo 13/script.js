// Script personalizado para o Projeto Bootstrap Módulo 13

document.addEventListener('DOMContentLoaded', function() {
    
    // Inicialização do carousel
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'), {
        interval: 5000, // Intervalo de 5 segundos
        wrap: true,      // Loop infinito
        keyboard: true   // Controle por teclado
    });
    
    // Navegação suave para links internos
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Atualização ativa do menu de navegação
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Funcionalidade para os botões "Saiba Mais" dos cards
    const cardButtons = document.querySelectorAll('.card .btn');
    cardButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtém o título do card
            const cardTitle = this.closest('.card').querySelector('.card-title').textContent.trim();
            
            // Simula uma ação (pode ser substituída por um modal ou redirecionamento)
            console.log(`Botão clicado para: ${cardTitle}`);
            
            // Feedback visual
            const originalText = this.textContent;
            this.textContent = 'Carregando...';
            this.disabled = true;
            
            // Simula um delay
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
                
                // Mostra uma notificação
                showNotification(`Informações sobre ${cardTitle} serão exibidas em breve!`);
            }, 1500);
        });
    });
    
    // Função para mostrar notificações
    function showNotification(message) {
        // Cria elemento de notificação
        const notification = document.createElement('div');
        notification.className = 'alert alert-info alert-dismissible fade show position-fixed';
        notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        // Adiciona ao body
        document.body.appendChild(notification);
        
        // Remove automaticamente após 3 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }
    
    // Animação de entrada para os cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa os cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Efeito de parallax suave no carousel
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const carousel = document.getElementById('carousel');
        const carouselTop = carousel.offsetTop;
        const carouselHeight = carousel.offsetHeight;
        
        if (scrolled >= carouselTop - window.innerHeight && 
            scrolled <= carouselTop + carouselHeight) {
            const rate = (scrolled - carouselTop + window.innerHeight) / (window.innerHeight + carouselHeight);
            const carouselInner = carousel.querySelector('.carousel-inner');
            carouselInner.style.transform = `translateY(${rate * 20}px)`;
        }
    });
    
    // Funcionalidade para o navbar mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Fecha o menu mobile ao clicar em um link
        const mobileNavLinks = navbarCollapse.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 992) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            });
        });
    }
    
    // Adiciona classe para indicar que o JavaScript está carregado
    document.body.classList.add('js-loaded');
    
    // Log de inicialização
    console.log('Projeto Bootstrap Módulo 13 - JavaScript carregado com sucesso!');
});

// Função para detectar quando as imagens são carregadas
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Fallback para imagens que já estão carregadas
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Função para melhorar a acessibilidade
function enhanceAccessibility() {
    // Adiciona atributos ARIA para melhor acessibilidade
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `Card ${index + 1}`);
    });
    
    // Adiciona suporte a navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('card')) {
                const button = focusedElement.querySelector('.btn');
                if (button) {
                    button.click();
                }
            }
        }
    });
}

// Chama a função de acessibilidade
enhanceAccessibility(); 