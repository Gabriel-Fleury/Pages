// Seleciona todos os botões de filtro e os cartões do menu
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

// Adiciona um ouvinte de eventos a cada botão de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter; // Obtém o valor do filtro armazenado no atributo data-filter

        // Atualiza o estilo dos botões para indicar o botão ativo
        filterButtons.forEach(btn => btn.classList.remove('active')); // Remove a classe 'active' de todos os botões
        button.classList.add('active'); // Adiciona a classe 'active' ao botão clicado

        // Filtra os cartões do menu com base na categoria
        menuCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) { // Exibe o cartão se o filtro for 'all' ou corresponder à categoria
                card.style.display = 'block'; // Exibe o cartão
            } else {
                card.style.display = 'none'; // Oculta o cartão
            }
        });
    });
});

// Comportamento de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) { // Adiciona um evento de clique nos links que levam a âncoras na página
        e.preventDefault(); // Previne o comportamento padrão de navegação
        document.querySelector(this.getAttribute('href')).scrollIntoView({ // Navega para o elemento alvo com rolagem suave
            behavior: 'smooth' // Define o comportamento de rolagem como suave
        });
    });
});

// Animações ao rolar a página
const scrollElements = document.querySelectorAll('.menu-card, .testimonial-card'); // Seleciona elementos para animação
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Verifica se o elemento está visível na viewport
            entry.target.style.opacity = 1; // Torna o elemento visível
            entry.target.style.transform = 'translateY(0)'; // Remove o deslocamento para baixo (animação)
        }
    });
}, { threshold: 0.1 }); // Define um limiar para considerar o elemento como visível

scrollElements.forEach(el => { // Inicializa os estilos de cada elemento
    el.style.opacity = 0; // Define a opacidade inicial como 0 (invisível)
    el.style.transform = 'translateY(50px)'; // Define um deslocamento inicial para baixo
    el.style.transition = 'all 1.0s ease-out'; // Adiciona uma transição suave para as propriedades de estilo
    observer.observe(el); // Configura o observador para monitorar a visibilidade do elemento
});