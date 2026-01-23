jQuery(function ($) {

	$(document).ready(function() {
		
		"use strict";
		
		PageLoad(); 
		ScrollEffects();
		Sliders();	 
		FirstLoad(); 
		PageLoadActions(); 
		FitThumbScreenGSAP();
		FloatingLists();
		ReverseLists();		
		ShowcaseSlider();
		ShowcaseWebglCore();  
		ShowcaseCarousel();
		SnapSlider(); 		
		FitThumbScreenWEBGL();
		Portfolio();
		Shortcodes();
		Shop();
		Core();
		JustifiedGrid();
		Lightbox();
		PlayVideo();
		Blog();
		InitContactMap();
		CustomFunction();
	});
	
	
/*--------------------------------------------------
Function CustomFunction
---------------------------------------------------*/

	function CustomFunction() {
		
		//Add here your custom js code
		
	}// End CustomFunction		

/*--------------------------------------------------
Function CleanupBeforeAjax
---------------------------------------------------*/

	function CleanupBeforeAjax(){
		
		// reset all scroll triggers
		ScrollTrigger.killAll();
	}
	
/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	function PageLoad() {
		
		if ($(".menu-timeline .before-span").length > 0) {
			gsap.set($(".menu-timeline .before-span"), {y: 120, opacity:0});
		}
		
		// Page Navigation Events
		$(".preloader-wrap").on('mouseenter', function() {	
			var $this = $(this);			
			gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
		});
							
		$(".preloader-wrap").on('mouseleave', function() {					
			gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();				
		});		
		
		$('body').removeClass('hidden').removeClass('hidden-ball');
		
		gsap.set($("#header-container"), {opacity:1}); // Always show header
		gsap.to($("#header-container"), {duration: 0.5, opacity:1, delay:0.2, ease:Power2.easeOut}); 
		
		
		function initOnFirstLoad() {
		
			$('body').waitForImages({
				finished: function() {
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();
					gsap.to($(".percentage-intro, .percentage"), {duration: 0.3, opacity:0, y:-10, delay:0, ease:Power2.easeInOut});
					gsap.to($(".preloader-intro"), {duration: 0.7, opacity:1, y:-400, delay:0.2, ease:Power2.easeInOut});						
					gsap.to($(".preloader-wrap"), {duration: 0.7, yPercent: -101, delay:0.7, ease:Power2.easeInOut});
					gsap.set($(".preloader-wrap"), {visibility:'hidden', delay:1.7, opacity:0});					
					setTimeout(function(){
						$('body').waitForImages({
							finished: function() {
								gsap.to($(".header-middle, #footer-container, .showcase-counter, .swiper-pagination-bullet-active .counter"), {duration: 1, opacity:1, delay:0, ease:Power2.easeOut}); 										
							},
							waitForAll: true
						});
						
						if( $('.hero-video-wrapper').length > 0 ){
							$('#hero-image-wrapper').find('video').each(function() {
								$(this).get(0).play();
							}); 
						}
						
						gsap.to($("#main"), {duration: 0, opacity:1, delay:0, ease:Power2.easeOut});//modified time
						if( $('#hero').hasClass("has-image")) {								
							if ($('body').hasClass('hero-below-caption')) {
								var heroTranslate = $('.hero-translate').height();
								gsap.set($("#hero-image-wrapper"), {y:heroTranslate});
								gsap.set($("#hero-caption"), {height:heroTranslate});
							}
							gsap.set($("#hero-bg-image"), {scale:1.1 , opacity:0});
							gsap.to($("#hero-bg-image"), {duration: 1, force3D:true, scale:1 , opacity:1, delay:0.8, ease:Power2.easeOut});							
							gsap.to($(".hero-arrow"), {duration: 0.5, force3D:true, y:-60, opacity:1, delay:0.6, ease:Power2.easeOut});
							gsap.set($("#hero-caption .hero-subtitle span"), {y: 60, opacity:0});					
							gsap.to($("#hero-caption .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.8, ease:Power3.easeOut});
							gsap.to($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
							gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.6, ease:Power3.easeOut});
							gsap.to($(".hero-footer-left, .hero-footer-right"), {duration: 1, force3D:true, y:0, opacity:1, rotation:0, delay:0.8, ease:Power2.easeOut});																				
							gsap.to($("#main-page-content, #page-nav"), {duration: 0.4, opacity:1, delay:1.15, ease:Power2.easeOut});
						} else {
							gsap.to($(".hero-arrow"), {duration: 0.5, force3D:true, y:-60, opacity:1, delay:0.5, ease:Power2.easeOut});							
							gsap.set($("#hero-caption .hero-subtitle span"), {y: 60, opacity:0});					
							gsap.to($("#hero-caption .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.7, ease:Power3.easeOut});			
							gsap.to($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
							gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.5, ease:Power3.easeOut});
							gsap.to($(".hero-footer-left, .hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:0.8, ease:Power2.easeOut});									
							gsap.to($("#main-page-content, #page-nav"), {duration: 0.7, opacity:1, delay:1.1, ease:Power2.easeOut});
							gsap.to($(".error-button"), {duration: 0.4, y: 0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});				
						}	
						
						
						// Fading In Showcase Slider elements on Finised
						if( !$('#canvas-slider').hasClass("active")) {	
							gsap.set($('#canvas-slider'), {opacity:1, scale:1.1});
							gsap.to($('#canvas-slider'), {duration: 0.7, opacity:1, scale:1, delay:0.2, ease:Power2.easeOut});
						}
						gsap.set($("#showcase-slider-holder"), {opacity:0});															
						gsap.to($("#showcase-slider-holder"), {duration: 0.7, opacity:1, delay:0.3, ease:Power2.easeOut});
						gsap.to($(".showcase-pagination"), {duration: 0.3, opacity:1, delay:0.1, ease:Power2.easeOut});
						gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:0, opacity:1, delay:0.4, stagger: 0.05, ease:Power2.easeOut});				
						
						
						// Fading In Showcase Carousel elements on Finised
						gsap.set($("#showcase-carousel-holder"), {opacity:0});
						gsap.to($("#showcase-carousel-holder"), {duration: 0.7, opacity:1, delay:0.8, ease:Power2.easeOut});
						var slideWidth = $("#showcase-carousel-holder .swiper-slide").width()*0.5;
						gsap.set($("#showcase-carousel-holder .swiper-slide-active"), {x:slideWidth, opacity:0});
						gsap.set($("#showcase-carousel-holder .swiper-slide-active").nextAll(), {x:slideWidth, opacity:0});								
						gsap.to($("#showcase-carousel-holder .swiper-slide-active"), {duration: 0.7, x:0, delay:0.6, opacity:1, ease:Power2.easeOut});
						gsap.to($("#showcase-carousel-holder .swiper-slide-active").nextAll(), {duration: 0.7, x:0, scale:1, delay:0.7, stagger:0.1, opacity:1, ease:Power2.easeOut});
						
						
						
						gsap.set($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {opacity:0});	
						gsap.to($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {duration: 0.3, y:0, opacity:1, rotation:0, delay:0.3, ease:Power2.easeOut});
						
						setTimeout( function(){	
							$('#showcase-slider-holder, #showcase-carousel-holder, .showcase-list-holder').addClass("loaded");
						} , 1500 );
						var tlSmallTitles = gsap.timeline();					
						$(".slide-small-title span").each(function(index, element) {
							tlSmallTitles.to(element, {duration: 0.5, force3D:true, y:0, opacity:1, delay:1, ease:Power2.easeOut}, index * 0.05)
						});
						
						
						
						var SlideListTitle = gsap.timeline();					
						$(".sl-title span, .split-title span").each(function(index, element) {
							SlideListTitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut}, index * 0.05)
						});
						
						var SlideListSubtitle = gsap.timeline();					
						$(".sl-subtitle span, .split-subtitle span").each(function(index, element) {
							SlideListSubtitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut}, index * 0.05)
						});
							
						setTimeout( function(){
							$('.slide-list').addClass('show-borders')
						} ,300 );
							
						setTimeout( function(){	
							$('body').removeClass("load-project-page").removeClass("load-project-page-carousel");
						} , 600 );
						
						setTimeout( function(){	
							$('body').removeClass("load-next-project");
							$('body').addClass("header-visible");
							$('#showcase-holder').removeClass("disabled");
						} , 1600 );
						
						setTimeout( function(){	
							$('body').removeClass("show-loader")
						} , 800 );
						
						ScrollTrigger.refresh();	
						
					} , 600 );
				},
			waitForAll: true
		});
				
		}
		
		if (!$('body').hasClass("disable-ajaxload")) {
			
			var swapOpts = {
				slides: document.querySelectorAll('.preloader-list'),
				list: document.querySelector('.preloader-intro'),
				duration: 0,
				lineHeight: $('.preloader-intro').height()
			}
			
			var swapSlide = gsap.timeline({
				paused: true,
				repeat: -1
			});
			
			swapOpts.slides.forEach(function(slide, i) {
				// Create a label
				let label = "slide" + i;
				swapSlide.add(label);
				
				// Move the whole word
				if(i > 0) {
					swapSlide.to(swapOpts.slides, {
					  duration: swapOpts.duration,
					  y: i * -1 * swapOpts.lineHeight,
					}, label);
					
					// Add some blank space before the next animation
					swapSlide.to({}, {duration: 0.15});
				}
			})
			swapSlide.play();
			
			
			var width = 0,
				perfData = window.performance.timing, 
				EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
				time = $('.preloader-wrap').length > 0 ? ((EstimatedTime/100)%500) * 10 : ((EstimatedTime/10)%50)
				
			// Loadbar Animation
			$(".loadbar").animate({
				width: width + "%"
			}, time  );	
			
			// Percentage Increment Animation
			var PercentageID = $("#precent"),
					start = 0,
					end = 100,
					durataion = time + 0;
					animateValue(PercentageID, start, end, durataion);
					
			function animateValue(id, start, end, duration) {
			  
				var range = end - start,
				  current = start,
				  increment = end > start? 1 : -1,
				  stepTime = Math.abs(Math.floor(duration / range)),
				  obj = $(id);
				
				var timer = setInterval(function() {
					current += increment;
					$(obj).text(current);
				  //obj.innerHTML = current;
					if (current == end) {
						clearInterval(timer);
					}
				}, stepTime);
			}
			
			// Fading Out Loadbar on Finised
			setTimeout(function(){
				swapSlide.pause();				
				initOnFirstLoad();
		  		BlogPageLoad();
				ShopPageLoad();		
			}, time);
		
		} else {		
			initOnFirstLoad();
			BlogPageLoad();
			ShopPageLoad();		
		}
		
		
	}// End Page Load

	
