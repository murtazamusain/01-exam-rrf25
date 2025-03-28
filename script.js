document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('change');
  document.querySelector('.main-menu').classList.toggle('main-menu-show');
});

document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', function () {
    document.getElementById('hamburger').classList.remove('change');
    document.querySelector('.main-menu').classList.remove('main-menu-show');
  });
});

//Hide Navbar on scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('mainHeader').style.top = '0';
  } else {
    document.getElementById('mainHeader').style.top = '-110px';
  }
  prevScrollpos = currentScrollPos;
};

// slick-slider
$('.testimonial-carousel').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '<span class="testimonial-carousel-prevAroow">&#60</span>',
  nextArrow: '<span class="testimonial-carousel-nextAroow">&#62</span>',
});
