$(document).ready(function() {

    // Blur images on mouse over
    $(".works a").hover(function() {
        $(this).children("img").animate({
            opacity: 0.75
        }, "fast");
    }, function() {
        $(this).children("img").animate({
            opacity: 1.0
        }, "slow");
    });

    //works Mouse Effects
    $('.item').mouseenter(function(e) {
        $(this).find('.overlay-block').fadeIn(1000, 'swing');

    });

    $('.item').mouseleave(function(e) {
        $('.item').find('.overlay-block').fadeOut(100);
    });

    // Initialize prettyPhoto plugin
    $(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({
        theme: 'light_square',
        autoplay_slideshow: false,
        overlay_gallery: false,
        show_title: false
    });

    // Clone portfolio items 
    var $data = $(".portfolio").clone();

    // Attempt to call Quicksand on every click event handler
    $(".filter a").click(function(e) {

        $(".filter li").removeClass("current");

        // Get the class attribute value of the clicked link
        var $filterClass = $(this).parent().attr("class");

        if ($filterClass == "all") {
            var $filteredPortfolio = $data.find("li");
        } else {
            var $filteredPortfolio = $data.find("li[data-type~=" + $filterClass + "]");
        }

        // Call quicksand
        $(".portfolio").quicksand($filteredPortfolio, {
            duration: 800,
            easing: 'easeInOutQuad'
        }, function() {

            // Blur images on mouse over
            $(".works a").hover(function() {
                $(this).children("img").animate({
                    opacity: 0.75
                }, "fast");
            }, function() {
                $(this).children("img").animate({
                    opacity: 1.0
                }, "slow");
            });

            //works Mouse Effects
            $('.item').mouseenter(function(e) {
                $(this).find('.overlay-block').fadeIn(1000, 'swing');
            });

            $('.item').mouseleave(function(e) {
                $('.item').find('.overlay-block').fadeOut(100);
            });

            // Initialize prettyPhoto plugin
            $(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({
                theme: 'light_square',
                autoplay_slideshow: false,
                overlay_gallery: false,
                show_title: false
            });

        });

        $(this).parent().addClass("current");

        // Prevent the browser jump to the link anchor
        e.preventDefault();
    })
});

$(document).ready(function() {

    //Mobile Nav - Manual Collapse with Easing
    $('.btn-navbar').click(function(e) {
        $('.main-link a').addClass('aura-collapse-triggered');
        $('.nav-collapse').slideDown('slow', 'swing');

        $('.aura-collapse-triggered').click(function(e) {
            $('.nav-collapse').slideUp('slow', 'swing');
        });
    });

});

$(document).ready(function() {

    $('#main-nav li a').click(function(e) {
        $('#main-nav li').removeClass('active');
        $(this).parent('li').addClass('active');
    });
});

$(document).ready(function() {
    $(".scrollme").scrollerBird({
        speed: 1500,
        easing: 'easeInOutExpo',
    });
});

$(document).ready(function(e) {

    $('#left-panel').stop().animate({
        top: '-7800px'
    });
    $('.promo-home').stop().animate({
        marginTop: '-30px'
    });

    $('#about').waypoint(function(event, direction) {
        if (direction === 'down') {
            $('#left-panel').stop().animate({
                top: '-6500px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-about').addClass('active');
        } else {
            $('#left-panel').stop().animate({
                top: '-7800px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-home').addClass('active');
        }
    }, {
        offset: '75%',
        scrollThrottle: 2000,
        resizeThrottle: 500
    });

    $('#portfolio').waypoint(function(event, direction) {
        if (direction === 'down') {
            $('#left-panel').stop().animate({
                top: '-5200px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-portfolio').addClass('active');
        } else {
            $('#left-panel').stop().animate({
                top: '-6500px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-about').addClass('active');
        }
    }, {
        offset: '75%',
        scrollThrottle: 2000,
        resizeThrottle: 500
    });

    $('#services').waypoint(function(event, direction) {
        if (direction === 'down') {
            $('#left-panel').stop().animate({
                top: '-3900px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-services').addClass('active');
        } else {
            $('#left-panel').stop().animate({
                top: '-5200px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-portfolio').addClass('active');
        }
    }, {
        offset: '75%',
        scrollThrottle: 2000,
        resizeThrottle: 500
    });

    $('#team').waypoint(function(event, direction) {
        if (direction === 'down') {
            $('#left-panel').stop().animate({
                top: '-2600px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-team').addClass('active');
        } else {
            $('#left-panel').stop().animate({
                top: '-3900px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-services').addClass('active');
        }
    }, {
        offset: '75%',
        scrollThrottle: 2000,
        resizeThrottle: 500
    });

    $('#blog').waypoint(function(event, direction) {
        if (direction === 'down') {
            $('#left-panel').stop().animate({
                top: '-1300px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-blog').addClass('active');
        } else {
            $('#left-panel').stop().animate({
                top: '-2600px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-team').addClass('active');
        }
    }, {
        offset: '75%',
        scrollThrottle: 2000,
        resizeThrottle: 500
    });

    $('#contact').waypoint(function(event, direction) {
        if (direction === 'down') {
            $('#left-panel').stop().animate({
                top: '0px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-contact').addClass('active');
        } else {
            $('#left-panel').stop().animate({
                top: '-1300px'
            }, 1000, 'swing');
            $('#main-nav li').removeClass('active')
            $('#nav-blog').addClass('active');
        }
    }, {
        offset: '75%',
        scrollThrottle: 2000,
        resizeThrottle: 500
    });
});

$(document).ready(function(){

	// Blur images on mouse over
	$(".works a").hover( function(){ 
		$(this).children("img").animate({ opacity: 0.75 }, "fast"); 
	}, function(){ 
		$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
	}); 
	
	//works Mouse Effects
	$('.item').mouseenter(function(e) {
		$(this).find('.overlay-block').fadeIn(1000,'swing');
		
	});
	
	$('.item').mouseleave(function(e) {
		$('.item').find('.overlay-block').fadeOut(100);
	});

	
	// Initialize prettyPhoto plugin
	$(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({
		theme:'light_square', 
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		show_title: false
	});

	// Clone portfolio items 
	var $data = $(".portfolio").clone();
	
	// Attempt to call Quicksand on every click event handler
	$(".filter a").click(function(e){

		$(".filter li").removeClass("current");	
		
		// Get the class attribute value of the clicked link
		var $filterClass = $(this).parent().attr("class");

		if ( $filterClass == "all" ) {
			var $filteredPortfolio = $data.find("li");
		} else {
			var $filteredPortfolio = $data.find("li[data-type~=" + $filterClass + "]");
		}

		// Call quicksand
		$(".portfolio").quicksand( $filteredPortfolio, { 
			duration: 800, 
			easing: 'easeInOutQuad' 
		}, function(){
			
		// Blur images on mouse over
			$(".works a").hover( function(){ 
			$(this).children("img").animate({ opacity: 0.75 }, "fast"); 
			}, function(){ 
			$(this).children("img").animate({ opacity: 1.0 }, "slow"); 
			}); 
							
		//works Mouse Effects
			$('.item').mouseenter(function(e) {
			$(this).find('.overlay-block').fadeIn(1000,'swing');
			});

			$('.item').mouseleave(function(e) {
			$('.item').find('.overlay-block').fadeOut(100);
			});

			// Initialize prettyPhoto plugin
			$(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({
			theme:'light_square', 
			autoplay_slideshow: false, 
			overlay_gallery: false, 
			show_title: false
			});

		});

		$(this).parent().addClass("current");

		// Prevent the browser jump to the link anchor
		e.preventDefault();
	})
});

$(document).ready(function() {

		//Mobile Nav - Manual Collapse with Easing
		$('.btn-navbar').click(function(e){
			$('.main-link a').addClass('aura-collapse-triggered');
			$('.nav-collapse').slideDown('slow','swing');

			$('.aura-collapse-triggered').click(function(e){
			$('.nav-collapse').slideUp('slow','swing');
		});
		});

});

$(document).ready(function() {

		$('#main-nav li a').click(function(e) {
            $('#main-nav li').removeClass('active');
            $(this).parent('li').addClass('active');
        });
});

$(document).ready(function() {
	    $(".scrollme").scrollerBird({
		speed : 1500,
		easing: 'easeInOutExpo',
	});
});


$(document).ready(function(e) {

		$('#left-panel'). stop().animate({top:'-7800px'});
		$('.promo-home').stop().animate({marginTop:'-30px'});

		$('#about').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					$('#left-panel'). stop().animate({top:'-6500px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-about').addClass('active');
				 }
				 else {
					$('#left-panel'). stop().animate({top:'-7800px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-home').addClass('active');
				 }
		}, {
			offset: '75%', scrollThrottle: 2000, resizeThrottle: 500 
	});

		$('#portfolio').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					$('#left-panel'). stop().animate({top:'-5200px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-portfolio').addClass('active');
				 }
				 else {
					$('#left-panel'). stop().animate({top:'-6500px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-about').addClass('active');
				 }
		}, {
			offset: '75%', scrollThrottle: 2000, resizeThrottle: 500 
	});

		$('#services').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					$('#left-panel'). stop().animate({top:'-3900px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-services').addClass('active');
				 }
				 else {
					$('#left-panel'). stop().animate({top:'-5200px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-portfolio').addClass('active');
				 }
		}, {
			offset: '75%', scrollThrottle: 2000, resizeThrottle: 500 
	});

		$('#team').waypoint(function(event, direction) {
				if (direction === 'down') {
					$('#left-panel'). stop().animate({top:'-2600px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-team').addClass('active');
					 }
				 else {
					$('#left-panel'). stop().animate({top:'-3900px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-services').addClass('active');
				 }
		}, {
		  	 offset: '75%', scrollThrottle: 2000, resizeThrottle: 500 
	});

		$('#blog').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					$('#left-panel'). stop().animate({top:'-1300px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-blog').addClass('active');
				 }
				 else {
					$('#left-panel'). stop().animate({top:'-2600px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-team').addClass('active');
				 }
		}, {
			offset: '75%', scrollThrottle: 2000, resizeThrottle: 500 
	});

		$('#contact').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					$('#left-panel'). stop().animate({top:'0px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-contact').addClass('active');
				 }
				 else {
					$('#left-panel'). stop().animate({top:'-1300px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-blog').addClass('active');
				 }
		}, {
			offset: '75%', scrollThrottle: 2000, resizeThrottle: 500 
	});
});