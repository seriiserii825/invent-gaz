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
		$('#js-slider').slick({
			arrows: false,
			fade: true,
			responsive: [
				{
					breakpoint: 720,
					settings: {
						dots: true
					}
				},
			]
		});

		$('.slider__button--left').on('click', function (e) {
			e.preventDefault();
			$('#js-slider').slick('slickPrev');
		});

		$('.slider__button--right').on('click', function (e) {
			e.preventDefault();
			$('#js-slider').slick('slickNext');
		});
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

	let tabs = function () {
		$('#js-tabs a').on('click', function (e) {
			e.preventDefault();
			let id = $(this).attr('href');
			$('#js-tabs a').removeClass('active');
			$(this).addClass('active');
			$('#js-tabs-content .tabs-content__item').fadeOut(100);
			$(id).fadeIn(100);
		});
	};
	tabs();

	let showPopup = function () {
		$('#js-show-popup').on('click', function (e) {
			e.preventDefault();
			$('#js-overlay').fadeIn(100);
			$('#js-popup').addClass('active');
		});
		$('#js-overlay, #js-popup-close').on('click', function () {
			$('#js-overlay').fadeOut(100);
			$('#js-popup').removeClass('active');
		});
	};
	showPopup();

	let wow = new WOW(
		{
			boxClass: 'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 60,          // distance to the element when triggering the animation (default is 0)
			mobile: true,       // trigger animations on mobile devices (default is true)
			live: true,       // act on asynchronously loaded content (default is true)
			callback: function (box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		}
	);
	wow.init();
});



