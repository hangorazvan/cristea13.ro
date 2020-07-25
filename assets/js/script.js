/*!
Copyright (C) 2019, Razvan Horia Cristea. All Rights Reserved.
Handmade Dynamic HTML 5, CSS 3, jQuery 3.5, Bootstrap 4.5, Pixel Perfect!
PURE AUDIO High Resolution 24bit 192/96kHz Lossless 5.1 Surround Sound
*/

$(window).on('resize scroll mousemove', function() {

	if ($(window).scrollTop() > 100) {
		$(".navbar, .dropdown-menu").addClass("bg-black");
		$(".navbar").removeClass("pt-md-4");

	} else {
		$(".navbar, .dropdown-menu").removeClass("bg-black");
		$(".navbar").addClass("pt-md-4");
	}

/*
	if (!isMobile()) {
		$('.animate').each(function (i) {
			var objectTop = $(this).offset().top - $(this).outerHeight();
			var windowBottom = $(window).scrollTop() + $(window).innerHeight();

			if (windowBottom > objectTop) {
				$(this).removeClass('hidden');
				$(this).addClass('animated');

			} else {
				$(this).removeClass('animated');
				$(this).addClass('hidden');
			}
		});
	}
*/

});

$(window).on('load', function() {
	$(".preloader").fadeOut(1000);

	if (isIE()) {
		$(".parallax").addClass("s00");

	} else {
		if (isMozilla()) {
			$("html").addClass("dhtml");

		} else {
			$("html").removeClass("dhtml");
		}

		if ($(window).width() > 1024) {
			$(".parallax").parallax(); //	- influent motion!
			$(".parallax").addClass("s00");

		} else {
			if (!isiOS()) {
				$(".parallax").addClass("s00");
			}
		}
	}

	$(".filterA").click(function() {
		var value = $(this).attr('data-filter');

		$(".filter1").not('.' + value).hide('1000');
		$('.filter1').filter('.' + value).show('1000');
	});

	$(".filterB").click(function() {
		var value = $(this).attr('data-filter');

		$(".filter2").not('.' + value).hide('1000');
		$('.filter2').filter('.' + value).show('1000');
	});

	$(".filterC").click(function() {
		var value = $(this).attr('data-filter');

		$(".filter3").not('.' + value).hide('1000');
		$('.filter3').filter('.' + value).show('1000');
	});

	$(".filterD").click(function() {
		var value = $(this).attr('data-filter');

		$(".filter4").not('.' + value).hide('1000');
		$('.filter4').filter('.' + value).show('1000');
	});

	$(".filterE").click(function() {
		var value = $(this).attr('data-filter');

		$(".filter5").not('.' + value).hide('1000');
		$('.filter5').filter('.' + value).show('1000');
	});

	if ($(window).width() > 768) {
		$('.hyde').hide();

	} else {
		$('.filter1, .filter2, .filter3, .filter4, .filter5').hide();
	}
});

$(document).ready(function() {

	$('.navbar-collapse a:not(.dropdown-toggle)').click(function() {
		if ($(window).width() < 768) {
			$('.navbar-collapse').collapse('hide');
		}
	});

	$(".carousel").on("touchstart", function (event) {
		var xClick = event.originalEvent.touches[0].pageX;

		$(this).one("touchmove", function (event) {
			var xMove = event.originalEvent.touches[0].pageX;

			if (Math.floor(xClick - xMove) > 5) {
				$(this).carousel('next');
			} else if (Math.floor(xClick - xMove) < -5) {
				$(this).carousel('prev');
			}
		});

		$(".carousel").on("touchend", function() {
			$(this).off("touchmove");
		});
	});

	$('a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
});

function isIE() {
	return /IEMobile|MSIE|Trident|Edge|Windows phone/i.test(navigator.userAgent);
}

function isiOS() {
	return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isMozilla() {
	return /mozilla/i.test(navigator.userAgent);
}

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows phone|kindle|silk|playbook|Opera Mini/i.test(navigator.userAgent);
}

(function (factory) {
	'use strict';

	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory($);
	}

})

