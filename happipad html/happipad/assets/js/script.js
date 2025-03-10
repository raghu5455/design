document.addEventListener('DOMContentLoaded', function () {
  var aboutHeight = document.querySelector('.about .cont').offsetHeight;
  document.querySelector('.about .img img').style.height = aboutHeight + 'px';
});

document.addEventListener('DOMContentLoaded', function () {
  var aboutHeight = document.querySelector('.find_secure .cont').offsetHeight;
  document.querySelector('.find_secure .img img').style.height = aboutHeight + 'px';
});

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


 // JavaScript for Single-Open Accordion
 const headers = document.querySelectorAll('.accordion-header');

 headers.forEach(header => {
     header.addEventListener('click', () => {
         const openContent = document.querySelector('.accordion-content[style="display: block;"]');
         const openArrow = document.querySelector('.arrow.rotate');

         // Close already opened accordion
         if (openContent && openContent !== header.nextElementSibling) {
             openContent.style.display = 'none';
             openArrow.classList.remove('rotate');
         }

         // Toggle current accordion
         const content = header.nextElementSibling;
         const arrow = header.querySelector('.arrow');

         if (content.style.display === 'block') {
             content.style.display = 'none';
             arrow.classList.remove('rotate');
         } else {
             content.style.display = 'block';
             arrow.classList.add('rotate');
         }
     });
 });