/*--------------------------------------------------
Page Load Actions
---------------------------------------------------*/	
	
	function PageLoadActions() {
		
		
		// Default Page Navigation Load Events
		
		if (!isMobile()) {			
			$("#page-nav .page-title").on('mouseenter', function() {	
				var $this = $(this);			
				gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.6, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
				$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
			});								
			$("#page-nav .page-title").on('mouseleave', function() {					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$('#ball p').remove();				
			});		
		}		
		
		if (!$("body").hasClass("disable-ajaxload")) {
			$('#page-nav .page-title').on('click', function() {	
				$("body").addClass("show-loader");
				$('header').removeClass('white-header');
				$("#app").remove();
				$(".big-title-caption").remove();	
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				gsap.to('.hero-arrow i', {duration: 0.3, y:-40, opacity:0, delay:0, ease:Power2.easeInOut});				
				gsap.to('.next-hero-subtitle span', {duration: 0.3, y:-40, opacity:0, delay:0.05, stagger:0.03, ease:Power2.easeInOut});				
				gsap.to('.page-nav-caption:not(.marquee-title) .next-hero-title span', {duration: 0.5, y:-140, opacity:0, delay:0.1, stagger:0.03, ease:Power2.easeInOut});
				gsap.to('.page-nav-caption.marquee-title .next-hero-title span', {duration: 0.5, y:-300, opacity:0, delay:0.1, stagger:0, ease:Power2.easeInOut});					
				
				gsap.to($("#main-page-content, #hero, footer"), {duration: 0.3, opacity:0});
			});
		} else if ($("body").hasClass("disable-ajaxload")) {
			$('#page-nav .page-title').on('click', function() {					
				$("body").addClass("load-next-page");
				$("body").addClass("show-loader");
				$('header').removeClass('white-header');
				$("#app").remove();
				$(".big-title-caption").remove();	
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				gsap.to($("#main-page-content, #hero, #page-nav"), {duration: 0.3, opacity:0});
				gsap.to($("footer"), {duration: 0.3, opacity:0, delay:0, ease:Power2.easeInOut});
			});
		}
		
		
		// Project Page Navigation Load Events
		if (!isMobile()) {
			
			$("#project-nav .next-ajax-link-project").mouseenter(function(e) {	
				var $this = $(this);		
				$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );
				gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.data('color'), backgroundColor:$this.data('color')});			
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
				$("#project-nav .next-hero-title").addClass('hover-title');				
			});
							
			$("#project-nav .next-ajax-link-project").mouseleave(function(e) {
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$('#ball p').remove();
				$("#project-nav .next-hero-title").removeClass('hover-title');
			});
		}
		
		if (!$("body").hasClass("disable-ajaxload")) {
			
			
			if ($(".next-ajax-link-project").hasClass("auto-trigger")) {
				
				// cleanup every scroll trigger that may be still active in the ajax context
				if ( !(typeof window.ReachBottomArr === 'undefined' || window.ReachBottomArr === null) && Array.isArray( window.ReachBottomArr ) ) {
					
					window.ReachBottomArr.forEach( element => {
						
						element.kill();
					});
				}
				window.ReachBottomArr = new Array();
				
				$('#project-nav').each(function(){
					var $this = $(this);
					const ReachBottom = ScrollTrigger.create({
						id: Math.floor(Math.random() * 100),
						trigger: $("#project-nav"),
						start: "top top+=1px",
						end: ( st ) => "+=" + (st.vars.trigger.outerHeight(true) - window.innerHeight),
						onEnter: function( st ) { 
							console.log(st.vars.trigger[0].innerText);
							$("body").addClass("show-loader");						
							$this.delay(500).queue(function() {
								
								gsap.set($(".next-hero-progress"), {backgroundColor:"transparent"});
								gsap.to($(".next-hero-progress span"), {duration: 0.3, width:"0%", ease:Power2.easeInOut,onComplete: function() {
								  	gsap.set($(".next-hero-progress"), {opacity:0});
								}});
								var link = $this.find('a');
								console.log("project nav");
								link.trigger('click');
							});											
						},
						onRefresh: function( st ) {
							
							console.log("refresh scroll trigger project nav");
						},
						onLeaveBack: function() { 
							$("body").removeClass("show-loader");						
							$this.clearQueue();											
						}
					});				
					window.ReachBottomArr.push(ReachBottom);				
					$('body').waitForImages({
						finished: function() {
							setTimeout( function(){
								ReachBottom.refresh()	
							} , 250 );
							setTimeout( function(){
								ReachBottom.refresh()	
							} , 1000 );
							setTimeout( function(){
								ReachBottom.refresh()	
							} , 2500 );	
						},
						waitForAll: true
					});						
				});
			
			}
			
			$('.next-ajax-link-project').on('click', function() {					
				$("body").addClass("load-project-thumb-with-title");
				$('header').removeClass('white-header');
				$("#app").remove();
				$('.next-project-image-wrapper').addClass("temporary").appendTo('body');
				
				if ($("body").hasClass("hero-below-caption")) {
					if ($(this).parents('#project-nav').hasClass("change-header")) {
						$("body").append('<div class="temporary-hero light-content"><div class="outer content-full-width"><div class="inner"></div></div></div>');
					} else {
						$("body").append('<div class="temporary-hero"><div class="outer content-full-width"><div class="inner"></div></div></div>');
					}
				} else {
					if ($(this).parents('#project-nav').hasClass("change-header")) {
						$("body").append('<div class="temporary-hero"><div class="outer content-full-width"><div class="inner"></div></div></div>');
					} else {
						$("body").append('<div class="temporary-hero light-content"><div class="outer content-full-width"><div class="inner"></div></div></div>');
					}
				}
				
				$('.next-caption').appendTo('.temporary-hero .inner');
				
				var TLNextHeroSubTitleSpan = gsap.timeline();
				$(".temporary-hero .next-hero-subtitle span").each(function(index, element) {
					TLNextHeroSubTitleSpan.to(element, {duration: 0.3, y:-40, opacity:0, delay:0, ease:Power2.easeInOut}, index * 0.05)
				});
				
				if ($('body').hasClass('hero-below-caption')) {
					var heroTranslate = $('.hero-translate').height();
					//gsap.set($("#hero-image-wrapper"), {y:heroTranslate});
					gsap.to($(".temporary-hero"), {duration: 0.6, height:heroTranslate, delay:0.1,ease:Power2.easeInOut});
					gsap.to($(".temporary .next-project-image"), {duration: 0.6, y:heroTranslate, delay:0.1,ease:Power2.easeInOut});
				}
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				gsap.to($("#main-page-content, #hero, #hero-image-wrapper"), {duration: 0.3, opacity:0});			
				gsap.to($(".next-project-image"), {duration: 0.5, scale:1, opacity:1, ease:Power2.easeInOut,onComplete: function() {
				  $('.temporary .next-project-image').addClass("visible")
				}});
				gsap.to($("footer, .all-works"), {duration: 0.3, opacity:0, ease:Power2.easeInOut});
			});
		} else if ($("body").hasClass("disable-ajaxload")) {
			$('.next-ajax-link-project').on('click', function() {					
				$("body").addClass("load-project-thumb-with-title").addClass("show-loader");							
				$('header').removeClass('white-header');
				$("#app").remove();									
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();				
				gsap.to($("#main-page-content, #hero, #hero-image-wrapper, #project-nav"), {duration: 0.3, opacity:0});			
				gsap.to($(".next-project-image"), {duration: 0.6, scale:1, opacity: 0, ease:Power2.easeOut});
				gsap.to($("footer, .all-works"), {duration: 0.3, opacity:0, ease:Power2.easeInOut});							
			});
		}
		
		
	}// Page Load Actions
	
