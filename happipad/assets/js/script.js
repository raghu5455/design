
document.addEventListener('DOMContentLoaded', function () {
  new Splide(".logos_slider", {
    type: "loop",
    perPage: 5,
    arrows: false,
    pagination: false,
    focus: "center",
    gap: "85px",
    autoScroll: {
      pauseOnHover: false,
    },
    breakpoints: {
      991: {
        perPage: 3,
      },
      640: {
        perPage: 2,
      },
    }
  }).mount(window.splide.Extensions);
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide(".testimonial_slider1", {
    type: "loop",
    perPage: 2.5,
    arrows: false,
    pagination: false,
    focus: "center",
    gap: "36px",
    autoScroll: {
      pauseOnHover: false,
    },
    breakpoints: {
      991: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    }
  }).mount(window.splide.Extensions);
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide(".testimonial_slider2", {
    type: "loop",
    perPage: 2.5,
    arrows: false,
    pagination: false,
    focus: "center",
    gap: "36px",
    autoScroll: {
      pauseOnHover: false,
      speed: -1,
    },
    breakpoints: {
      991: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    }
  }).mount(window.splide.Extensions);
});