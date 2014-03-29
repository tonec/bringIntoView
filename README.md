# Bring an off screen element into view
A small script plugin that will bring an html element that is off screen into view within the browser view port.

### Example usage
    $( '#trigger' ).bind('click', function( e ){
	    e.preventDefault();
	    $( '#target' ).bringIntoView();
    });