/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {	
		
		gsap.set($("#show-filters, #counter-wrap"), {opacity:0, delay:0});
		
		$('body').waitForImages({
			finished: function() {
				$('body').removeClass('loading')
				setTimeout( function(){	
					$('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
				} , 1500 );
			},
			waitForAll: true
		});	
		
		$('body').waitForImages({
			finished: function() {
				gsap.set($("#header-container"), {opacity:1}); // Always show header
				gsap.to($("#header-container, .header-middle"), {duration: 1, force3D:true, opacity:1, ease:Power2.easeOut});				
			},
			waitForAll: true
		});
		
		gsap.to($("#main"), {duration: 0.3, opacity:1, delay:0, ease:Power2.easeOut});
		gsap.to($("#footer-container"), {duration: 1, force3D:true, opacity:1, delay:0.4, ease:Power2.easeOut});		
		
		if( $('#hero').hasClass("has-image")) {	
			if( $('body').hasClass("load-project-thumb-with-title")) {				
				if ($('body').hasClass('hero-below-caption')) {
					var heroTranslate = $('.hero-translate').height();
					gsap.set($("#hero-image-wrapper"), {y:heroTranslate});
					gsap.set($("#hero-caption"), {height:heroTranslate});
				}
				gsap.to($("#hero-bg-image"), {duration: 0, scale:1 , opacity:1, delay:0, ease:Power2.easeOut});
				gsap.to($(".hero-arrow"), {duration: 0.5, y:-60, opacity:1, delay:0.3, ease:Power3.easeOut});				
				gsap.set($("#hero-caption .hero-subtitle span"), {y: 60, opacity:0});					
				gsap.to($("#hero-caption .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0, ease:Power3.easeOut});				
				gsap.set($("#hero-caption .hero-title span"), {y:0, opacity:1});
				gsap.to($(".hero-footer-left, .hero-footer-right"), {duration: 0.7, y:0, opacity:1, delay:0.1, ease:Power3.easeOut});	
			} else if( $('body').hasClass("load-project-thumb")) {
				if ($('body').hasClass('hero-below-caption')) {
					var heroTranslate = $('.hero-translate').height();
					gsap.set($("#hero-image-wrapper"), {y:heroTranslate});
					gsap.set($("#hero-caption"), {height:heroTranslate});
				}
				gsap.to($("#hero-bg-image"), {duration: 0, scale:1.02 , opacity:1, delay:0, ease:Power2.easeOut});
				gsap.to($(".hero-arrow"), {duration: 0.5, y:-60, opacity:1, delay:0.5, ease:Power3.easeOut});
				gsap.set($("#hero-caption .hero-subtitle span"), {y: 60, opacity:0});					
				gsap.to($("#hero-caption .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.3, ease:Power3.easeOut});				
				gsap.set($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
				gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.1, ease:Power3.easeOut});
				gsap.to($(".hero-footer-left, .hero-footer-right"), {duration: 0.7, y:0, opacity:1, delay:0.5, ease:Power3.easeOut});
			} else {
				if ($('body').hasClass('hero-below-caption')) {
					var heroTranslate = $('.hero-translate').height();
					gsap.set($("#hero-image-wrapper"), {y:heroTranslate});
					gsap.set($("#hero-caption"), {height:heroTranslate});
				}
				gsap.set($("#hero-bg-image"), {scale:1.05 , opacity:0});
				$("#hero-bg-image").waitForImages({
					finished: function() {
						gsap.to($("#hero-bg-image"), {duration: 0.7, scale:1 , opacity:1, delay:0.1, ease:Power2.easeOut});				
					},
					waitForAll: true
				});
				
				gsap.to($(".hero-arrow"), {duration: 0.5, y:-60, opacity:1, delay:0.3, ease:Power3.easeOut});				
				gsap.set($("#hero .hero-subtitle span"), {y: 60, opacity:0});					
				gsap.to($("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.1, ease:Power3.easeOut});				
				gsap.set($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
				gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0, ease:Power3.easeOut});
				gsap.to($(".hero-footer-left, .hero-footer-right"), {duration: 0.7, y:0, opacity:1, delay:0.3, ease:Power3.easeOut});	
			}
			gsap.to($("#main-page-content, #page-nav"), {duration: 0.4, opacity:1, delay:0.95, ease:Power2.easeOut});
		} else {
			gsap.to($(".hero-arrow"), {duration: 0.5, y:-60, opacity:1, delay:0.2, ease:Power3.easeOut});			
			gsap.set($("#hero .hero-subtitle span"), {y: 60, opacity:0});					
			gsap.to($("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.4, ease:Power3.easeOut});			
			gsap.to($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
			gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.2, ease:Power3.easeOut});						
			gsap.to($(".hero-footer-left, .hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
			gsap.to($("#main-page-content, #page-nav"), {duration: 0.5, opacity:1, delay:0.35, ease:Power2.easeOut});
			gsap.to($(".post-article-wrap"), {duration: 0.4, force3D:true, y: 0, opacity:1, ease:Power2.easeOut});
			gsap.to($(".error-button"), {duration: 0.4, force3D:true, y: 0, opacity:1, rotation:0, delay:0.2, ease:Power2.easeOut});			
		}	
		
		// Fading In Showcase Slider on Finised
		if( !$('#canvas-slider').hasClass("active")) {	
			gsap.set($('#canvas-slider'), {opacity:0, scale:1.1});
		}
		gsap.set($("#showcase-slider-holder"), {opacity:0});
		gsap.set($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {opacity:0});
		$('body').waitForImages({
			finished: function() {
				if( $('#showcase-slider-holder').length > 0 ){
					gsap.to($('#canvas-slider'), {duration: 1, force3D:true, opacity:1, scale:1, delay:0.1, ease:Power2.easeOut});
					gsap.to($("#showcase-slider-holder"), {duration: 0.7, opacity:1, delay:0, ease:Power2.easeOut});
					gsap.to($(".showcase-pagination"), {duration: 0.2, opacity:1, delay:0, ease:Power2.easeOut});
					gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:0, opacity:1, delay:0.2, stagger: 0.05, ease:Power2.easeOut});					
					gsap.to($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {duration: 0.3, y: 0, opacity:1, delay:0.2, ease:Power2.easeOut});
				}
			},
			waitForAll: true
		});	
		
		// Fading In Showcase Carousel on Finised
		gsap.set($("#showcase-carousel-holder"), {opacity:0});
		gsap.to($("#showcase-carousel-holder"), {duration: 0.7, opacity:1, delay:0.4, ease:Power2.easeOut});
		var slideWidth = $("#showcase-carousel-holder .swiper-slide").width()*0.5;
		gsap.set($("#showcase-carousel-holder .swiper-slide-active"), {x:slideWidth, opacity:0});
		gsap.set($("#showcase-carousel-holder .swiper-slide-active").nextAll(), {x:slideWidth, opacity:0});								
		gsap.to($("#showcase-carousel-holder .swiper-slide-active"), {duration: 0.7, x:0, delay:0.4, opacity:1, ease:Power2.easeOut});
		gsap.to($("#showcase-carousel-holder .swiper-slide-active").nextAll(), {duration: 0.7, x:0, scale:1, delay:0.5, stagger:0.1, opacity:1, ease:Power2.easeOut});
		gsap.to($("footer .swiper-prev, footer .swiper-next, footer .swiper-pagination-bullet"), {duration: 0.3, y: 0, opacity:1, delay:0.2, ease:Power2.easeOut});		
				
		
		var tlSmallTitles = gsap.timeline();					
		$(".slide-small-title span").each(function(index, element) {
			tlSmallTitles.to(element, {duration: 0.5, force3D:true, y:0, opacity:1, delay:1, ease:Power2.easeOut}, index * 0.05)
		});
		// Fading In Floating Lists 
		var SlideListTitle = gsap.timeline();					
		$(".sl-title span, .split-title span").each(function(index, element) {
			SlideListTitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut}, index * 0.05)
		});		
		var SlideListSubtitle = gsap.timeline();					
		$(".sl-subtitle span, .split-subtitle span").each(function(index, element) {
			SlideListSubtitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut}, index * 0.05)
		});
		
		setTimeout( function(){
			$('.slide-list').addClass('show-borders')
		} ,300 );
		
		
		if( $('.load-project-thumb').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$(".big-title-caption").remove();
						$('.thumb-wrapper').remove();				
					} ,450 );
				},
				waitForAll: true
			});
		} else if( $('.load-project-thumb-with-title').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$('.thumb-wrapper').remove();	
						setTimeout( function(){
							$("#canvas-slider.active").remove();
						} , 100 );
						$(".temporary-hero").remove();
						setTimeout( function(){
							gsap.to($(".next-project-image-wrapper.temporary"), {duration: 0.3, opacity: 0, ease:Power2.easeOut,onComplete: function() {
								$(".next-project-image-wrapper.temporary").remove();
							}});
						} , 300 );
						$('body').removeClass("load-project-thumb-with-title").removeClass("show-loader");	
					} , 100 );
				},
				waitForAll: true
			});			
		} else if( $('.load-project-thumb-with-title-and-scale').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$('.thumb-wrapper').remove();	
						$("#canvas-slider.active").remove();
						$(".temporary-hero").remove();
						gsap.to($(".next-project-image-wrapper.temporary"), {duration: 0.3, opacity: 0, ease:Power2.easeOut,onComplete: function() {
        					$(".next-project-image-wrapper.temporary").remove();
						}});
						$('body').removeClass("load-project-thumb-and-title").removeClass("show-loader");	
					} , 500 );
				},
				waitForAll: true
			});	
		} else {
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();	
						$("#canvas-slider.active").remove();
						$(".temporary-hero").remove();
						gsap.to($(".next-project-image-wrapper.temporary"), {duration: 0.3, opacity: 0, ease:Power2.easeOut,onComplete: function() {
							$(".next-project-image-wrapper.temporary").remove();
						}});
					} ,450 );
				},
				waitForAll: true
			});
		}
		
		setTimeout( function(){	
			$('header').removeClass('white-header');
			$('body').removeClass("load-project-page").removeClass("load-project-thumb").removeClass("load-next-project").removeClass("load-next-page");
			setTimeout( function(){	
				$('body').removeClass("load-project-thumb-with-title").removeClass("show-loader");
			} , 300 );			
		} , 800 );
		
	
	}// End Lazy Load		

	
