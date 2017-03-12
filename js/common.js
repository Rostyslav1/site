$(document).ready(function(){
  $('.team-cr').bxSlider({
  	controls: false,
  	pagerCustom: '#bx-pager',
  	adaptiveHeight: true,
  	slideMargin: 100,
  	auto: true,
  	autoHover: true,
  	mode: 'horizontal'
  });
  $('.news-cr').bxSlider({
  	controls: false,
  	pagerCustom: '#bx-pg',
  	mode: 'vertical',
  	slideMargin: 50,
  	auto: true,
  	autoHover: true
  });
});
$(document).ready(function(){
  $('.bx-testimonials').bxSlider({
  	pagerCustom: "#bx-testimonials-pgr",
  	auto: true,
  	autoHover: true,
  	slideWidth: 1096
   });
});