;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		$('.list-images li').each(function(){
			var introImages = $(this).find('img').attr('src')
			$(this).css({
				'background-image' : 'url('+introImages+')',
			})
		});

		//nav functions
		var navTrigger = '<a href="#" class="nav-trigger"><span></span><span></span><span></span></a>'
		$(navTrigger).insertAfter('#topWrap')

		$('.nav-trigger').on('click', function (event) {
		    $(this).toggleClass('active');  
		    
		    $('#topNav ul').slideToggle();
		    
		    event.preventDefault();
		});
	});
})(jQuery, window, document);