(function ($) {
	'use strict';

	var working = false;
	var scrollAction = function() {
		working = false;
	};

	var setDirection = {
		bgVertical: function (elem, bgOffset) {
			return elem.css({
				'background-position': 'center ' + bgOffset + 'px'
			});
		},

		bgHorizontal: function (elem, bgOffset) {
			return elem.css({
				'background-position': bgOffset + 'px' + ' center'
			});
		},

		vertical: function (elem, elemOffset, oldTransform) {
			(oldTransform === 'none' ? oldTransform = '' : true);
			return elem.css({
				'-webkit-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
				'-moz-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
				'transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
				'transition': 'transform linear',
				'will-change': 'transform'
			});
		},

		horizontal: function (elem, elemOffset, oldTransform) {
			(oldTransform === 'none' ? oldTransform = '' : true);
			return elem.css({
				'-webkit-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
				'-moz-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
				'transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
				'transition': 'transform linear',
				'will-change': 'transform'
			});
		}
	};

	var setMovement = {
		factor: function (elem, width, options) {
			var dataFactor = elem.data('parallax-factor');
			var factor = (dataFactor) ? dataFactor : options.factor;
			if (width < 576) {
				var dataFactorXs = elem.data('parallax-factor-xs');
				var factorXs = (dataFactorXs) ? dataFactorXs : options.factorXs;
				return (factorXs) ? factorXs : factor;
			} else if (width <= 768) {
				var dataFactorSm = elem.data('parallax-factor-sm');
				var factorSm = (dataFactorSm) ? dataFactorSm : options.factorSm;
				return (factorSm) ? factorSm : factor;
			} else if (width <= 992) {
				var dataFactorMd = elem.data('parallax-factor-md');
				var factorMd = (dataFactorMd) ? dataFactorMd : options.factorMd;
				return (factorMd) ? factorMd : factor;
			} else if (width <= 1200) {
				var dataFactorLg = elem.data('parallax-factor-lg');
				var factorLg = (dataFactorLg) ? dataFactorLg : options.factorLg;
				return (factorLg) ? factorLg : factor;
			} else if (width <= 1920) {
				var dataFactorXl = elem.data('parallax-factor-xl');
				var factorXl = (dataFactorXl) ? dataFactorXl : options.factorXl;
				return (factorXl) ? factorXl : factor;

			} else {
				return factor;
			}
		},

		bgOffset: function (offset, factor) {
			return Math.round(offset * factor);
		},

		transform: function (offset, factor, windowHeight, height) {
			return Math.round((offset - (windowHeight / 2) + height) * factor);
		}
	};

	var clearPositions = {
		background: function (elem) {
			return elem.css({
				'background-position': 'unset'
			});
		},

		foreground: function (elem) {
			return elem.css({
				'transform': 'unset',
				'transition': 'unset'
			});
		}
	};

	$.fn.parallax = function (options) {
		var windowHeight = $(window).height();
		var documentHeight = $(document).height();
		var options = $.extend({
			factor: 0.1,
			factorXs: 0.1,
			factorSm: 0.1,
			factorMd: 0.1,
			factorLg: 0.1,
			factorXl: 0.1,
			type: 'background',
			direction: 'vertical'
		}, options);

		return this.each(function() {
			var $this = $(this);
			var width = $(window).width();
			var offset = $this.offset().top;
			var height = $this.outerHeight();
			var dataType = $this.data('parallax-type');
			var dataDirection = $this.data('parallax-direction');
			var oldTransform = $this.css('transform');
			var type = (dataType) ? dataType : options.type;
			var direction = (dataDirection) ? dataDirection : options.direction;
			var factor = setMovement.factor($this, width, options);
			var bgOffset = setMovement.bgOffset(offset, factor);
			var transform = setMovement.transform(offset, factor, windowHeight, height);

			if (type === 'background') {
				if (direction === 'vertical') {
					setDirection.bgVertical($this, bgOffset);
				} else if (direction === 'horizontal') {
					setDirection.bgHorizontal($this, bgOffset);
				}
			} else if (type === 'foreground') {
				if (direction === 'vertical') {
					setDirection.vertical($this, transform, oldTransform);
				} else if (direction === 'horizontal') {
					setDirection.horizontal($this, transform, oldTransform);
				}
			}

			$(window).on('resize scroll mousemove', function() {
				var scrolling = $(this).scrollTop();
				documentHeight = $(document).height();
				width = $(window).width();
				offset = $this.offset().top;
				height = $this.outerHeight();
				factor = setMovement.factor($this, width, options);
				bgOffset = Math.round((offset - scrolling) * factor);
				transform = Math.round(((offset - (windowHeight / 2) + height) - scrolling) * factor);

				if (!working) {
					window.requestAnimationFrame(scrollAction);
					working = true;
				}

				if (type === 'background') {
					clearPositions.background($this);
					if (direction === 'vertical') {
						setDirection.bgVertical($this, bgOffset);

					} else if (direction === 'horizontal') {
						setDirection.bgHorizontal($this, bgOffset);
					}
				} else if ((type === 'foreground') && (scrolling <= documentHeight)) {
					clearPositions.foreground($this);
					if (direction === 'vertical') {
						setDirection.vertical($this, transform, oldTransform);
					} else if (direction === 'horizontal') {
						setDirection.horizontal($this, transform, oldTransform);
					}

				}
			});
		});
	};
});

