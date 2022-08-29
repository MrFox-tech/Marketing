$(function() {

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="left arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="right arrow"></button>',
  });

  $('.menu__btn').on('click', function() {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });

  var mixer = mixitup('.portfolio__content');

});