/*--------------------------------------------------
Function Showcase Slider
---------------------------------------------------*/
	
	function ShowcaseSlider() {
			
		if( $('#showcase-slider-holder').length > 0 ){
			
			$("footer").addClass("showcase-footer");
			
			$('#showcase-slider .swiper-slide').each(function(i) {
				$(this).find('.slide-subtitle span').wrap( "<div></div>" );
				$(this).find('.slide-title span').wrap( "<div></div>" );
			});
			
			var titles = [];
			var subtitle = [];
			$('#showcase-slider .swiper-slide').each(function(i) {
			  	titles.push($(this).find('.slide-title').html());
				subtitle.push($(this).find('.slide-subtitle').html());
			});
								
			var interleaveOffset = 0.3;
			
			const showcaseSwiper = new Swiper('#showcase-slider', {
				direction: "horizontal",
				loop: true,				
				slidesPerView: 'auto',
				touchStartPreventDefault: false,  
				speed:1000,
				mousewheel: true,
				simulateTouch : true,
				parallax:true,
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				pagination: {
				  el: '.showcase-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="' + className + '">' + '<div class="showcase-caption-wrapper">' + '<div class="content-full-width">' + '<div class="slide-title translate-element">' + titles[index] + '</div>' + '<div class="slide-subtitle translate-element">' + subtitle[index] + '</div>' + '</div>' + '</div>' +'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader disable-drag" width="20" height="20" viewBox="0 0 20 20">'+
								'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
								'stroke-opacity="1" stroke-width="2px"></circle>'+
								'<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
								'</svg></div></div>' + '</div>';						 
					},
				},						
				on: {					
					slidePrevTransitionStart: function () {	
			
						$('.showcase-pagination').find('.swiper-pagination-bullet').each(function() {
							if (!$(this).hasClass("swiper-pagination-bullet-active")) {
								$('#trigger-slides .swiper-slide-active').find('div').first().each(function() {
									if (!$(this).hasClass("active")) {
										$(this).trigger('click');
									}
								});
								
								$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function() {
									if (!$(this).hasClass("active")) {
										$(this).trigger('click');
									}
								}); 
								gsap.to($(this).find('.translate-element span'), {duration: 0.5, y:120, opacity:0, stagger: -0.02, ease:Power2.easeInOut,onComplete: function() {									
									gsap.set($(".swiper-pagination-bullet-active").find('.translate-element span'), {y:-120, opacity:0});
									gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:0, opacity:1, delay:0, stagger: -0.05, ease:Power2.easeOut});
								}});
							}
						});
												
					},
					slideNextTransitionStart: function () {	
			
						$('.showcase-pagination').find('.swiper-pagination-bullet').each(function() {
							if (!$(this).hasClass("swiper-pagination-bullet-active")) {
								$('#trigger-slides .swiper-slide-active').find('div').first().each(function() {
									if (!$(this).hasClass("active")) {
										$(this).trigger('click');
									}
								});
								
								$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function() {
									if (!$(this).hasClass("active")) {
										$(this).trigger('click');
									}
								}); 
								gsap.to($(this).find('.translate-element span'), {duration: 0.5, y:-120, opacity:0, stagger: 0.02, ease:Power2.easeInOut,onComplete: function() {
									gsap.set($(".swiper-pagination-bullet-active").find('.translate-element span'), {y:120, opacity:0});
									gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:0, opacity:1, delay:0, stagger: 0.08, ease:Power2.easeOut});
								}});
							}
						});
												
					},	
					slideChangeTransitionStart: function () {
						
						$('body').addClass('disable-slider-interaction');
												
						if ($('.swiper-slide-active').hasClass("change-header")) {
								$('#page-content').delay(500).queue(function(next){
									$(this).removeClass('light-content');
									$('#magic-cursor').removeClass('light-content');
									next();
								});	
							} else {
								$('#page-content').delay(500).queue(function(next){
									$(this).addClass('light-content');
									$('#magic-cursor').addClass('light-content');
									next();
								});	
							}
							
							if ($('.swiper-slide-duplicate-active').hasClass("change-header")) {
								$('#page-content').delay(500).queue(function(next){
									$(this).removeClass('light-content');
									$('#magic-cursor').removeClass('light-content');
									next();
								});	
							} else {
								$('#page-content').delay(500).queue(function(next){
									$(this).addClass('light-content');
									$('#magic-cursor').addClass('light-content');
									next();
								});	
							}
						
						$('.swiper-slide').find('.slide-title').each(function() {
							$(this).removeClass('active-title');							
						});
						
						
					},
					slideChangeTransitionEnd: function () {
						
						$('body').removeClass('disable-slider-interaction');
						
						$('.swiper-slide-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');							
						});
						
						$('.swiper-slide-duplicate-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');	
						});						
						
					},
  				},
			});	
			
			
			if( $('#showcase-slider').length > 0 ){
				$('body').waitForImages({
					finished: function() {	
						showcaseSwiper.update();
					},				
					waitForAll: true
				});	
			}
			
			function BulletsPosition() {
				var bullets_count = $('.swiper-pagination-bullet .parallax-wrap').length;
				var bullets_count_width = $('.swiper-pagination-bullet .parallax-wrap').length * 40 / 2;
				var bullets_height = $('.showcase-pagination-wrap').height()/2;
				var window_width = $(window).width() / 2;
				var window_height = $(window).height() / 2;
				var footer_height = $('footer').height() / 2 ;
				for( i = 0; i < bullets_count; i++ ) { $('.swiper-pagination-bullet .parallax-wrap').eq( i ).css( 'left', (i * 40) - bullets_count_width + window_width).css( 'top', (bullets_height - 20) + window_height - footer_height);	}
			}
			
			BulletsPosition();
			
			var resizeTime;
			$(window).resize(function() {
				clearTimeout(resizeTime);
				resizeTime = setTimeout(doneResizing, 10);
			});
				
			function doneResizing(){
				BulletsPosition();
			}
			
			if (!isMobile()) {
			
				$('#showcase-slider-holder .slide-title-wrapper').on('mousedown', function(event) {
					return false;
				});			
				
				$('.swiper-container').on('mousedown touchstart', function() {	
					if ($('#magic-cursor').hasClass("light-content")) {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff', backgroundColor:'transparent'});
					} else {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#000', backgroundColor:'transparent'});
					}
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
					$("body" ).addClass("scale-drag-x");
				});
					
				$('.swiper-container').on('mouseup touchend', function() {
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					$("body").removeClass("scale-drag-x");
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
				});
				
				$('body').on('mouseup touchend', function() {				
					$('body').removeClass('scale-drag-x');					
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
				});
				
				// Showcase Slider Hover Events
				$("#showcase-slider-holder .slide-title-wrapper").on('mouseenter', function() {	
					var $this = $(this);			
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.find('.slide-title').data('color'), backgroundColor:$this.find('.slide-title').data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="arrow-icon"></i>' );	
					$("#showcase-slider-holder .slide-title").addClass('hover-title')			
				});
									
				$("#showcase-slider-holder .slide-title-wrapper").on('mouseleave', function() {					
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
					$("#showcase-slider-holder .slide-title").removeClass('hover-title')		
				});
				
			
			}
						
			// Showcase Slider Project Load Events
			if (!$("body").hasClass("disable-ajaxload")) {
				$('#showcase-slider-holder .slide-title').on('click', function() {
					let parent_slide = $(this).closest( '.swiper-slide' );
					parent_slide.addClass('above');					
					$("body").addClass("load-project-thumb").addClass("show-loader");
					if (!$("#page-content").hasClass("light-content")) {
						gsap.to('main, #main-content.solid-color', {duration: 0, backgroundColor:"#fff"});
					}										
					gsap.to('#canvas-slider, footer, .showcase-pagination-wrap .parallax-element', {duration: 0.5, opacity:0, delay:0.2, ease:Power4.easeInOut});					
					
					gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:-120, opacity:0, stagger: 0.02, ease:Power2.easeInOut});
						
					$(this).delay(300).queue(function() {
						var link = $(".above").find('a');
						link.trigger('click');
					});
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball p').remove();
					$('#ball i').remove();				
				});
			}  else {				
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
			}
			
			
		}	
					
	}//End Showcase Slider
	
	
/*--------------------------------------------------
Function Showcase Webgl Slider Core
---------------------------------------------------*/
	
	function ShowcaseWebglCore() {
			
		if( $('#showcase-slider-holder').length > 0 ){
			
			var vertex = 'varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );	}';
			var fragment = `
				varying vec2 vUv;

				uniform sampler2D currentImage;
				uniform sampler2D nextImage;
				uniform sampler2D disp;
				uniform float dispFactor;
				uniform float effectFactor;
				uniform vec4 resolution;

				void main() {

					vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

					vec4 disp = texture2D(disp, uv);
					vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
					vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
					vec4 _currentImage = texture2D(currentImage, distortedPosition);
					vec4 _nextImage = texture2D(nextImage, distortedPosition2);
					vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

					gl_FragColor = finalTexture; }

				`;

			var gl_canvas = new ClapatWebGL({
					vertex: vertex,
					fragment: fragment,
			});
			
			if( $('#showcase-slider').length > 0 ){
			
				var addEvents = function(){
	
					var triggerSlide = Array.from(document.getElementById('trigger-slides').querySelectorAll('.slide-wrap'));
					gl_canvas.isRunning = false;
	
					triggerSlide.forEach( (el) => {
	
						el.addEventListener('click', function() {
	
								if( !gl_canvas.isRunning ) {
	
									gl_canvas.isRunning = true;
	
									document.getElementById('trigger-slides').querySelectorAll('.active')[0].className = '';
									this.className = 'active';
	
									var slideId = parseInt( this.dataset.slide, 10 );
	
									gl_canvas.material.uniforms.nextImage.value = gl_canvas.textures[slideId];
									gl_canvas.material.uniforms.nextImage.needsUpdate = true;
	
									gsap.to( gl_canvas.material.uniforms.dispFactor, {
										duration: 1,
										value: 1,
										ease: 'Sine.easeInOut',
										onComplete: function () {
											gl_canvas.material.uniforms.currentImage.value = gl_canvas.textures[slideId];
											gl_canvas.material.uniforms.currentImage.needsUpdate = true;
											gl_canvas.material.uniforms.dispFactor.value = 0.0;
											gl_canvas.isRunning = false;
										}
									});
	
								}
	
						});
	
					});
	
				};
	
				addEvents();
				
			}
			
			
		}	
		
	}//End Showcase WebGL Core		
	
	
