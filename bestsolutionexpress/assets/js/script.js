
$('.hero-slider').slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    lazyLoad: 'progressive',
    arrows: true,
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


$('.testimonial_slider').slick({
    speed: 1000,
    autoplaySpeed: 5000,
    lazyLoad: 'progressive',
    arrows: true,
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


$('.about_slider').slick({
    speed: 1000,
    autoplaySpeed: 5000,
    lazyLoad: 'progressive',
    arrows: true,
    dots: false,

});


$(document).ready(function () {
    $('.counting').each(function () {
        var $this = $(this),
            countTo = parseInt($this.attr('data-count')) || 0; 

        $this.text(0); 
        $({ countNum: 0 }).animate(
            { countNum: countTo },
            {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(countTo); 
                }
            }
        );
    });
});
