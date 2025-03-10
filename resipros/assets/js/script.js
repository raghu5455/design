
$('.hero-slider').slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    lazyLoad: 'progressive',
    arrows: true,
    fade: true,
    dots: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                dots: true,
            }
        }
    ]
});




$('.image_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});




$('.testimonial_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});





$('.blog_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                
            }
        }
    ]
});





$('.project_image_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});





$(document).ready(function () {
    var $grid = $('.gallery').isotope({
        itemSelector: '.gallery-item',
        layoutMode: 'fitRows',
        filter: '*'
    });

    $('.buttons').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        $('.buttons button').removeClass('active');
        $(this).addClass('active');
    });
});