var swiper = new Swiper(".tabs", {
  loop: true,
  spaceBetween: 0,
  freeMode: false,
  watchSlidesProgress: true,
  breakpoints: {
    640: {
      spaceBetween: 10,
    }
  },
});

var swiper2 = new Swiper(".tabbedslider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.dropdown-select').addEventListener('click', function () {
    this.classList.toggle('active');
  });
});