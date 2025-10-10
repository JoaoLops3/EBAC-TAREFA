// SwapMarket Landing Page - Simple JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll implementation
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    if (navbarToggler) navbarToggler.click();
                }
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    // Newsletter subscription
    const subscribeBtn = document.querySelector('footer .input-group button');
    const emailInput = document.querySelector('footer .input-group input[type="email"]');
    
    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            
            if (email && email.includes('@')) {
                // Show loading state
                const originalText = this.innerHTML;
                this.innerHTML = 'Inscrevendo...';
                this.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                    emailInput.value = '';
                    alert('Obrigado por se inscrever! Você receberá nossas novidades em breve.');
                }, 2000);
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
        
        // Submit on Enter key
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeBtn.click();
            }
        });
    }
    
    // Product card interactions
    const productCards = document.querySelectorAll('#produtos .card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    backToTopBtn.className = 'btn btn-primary position-fixed';
    backToTopBtn.style.cssText = `
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: none;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('SwapMarket script carregado com sucesso!');
});
