$('.js-gallery-single-img').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
});

$('.js-gallery-logo').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	centerMode: true,
	centerPadding: '160px',
	prevArrow: '',
	nextArrow: '<div class="gallery-item-bottom-btn btn btn-circle"><svg class="icon icon-arrows"><use xlink:href="#icon-arrows"></use></svg></div>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				centerPadding: '120px',
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerPadding: '30px',
				centerMode: false,
			}
		},
	]
});

$('.js-gallery-logo-nav').slick({
	asNavFor: '.js-gallery-logo',
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	centerMode: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				centerMode: false,
			}
		},
	]
});



$('.js-blog-list').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	prevArrow: '',
	nextArrow: '<div class="gallery-item-btn btn btn-circle"><svg class="icon icon-arrows"><use xlink:href="#icon-arrows"></use></svg></div>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 890,
			settings: {
				slidesToShow: 1,
			}
		},
	]
});


$('.js-blog-list-rtl').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	rtl: true,
	prevArrow: '',
	nextArrow: '<div class="gallery-item-btn btn btn-circle"><svg class="icon icon-arrows"><use xlink:href="#icon-arrows"></use></svg></div>',
});


$('.js-gallery').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: false
});


$('.js-gallery-our-team').slick({
	infinite: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	nextArrow: '<div class="gallery-item-btn btn btn-circle"><svg class="icon icon-arrows"><use xlink:href="#icon-arrows"></use></svg></div>',
	responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 1,
			}
		},
	]
});


$('.js-gallery-simple').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	nextArrow: '<div class="gallery-item-btn btn btn-circle"><svg class="icon icon-arrows"><use xlink:href="#icon-arrows"></use></svg></div>',
});

// //ticking machine
// var percentTime;
// var tick;
// var time = .1;
// var progressBarIndex = 0;

// function startProgressbar() {
// 	resetProgressbar();
// 	percentTime = 0;
// 	tick = setInterval(interval, 10);
// }

// function interval() {
// 	if (($('.js-gallery-simple .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
// 		progressBarIndex = $('.js-gallery-simple .slick-track div[aria-hidden="false"]').data("slickIndex");
// 		startProgressbar();
// 	} else {
// 		percentTime += 1 / (time + 5);
// 		$('.inProgress' + progressBarIndex).css({
// 			width: percentTime + "%"
// 		});
// 		if (percentTime >= 100) {
// 			$('.single-item').slick('slickNext');
// 			progressBarIndex++;
// 			if (progressBarIndex > 2) {
// 				progressBarIndex = 0;
// 			}
// 			startProgressbar();
// 		}
// 	}
// }








$(".js-masonry-grid").justifiedGallery({
	rowHeight: 500,
	margins: 40,
	border: 0,
	lastRow: 'center',
	// randomize: true,
});





$(document).on('mouseenter click', '.js-services-hover', function(event) {
	$('.js-services-hover').removeClass('hover active');
	$(this).addClass('active');
	$('.js-services-hover').addClass('hover');
});
$(document).on('mouseleave', '.js-services-hover', function(event) {
	$('.js-services-hover').removeClass('hover active');
});


$(document).on('click', '.js-show-navigation', function(event) {
	event.preventDefault();
	$(this).toggleClass('show');
	$('.js-navigation').toggleClass('show');
});