/*
if (!isMobile()) {

	(function (w) {

		var scrollTop = 0;
		var wheelSpeed = 0;
		var currentSpeed = 0;

		function tan(x) {
			return 480 * Math.atan(0.002 * x);
		}

		function makeInertialScroll() {
			currentSpeed = tan((wheelSpeed + currentSpeed));
			wheelSpeed = 0;

			scrollTop = 0 - Math.round(currentSpeed - w.pageYOffset);

			if ((document.body.scrollHeight > scrollTop) && (scrollTop > 0)) {
				w.scrollTo(0, scrollTop);
			}
		}

		function wheel(event) {
			var delta = 0;
			if (!event)
				event = w.event;

			if (event.wheelDelta) {
				delta = event.wheelDelta / 120;

			} else if (event.detail) {
				delta = -event.detail / 3;
			}

			if (delta)
				handle(delta);

			if (event.preventDefault)
				event.preventDefault();

			event.returnValue = false;
		}

		function handle(delta) {
			wheelSpeed = delta * 7;
			return false;
		}

		w.requestAnimFrame = (function() {
			return w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame || function (callback) {
				w.setTimeout(callback, 1000 / 60);
			};
		})();

		document.addEventListener('DOMContentLoaded', function() {
			w.addEventListener('DOMMouseScroll', wheel, false);
			w.onmousewheel = document.onmousewheel = wheel;

			(function animloop() {
				makeInertialScroll();
				w.requestAnimFrame(animloop);
			})();

			document.querySelector('body').addEventListener('click', function() {
				currentSpeed = 0;
			});
		});

	})(window);
}

(function (factory) {
		if (typeof define === 'function' && define.amd) {
			define(['jquery'], function ($) {
				return factory($);
			});
		} else if (typeof module === 'object' && typeof module.exports === 'object') {
			module.exports = factory(require('jquery'));
		} else {
			factory(window.jQuery);
		}
	}

	(function ($) {
		"use strict";

		function uaMatch(ua) {
			if (ua === undefined) {
				ua = window.navigator.userAgent;
			}
			ua = ua.toLowerCase();

			var match = /(edge)\/([\w.]+)/.exec(ua) || /(opr)[\/]([\w.]+)/.exec(ua) || /(chrome)[ \/]([\w.]+)/.exec(ua) || /(iemobile)[\/]([\w.]+)/.exec(ua) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
			var platform_match = /(ipad)/.exec(ua) || /(ipod)/.exec(ua) || /(windows phone)/.exec(ua) || /(iphone)/.exec(ua) || /(kindle)/.exec(ua) || /(silk)/.exec(ua) || /(android)/.exec(ua) || /(win)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua) || /(cros)/.exec(ua) || /(playbook)/.exec(ua) || /(bb)/.exec(ua) || /(blackberry)/.exec(ua) || [];
			var browser = {},
				matched = {
					browser: match[5] || match[3] || match[1] || "",
					version: match[2] || match[4] || "0",
					versionNumber: match[4] || match[2] || "0",
					platform: platform_match[0] || ""
				};

			if (matched.browser) {
				browser[matched.browser] = true;
				browser.version = matched.version;
				browser.versionNumber = parseInt(matched.versionNumber, 10);
			}

			if (matched.platform) {
				browser[matched.platform] = true;
			}

			if (browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
				browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"]) {
				browser.mobile = true;
			}

			if (browser.cros || browser.mac || browser.linux || browser.win) {
				browser.desktop = true;
			}

			if (browser.chrome || browser.opr || browser.safari) {
				browser.webkit = true;
			}

			if (browser.rv || browser.iemobile) {
				var ie = "msie";

				matched.browser = ie;
				browser[ie] = true;
			}

			if (browser.edge) {
				delete browser.edge;
				var msedge = "msedge";

				matched.browser = msedge;
				browser[msedge] = true;
			}

			if (browser.safari && browser.blackberry) {
				var blackberry = "blackberry";

				matched.browser = blackberry;
				browser[blackberry] = true;
			}

			if (browser.safari && browser.playbook) {
				var playbook = "playbook";

				matched.browser = playbook;
				browser[playbook] = true;
			}

			if (browser.bb) {
				var bb = "blackberry";

				matched.browser = bb;
				browser[bb] = true;
			}

			if (browser.opr) {
				var opera = "opera";

				matched.browser = opera;
				browser[opera] = true;
			}

			if (browser.safari && browser.android) {
				var android = "android";

				matched.browser = android;
				browser[android] = true;
			}

			if (browser.safari && browser.kindle) {
				var kindle = "kindle";

				matched.browser = kindle;
				browser[kindle] = true;
			}

			if (browser.safari && browser.silk) {
				var silk = "silk";

				matched.browser = silk;
				browser[silk] = true;
			}

			browser.name = matched.browser;
			browser.platform = matched.platform;
			return browser;
		}

		window.jQBrowser = uaMatch(window.navigator.userAgent);
		window.jQBrowser.uaMatch = uaMatch;

		if ($) {
			$.browser = window.jQBrowser;
		}

		return window.jQBrowser;
	}) 
);

*/