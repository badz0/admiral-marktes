'use strict';

!function ($) {
	$('.dax30-awards__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				dots: true
			}
		}]
	});

	var specSlider = $('.dax30-live__specifications-slider');
	specSlider.on('init', function (a, b, c, d) {
		initSliderButton(1);
	});
	specSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		centerMode: true,
		infinite: false,
		initialSlide: 1,
		centerPadding: 'calc(30% - 10px)',
		prevArrow: '<button type="button" class="slick-prev">\n\t\t\t\t\t\t\t\t\t<svg class="arrow-left-icon" width="20px" height="18px" viewBox="0 0 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t\t\t\t\t\t\t\t\t\t<g id="Instruments" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<g id="AM-5.0-Instruments-page-2.1-Mobile" transform="translate(-38.000000, -2959.000000)" stroke="#2572DE" stroke-width="2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<g id="Section" transform="translate(20.000000, 2822.000000)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<g id="Conditions-block" transform="translate(0.000000, 59.000000)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<g id="Arrow-left" transform="translate(28.000000, 87.000000) rotate(-90.000000) translate(-28.000000, -87.000000) translate(20.000000, 78.000000)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline id="Stroke-3" points="0 8 8 0 16 8"></polyline>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d="M8,0 L8,18" id="Stroke-5"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t<span class="arrow-text">Admiral.Prime</span>\n\t\t\t\t\t\t\t\t</button>',
		nextArrow: '<button type="button" class="slick-next">\n\t\t\t\t\t\t\t\t\t<span class="arrow-text">Admiral.Prime</span>\n\t\t\t\t\t\t\t\t\t<svg class="arrow-right-icon" width="20px" height="18px" viewBox="0 0 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t\t\t\t\t\t\t\t\t\t<g id="Instruments" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<g id="AM-5.0-Instruments-page-2.1-Mobile" transform="translate(-309.000000, -2959.000000)" stroke="#2572DE" stroke-width="2">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<g id="Section" transform="translate(20.000000, 2822.000000)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<g id="Conditions-block" transform="translate(0.000000, 59.000000)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<g id="Arrow-right" transform="translate(299.000000, 87.000000) rotate(90.000000) translate(-299.000000, -87.000000) translate(291.000000, 78.000000)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<polyline id="Stroke-3" points="0 8 8 0 16 8"></polyline>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<path d="M8,0 L8,18" id="Stroke-5"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t</button>',
		responsive: [{
			breakpoint: 767,
			settings: {
				centerPadding: '0'
			}
		}]
	});

	specSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		initSliderButton(nextSlide);
	});

	function initSliderButton(slide) {
		var slides = $('.dax30-live__specifications-slider .specification');
		$('.dax30-live__specifications-slider .slick-prev .arrow-text')[0].innerHTML = $(slides[slide - 1]).attr('name') || '';
		$('.dax30-live__specifications-slider .slick-next .arrow-text')[0].innerHTML = $(slides[slide + 1]).attr('name') || '';
	}
}(jQuery);