(function () {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
                $('.fav').fadeIn();
            } else {
                $('.fav').fadeOut();
                $('.scroll-up').fadeOut();
            }
        });
        var homeSection = $('.home-section'),
            navbar = $('.navbar-custom'),
            navHeight = navbar.height(),
            mobileTest = false;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mobileTest = true;
        }
        navbarAnimation(navbar, homeSection, navHeight);
        $(window).scroll(function () {
            navbarAnimation(navbar, homeSection, navHeight);
        });
        if ($('.hero-slider').length > 0) {
            $('.hero-slider').flexslider({
                animation: "fade",
                animationSpeed: 1000,
                animationLoop: true,
                prevText: '',
                nextText: '',
                before: function (slider) {
                    $('.titan-caption').fadeOut().animate({ top: '-80px' }, { queue: false, easing: 'swing', duration: 700 });
                    slider.slides.eq(slider.currentSlide).delay(500);
                    slider.slides.eq(slider.animatingTo).delay(500);
                },
                after: function (slider) {
                    $('.titan-caption').fadeIn().animate({ top: '0' }, { queue: false, easing: 'swing', duration: 700 });
                },
                useCSS: true
            });
        }
        function navbarAnimation(navbar, homeSection, navHeight) {
            var topScroll = $(window).scrollTop();
            if (navbar.length > 0 && homeSection.length > 0) {
                if (topScroll >= navHeight) {
                    navbar.removeClass('navbar-transparent');
                } else {
                    navbar.addClass('navbar-transparent');
                }
            }
        }
        /* ---------------------------------------------- /*
         * Navbar collapse on click
         /* ---------------------------------------------- */
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $("button.navbar-toggle").click(function (e) {
            $("#navbar-custom").collapse('hide');
            $("#navbar-custom").removeClass("in");
        });
        /* ---------------------------------------------- /*
         * Video popup, Gallery
         /* ---------------------------------------------- */

        $('.video-pop-up').magnificPopup({
            type: 'iframe'
        });

        $(".gallery-item").magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                titleSrc: 'title',
                tError: 'The image could not be loaded.'
            }
        });




        if ($('.testimonials-slider').length > 0) {
            $('.testimonials-slider').flexslider({
                animation: "slide",
                smoothHeight: false
            });
        }



        $(function () {
            $(".video-player").mb_YTPlayer({
                quality: 'hd1080' // o 'hd720' para 720p
            });
        });

        $('#video-play').click(function (event) {
            event.preventDefault();
            if ($(this).hasClass('fa-play')) {
                $('.video-player').playYTP();
            } else {
                $('.video-player').pauseYTP();
            }
            $(this).toggleClass('fa-play fa-pause');
            return false;
        });

        $('#video-volume').click(function (event) {
            event.preventDefault();
            if ($(this).hasClass('fa-volume-off')) {
                $('.video-player').YTPUnmute();
            } else {
                $('.video-player').YTPMute();
            }
            $(this).toggleClass('fa-volume-off fa-volume-up');
            return false;
        });
        $('.post-masonry').imagesLoaded(function () {
            $('.post-masonry').masonry();
        });


        /* ---------------------------------------------- /*
         * Scroll Animation
         /* ---------------------------------------------- */

        $('.section-scroll').bind('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        $('.js-scroll-nav').click(function (event) {
            // Evita el comportamiento predeterminado del navegador de ir directamente al anchor
            event.preventDefault();

            // Obtén el href del enlace clickeado y elimina espacios en blanco
            var href = $(this).attr('href');
            var target = href.substr(href.indexOf('#'));

            // Verifica si el elemento target existe en la página
            if ($(target).length) {
                if (target === '#origen') {
                    var offset = $(target).offset().top - 50; // Ajusta 100 según el tamaño de tu navbar
                } else if (target === '#conecta-tu-talento') {
                    var offset = $(target).offset().top + 90; // Ajusta 100 según el tamaño de tu navbar
                }
                else {
                    var offset = $(target).offset().top + 75; // Ajusta 100 según el tamaño de tu navbar
                }
                // Ajusta el scroll para que tenga en cuenta el tamaño del navbar

                // Animación de scroll hacia el elemento con el id correspondiente
                $('html, body').animate({
                    scrollTop: offset
                }, 'slow');
            } else {
                console.log('Elemento no encontrado:', target);
            }
        });
    });
})(jQuery);