/*--------------------------------------------------
Function Showcase Carousel
---------------------------------------------------*/
	
	function ShowcaseCarousel() {
			
		if( $('#showcase-carousel-holder').length > 0 ){
			
			$("footer").addClass("showcase-footer");
			
			var swiperOptions = {
				direction: "horizontal",
				loop: true,
				resistance : true,
				resistanceRatio:0.5,
				slidesPerView: 'auto',
				grabCursor: false, 
				speed:700,
				autoplay: false,
				mousewheel: true,
				centeredSlides: false,
				parallax:true,
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				pagination: {
				  el: '.swiper-pagination',
						clickable: true,
						renderBullet: function (index, className) {
					    return '<span class="' + className + '">'+'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
									'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)" stroke="#FFF"'+ 'stroke-opacity="1" stroke-width="2px"></circle>' + '<circle class="solid-fill" cx="10" cy="10" r="3" fill="#FFF"></circle>' + '</svg></div></div></span>';
					},
			
				},						
				on: {					
					slideChangeTransitionStart: function () {
																	
						$('.swiper-slide').find('.slide-title').each(function() {
							$(this).removeClass('active-title');							
						});
						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
						
						
					},
					slideChangeTransitionEnd: function () {	
						
						$('.swiper-slide-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');							
						});
						
						$('.swiper-slide-duplicate-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');	
						});
						
						$('.swiper-slide-prev').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						$('.swiper-slide-next').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						
					},
  				},
			};
			
			
			var showcaseSwiper = new Swiper("#showcase-carousel", swiperOptions);	
			
			
			if( $('#showcase-carousel').length > 0 ){
				$('body').waitForImages({
					finished: function() {	
						showcaseSwiper.update();
					},				
					waitForAll: true
				});	
			}
			
			
			
			if (!isMobile()) {
				
				$("#showcase-carousel-holder .swiper-slide").on('mouseenter', function() {	
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.data('color'), backgroundColor:$this.data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="arrow-icon"></i>' );
					$this.closest('.swiper-slide').find('video').each(function() {
						$(this).get(0).play();
					});	
				});
									
				$("#showcase-carousel-holder .swiper-slide").on('mouseleave', function() {					
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();	
					$this.closest('.swiper-slide').find('video').each(function() {
						$(this).get(0).pause();
					});	
				});
			
			}
			
		}	
			
	}//End Showcase Carousel
	
	
/*--------------------------------------------------
Function Floating Lists
---------------------------------------------------*/

	function FloatingLists() {
	
		if( $('.showcase-list-holder').length > 0 ){
								
			
			if (!isMobile()) {
				
				$(".slide-list").mouseenter(function(e) {
					var $this = $(this);	
					$('.slide-list').addClass('disable');
					$this.removeClass('disable');				
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.data('color'), backgroundColor:$this.data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="arrow-icon"></i>' );
					$this.find('video').each(function() {
						$(this).get(0).play();
					});
				});
								
				$(".slide-list").mouseleave(function(e) {
					var $this = $(this);					
					$('.slide-list').removeClass('disable');
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();	
					$this.find('video').each(function() {
						$(this).get(0).pause();
					});
				});
				
				// Pinned Sections
								
				window.YearSectionArr = new Array();					
				$('.slide-list-year').each(function(){
					var $this = $(this);
					var $thisYear = $(this).children('.sl-year');
					var $thisSlide = $(this).children('.slide-list');
					const YearSection = ScrollTrigger.create({
						trigger: $this,
						start: "top top-=-100px",
						end: ( st ) => "+=" + (st.vars.trigger.outerHeight(true) - $thisSlide.outerHeight(true)),
						pin: $thisYear,
					});
					
					window.YearSectionArr.push(YearSection);
					
					setTimeout( function(){
						YearSection.refresh()	
					} , 200 );	
				});
				
			}
			
			
			if (isMobile()) {
				$('.hover-reveal').addClass('trigger-item-link');
				$('.sl-title').addClass('trigger-item-link');
			}
			
			if (!isMobile()) {
			
				if ($("body").hasClass("smooth-scroll")) {
					var elem = document.querySelector("#content-scroll");
					var scrollbar = Scrollbar.init(elem,
					{
						renderByPixels: true,
						damping:0.1
					});
				}
				
				const getMousePos = (e) => {
					let posx = 0;
					let posy = 0;
					if (!e) e = window.event;
					if (e.pageX || e.pageY) {
						posx = e.pageX;
						posy = e.pageY;
					}
					else if (e.clientX || e.clientY) 	{
						posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
						posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
					}
					return { x : posx, y : posy }
				}
			
				// Effect 1
				class HoverImgFx1 {
					constructor(el) {
						this.DOM = {el: el};
						this.DOM.reveal = this.DOM.el.querySelector('.hover-reveal');				
						this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
						this.DOM.revealInner.style.overflow = 'hidden';
						this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
						this.initEvents();
					}
					initEvents() {				
						
						this.positionElement = (ev) => {
							const mousePos = getMousePos(ev);
							if ($("body").hasClass("smooth-scroll")) {
								const docScrolls = {
									left : document.body.scrollLeft + document.documentElement.scrollLeft, 
									top : - scrollbar.scrollTop
								};
								gsap.to($('.hover-reveal'), { duration: 0.7, top: `${mousePos.y-($('.hover-reveal').height()/2)-docScrolls.top}px`, left: `${mousePos.x-($('.hover-reveal').width()/2)-docScrolls.left}px`, ease:Power4.easeOut });
							} else {
								const docScrolls = {
									left : document.body.scrollLeft + document.documentElement.scrollLeft, 
									top : document.body.scrollTop + document.documentElement.scrollTop
								};
								gsap.to($('.hover-reveal'), { duration: 0.7, top: `${mousePos.y-($('.hover-reveal').height()/2)-docScrolls.top}px`, left: `${mousePos.x-($('.hover-reveal').width()/2)-docScrolls.left}px`, ease:Power4.easeOut });
							}
							
						};
						this.mouseenterFn = (ev) => {
							this.positionElement(ev);
							this.showImage();
						};
						this.mousemoveFn = ev => requestAnimationFrame(() => {
							this.positionElement(ev);
						});
						this.mouseleaveFn = () => {
							this.hideImage();
						};
						
						this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
						this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
						this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
					}
					showImage() {
						gsap.killTweensOf(this.DOM.revealInner);
						gsap.killTweensOf(this.DOM.revealImg);
			
						this.tl = gsap.timeline({
							onStart: () => {
								this.DOM.reveal.style.opacity = 1;
								gsap.set(this.DOM.el, {zIndex: 1000});
							}
						})
						.add('begin')
						.add(gsap.to(this.DOM.revealInner, {
							duration: 0.4,
							ease: Sine.easeOut,
							startAt: {x: '-100%'},
							x: '0%'
						}), 'begin')
						.add(gsap.to(this.DOM.revealImg, {
							duration: 0.4,
							ease: Sine.easeOut,
							startAt: {x: '100%'},
							x: '0%'
						}), 'begin');
					}
					hideImage() {
						gsap.killTweensOf(this.DOM.revealInner);
						gsap.killTweensOf(this.DOM.revealImg);
			
						this.tl = gsap.timeline({
							onStart: () => {
								gsap.set(this.DOM.el, {zIndex: 999});
							},
							onComplete: () => {
								gsap.set(this.DOM.el, {zIndex: ''});
								gsap.set(this.DOM.reveal, {opacity: 0});
							}
						})
						.add('begin')
						.add(gsap.to(this.DOM.revealInner, {
							duration: 0.4,
							ease: Sine.easeOut,
							x: '100%'
						}), 'begin')
						
						.add(gsap.to(this.DOM.revealImg, {
							duration: 0.4,
							ease: Sine.easeOut,
							x: '-100%'
						}), 'begin');
					}
				}
				
				Array.from(document.querySelectorAll('.slide-list')).forEach(link => new HoverImgFx1(link));
				
			}
			
		}
		
		
	}// End Floating Lists
	
	
/*--------------------------------------------------
Function Snap Slider
---------------------------------------------------*/
	
	function SnapSlider() {
			
		if( $('.snap-slider-holder').length > 0 ){
			
			gsap.set($(".snap-slider-holder"), {opacity:0});
			
			$('body').waitForImages({
                finished: function() {
                    setTimeout(function() {
						
						const snapSlider = document.querySelector(".snap-slider-container");			
						
						const snapImages = gsap.utils.toArray(".snap-slide");
						var snapImagesHeight = 0
						snapImages.forEach(function( snapImage )  {
							snapImagesHeight += $(snapImage).outerHeight(true);
						});
						console.log(snapImagesHeight)
						
						const snapCaptions = gsap.utils.toArray(".snap-slide-caption");	
						const snapCaption = document.querySelector('.snap-slide-caption');			
						var snapCaptionsHeight = 0
						snapCaptions.forEach(function( snapCaption )  {
							snapCaptionsHeight += $(snapCaption).outerHeight(true);
						});
						
						
						$('.snap-slide').each(function(){
							var $this = $(this);
							gsap.to($this, {			  
							  scrollTrigger: {
								trigger: $this,
								start: "top 50%",
								end: "+=" + innerHeight,
								onEnter: function() { 
									$(".snap-slider-captions").children().eq($this.index()).addClass("in-view");
									$this.find('video').each(function() {
										$(this).get(0).play();
									});					
								},
								onLeave: function() { 
									$(".snap-slider-captions").children().eq($this.index()).removeClass("in-view");
									$this.find('video').each(function() {
										$(this).get(0).pause();
									});						
								},
								onEnterBack: function() { 
									$(".snap-slider-captions").children().eq($this.index()).addClass("in-view");
									$this.find('video').each(function() {
										$(this).get(0).play();
									});
								}, 
								onLeaveBack: function() { 
									$(".snap-slider-captions").children().eq($this.index()).removeClass("in-view");
									$this.find('video').each(function() {
										$(this).get(0).pause();
									});						
								},
							  }
							});			
						});
							
						
						
						gsap.fromTo(snapCaptions, {
							y: (window.innerHeight - snapCaption.offsetHeight)/2
						},{
							y: snapImagesHeight - snapCaptionsHeight - ((window.innerHeight - snapCaption.offsetHeight)/2),
							scrollTrigger: {
								trigger: snapSlider,
								scrub: true,					
								start: "top top",
								end: "+=" + innerHeight*(snapImages.length - 1),
							},
							ease: 'none'
						})
						
						
						gsap.set(snapImages, { height:window.innerHeight});
						
						const snap = gsap.utils.snap(1/(snapImages.length - 1));
					
						ScrollTrigger.create({
							trigger: snapImages,
							start: "top top",
							end: "+=" + innerHeight*(snapImages.length - 1),
							snap: {
								snapTo: snap,
								duration: {min: 0.2, max: 0.7},
								delay: 0,
								ease: "power4.inOut"
							}
						});
						
						
						snapImages.forEach((slide, i) => {
							let imageWrappers = slide.querySelectorAll('.img-mask');				
							gsap.fromTo(imageWrappers, {
								y: - window.innerHeight * snapSlider.dataset.parallax,
							},{
								y: window.innerHeight * snapSlider.dataset.parallax,
								scrollTrigger: {
									trigger: slide,
									scrub: true,
									start: "top bottom",
								},
								ease: 'none'
							})
						});
						
						gsap.to($(".snap-slider-holder"), {duration: 0.7, opacity:1, delay:0.2, ease:Power2.easeOut});
			
					}, 100);
                },
                waitForAll: true
            });
			
			if (!isMobile()) {
				
				$(".slide-title-wrapper").mouseenter(function(e) {
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.parents(".snap-slide-caption").data('color'), backgroundColor:$this.parents(".snap-slide-caption").data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="arrow-icon"></i>' );
					$this.closest('.item').find('video').each(function() {
						$(this).get(0).play();
					});
				});
								
				$(".slide-title-wrapper").mouseleave(function(e) {
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();	
					$this.closest('.item').find('video').each(function() {
						$(this).get(0).pause();
					});
				});
			}
			
			
			// Snap Slider Project Load Events
			if (!$("body").hasClass("disable-ajaxload")) {
				$('.snap-slider-holder .slide-title').on('click', function() {
					let parent_slide = $(this).closest( '.snap-slide-caption' );
					parent_slide.addClass('above');					
					$("body").addClass("load-project-thumb").addClass("show-loader");
					if (!$("#page-content").hasClass("light-content")) {
						setTimeout( function(){
							$("header").removeClass("white-header");
						} , 100 );						
					}										
					gsap.to('.snap-slider-holder, #hero, #page-nav, footer, .fadeout-element', {duration: 0.5, opacity:0, delay:0.2, ease:Power4.easeInOut});					
					
					gsap.to('.slide-title span', {duration: 0.5, y:-120, opacity:0, stagger: 0.02, ease:Power2.easeInOut});
					gsap.to('.slide-subtitle span', {duration: 0.5, y:-60, opacity:0, stagger: 0.02, ease:Power2.easeInOut});
						
					$(this).delay(300).queue(function() {
						var link = $(".above").find('a');
						link.trigger('click');
					});
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball p').remove();
					$('#ball i').remove();				
				});
			}  else {				
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
			}
			
			
		}


	}//End SnapSlider	
	
	
