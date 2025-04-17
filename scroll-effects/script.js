// Seleciona TODAS as seções (<section>) da página e armazena em uma NodeList
const sections = document.querySelectorAll('section');

// Cria um IntersectionObserver para detectar quando as seções entram/saem da viewport
const observer = new IntersectionObserver(
    // Função de callback que é executada quando a intersecção ocorre
    (entries) => {
        // Para cada entrada detectada (cada seção que mudou de estado)
        entries.forEach(entry => {
            // Verifica se a seção está intersectando (visível na viewport)
            if(entry.isIntersecting) {
                // Se estiver visível, adiciona a classe 'active' à seção
                // Isso irá disparar a animação de aparecimento (definida no CSS)
                entry.target.classList.add('active');
            }
        });
    },
    // Opções de configuração do IntersectionObserver:
    {
        threshold: 0.1, // Dispara o callback quando 10% da seção estiver visível
        rootMargin: '0px 0px -50px 0px' // Margem negativa inferior para 
                                      // "acionar antes" da seção chegar no viewport
                                      // (cria um trigger antecipado)
    }
);

// Para cada seção encontrada, inicia a observação
sections.forEach(section => {
    observer.observe(section); // Começa a observar cada seção individualmente
});