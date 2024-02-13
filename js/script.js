(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

	}

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}


	//Banner Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			animateOut: 'fadeOut',
		    animateIn: 'fadeIn',
			loop:true,
			margin: 20,
			nav:true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout:10000,
			navText: [ '<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				},
			}
		});    		
	}



	// Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop: false,
			margin: 20,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: true,
			navText: ['<span><img src="images/icons/angal-left.svg" alt=""></span>', '<span><img src="images/icons/angal-right.png" alt=""></span>'],
			responsive: {
				0: {
					items: 1
				},
				400: {
					items: 1
				},
				768: {
					items: 2
				},
				1199: {
					items: 3
				},
			}
		});
	}


	// Testimonial Carousel Two
	if ($('.testimonial-carousel-two').length) {
		$('.testimonial-carousel-two').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<img src="images/icons/angal-l.png" alt="">', '<img src="images/icons/angal-r.png" alt="">'],
			responsive: {
				0: {
					items: 1
				},
				991: {
					items: 1
				},
			}
		});
	}


	// Slider Carousel
	if ($('.slider-carousel').length) {
		$('.slider-carousel').owlCarousel({
			loop: true,
			margin: 20,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
			navText: ['<span> <img src="images/icons/angal-right-w.png" alt=""> </span>', '<span> <img src="images/icons/angal-left-l.png" alt=""> </span>'],
			responsive: {
				0: {
					items: 1
				},
				400: {
					items: 1
				},
				768: {
					items: 1
				},
				1199: {
					items: 1
				},
			}
		});
	}


	//Services Carousel
	if ($('.slider-carousel-one').length) {
		$('.slider-carousel-one').owlCarousel({
			loop: false,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 10000,
			navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				768: {
					items: 2
				},
				1024: {
					items: 4
				},
				1200: {
					items: 5
				},
			}
		});
	}

	//Products Carousel
	if ($('.products-carousel').length) {
		$('.products-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			smartSpeed: 400,
			autoplay: true,
			navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				768: {
					items: 3
				},
				1024: {
					items: 4
				},
			}
		});
	}

	//Clients Carousel
	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 400,
			autoplay: true,
			navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				768:{
					items:4
				},
				1023:{
					items:6
				},
			}
		});
	}

	// Testinomials Carousel
	if ($('.testimonial-content').length) {
		var testimonial_thumbs = new Swiper('.testimonial-thumbs', {
			spaceBetween: 5,
			loop: false,
			slidesPerView: 3,
			breakpoints: {
				320: {
					slidesPerView: 3,
				},
				600: {
					slidesPerView: 3,
				},
			}
		});

		var testimonial_content = new Swiper('.testimonial-content', {
			spaceBetween: 0,
			effect: 'fade',
			loop: true,
			thumbs: {
				swiper: testimonial_thumbs
			},
			pagination: {
				el: '.testimonial-pagination',
				clickable: true,
			},
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}



	

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}




	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	


	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

	//  ============= SIGNIN TAB FUNCTIONALITY =========

    $('.signup-tab ul li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.signup-tab ul li').removeClass('current');
        $('.dff-tab').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#"+tab_id).addClass('current animated fadeIn');
        return false;
    });

})(window.jQuery);