/*--------------------------------------------------
Function Reverse Lists
---------------------------------------------------*/

	function ReverseLists() {
	
		if( $('.showcase-reverse-list-holder').length > 0 ){
		
			if ($(window).width() > 1024) {		
				
					
				var winHeight = $(window).height();
								
				$('.showcase-reverse-list').css({'height': winHeight});
				
				var resizeTime;
				$(window).resize(function() {
					clearTimeout(resizeTime);
					resizeTime = setTimeout(doneResizing, 100);
				});
				
				function doneResizing(){
					var winHeight = $(window).height();				
					$('.showcase-reverse-list').css({'height': winHeight});	
				}
				
				gsap.utils.toArray('.showcase-reverse-list').forEach((showcaseReverse) => {				
				
					var imageHeight = $('.sr-slide').outerHeight(true);
					
					const leftCol = gsap.utils.toArray( ".col-reverse-left .sr-slide" );
					const leftLastchild = leftCol[leftCol.length-1];
					for (var i = 0; i < leftCol.length; i++){
						theLeftCol = leftCol[i];
						const leftImages = gsap.utils.toArray(leftCol, theLeftCol );
								
						var leftImagesHeight = 0 - $(leftLastchild).outerHeight(true);
						leftImages.forEach(function( leftImage )  {
							leftImagesHeight += $(leftImage).outerHeight(true);
						});
					}
					
					
					
					const centerCol = gsap.utils.toArray( ".col-reverse-center .sr-slide" );
					for (var i = 0; i < centerCol.length; i++){					
						theCenterCol = centerCol[i];
						const centerImages = gsap.utils.toArray(centerCol, theCenterCol );
								
						var centerImagesHeight = 0 - window.innerHeight;
						centerImages.forEach(function( centerImage )  {
							centerImagesHeight += $(centerImage).outerHeight(true);
						});
					}
					
					const rightCol = gsap.utils.toArray( ".col-reverse-right .sr-slide" );
					const rightLastchild = rightCol[rightCol.length-1];
					for (var i = 0; i < rightCol.length; i++){
						
						theRightCol = rightCol[i];
						const rightImages = gsap.utils.toArray(rightCol, theRightCol );
								
						var rightImagesHeight = 0 - $(rightLastchild).outerHeight(true);
						rightImages.forEach(function( rightImage )  {
							rightImagesHeight += $(rightImage).outerHeight(true);
						});
					}
					
					var durationHeight = centerImagesHeight * 3			
				
					ScrollTrigger.create({			
						trigger: ".showcase-reverse-list",
						scrub: true,
						pin: true,
						start: () => "top top",
						end: () => "+=" + durationHeight,			
					});
					
					
					
					gsap.set(".col-reverse-left", {y:-leftImagesHeight});
					
					gsap.timeline({
						scrollTrigger: {
							trigger: ".showcase-reverse-list",
							start: "top top",
							end: () => "+=" + durationHeight,
							scrub: true,
						}
					}).to(".col-reverse-left", {y:window.innerHeight-imageHeight});
					
					
					
					gsap.set(".col-reverse-right", {y:-rightImagesHeight});
					
					gsap.timeline({
						scrollTrigger: {
							trigger: ".showcase-reverse-list",
							start: "top top",
							end: () => "+=" + durationHeight,
							scrub: true,
						}
					}).to(".col-reverse-right", {y:window.innerHeight-imageHeight});
					
					
					
					gsap.timeline({
						scrollTrigger: {
							trigger: ".showcase-reverse-list",
							start: "top top",
							end: () => "+=" + durationHeight,
							scrub: true,
						}
					}).to(".col-reverse-center", {y:-centerImagesHeight});
				
				});
			
			
				
				$(".sr-slide").mouseenter(function(e) {
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.data('color'), backgroundColor:$this.data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="arrow-icon"></i>' );
					$this.find('video').each(function() {
						$(this).get(0).play();
					});
				});
								
				$(".sr-slide").mouseleave(function(e) {
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();	
					$this.find('video').each(function() {
						$(this).get(0).pause();
					});
				});
			}
			
		}
		
		
	}// End Reverse Lists