const phrases = window.location.pathname === '/en/' 
        ? ["transform the world?", "illuminate the present?", "let things happen?", "live without borders?"]
        : ["transformar al mundo?", "iluminar el presente?", "dejar que las cosas pasen?", "vivir sin fronteras?"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;
let pauseEnd = false;

const typewriterText = document.getElementById('typewriter-text');

function type() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
        typewriterText.innerHTML = currentPhrase.substring(0, currentLetterIndex - 1);
        currentLetterIndex--;
        if (currentLetterIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
        setTimeout(type, 50);
    } else {
        typewriterText.innerHTML = currentPhrase.substring(0, currentLetterIndex + 1);
        currentLetterIndex++;
        if (currentLetterIndex === currentPhrase.length) {
            pauseEnd = true;
            setTimeout(() => {
                isDeleting = true;
                pauseEnd = false;
                type();
            }, 2000); // Pausa de 1 segundo
        } else {
            setTimeout(type, 75);
        }
    }


}
function aosInit() {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
function redirectToEmployee(talentoKey) {
    const currentPath = window.location.pathname;
    
    // Determinar la base URL en función de la ruta
    const baseUrl = currentPath.startsWith('/faroandes/en/') ? 'en/author.php' : 'author.php';
    window.location.href = baseUrl + `?talento=${talentoKey}`;
}

var galleryThumbs = new Swiper('.gallery-thumbs', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    // slidesPerView: '3',
    slidesPerView: 'auto',
    longSwipesMs: 3000,
    // loop: true,
    // loopedSlides: 1,
    mousewheel: {
        enabled: true,
        releaseOnEdges: true,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    watchSlidesVisibility: false,
    watchSlidesProgress: true,
});


var galleryTop = new Swiper('.swiper-container.testimonial', {
    speed: 400,
    spaceBetween: 50,
    autoplay: {
        delay: 20000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    direction: 'horizontal',
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    thumbs: {
        swiper: galleryThumbs
    },
    touchReleaseOnEdges: true,


}); galleryTop.on('slideChange', function () {
    galleryThumbs.slideTo(galleryTop.activeIndex);
});

galleryThumbs.on('slideChange', function () {
    galleryTop.slideTo(galleryThumbs.activeIndex);
});



document.addEventListener("DOMContentLoaded", type);
document.addEventListener('DOMContentLoaded', function() {
    // Crear el nuevo div
    var videoPlayer = document.createElement('div');
    videoPlayer.className = 'video-player';
    videoPlayer.setAttribute('data-property', JSON.stringify({
        videoURL: 'https://youtu.be/4WiVomeumS4',
        containment: '.home-section',
        startAt: 18,
        mute: true,
        autoPlay: true,
        loop: true,
        opacity: 1,
        showControls: false,
        showYTLogo: false,
        useOnMobile: true,
        playOnlyIfVisible: true
    }));

    // Seleccionar el contenedor donde se agregará el nuevo div
    var container = document.querySelector('.home-section');
    
    // Agregar el nuevo div al contenedor
    container.appendChild(videoPlayer);
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('/assets/talentos-db/talentos.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dinamic-hexagons-container');
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    if (key != 'RubenJuarez') {
                        const cliente = data[key];
                        const clienteHTML = `
                <div class="hexagon-element hex-scale"
                style="background-image: url('${cliente.photo}') !important;" loading="lazy">
                <button onclick="redirectToEmployee('${key}')" class="talentos-button">
                <div class="hexagon-overlay">
                ${cliente.name}
                </div>
                </button>
                </div>
                `;
                        container.innerHTML += clienteHTML;
                    }
                }
            }
        })
        .catch(error => console.error('Error al cargar los datos del JSON:', error));
});