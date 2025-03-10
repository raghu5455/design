function toggleModal() {
    const modal = document.getElementById('myModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

$(document).ready(function () {

    $(".date__number").click(function () {
        $(".date__number").removeClass("date__number--true");
        $(this).addClass("date__number--true");
    });


    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    $(".yer").each(function () {
        if (Number($(this).text()) === (year)) {
            $(this).prop("selected", true);
        }
    });

    $(".mon").each(function () {
        if ($(this).attr("name") === String(month)) {
            $(this).prop("selected", true);
        }
    });

    $(".date__number").each(function () {
        if (Number($(this).text()) === day) {
            $(this).addClass("date__number--true");
        }
    });


    $(".choosen").text(day + '.' + month + '.' + year);


    $(".date").click(function () {

        day = $(".date__number--true").text();
        month = $(".month option:selected").attr("name");
        year = $(".year option:selected").text();

        $(".choosen").text(day + '.' + month + '.' + year);

    });


});


$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
});


const showcaseSlider = new Swiper(".home-showcaseSlider", {
    speed: 3000,
    slidesPerView: 1,
    parallax: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".showcaseSlider-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.showcaseSlider-next',
        prevEl: '.showcaseSlider-prev',
    },
});


$(document).ready(function () {
    $(".bcxform1").hide();
    $(".bcxform2").hide();
    $(".bcxform3").hide();
    $(".bcxform4").hide();
    let originalParent = $(".calendar").parent();

    $(".date__number").click(function () {
        $(".calendar").hide();

        $(".bcxform1").append($(".calendar"));
        $(".bcxform1").show();
    });

    $("#backTocalender").click(function () {
        $(".bcxform1").hide();
        originalParent.append($(".calendar"));
        $(".calendar").show();
    });

    // second form

    let originalParentSignup = $(".bcxform1").parent();

    $("#backToReserve").click(function () {

        $(".bcxform1").hide();

        $(".bcxform2").append($(".bcxform1"));
        $(".bcxform2").show();
    });

    $(".backtoform1").click(function () {
        $(".bcxform2").hide();
        originalParentSignup.append($(".bcxform1"));
        $(".bcxform1").show();
    });



    let originalParentReserve = $(".bcxform2").parent();

    $("#backtoform3").click(function () {

        $(".bcxform2").hide();

        $(".bcxform3").append($(".bcxform2"));
        $(".bcxform3").show();
    });

    $(".backtoform1").click(function () {
        $(".bcxform3").hide();
        originalParentReserve.append($(".bcxform2"));
        $(".bcxform2").show();
    });

    //fourth form

    let originalParentFinal = $(".bcxform3").parent();
    $("#backtoform4").click(function () {
        $(".bcxform3").hide();
        $(".bcxform4").append($(".bcxform3"));
        $(".bcxform4").show();
    });
});



const swiper = new Swiper('.footer_slider .swiper-container', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 1.5,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        }
    },
});

const swiper1 = new Swiper('.content-slider.swiper-container', {
    centeredSlides: true,
    loop: true,
    speed: 10,
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: false,
    slideToClickedSlide: false,
    touchMoveStopPropagation: false,
    slideToClickedSlide: false,
    autoplay: {
        delay: 6000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});