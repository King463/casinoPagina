// get current year
$(document).on('ready', function() {
    $(".regular").slick({
        centerMode: true,
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

    $(document).on('ready', function() {
    $(".regular").slick({
        centerMode: true,
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
    function adjustSlick() {
    // Si el ancho de la pantalla es menor que 768px
    if ($(window).width() < 768 && $(window).width() > 600 ) {
    $('.regular').slick('unslick'); // Destruye el slick slider actual
    $('.regular').slick({// Inicializa el slick slider con una configuración diferente para pantallas pequeñas
    centerMode: false,
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
} else
    // Si el ancho de la pantalla es menor que 768px
    if ($(window).width() <= 600) {
    $('.regular').slick('unslick'); // Destruye el slick slider actual
    $('.regular').slick({// Inicializa el slick slider con una configuración diferente para pantallas pequeñas
    centerMode: true,
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 2000,
});
} else {
    $('.regular').slick('unslick'); // Destruye el slick slider actual
    initSlick(); // Inicializa el slick slider con la configuración predeterminada
}
}

    // Inicializa el slick slider al cargar la página
    initSlick();

    // Vuelve a ajustar el slick slider cuando la ventana cambia de tamaño
    $(window).resize(function() {
    adjustSlick();
});

    $(document).ready(function() {
    // Función para inicializar el slick slider con configuración predeterminada
    function initSlick() {
        $('.juegos').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }

    // Función para ajustar la configuración del slick slider según el tamaño de la pantalla
    function adjustSlick() {
    // Si el ancho de la pantalla es menor que 768px
    if ($(window).width() < 768 && $(window).width() > 600 ) {
    $('.juegos').slick('unslick'); // Destruye el slick slider actual
    $('.juegos').slick({ // Inicializa el slick slider con una configuración diferente para pantallas pequeñas
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});
} else
    // Si el ancho de la pantalla es menor que 768px
    if ($(window).width() <= 600) {
    $('.juegos').slick('unslick'); // Destruye el slick slider actual
    $('.juegos').slick({ // Inicializa el slick slider con una configuración diferente para pantallas pequeñas
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});
} else {
    $('.juegos').slick('unslick'); // Destruye el slick slider actual
    initSlick(); // Inicializa el slick slider con la configuración predeterminada
}
}

    // Inicializa el slick slider al cargar la página
    initSlick();

    // Vuelve a ajustar el slick slider cuando la ventana cambia de tamaño
    $(window).resize(function() {
    adjustSlick();
});
});


    document.getElementById('btnDownload').addEventListener('click', function(event) {
    // Evitar el comportamiento predeterminado del enlace
    event.preventDefault();

    // Detectar el tipo de dispositivo
    var userAgent = navigator.userAgent.toLowerCase();
    var isMobile = userAgent.match(/android/i);

    // URL de redirección
    var redirectUrl = isMobile ? 'https://citygame.casino/update/Android.apk' : 'https://citygame.casino/update/Windows.exe';

    // Redirigir a la URL correspondiente
    window.location.href = redirectUrl;
});

