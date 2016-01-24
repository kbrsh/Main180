/***************** Waypoints ******************/

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});
jQuery(document).ready(function($){
	var overlayNav = $('.cd-overlay-nav'),
		overlayContent = $('.cd-overlay-content'),
		navigation = $('.cd-primary-nav'),
		toggleNav = $('.cd-nav-trigger');

	//inizialize navigation and content layers
	layerInit();
	$(window).on('resize', function(){
		window.requestAnimationFrame(layerInit);
	});

	//open/close the menu and cover layers
	toggleNav.on('click', function(){
		if(!toggleNav.hasClass('close-nav')) {
			//it means navigation is not visible yet - open it and animate navigation layer
			toggleNav.addClass('close-nav');
			
			overlayNav.children('span').velocity({
				translateZ: 0,
				scaleX: 1,
				scaleY: 1,
			}, 500, 'easeInCubic', function(){
				navigation.addClass('fade-in');
			});
		} else {
			//navigation is open - close it and remove navigation layer
			toggleNav.removeClass('close-nav');
			
			overlayContent.children('span').velocity({
				translateZ: 0,
				scaleX: 1,
				scaleY: 1,
			}, 500, 'easeInCubic', function(){
				navigation.removeClass('fade-in');
				
				overlayNav.children('span').velocity({
					translateZ: 0,
					scaleX: 0,
					scaleY: 0,
				}, 0);
				
				overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					overlayContent.children('span').velocity({
						translateZ: 0,
						scaleX: 0,
						scaleY: 0,
					}, 0, function(){overlayContent.removeClass('is-hidden')});
				});
				if($('html').hasClass('no-csstransitions')) {
					overlayContent.children('span').velocity({
						translateZ: 0,
						scaleX: 0,
						scaleY: 0,
					}, 0, function(){overlayContent.removeClass('is-hidden')});
				}
			});
		}
	});

	function layerInit(){
		var diameterValue = (Math.sqrt( Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2))*2);
		overlayNav.children('span').velocity({
			scaleX: 0,
			scaleY: 0,
			translateZ: 0,
		}, 50).velocity({
			height : diameterValue+'px',
			width : diameterValue+'px',
			top : -(diameterValue/2)+'px',
			left : -(diameterValue/2)+'px',
		}, 0);

		overlayContent.children('span').velocity({
			scaleX: 0,
			scaleY: 0,
			translateZ: 0,
		}, 50).velocity({
			height : diameterValue+'px',
			width : diameterValue+'px',
			top : -(diameterValue/2)+'px',
			left : -(diameterValue/2)+'px',
		}, 0);
	}
});
\u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557  \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\r\n\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557    \u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\r\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2551   \u2588\u2588\u2551       \u2588\u2588\u2551   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557  \r\n\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2551   \u2588\u2588\u2551       \u2588\u2588\u2551   \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255D  \r\n\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D       \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\r\n\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D        \u255A\u2550\u255D   \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\r\n  ___   ___  _  _ _ _____    ___ ___  _____   __  _____ _  _ ___ ___ \r\n |   \\ \/ _ \\| \\| ( )_   _|  \/ __\/ _ \\| _ \\ \\ \/ \/ |_   _| || |_ _\/ __|\r\n | |) | (_) | .` |\/  | |   | (_| (_) |  _\/\\ V \/    | | | __ || |\\__ \\\r\n |___\/ \\___\/|_|\\_|   |_|    \\___\\___\/|_|   |_|     |_| |_||_|___|___\/\r\n                                                                     \r\n           (   (                    )   )        (         )             )           ) (          \r\n (  (      )\\ ))\\ )  *   )       ( \/(( \/(        )\\ )   ( \/( (  (     ( \/(     (  ( \/( )\\ )       \r\n )\\))(   \'(()\/(()\/(` )  \/((      )\\())\\())    ( (()\/(   )\\()))\\))(   \')\\())    )\\ )\\()|()\/(  (    \r\n((_)()\\ )  \/(_))(_))( )(_))\\    ((_)((_)\\     )\\ \/(_)) ((_)\\((_)()\\ )((_)\\   (((_|(_)\\ \/(_)) )\\   \r\n_(())\\_)()(_))(_)) (_(_()|(_)  __ ((_)((_) _ ((_|_))     ((_)(())\\_)()_((_)  )\\___ ((_|_))_ ((_)  \r\n\\ \\((_)\/ \/| _ \\_ _||_   _| __| \\ \\ \/ \/ _ \\| | | | _ \\   \/ _ \\ \\((_)\/ \/ \\| | ((\/ __\/ _ \\|   \\| __| \r\n \\ \\\/\\\/ \/ |   \/| |   | | | _|   \\ V \/ (_) | |_| |   \/  | (_) \\ \\\/\\\/ \/| .` |  | (_| (_) | |) | _|  \r\n  \\_\/\\_\/  |_|_\\___|  |_| |___|   |_| \\___\/ \\___\/|_|_\\   \\___\/ \\_\/\\_\/ |_|\\_|   \\___\\___\/|___\/|___| \r\n                                                                                                  \r\n ____    ____   ___     ______   _________   _____  ____    ____  _______     ___   _______   _________     _       ____  _____  _________  _____   ____  ____  \r\n|_   \\  \/   _|.\'   `. .\' ____ \\ |  _   _  | |_   _||_   \\  \/   _||_   __ \\  .\'   `.|_   __ \\ |  _   _  |   \/ \\     |_   \\|_   _||  _   _  ||_   _| |_  _||_  _| \r\n  |   \\\/   | \/  .-.  \\| (___ \\_||_\/ | | \\_|   | |    |   \\\/   |    | |__) |\/  .-.  \\ | |__) ||_\/ | | \\_|  \/ _ \\      |   \\ | |  |_\/ | | \\_|  | |     \\ \\  \/ \/   \r\n  | |\\  \/| | | |   | | _.____`.     | |       | |    | |\\  \/| |    |  ___\/ | |   | | |  __ \/     | |     \/ ___ \\     | |\\ \\| |      | |      | |   _  \\ \\\/ \/    \r\n _| |_\\\/_| |_\\  `-\'  \/| \\____) |   _| |_     _| |_  _| |_\\\/_| |_  _| |_    \\  `-\'  \/_| |  \\ \\_  _| |_  _\/ \/   \\ \\_  _| |_\\   |_    _| |_    _| |__\/ | _|  |_    \r\n|_____||_____|`.___.\'  \\______.\'  |_____|   |_____||_____||_____||_____|    `.___.\'|____| |___||_____||____| |____||_____|\\____|  |_____|  |________||______|   \r\n                                                                                                                                                                \r\n      ___           ___           ___           ___                    ___           ___           ___     \r\n     \/\\__\\         \/\\  \\         \/\\__\\         \/\\  \\                  \/\\  \\         \/\\__\\         \/\\__\\    \r\n    \/:\/  \/        \/::\\  \\       \/:\/  \/        \/::\\  \\                \/::\\  \\       \/:\/  \/        \/::|  |   \r\n   \/:\/__\/        \/:\/\\:\\  \\     \/:\/  \/        \/:\/\\:\\  \\              \/:\/\\:\\  \\     \/:\/  \/        \/:|:|  |   \r\n  \/::\\  \\ ___   \/::\\~\\:\\  \\   \/:\/__\/  ___   \/::\\~\\:\\  \\            \/::\\~\\:\\  \\   \/:\/  \/  ___   \/:\/|:|  |__ \r\n \/:\/\\:\\  \/\\__\\ \/:\/\\:\\ \\:\\__\\  |:|  | \/\\__\\ \/:\/\\:\\ \\:\\__\\          \/:\/\\:\\ \\:\\__\\ \/:\/__\/  \/\\__\\ \/:\/ |:| \/\\__\\\r\n \\\/__\\:\\\/:\/  \/ \\\/__\\:\\\/:\/  \/  |:|  |\/:\/  \/ \\:\\~\\:\\ \\\/__\/          \\\/__\\:\\ \\\/__\/ \\:\\  \\ \/:\/  \/ \\\/__|:|\/:\/  \/\r\n      \\::\/  \/       \\::\/  \/   |:|__\/:\/  \/   \\:\\ \\:\\__\\                 \\:\\__\\    \\:\\  \/:\/  \/      |:\/:\/  \/ \r\n      \/:\/  \/        \/:\/  \/     \\::::\/__\/     \\:\\ \\\/__\/                  \\\/__\/     \\:\\\/:\/  \/       |::\/  \/  \r\n     \/:\/  \/        \/:\/  \/       ~~~~          \\:\\__\\                               \\::\/  \/        \/:\/  \/   \r\n     \\\/__\/         \\\/__\/                       \\\/__\/                                \\\/__\/         \\\/__\/    \r\n     \r\n       _____ ____   ___  __  __ \r\n |  ___|  _ \\ \/ _ \\|  \\\/  |\r\n | |_  | |_) | | | | |\\\/| |\r\n |  _| |  _ <| |_| | |  | |\r\n |_|   |_| \\_\\\\___\/|_|  |_|\r\n                           \r\n          _____                    _____                    _____                    _____                    _____          \r\n         \/\\    \\                  \/\\    \\                  \/\\    \\                  \/\\    \\                  \/\\    \\         \r\n        \/::\\____\\                \/::\\    \\                \/::\\    \\                \/::\\    \\                \/::\\    \\        \r\n       \/:::\/    \/               \/::::\\    \\              \/::::\\    \\               \\:::\\    \\              \/::::\\    \\       \r\n      \/:::\/    \/               \/::::::\\    \\            \/::::::\\    \\               \\:::\\    \\            \/::::::\\    \\      \r\n     \/:::\/    \/               \/:::\/\\:::\\    \\          \/:::\/\\:::\\    \\               \\:::\\    \\          \/:::\/\\:::\\    \\     \r\n    \/:::\/____\/               \/:::\/__\\:::\\    \\        \/:::\/__\\:::\\    \\               \\:::\\    \\        \/:::\/__\\:::\\    \\    \r\n   \/::::\\    \\              \/::::\\   \\:::\\    \\      \/::::\\   \\:::\\    \\              \/::::\\    \\      \/::::\\   \\:::\\    \\   \r\n  \/::::::\\____\\________    \/::::::\\   \\:::\\    \\    \/::::::\\   \\:::\\    \\    ____    \/::::::\\    \\    \/::::::\\   \\:::\\    \\  \r\n \/:::\/\\:::::::::::\\    \\  \/:::\/\\:::\\   \\:::\\    \\  \/:::\/\\:::\\   \\:::\\ ___\\  \/\\   \\  \/:::\/\\:::\\    \\  \/:::\/\\:::\\   \\:::\\____\\ \r\n\/:::\/  |:::::::::::\\____\\\/:::\/  \\:::\\   \\:::\\____\\\/:::\/__\\:::\\   \\:::|    |\/::\\   \\\/:::\/  \\:::\\____\\\/:::\/  \\:::\\   \\:::|    |\r\n\\::\/   |::|~~~|~~~~~     \\::\/    \\:::\\  \/:::\/    \/\\:::\\   \\:::\\  \/:::|____|\\:::\\  \/:::\/    \\::\/    \/\\::\/   |::::\\  \/:::|____|\r\n \\\/____|::|   |           \\\/____\/ \\:::\\\/:::\/    \/  \\:::\\   \\:::\\\/:::\/    \/  \\:::\\\/:::\/    \/ \\\/____\/  \\\/____|:::::\\\/:::\/    \/ \r\n       |::|   |                    \\::::::\/    \/    \\:::\\   \\::::::\/    \/    \\::::::\/    \/                 |:::::::::\/    \/  \r\n       |::|   |                     \\::::\/    \/      \\:::\\   \\::::\/    \/      \\::::\/____\/                  |::|\\::::\/    \/   \r\n       |::|   |                     \/:::\/    \/        \\:::\\  \/:::\/    \/        \\:::\\    \\                  |::| \\::\/____\/    \r\n       |::|   |                    \/:::\/    \/          \\:::\\\/:::\/    \/          \\:::\\    \\                 |::|  ~|          \r\n       |::|   |                   \/:::\/    \/            \\::::::\/    \/            \\:::\\    \\                |::|   |          \r\n       \\::|   |                  \/:::\/    \/              \\::::\/    \/              \\:::\\____\\               \\::|   |          \r\n        \\:|   |                  \\::\/    \/                \\::\/____\/                \\::\/    \/                \\:|   |          \r\n         \\|___|                   \\\/____\/                  ~~                       \\\/____\/                  \\|___|          \r\n                                   \r\n \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557    \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\r\n\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D    \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551    \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\r\n\u2588\u2588\u2551     \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551 \u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \r\n\u2588\u2588\u2551     \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D      \u2588\u2588\u2551\u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551    \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \r\n\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551    \u2588\u2588\u2551  \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2554\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\r\n \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u255D  \u255A\u2550\u255D \u255A\u2550\u2550\u255D\u255A\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\r\n
