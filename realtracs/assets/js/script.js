!(function () {
    "use strict";
    function e(e, t, i = 24, s = !0, a = !1) {
        $(e).length > 0 && $(e).owlCarousel({ loop: !0, margin: i, nav: s, dots: a, autoplay: !1, smartSpeed: 2e3, navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"], responsive: t });
    }
    if (
        ($("#mobile-menu").length > 0 && $("#mobile-menu").meanmenu({ meanMenuContainer: ".mobile-menu", meanScreenWidth: "991", meanExpand: ['<i class="ti ti-circle-arrow-down"></i>'] }),
            $(".offcanvas-close, .offcanvas-overlay").on("click", function () {
                $(".offcanvas-info").removeClass("show"), $(".offcanvas-overlay").removeClass("overlay-open");
            }),
            $(".sidebar-menu").on("click", function () {
                $(".offcanvas-info").addClass("show"), $(".offcanvas-overlay").addClass("overlay-open");
            }),
            $(".body-overlay").on("click", function () {
                $(".offcanvas__area").removeClass("offcanvas-opened"), $(".df-search-area").removeClass("opened"), $(".body-overlay").removeClass("opened");
            }),
            $(window).scroll(function () {
                $(this).scrollTop() > 130 ? $("header").addClass("fixed") : $("header").removeClass("fixed");
            }),
            new WOW().init(),
            $(".banner-slider").length > 0 &&
            $(".banner-slider").owlCarousel({
                loop: !0,
                margin: 0,
                nav: !1,
                dots: !0,
                autoplay: !1,
                smartSpeed: 2e3,
                animateOut: "slideOutUp",
                animateIn: "slideIntUp",
                navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
                responsive: { 0: { items: 1 }, 550: { items: 1 }, 1200: { items: 1 } },
            }),
            e(".cruise-slider", { 0: { items: 2 }, 576: { items: 3 }, 992: { items: 3 }, 1200: { items: 6 } }),
            e(".experts-slider", { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } }),
            e(".client-slider", { 0: { items: 2 }, 576: { items: 3 }, 992: { items: 4 }, 1200: { items: 5 }, 1400: { items: 7 } }),
            $(".testimonial-slider").length > 0 &&
            $(".testimonial-slider").owlCarousel({
                loop: !0,
                margin: 24,
                nav: !0,
                dots: !0,
                autoplay: !1,
                smartSpeed: 2e3,
                navText: ["<i class='isax isax-arrow-left-2'></i>", "<i class='isax isax-arrow-right-3'></i>"],
                responsive: { 0: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 } },
            }),
            $(window).width() > 1199 && $(".theiaStickySidebar").length > 0 && $(".theiaStickySidebar").theiaStickySidebar({ additionalMarginTop: 30 }),
            $(window).scroll(function () {
                $(window).scrollTop() >= 500 ? $(".back-to-top-icon").addClass("show") : $(".back-to-top-icon").removeClass("show");
            }),
            $(".toggle-btn").length > 0 &&
            $(".toggle-btn").on("click", function () {
                let e = $(this).closest(".policy-wrap"),
                    t = e.find(".policy-info");
                t.slideToggle("hide"), e.toggleClass("expanded"), $(this).text(t.hasClass("hide") ? "Show More" : "Show Less");
            }),
            $(".megamenu").length > 0)
    ) {
        let t = document.querySelector(".megamenu"),
            i = document.querySelector(".main-nav");
        t.addEventListener("mouseenter", () => {
            i.classList.add("active");
        }),
            t.addEventListener("mouseleave", () => {
                i.classList.remove("active");
            });
    }
    if (
        (document.addEventListener("DOMContentLoaded", function () {
            let e = document.querySelectorAll(".horizontal-slide");
            e.forEach((e) => {
                e.setAttribute("data-animated", !0);
                let t = e.querySelector(".slide-list"),
                    i = Array.from(t.children);
                i.forEach((e) => {
                    let i = e.cloneNode(!0);
                    i.setAttribute("aria-hidden", !0), t.appendChild(i);
                });
            });
        }),
            $(".sidebar-menu").on("click", function () {
                $("body").addClass("overflow-hidden");
            }),
            $(".offcanvas-overlay").on("click", function () {
                $("body").removeClass("overflow-hidden");
            }),
            $(".offcanvas-close").on("click", function () {
                $("body").removeClass("overflow-hidden");
            }),
            991 >= $(window).width() && $(".chat-window-long").hide(),
            $(".chat-member").on("click", function () {
                991 >= $(window).width() && ($(".chat-window-long").toggle(), $(".chat-cont-left").toggle(), $(".chat-window-long").is(":visible") ? $(".chat-member").not(this).hide() : $(".chat-member").show());
            }),
            $("#back_user_list").on("click", function () {
                991 > $(window).width() && ($(".chat-window-long").toggle(), $(".chat-cont-left").toggle(), $(".chat-member ").is(":visible") ? $(".chat-window-long").not(this).hide() : $(".chat-member").show());
            }),
            $("#phone").length > 0)
    ) {
        var s = document.querySelector("#phone");
        window.intlTelInput(s, { utilsScript: "assets/plugins/intltelinput/js/utils.js" });
    }
    if ($("#phone1").length > 0) {
        var s = document.querySelector("#phone1");
        window.intlTelInput(s, { utilsScript: "assets/plugins/intltelinput/js/utils.js" });
    }
    if ($(".add-tab-list").length > 0) {
        let a = $(".card"),
            o = $(".add-tab-list a");
        $(window).on("scroll", function () {
            let e = $(this).scrollTop();
            a.each(function () {
                let t = $(this).offset().top - 60,
                    i = t + $(this).outerHeight();
                if (e >= t && e < i) {
                    let s = $(this).attr("id");
                    o.removeClass("active"), $(`.add-tab-list a[href="#${s}"]`).addClass("active");
                }
            });
        }),
            o.on("click", function (e) {
                e.preventDefault();
                let t = $(this).attr("href"),
                    i = $(t).offset().top - 50;
                $("html, body").animate({ scrollTop: i }, 500, "swing", function () {
                    o.removeClass("active"), $(`.add-tab-list a[href="${t}"]`).addClass("active");
                });
            });
    }


    $(document).ready(function () {
        $('.responsive-list a').on('click', function (e) {
            e.preventDefault();
            $('.responsive-list a').removeClass('active');
            $(this).addClass('active');


            if ($(this).parent().is(':last-child')) {
                $('.mobile_topbar ul').css('background-color', '#fff');
            } else {
                $('.mobile_topbar ul').css('background-color', '');
            }
        });
    });



    //   mobile menu 

    $(document).ready(function () {
        // Sidebar toggle (mobile)
        $('#sidebar-toggle-icon').on('click', function () {
            $('#sidebar').addClass('open2');
        });

        // Close sidebar (mobile)
        $('#sidebar-close-icon').on('click', function () {
            $('#sidebar').removeClass('open2');
        });

        // Close sidebar when clicking outside of it (optional)
        $(document).on('click', function (e) {
            if (!$(e.target).closest('#sidebar').length && !$(e.target).closest('#sidebar-toggle-icon').length) {
                $('#sidebar').removeClass('open2');
            }
        });

        $('.has-submenu').on('click', function () {
            $(this).toggleClass('active');
            const img = $(this).find('.aerrow');
            const downSrc = 'assets/img/down-arrow.png';
            const upSrc = 'assets/img/aerrow2.png';

            img.attr('src', img.attr('src') === downSrc ? upSrc : downSrc);
            $(this).find('.submenu').toggleClass('open');
        });

    });

    $(document).ready(function () {
        $(".grow_buisness_slider").owlCarousel({
            loop: !0,
            margin: 24,
            nav: !0,
            dots: !0,
            autoplay: !1,
            smartSpeed: 2e3,
            navText: ["<i class='isax isax-arrow-left-2'></i>", "<i class='isax isax-arrow-right-3'></i>"],
            responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
        });
    });

})();


