$(function () {
  $(".design__slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img src="./images/Arrow-left.svg" alt="" class="arrow arrow__left">',
    nextArrow: '<img src="./images/Arrow-right.svg" alt="" class="arrow arrow__right">',
  });
});
