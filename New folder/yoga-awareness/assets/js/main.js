function toggleModal() {
    const modal = document.getElementById('myModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

$(document).ready(function() {

    $(".date__number").click(function() {
        $(".date__number").removeClass("date__number--true");
        $(this).addClass("date__number--true");
    });
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    $(".yer").each(function() {
        if (Number($(this).text()) === (year)) {
            $(this).prop("selected", true);
        }
    });

    $(".mon").each(function() {
        if ($(this).attr("name") === String(month)) {
            $(this).prop("selected", true);
        }
    });

    $(".date__number").each(function() {
        if (Number($(this).text()) === day) {
            $(this).addClass("date__number--true");
        }
    });

    $(".choosen").text(day + '.' + month + '.' + year);
    $(".date").click(function() {
        day = $(".date__number--true").text();
        month = $(".month option:selected").attr("name");
        year = $(".year option:selected").text();
        $(".choosen").text(day + '.' + month + '.' + year);
    });
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
});

const showcaseSlider = new Swiper(".home-showcaseSlider", {
    speed: 4000,
    slidesPerView: 1,
    parallax: true,
    autoplay: {
        delay: 10000,
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
    on: {
        slideChange: function () {
            const slides = document.querySelectorAll('.swiper-slide');
            slides.forEach((slide, index) => {
                const textContainer = slide.querySelector('.text-container .bigTitlejp');
                if (index === this.activeIndex && index === 1) {
                    textContainer.style.animation = "none";
                    setTimeout(() => {
                        textContainer.style.animation = "slideTextAnimation 7s cubic-bezier(0.58, 0, 0.28, 0.99) forwards";
                    }, 5000);
                    setTimeout(() => {
                        showcaseSlider.slideNext();
                    }, 5000);
                }
            });
        }
    }
});

$(document).ready(function() {
    $(".bcxform1").hide();
    $(".bcxform2").hide();
    $(".bcxform3").hide();
    $(".bcxform4").hide();
    let originalParent = $(".calendar").parent();
  function scrollToForm() {
        $(".srcl")[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
    $(".date__number").click(function() {
        $(".calendar").hide();
        $(".bcxform1").append($(".calendar"));
        $(".bcxform1").show();
        scrollToForm();
    });

    $(".backTocalender").click(function() {
        $(".bcxform1, .bcxform2, .bcxform3, .bcxform4").hide();
        $(".calendar").appendTo(originalParent).show();
        $(".calendar").show();
        scrollToForm();
        $('.hide_with_form').removeClass('activeblank_spc');
        /*$(".bcxform1").hide();
        originalParent.append($(".calendar"));
        $(".calendar").show();
        scrollToForm();*/
        $('.hide_with_form').removeClass('activeblank_spc');
    });

    let originalParentSignup = $(".bcxform1").parent();
    $("#backToReserve").click(function() {
        $(".bcxform1").hide();
        $(".bcxform2").append($(".bcxform1"));
        $(".bcxform2").show();
        scrollToForm();
    });

    $(".backTocalender1").click(function(e) {
        e.preventDefault();
        location.reload(); 
    });


    let originalParentReserve = $(".bcxform2").parent();
    $("#backtoform3").click(function() {
        $(".bcxform2").hide();
        $(".bcxform3").append($(".bcxform2"));
        $(".bcxform3").show();
        scrollToForm();
    });

    $(".backTocalender1").click(function() {
        location.reload(); 
    });

    let originalParentFinal = $(".bcxform3").parent();
    $("#backtoform4").click(function() {
        $(".bcxform3").hide();
        $(".bcxform4").append($(".bcxform3"));
        $(".bcxform4").show();
        scrollToForm();
    });

    $(".backTocalender2").click(function(e) {
        location.reload(); 
    });

    let originalParentFinal1 = $(".bcxform4").parent();
    $(".backTocalender3").click(function(e) {
        location.reload(); 
    });
});





