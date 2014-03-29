A small script plugin that will bring an html element that is off screen into view within the browser view port.

$( '#trigger' ).bind('click', function( e ){
	e.preventDefault();
	$( '#target' ).bringIntoView();
});