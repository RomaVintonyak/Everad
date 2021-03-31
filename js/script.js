jQuery(document).ready(function(){
  "use script";
  //main slider
  var mainSlider = $("#mainSlider");
  mainSlider.slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});