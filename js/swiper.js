document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 5,
        speed: 3000, // A velocidade da transição entre slides (em milissegundos)
        autoplay: {
            delay: 0, // Nenhum atraso entre as transições
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Pausar o autoplay no hover e continuar quando o mouse sair
    document.querySelectorAll('.swiper-slide').forEach(function(slide) {
        slide.addEventListener('mouseenter', function() {
            swiper.autoplay.stop();
        });
        slide.addEventListener('mouseleave', function() {
            swiper.autoplay.start();
        });
    });
});
