(function ($) {
    "use strict";
    document.querySelector(".sidebar-button").addEventListener("click", () => document.querySelector(".main-menu").classList.toggle("show-menu"));
    $(".sidebar-button").on("click", function () {
        $(this).toggleClass("active");
    });
    jQuery(".dropdown-icon").on("click", function () {
        jQuery(this).toggleClass("active").next("ul").slideToggle();
        jQuery(this).parent().siblings().children("ul").slideUp();
        jQuery(this).parent().siblings().children(".active").removeClass("active");
    });
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header.header-area");
        header.classList.toggle("sticky", window.scrollY > 200);
    });
    $(".search-btn").on("click", function (e) {
        let parent = $(this).parent();
        parent.find(".search-input, .lang-card").toggleClass("active");
        e.stopPropagation();
    });
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".search-input, .search-btn").length) {
            $(".search-input").removeClass("active");
        }
    });
    $(".serch-close").on("click", function (e) {
        $(".search-input").removeClass("active");
    });
    
    var swiper = new Swiper(".skin-banner-swiper-slide", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
        effect: "fade",
        fadeEffect: { crossFade: true },
        autoplay: { delay: 3500, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination1", clickable: true },
        fadeEffect: { crossFade: true },
    });

   
    var swiper = new Swiper(".skin-care-product-swiper", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        pagination: { el: ".fractional-pagination4", type: "fraction" },
        navigation: { nextEl: ".process-slider-next", prevEl: ".process-slider-prev" },
        breakpoints: {
            280: { slidesPerView: 1 },
            386: { slidesPerView: 1 },
            576: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 15 },
            1400: { slidesPerView: 5 },
        },
    });
    
    
    var swiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: ".fractional-pagination4", type: "fraction" },
        navigation: { nextEl: ".process-slider-next", prevEl: ".process-slider-prev" },
       
    });
    

    var swiper = new Swiper(".news-swiper", {
        slidesPerView: 3,
        speed: 1200,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: ".fractional-pagination4", type: "fraction" },
        navigation: { nextEl: ".process-slider-next", prevEl: ".process-slider-prev" },
        breakpoints: {
            280: { slidesPerView: 1 },
            386: { slidesPerView: 1 },
            576: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            992: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 15 },
            1400: { slidesPerView: 3 },
        },
    });

    $('.nice-select').on('click', function () {
        $(this).toggleClass('open');
    });
    
    $(document).ready(function () {
        var primarySlider = new Splide('#primary_slider', {
            type: 'loop',
            pagination: false,
            arrows: true,
            cover: true,
            classes: {
                arrows: 'splide__arrows your-class-arrows',
                arrow: 'splide__arrow your-class-arrow',
                prev: 'splide__arrow--prev your-class-prev',
                next: 'splide__arrow--next your-class-next',
            },
        });


        var thumbnailSlider = new Splide('#thumbnail_slider', {
            type: 'loop',
            isNavigation: true,
            perPage: 5,
            gap: 7,
            focus: 'center',
            pagination: false,
            arrows: false,
            cover: true,
            breakpoints: {
                
                600: {
                    perPage: 4,
                },
            }
        }).mount();


        primarySlider.sync(thumbnailSlider).mount();
    });
  
})(jQuery);
