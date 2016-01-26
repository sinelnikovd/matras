$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}


	$('.cart').magnificPopup({
		items: {
			src: '.cart-popup',
			type: 'inline'
		},
		closeMarkup: '<button title="%title%" type="button" class="mfp-close icon icon_close"></button>'
	});

	$('.cart-popup__link').magnificPopup({
		items: {
			src: '.decor-popup',
			type: 'inline'
		},
		closeMarkup: '<button title="%title%" type="button" class="mfp-close">1</button>'
	});

	$('.product-card__link').magnificPopup({
		items: {
			src: '.product-popup',
			type: 'inline'
		},
		closeMarkup: '<button title="%title%" type="button" class="mfp-close icon icon_close"></button>'
	});

	var carouselCustomer = $('.product-carousel__items').owlCarousel({
		loop: true,
		nav: false,
		items: 1
	})
	$('.product-carousel__prev').click(function() {
		carouselCustomer.trigger('prev.owl.carousel');
	})
	$('.product-carousel__next').click(function() {
		carouselCustomer.trigger('next.owl.carousel');
	})

	 $(".product-cards-slider").each(function(i, el) {
		$(el).children(".product-cards-slider__overview").sly({
			horizontal: 1,
			itemNav: 'basic',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			scrollBar: $(el).children('.product-cards-slider__scrollbar'),
			speed: 300,
			dragHandle: 1,
		});
	});
	$(window).resize(function(e) {
		$(".product-cards-slider").each(function(i, el) {
			$(el).children(".product-cards-slider__overview").sly('reload');
		});
	});

	$('.sumoselect').SumoSelect();


});

	//SVG Fallback
if (!Modernizr.svg) {
	// wrap this in a closure to not expose any conflicts
	(function() {
		// grab all images. getElementsByTagName works with IE5.5 and up
		var imgs = document.getElementsByTagName('img'),endsWithDotSvg = /.*\.svg$/,i = 0,l = imgs.length;
		// quick for loop
		for(; i < l; ++i) {
			if(imgs[i].src.match(endsWithDotSvg)) {
				// replace the png suffix with the svg one
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	})();
}