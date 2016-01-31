$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}
	
	$('select').niceSelect();

	$('.cart').magnificPopup({
		items: {
			src: '.cart-popup',
			type: 'inline'
		},
		closeMarkup: '<button title="%title%" type="button" class="mfp-close icon icon_close"></button>'
	});

	$('.cart-popup__link').magnificPopup({
		items: {
			src: '.order-popup',
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

	$('.header-button__link_filter').magnificPopup({
		items: {
			src: '.filter-popup',
			type: 'inline'
		},
		closeMarkup: '<button title="%title%" type="button" class="mfp-close icon icon_close"></button>'
	});


	$('.header-button__link_menu').click(function(){
		$('.header__navigation').toggleClass("open");
	});

	$('.banner__close').click(function(){
		$('.banner').remove();
	});

	$('.product-popup__dropdown').click(function(){
		if(!$(this).hasClass('open')){
			var th = $(this),
				el = $(this).closest('.product-popup__dropdown-text'),
					curHeight = el.height(),
					autoHeight = el.css('height', 'auto').height();
			el.height(curHeight).animate({height: autoHeight+30}, 500,function(){
				th.text('Скрыть');
				th.addClass('open');
			});
			el.find('.product-popup__dropdown-before').slideUp(500);

		}else{
			var th = $(this),
				el = $(this).closest('.product-popup__dropdown-text');
			el.animate({height: 150}, 500,function(){
				th.text('Читать всё');
				th.removeClass('open');
			});
			el.find('.product-popup__dropdown-before').slideDown(500);

		}
	});

	var carouselCustomer = $('.product-carousel__items').owlCarousel({
		nav: false,
		loop: true,
		singleItem: true
	})
	$('.product-carousel__prev').click(function() {
		$(this).closest('.product-carousel__navigation').prev().find('.product-carousel__items').data('owlCarousel').prev();
	});
	$('.product-carousel__next').click(function() {
		$(this).closest('.product-carousel__navigation').prev().find('.product-carousel__items').data('owlCarousel').next();
	});

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

	var icons = {
		headerSelected: "accordion__icon icon_z",
		header: "accordion__icon icon_y"
	};

	$( ".accordion" ).accordion({collapsible:true,heightStyle:"content"});
	$( ".accordion" ).accordion( "option", "icons", null );

	$( ".accordion" ).on( "accordionbeforeactivate", function( event, ui ) {
		ui.newHeader.find(".accordion__text").text("Свернуть")
		ui.newHeader.find(".icon").removeClass("icon_down")
		ui.newHeader.find(".icon").addClass("icon_up")
		ui.oldHeader.find(".accordion__text").text("Раскрыть")
		ui.oldHeader.find(".icon").removeClass("icon_up")
		ui.oldHeader.find(".icon").addClass("icon_down")
	});


	$('.cart-item__delete').click(function(){
		$(this).closest('.cart-item').remove();
		$('.cart__count').text(parseInt($('.cart__count').text())-1);
	});

	$('.cart-item__plus').click(function(){
		var el_count = $(this).closest('.cart-item__controls').find('.cart-item__count');
		el_count.val(parseInt(el_count.val())+1);
	});

	$('.cart-item__minus').click(function(){

		var el_count = $(this).closest('.cart-item__controls').find('.cart-item__count');
		if(parseInt(el_count.val()) > 1) el_count.val(parseInt(el_count.val())-1);
	});


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