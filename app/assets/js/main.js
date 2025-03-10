'use strict'
$(document).ready(function () {

    var body = $('body');
    var bodyParent = $('html');


    /* menu open close */
    $('.menu-btn').on('click', function () {
        if (body.hasClass('menu-open') === true) {
            body.removeClass('menu-open');
            bodyParent.removeClass('menu-open');
        } else {
            body.addClass('menu-open');
            bodyParent.addClass('menu-open');
        }

        return false;
    });

    body.on("click", function (e) {
        if (!$('.sidebar').is(e.target) && $('.sidebar').has(e.target).length === 0) {
            body.removeClass('menu-open');
            bodyParent.removeClass('menu-open');
        }

        return true;
    });


    /* Filter button */
    $('.filter-btn').on('click', function () {
        if (body.hasClass('filter-open') === true) {
            body.removeClass('filter-open');
        } else {
            body.addClass('filter-open');
        }

        return false;
    });
    $('.filter-close').on('click', function () {
        if (body.hasClass('filter-open') === true) {
            body.removeClass('filter-open');
        }
    });


    /* menu style switch */
    $('#menu-pushcontent').on('change', function () {
        if ($(this).is(':checked') === true) {
            body.addClass('menu-push-content');
            body.removeClass('menu-overlay');
        }

        return false;
    });

    $('#menu-overlay').on('change', function () {
        if ($(this).is(':checked') === true) {
            body.removeClass('menu-push-content');
            body.addClass('menu-overlay');
        }

        return false;
    });


    /* back page navigation */
    $('.back-btn').on('click', function () {
        window.history.back();
        return false;
    });



    if ($('.footer').length > 0) {
        /** center button click toggle **/
        $('.centerbutton .nav-link').on('click', function () {
            $(this).toggleClass('active')
        })
        /* hide menu active */
        var centerbtnmenu = document.getElementById('menumodal');
        var centerbtn = document.getElementById('centermenubtn');

        centerbtnmenu.addEventListener('hide.bs.modal', function () {
            centerbtn.classList.remove('active')
        })
    }

    /* scroll y limited container height on page  */
    var scrollyheight = Number($(window).height() - $('.header').outerHeight() - $('.footer-info').outerHeight()) - 25;
    $('.scroll-y').height(scrollyheight);

});


$(window).on('load', function () {
    setTimeout(function () {
        $('.loader-wrap').fadeOut('slow');
    }, 1000);

    /* coverimg */
    $('.coverimg').each(function () {
        var imgpath = $(this).find('img');
        $(this).css('background-image', 'url(' + imgpath.attr('src') + ')');
        imgpath.hide();
    })


    /* url path on menu */
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $(' .main-menu ul a').each(function () {
        if (this.href === path) {
            $(' .main-menu ul a').removeClass('active');
            $(this).addClass('active');
        }
    });

    /* main container min height */
    $('main').css('min-height', $(window).height());

    if ($('.header.position-fixed').length > 0) {
        $('main').css('padding-top', $('.header').outerHeight() + 10);
    }
    if ($('.footer').length > 0) {
        $('main').css('padding-bottom', $('.footer').outerHeight() + 10);
    }


});


$(window).on('scroll', function () {

    /* scroll from top and add class */
    if ($(document).scrollTop() > '10') {
        $('.header.position-fixed').addClass('active');
    } else {
        $('.header.position-fixed').removeClass('active');
    }
});


$(window).on('resize', function () {
    /* main container min height */
    $('main').css('min-height', $(window).height())
});

document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("home");

    setTimeout(() => {
        preloader.style.display = "none";
        content.classList.add("show");
    }, 2500);
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".filter-title").forEach((title) => {
      title.addEventListener("click", () => {
        const content = title.nextElementSibling;
  
        const isOpen = content.style.display === "block";
  
        document.querySelectorAll(".filter-content").forEach((content) => {
          content.style.display = "none";
        });
        document.querySelectorAll(".filter-title h6").forEach((h6) => {
          h6.style.display = "block";
        });
  
        if (!isOpen) {
          content.style.display = "block";
          const h6 = title.querySelector("h6");
          if (h6) {
            h6.style.display = "none";
          }
        }
      });
    });
  });
  
  document.querySelectorAll(".expense-label").forEach((label) => {
    label.addEventListener("click", function (event) {
        event.preventDefault();

        let checkbox = this.querySelector(".expense-checkbox");
        checkbox.checked = !checkbox.checked;

        if (checkbox.checked) {
            this.classList.add("active");
        } else {
            this.classList.remove("active");
        }
    });
});

