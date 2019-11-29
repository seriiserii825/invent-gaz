$(function () {
	/*
		https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
		===========================*/
	$("html").easeScroll({
		frameRate: 60,
		animationTime: 1000,
		stepSize: 90,
		pulseAlgorithm: 1,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 20,
		accelerationMax: 1,
		keyboardSupport: true,
		arrowScroll: 50,
		touchpadSupport: true,
		fixedBackground: true
	});

	let slider = function () {
		if($('#js-slider__wrap').length > 0){
			$('#js-slider__wrap').slick({
				arrows: false,
				fade: true,
				responsive: [
					{
						breakpoint: 720,
						settings: {
							dots: true,
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
				]
			});

			$('.slider-button__left').on('click', function (e) {
				e.preventDefault();
				$('#js-slider__wrap').slick('slickPrev');
			});

			$('.slider-button__right').on('click', function (e) {
				e.preventDefault();
				$('#js-slider__wrap').slick('slickNext');
			});
		}
	};
	slider();

	let sandwitch = function () {
		$('.sandwitch').on('click', function () {
			$('#js-main-menu').toggleClass('fixed');
			$('body').toggleClass('fixed');
			$(this).toggleClass('sandwitch--active');
			$(this).closest('.sandwitch-wrapper').toggleClass('sandwitch--active');
		});
	};
	sandwitch();

	let showPoup = function () {
		$('#js-show-popup').on('click', function (e) {
			e.preventDefault();
			$('body').addClass('fixed');
			$('#js-popup').fadeIn();
			$('#js-overlay').fadeIn();
		});

		$('#js-overlay, #js-close-popup').on('click', function (e) {
			e.preventDefault();
			$('body').removeClass('fixed');
			$('#js-popup').fadeOut();
			$('#js-overlay').fadeOut();
		});
	};
	showPoup();
});



