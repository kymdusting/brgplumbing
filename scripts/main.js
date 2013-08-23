(function(){

	// CSS Tricks test for media queries http://css-tricks.com/examples/ConditionalCSS/
	var currentSize = "low-tide";

	if (!window.getComputedStyle) {
		// Fallback for < IE9 that doesn't support getComputedStyle
		$('.slide-wrap').load('slider.html', function() {
			$('.bxslider').bxSlider({
				auto: true,
				autoControls: true
			});
		});
	}

	$(window).resize(function() {
		if (window.getComputedStyle) {

			var size = window.getComputedStyle(document.body, ':after').getPropertyValue('content');

			/* Ridiculous thing to deal with inconsistent returning of value from query. Some browsers have quotes some don't */
			size = size.replace(/"/g, "");
			size = size.replace(/'/g, "");

			if (size != currentSize) {
				if (size == 'none') {
				}
				if (size == 'high-tide') {
					if ($('.bxslider').length > 0) {
						$('.bxslider, .bx-controls').css('display', 'block');
					} else {
						$('.slide-wrap').load('slider.html', function() {
							$('.bxslider').bxSlider({
								auto: true,
								autoControls: true
							});
						});
					}
					currentSize = 'high-tide';
				}
				if (size == 'mid-tide') {
					$('.slide-wrap').load('slider.html', function() {
						$('.bxslider').bxSlider({
							auto: true,
							autoControls: true
						});
					});
					currentSize = 'mid-tide';
				}
				if (size == 'low-tide') {
					if ($('.bxslider').length > 0) {
						$('.bxslider, .bx-controls').css('display', 'none');
					}
					currentSize = 'low-tide';
				}
			}
		}
	}).resize();

})();