/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/	
		
	function Portfolio() {
			
		if( $('.portfolio-wrap').length > 0 ){
			
			var $container = $('.portfolio');
		
			$container.isotope({
			  layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				if( selector != '*' ){
					
					$('.portfolio').addClass('filters-active');
				}
				else{
					
					$('.portfolio').removeClass('filters-active');
				}
				$container.isotope({ filter: selector }, function( $changedItems, instance ) {
				  instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
				  instance.$filteredAtoms.addClass('is-filtered');
				});		
				return false;
			});
			
			
			$('.portfolio-wrap').waitForImages({
				finished: function() {
					$("#all").trigger('click');
				},
				waitForAll: true
			});
			
			
			if ($('.portfolio-wrap').hasClass('parallax-two-grid')) {						
				if ($(window).width() > 767) {		
					$('.portfolio-wrap').waitForImages({
						finished: function() {
							gsap.utils.toArray('.vertical-parallax').forEach((parallaxElement, index) => {
								const parallaxElementChild = parallaxElement.querySelector(".item-parallax");
								const offsetParallax = parallaxElementChild.offsetHeight;					
								gsap.fromTo( parallaxElementChild, { y: offsetParallax * 0.3 },	{ y: -offsetParallax, 
									ease: "none",
										scrollTrigger: {
											trigger: parallaxElement,
											scrub: 1,
										}
									}
								);
							});
						},
						waitForAll: true
					});
				}
			
			}
			
			
			if ($('.portfolio-wrap').hasClass('parallax-grid')) {						
				if ($(window).width() > 767) {		
					$('.portfolio-wrap').waitForImages({
						finished: function() {
							gsap.utils.toArray('.item').forEach((parallaxElement, index) => {
								const parallaxElementChild = parallaxElement.querySelector(".item-parallax");
								const startMovement = (parallaxElement.offsetHeight * parallaxElement.dataset.startparallax);
								const endMovement = (parallaxElement.offsetHeight * parallaxElement.dataset.endparallax);						
								gsap.fromTo( parallaxElementChild, { y: startMovement },	{ y: endMovement, 
									ease: "none",
										scrollTrigger: {
											trigger: parallaxElement,
											scrub: true,
										}
									}
								);
							});
						},
						waitForAll: true
					});
				}			
			}
			
			
			if ($('.portfolio-wrap').hasClass('ladder-grid')) {
				if ($(window).width() > 767) {	
					let delSections = document.querySelectorAll(".item");
					
					delSections.forEach(itemThumb => {				
						
						let imageAnim = gsap.to(itemThumb.querySelector(".item-parallax"), {
							y: "-100vh",
							ease: "none",
							paused: true
						});	
										
						let progressTo = gsap.quickTo(imageAnim, "progress", {ease: "power3", duration: parseFloat(itemThumb.dataset.scrub) || 0.2 });					
						
						gsap.to(itemThumb, {
							y: "100vh",
							ease: "none",
							scrollTrigger: { 
								scrub: true,
								trigger: itemThumb,
								start: "top bottom",
								end: "bottom top",
								onUpdate: self => progressTo(self.progress)
							}
						});	
									
					});
				}				
			}
			
			
			if ($('.portfolio-wrap').hasClass('scaleout-grid')) {						
				if ($(window).width() > 767) {		
					$('.portfolio-wrap').waitForImages({
						finished: function() {
							gsap.utils.toArray('.item').forEach((parallaxElement, index) => {
								const parallaxElementChild = parallaxElement.querySelector(".item-parallax");
								const startMovement = (parallaxElement.offsetHeight * parallaxElement.dataset.startparallax);
								const endMovement = (parallaxElement.offsetHeight * 0.25);						
								gsap.fromTo( parallaxElementChild, { y: 0 },	{ y: endMovement, scale:0.5, opacity:1,
									ease: "none",
										scrollTrigger: {
											trigger: parallaxElement,
											scrub: true,
											start: "top top",
										}
									}
								);
							});
						},
						waitForAll: true
					});
				}			
			}

			
			//Show Filters On overlay
			$('#show-filters, #close-filters').on('click', function() {			
				$('#filters-overlay').toggleClass('active');
				var navtitleheight = $(".hero-title").height()
				var navsubtitleheight = $(".hero-subtitle").height()
				
				setTimeout( function(){			
					if ($('#filters-overlay').hasClass("active")) {
						
						gsap.to($(".item-parallax"), {duration: 0.6, force3D:true, scale:0.9, opacity:0.3, delay:0.1, ease:Power2.easeInOut});					
						gsap.to($(".active .item-caption"), {duration: 0.3, opacity:0, ease:Power2.easeOut});
						gsap.to($("#show-filters, #counter-wrap"), {duration: 0.3, opacity:0, delay:0, ease:Power2.easeOut});
						gsap.to($("#show-filters, #counter-wrap"), {duration: 0, visibility:'hidden', delay:0.35, ease:Power2.easeOut}); 
						
						//Fade In Navigation Lists
						gsap.set($(".filters-info"), {y:30, opacity:0});
						gsap.to($(".filters-info"), {duration: 0.4, force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut});
						var tlMenu = gsap.timeline();
						tlMenu.set($(".filters-timeline a"), {y:60, opacity:0});
						$(".filters-timeline a").each(function(index, element) {
							tlMenu.to(element, {duration: 0.5, y:0, opacity:1, delay:0.3, ease:Power3.easeOut}, index * 0.1)
						});
							
					} else {
						
						gsap.to($(".item-parallax"), {duration: 0.6, force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});					
						gsap.to($(".active .item-caption"), {duration: 0.5, opacity:1, delay:0.5, ease:Power2.easeOut});
						gsap.set($("#show-filters, #counter-wrap"), {visibility:'visible', opacity:0});
						gsap.to($("#show-filters, #counter-wrap"), {duration: 0.3, opacity:1, delay:0.7, ease:Power2.easeOut});
						
						//Fade Out Navigation Lists
						gsap.to($(".filters-info"), {duration: 0.2, force3D:true, y:-30, opacity:0, delay:0, ease:Power1.easeIn});					
						var tlMenu = gsap.timeline();
						$(".filters-timeline a, .jssocials-share").each(function(index, element) {
							tlMenu.to(element, {duration: 0.25, opacity:0, y:-60, delay:0.1, ease:Power1.easeIn }, index * 0.1)
						});	
						gsap.to('#ball', {duration: 0.1, borderWidth: '4px', scale:0.5,});
						$("#ball").removeClass("close-icon");
						$('#ball i').remove();
						
					}							
				} , 20 );
			});
			
			
			gsap.to(".portfolio", {			  
				scrollTrigger: {
					trigger: ".portfolio",
					start: "top 40%",
					end: "bottom 90%",
					scrub: true,
					onEnter: function(st) { 
						gsap.to($("#show-filters"), {duration: 0.3, opacity:1, delay:0, ease:Power2.easeOut});
						$("#show-filters").addClass('enabled')					
					},
					onEnterBack: function(st) {
						gsap.to($("#show-filters"), {duration: 0.3, opacity:1, delay:0, ease:Power2.easeOut});
						$("#show-filters").addClass('enabled')
					},					
					onLeave: function(st) { 
						gsap.to($("#show-filters"), {duration: 0.15, opacity:0, delay:0, ease:Power2.easeOut});
						$("#show-filters").removeClass('enabled')				
					},
					onLeaveBack: function(st) { 
						gsap.to($("#show-filters"), {duration: 0.15, opacity:0, delay:0, ease:Power2.easeOut});
						$("#show-filters").removeClass('enabled')				
					},
					invalidateOnRefresh: true
				}
			});
			
			
			if (!isMobile()) {
				
				$(".item-parallax").mouseenter(function(e) {
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.parent().data('color'), backgroundColor:$this.parent().data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).addClass("with-icon").append( '<i class="arrow-icon"></i>' );
					$this.closest('.item').find('video').each(function() {
						$(this).get(0).play();
					});
				});
								
				$(".item-parallax").mouseleave(function(e) {
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();	
					$this.closest('.item').find('video').each(function() {
						$(this).get(0).pause();
					});
				});
				
				$("#close-filters").mouseenter(function(e) {	
					$( "#ball" ).addClass("close-icon").append( '<i class="fa-solid fa-xmark"></i>' );
					if ($('#page-content').hasClass("light-content")) {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff',});
						gsap.to('#ball i', {duration: 0.2, css:{color:"#fff"}});
					} else {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#000',});
						gsap.to('#ball i', {duration: 0.2, css:{color:"#000"}});
					}
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
				});
					
				$("#close-filters").mouseleave(function(e) {
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					gsap.to('#ball-loader', {duration: 0.2,borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("close-icon");
					$('#ball i').remove();
				});
			}
			
		}
	
	}//End Portfolio
	
	
	/*--------------------------------------------------
Function Blog Page Load
---------------------------------------------------*/
	function BlogPageLoad() {
		
		gsap.to($("#hero .entry-date li"), {duration: 0.4,  y: 0, opacity:1, delay:1.4, ease:Power2.easeOut});
		
		var animateHeroMeta = gsap.timeline();		
		$("#hero .entry-categories li").each(function(index, element) {
			animateHeroMeta.to(element, {duration: 0.7, y:0, opacity:1, delay:1.5, ease:Power2.easeOut}, index * 0.02)
		});
		
		gsap.to($("#blog-page-content"), {duration: 0.4, opacity:1, delay:1.8, ease:Power2.easeOut});
		gsap.to($("#blog-post-content"), {duration: 0.4, opacity:1, delay:1.8, ease:Power2.easeOut});
		
		setTimeout( function(){
			$('#blog-effects article').addClass('show-borders')
		} ,300 );
		
	}//End Blog	Page Load
	
	
/*--------------------------------------------------
Function Blog Lazy Load
---------------------------------------------------*/
	function BlogLazyLoad() {
		
		gsap.to($("#hero .entry-date li"), {duration: 0.4,  y: 0, opacity:1, delay:0.1, ease:Power2.easeOut});
		
		var animateHeroMeta = gsap.timeline();		
		$("#hero .entry-categories li").each(function(index, element) {
			animateHeroMeta.to(element, {duration: 0.7, y:0, opacity:1, delay:0.2, ease:Power2.easeOut}, index * 0.02)
		});
		
		gsap.to($("#blog-page-content"), {duration: 0.4, opacity:1, delay:0.6, ease:Power2.easeOut});
		gsap.to($("#blog-post-content"), {duration: 0.4, opacity:1, delay:0.6, ease:Power2.easeOut});
		
		setTimeout( function(){
			$('#blog-effects article').addClass('show-borders')
		} ,300 );
		
	}//End Blog	Lazy Load	
	
	
/*--------------------------------------------------
Function Blog
---------------------------------------------------*/
	function Blog() {
		
		if( $('#blog-nav-minimal').length > 0 ){
			$('#blog-page-nav').removeClass("content-max-width");
		}
		
		if (!isMobile()) {				
			$("article .post-title, article .hover-reveal").mouseenter(function(e) {
				var $this = $(this);					
				gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:'#000', backgroundColor:'#000'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
				$( "#ball" ).addClass("with-icon").append( '<i class="arrow-icon"></i>' );
			});
							
			$("article .post-title, article .hover-reveal").mouseleave(function(e) {
				var $this = $(this);					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
					$('#ball i').remove();
			});
		}
		
		gsap.to($("#sidebar"), {duration: 0.7, opacity:1, delay:0.3, ease:Power2.easeOut});
		
		$('a.ajax-link').on('click', function() {
			gsap.to($("#sidebar"), {duration: 0.3, opacity:0, delay:0});
		});
		
		$("#black-fade").mouseenter(function(e) {	
			gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff',});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).addClass("close-icon").append( '<i class="fa-solid fa-xmark"></i>' );
		});
					
		$("#black-fade").mouseleave(function(e) {
			gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999',});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("close-icon");
			$('#ball i').remove();
		});
		
		$("#black-fade").on('click', function() {	
			gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999',});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
			$("#ball").removeClass("close-icon");
			$('#ball i').remove();
		});
		
		$('#open-sidebar, #open-sidebar-nav, #black-fade').on('click', function() {
			$('#open-sidebar').toggleClass('open');
			$('#sidebar').toggleClass('open');
			$('#black-fade').toggleClass('fade-in');
		});
		
		$('#sidebar select').wrap( "<div class='select hide-ball'></div>" );
	
	}//End Blog
	
/*--------------------------------------------------
Function Shop 
---------------------------------------------------*/
	function Shop() {
		
		//Header Cart
    
		var parallaxWrap = $('<div class="parallax-wrap"></div>');
		var parallaxElement = $('<div class="parallax-element"></div>');
		var cartTitle = $('.site-header-cart.menu .widgettitle');
		cartTitle.wrap(parallaxWrap).wrap(parallaxElement);
		
		$('.woocommerce ul.cart_list li a, .woocommerce ul.product_list_widget li a').addClass("link");
		
		
		//Catalog Page

		
		if ($('.woocommerce ul.products').length && !$('.woocommerce div.product').length) {
			$('.woocommerce .site-main').addClass('no-padding');
			$('.woocommerce-products-header').addClass("content-full-width text-align-center").attr("id", "hero-caption");
			$('.woocommerce-products-header__title').addClass("hero-title caption-timeline");
			
			var heroFooter = $('<div id="hero-footer"></div>');
			var heroFooterLeft = $('<div class="hero-footer-left"></div>');
			var heroFooterRight = $('<div class="hero-footer-right"></div>');
			heroFooter.append(heroFooterLeft);
			heroFooter.append(heroFooterRight);
			$('.woocommerce .site-main .woocommerce-result-count').appendTo(heroFooterLeft);
			$('.woocommerce .site-main .woocommerce-ordering').appendTo(heroFooterRight);
			$('.woocommerce-products-header').append(heroFooter);
		}
		
		$('.woocommerce-ordering').addClass("link");
		
		$('.woocommerce nav.woocommerce-pagination ul li a').addClass("link");
		
		var shopTitle = $('.woocommerce-products-header__title.page-title');
		if (shopTitle.find('em').length > 0) {
			var emText = shopTitle.find('em').html();
			shopTitle.find('em').replaceWith('<span><em>' + emText + '</em></span>');
		}
		shopTitle.contents().filter(function() {
			return this.nodeType === 3; 
		}).wrap('<span></span>');
		
		
		$('.woocommerce ul.products li.product').each(function() {
			
			var productCaption = $('<div class="product-caption"></div>');
			productCaption.appendTo($(this));
			
			var productImg = $(this).find('img');
			var onSale = $(this).find('.onsale');
			var productPrice = $(this).find('.price');
			var productTitle = $(this).find('.woocommerce-loop-product__title');
			var productCart = $(this).find('.add_to_cart_button');
			
			productImg.wrap('<div class="product-img-mask"></div>');
			
			if (onSale.length > 0) {				
				onSale.appendTo(productImg.closest('.product-img-mask'));
			}			
			if (productTitle.length > 0) {
				productTitle.appendTo(productCaption);
			}			
			if (productPrice.length > 0) {
				productPrice.appendTo(productCaption);
			}			
		});
		
		$('.prev.page-numbers').text('PREV');
		$('.next.page-numbers').text('NEXT');
		
		
		gsap.set($(".woocommerce ul.products li.product .product-img-mask"), {scaleY:1.1, y:100, opacity:0, filter: 'brightness(150%)'});
		
		if (isMobile()) {
			gsap.set($(".woocommerce ul.products li.product .product-caption"), {y:10, opacity:0});
			gsap.set($(".woocommerce ul.products li.product .button"), {opacity:0});
		}
						
		var productAnimation = gsap.utils.toArray('.woocommerce ul.products li.product .product-img-mask');			
		productAnimation.forEach(function(showProduct) {					
			gsap.to(showProduct, { 					
				scrollTrigger: {
					trigger: showProduct,
					start: "top 100%",
					stagger:0.5,
					onEnter: function() {
						showProduct.closest('.woocommerce ul.products li.product').classList.add('animated');
						setTimeout( function(){								
							var parentProduct = showProduct.closest('.woocommerce ul.products li.product');
							parentProduct.classList.add('show-caption');
							if (isMobile()) {									
								var productCaption = parentProduct.querySelector('.product-caption');
								var productCart = parentProduct.querySelector('.button');
								gsap.to([productCaption, productCart], {duration: 0.3, y: 0, opacity: 1, delay: 0, ease: Power2.easeOut});
							}
						} , 500 );						
						
					},
				},
				duration: 0.7,
				delay:0.1, 	
				scaleY:1, 
				y:0,
				opacity:1,	
				filter: 'brightness(100%)',
				ease:Power2.easeOut, onComplete: function() {												
					gsap.set(showProduct, {opacity:""});
				}
			});
		});
		
		if (!isMobile()) {	
			
			$(".woocommerce ul.products li img").mouseenter(function(e) {
				var $this = $(this);					
				gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:'#000', backgroundColor:'#000'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
				$( "#ball" ).addClass("with-icon").append( '<i class="arrow-icon"></i>' );
			}).mouseleave(function(e) {
				var $this = $(this);					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
			
			$(".woocommerce ul.products li").on('mouseenter', function() {
				gsap.set($(this).find('.woocommerce-loop-product__title'), {y:30, opacity:0, });
				gsap.set($(this).find('.price'), {y:30, opacity:0, });
				gsap.to($(this).find('.product-caption'), {duration: 0.2, opacity:1, ease:Power2.easeOut});
				gsap.to($(this).find('.woocommerce-loop-product__title'), {duration: 0.3, y:0, opacity:1, ease:Power2.easeOut});										
				gsap.to($(this).find('.price'), {duration: 0.3, y:0, delay:0.05, opacity:1, ease:Power2.easeOut});
				
			}).on('mouseleave', function() {
				
				gsap.to($(this).find('.product-caption'), {duration: 0.3, opacity:0, delay:0.1, ease:Power2.easeOut});					
				gsap.to($(this).find('.woocommerce-loop-product__title'), {duration: 0.3, y:-30, opacity:0, ease:Power2.easeOut});					
				gsap.to($(this).find('.price'), {duration: 0.5, y:-30, delay:0.05, opacity:0, ease:Power2.easeOut});
				
			});
		
		}
		
		
		//Product Page
		
		if ($('.woocommerce div.product').length) {
			if ($('.clapat-shop-product-summary-sticky').length) {			
				if ($(window).width() > 767) {	
					var pinnedSection = gsap.utils.toArray('.woocommerce div.product div.summary');			
					pinnedSection.forEach(function(pinElement) {
						
						var parentNode = pinElement.parentNode;
						var scrollingElement = parentNode.querySelector('.woocommerce div.product div.images');
						
						var pinnedScene = ScrollTrigger.create({
							trigger: pinElement,
							start: "top top-=-120px",
							end: () => `+=${scrollingElement.offsetHeight - pinElement.offsetHeight}`,
							pin: pinElement,
						});
					});
				}	
			}
			
			$('.woocommerce div.product').addClass("content-full-width");
			$('.woocommerce div.product .woocommerce-tabs ul.tabs li').addClass("link");
			$('.woocommerce div.product form.cart .group_table td a').addClass("link");
			$('.woocommerce-product-gallery__image a').addClass("image-link");
			$('.woocommerce div.product form.cart .reset_variations, .woocommerce #review_form #respond .form-submit input').addClass("link");
			$('.woocommerce-product-gallery__wrapper').append($('.woocommerce div.product > .onsale'));
			
			var selectWrap = $('<div class="select"></div>');
			var selectInput = $('.variations_form.cart select');
			selectInput.wrap(selectWrap);
		
		}
		
		//Other Pages
		
		$('#main > .woocommerce-notices-wrapper').addClass("content-full-width");
		$('.woocommerce .woocommerce-MyAccount-navigation a, .woocommerce .woocommerce-MyAccount-content a').addClass("link");
    
		var inputElements = $('.woocommerce-billing-fields input.input-text, .woocommerce-address-fields input.input-text');
		if (inputElements.length > 0) {
			inputElements.each(function() {
				var nameBox = $('<div class="name-box"></div>');
				var labelElement = $('<label class="input_label"></label>');
				var inputClone = $(this).clone();
				inputClone.appendTo(nameBox);
				labelElement.appendTo(nameBox);
				$(this).replaceWith(nameBox);
			});
		}
		
		var textareaElements = $('.woocommerce-additional-fields textarea.input-text, .woocommerce #reviews #comment');
		if (textareaElements.length > 0) {
			textareaElements.each(function() {
				var nameBox = $('<div class="message-box"></div>');
				var labelElement = $('<label class="input_label"></label>');
				var inputClone = $(this).clone();
				inputClone.appendTo(nameBox);
				labelElement.appendTo(nameBox);
				$(this).replaceWith(nameBox);
			});
		}
		
		//Sidebar
		
		$('.wc-block-components-price-slider__controls .wc-block-components-price-slider__amount').addClass("hide-ball");
		
		$('.woocommerce .woocommerce-breadcrumb a, .wp-block-woocommerce-customer-account a .label, .wc-block-components-price-slider__actions, .wc-block-stock-filter__actions, .wc-block-attribute-filter__actions, .wc-block-product-categories-list li a, .wc-block-mini-cart').addClass("link");
		
		
		
	}//End Shop	
	
	
/*--------------------------------------------------
Function Shop Page Load
---------------------------------------------------*/
	function ShopPageLoad() {
		
		setTimeout( function(){	
			
			gsap.set($(".woocommerce-products-header__title.page-title span"), {y: 120, opacity:0});
			gsap.to($(".woocommerce-products-header__title.page-title span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:1, ease:Power3.easeOut });
			gsap.to($(".woocommerce-products-header__title.page-title span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:1, ease:Power3.easeOut });
			
			gsap.to($(".woocommerce div.product"), {duration: 0.7, y: 0, opacity:1, delay:0.5, ease:Power3.easeOut });
			
			
			
			
			gsap.to($(".woocommerce .woocommerce-result-count, .woocommerce-ordering"), {duration: 0.3, y:0, opacity:1, delay:1.3, ease:Power2.easeOut, onComplete: function() {
				$(".woocommerce ul.products").addClass("visible");																			
			}});
			
			gsap.set($(".woocommerce ul.products li.product.animated .product-img-mask"), {scaleY:1.1, y:100, opacity:0, filter: 'brightness(150%)'});
			gsap.to($(".woocommerce ul.products li.product.animated .product-img-mask"), {duration: 0.7, scaleY:1, y:0, opacity:1, stagger:0.1, delay:1.4, filter: 'brightness(100%)', ease:Power2.easeOut});
			
			if (isMobile()) {
				gsap.set($(".woocommerce ul.products li.product.animated .product-caption, .woocommerce ul.products li.product.animated .button"), {opacity:0});
				gsap.to($(".woocommerce ul.products li.product.animated .button"), {duration: 0.3, opacity:1, stagger:0.1, delay:1.8, ease:Power2.easeOut});
				gsap.to($(".woocommerce ul.products li.product.animated .product-caption"), {duration: 0.3, opacity:1, stagger:0.1, delay:1.8, ease:Power2.easeOut});
			}						
			
			
								
		} , 600 );
		
	}//End Shop	Page Load

	window.LoadViaAjax = function() {		
		
		CleanupBeforeAjax();
		FirstLoad();
		ScrollEffects();
		Sliders();
		PageLoadActions();		
		FloatingLists();
		ReverseLists();
		SnapSlider();
		FitThumbScreenGSAP();
		ShowcaseSlider();
		ShowcaseWebglCore();
		ShowcaseCarousel();		
		FitThumbScreenWEBGL();		
		LazyLoad();				
		Portfolio();			
		Shortcodes();		
		JustifiedGrid();
		Lightbox();
		PlayVideo();
		BlogLazyLoad();
		Blog();
		InitContactMap();
		CustomFunction();
		
	}//End Load Via Ajax
	
});	


var LoadViaAjax = window.LoadViaAjax;
	
	
