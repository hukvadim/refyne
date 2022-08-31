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
});

$('.js-gallery-logo-nav').slick({
	asNavFor: '.js-gallery-logo',
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	centerMode: true,
	focusOnSelect: true
});



$('.js-blog-list').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
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