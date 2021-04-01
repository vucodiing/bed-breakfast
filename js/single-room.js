$(".slide-image").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  //   asNavFor: ".slide-list",
});
$(".slide-list").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slide-image",
  centerMode: true,
  focusOnSelect: true,
});
