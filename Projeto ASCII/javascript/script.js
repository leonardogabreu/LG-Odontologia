// --- OTIMIZAÇÃO DE PERFORMANCE ---
// Seleciona os elementos UMA VEZ ao carregar a página,
// em vez de selecionar a cada pixel de rolagem.
const reveals = document.querySelectorAll('.scroll-revelar');
const header = document.querySelector('header');
const backToTopBtn = document.getElementById('back-to-top');
const windowHeight = window.innerHeight;
const revealPoint = 150; // Ponto de disparo da revelação

// --- Função principal de Scroll ---
function handlePageScroll() {
    
    // 1. Lógica do Header Interativo
    // (Usa a variável 'header' que já foi selecionada)
    if (window.scrollY > 50) {
        header.classList.add('header-rolado');
    } else {
        header.classList.remove('header-rolado');
    }

    // 2. Lógica do botão de voltar ao topo
    // (Usa a variável 'backToTopBtn' que já foi selecionada)
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visivel');
    } else {
        backToTopBtn.classList.remove('visivel');
    }

    // 3. Lógica da animação de surgimento (Scroll Reveal)
    // (Usa a variável 'reveals' que já foi selecionada)
    for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add('revelado');
        } 
    }
}

// Executar a função quando a página for carregada e em cada rolagem
window.addEventListener('load', handlePageScroll); // Roda uma vez no carregamento
window.addEventListener('scroll', handlePageScroll); // Roda durante a rolagem


// Inicialização de componentes

document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Inicialização do Swiper
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper(".meu-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else {
        console.error("Swiper.js não foi carregado. Verifique os links CDN no HTML.");
    }

    // 2. Lógica do clique no Botão "Voltar ao Topo"
    // (Usa a variável 'backToTopBtn' que já foi selecionada no topo do script)
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
            });
        });
    }

});