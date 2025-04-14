const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        // Atualizar botão ativo
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filtrar os cartões do menu
        menuCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block'; // Exibe o cartão
            } else {
                card.style.display = 'none'; // Oculta o cartão
            }
        });
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) { // Corrigido "cick" para "click"
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const scrollElements = document.querySelectorAll('.menu-card, .testimonial-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)'; // Corrigido "trasnform" para "transform"
        }
    });
}, { threshold: 0.1 });

scrollElements.forEach(el => { // Substituído "e1" por "el"
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)'; // Corrigido "translateY"
    el.style.transition = 'all 1.0s ease-out';
    observer.observe(el);
});