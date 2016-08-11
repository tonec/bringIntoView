// ===============================
// Bring into view
// ===============================

(function ( $ ) {

	$.fn.bringIntoView = function ( options ) {

		var el = this[ 0 ],
			top = el.offsetTop,
			left = el.offsetLeft,
			width = el.offsetWidth,
			height = el.offsetHeight,
			fromTop = top,
			fromLeft = left,
			scrollPos = null,
			currentScrollPos = $(window).scrollTop();

		// Default options
		this.options = {
			pushTop: 10,
			pushBottom: 10
		};

		// Merge options
		this.options = $.extend( {}, this.options, options );

		// Get the offsets from top and left of the document
		while ( el.offsetParent ) {
			el = el.offsetParent;
			fromTop += el.offsetTop;
			fromLeft += el.offsetLeft;
		}

		// If the element is already visible. Stop.
		if ( elementInViewport( el ) ) { return; }

		if ( fromTop > currentScrollPos ) {
			scrollPos = fromTop - $( window.top ).height() + height + this.options.pushBottom;
		} else {
			scrollPos = fromTop - this.options.pushTop;
		}

		// Otherwise, scroll the page so it's just in view
		$( 'html, body' ).stop().animate({
			scrollTop : scrollPos
		});

		// Returns true if element is visible in browser window
		function elementInViewport () {
			return (
				fromTop >= window.pageYOffset &&
				fromLeft >= window.pageXOffset &&
				(fromTop + height) <= ( window.pageYOffset + window.innerHeight ) &&
				(fromLeft + width) <= ( window.pageXOffset + window.innerWidth )
			);
		}
	};
})( jQuery );