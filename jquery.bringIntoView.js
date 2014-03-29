// ===============================
// Bring into view
// ===============================

(function ( $ ) {

	$.fn.bringIntoView = function () {
		var el = this[ 0 ],
			top = el.offsetTop,
			left = el.offsetLeft,
			width = el.offsetWidth,
			height = el.offsetHeight,
			fromTop = top,
			fromLeft = left;

		// Get the offsets from top and left of the document
		while ( el.offsetParent ) {
			el = el.offsetParent;
			fromTop += el.offsetTop;
			fromLeft += el.offsetLeft;
		}

		// If the element is already visible. Stop.
		if ( elementInViewport( el ) ) { return; }

		// Otherwise, scroll the page so it's just in view
		$( 'html, body' ).stop().animate({
			scrollTop : fromTop - $( window.top ).height() + height + 10
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