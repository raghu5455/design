

(function ($) {
  "use strict";
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });
  $('.scroll-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 });
    return false;
  });

  var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  $(".navbar-nav > li  a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
      $(this).addClass("active");
  })

  if ($(".nice-select").length) {
    $('.nice-select').niceSelect();
  }


  if ($(".lazy-img").length) {
    $('.lazy-img').Lazy({
      effect: 'fadeIn',
      threshold: 300
    });
  }



  $(window).on('scroll', function () {
    var sticky = $('.sticky-menu'),
      scroll = $(window).scrollTop();
    if (scroll >= 180) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

  });


  $("input,textarea").each(function () {
    $(this).data('holder', $(this).attr('placeholder'));
    $(this).on('focusin', function () {
      $(this).attr('placeholder', '');
    });
    $(this).on('focusout', function () {
      $(this).attr('placeholder', $(this).data('holder'));
    });
  });


  var toolTip = $("[data-bs-toggle='tooltip']");
  if (toolTip.length) {
    toolTip.each(function () {
      new bootstrap.Tooltip(this);
    });
  }

  if ($(".dash-mobile-nav-toggler").length) {
    $('.dash-mobile-nav-toggler').on('click', function () {
      $(".dash-aside-navbar").addClass("show");
    });
    $('.dash-aside-navbar .close-btn').on('click', function () {
      $(".dash-aside-navbar").removeClass("show");
    });
  }


})(jQuery);