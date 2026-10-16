(function ($) {
	$(document).ready(function () {
		if ($('.owl-carousel').length)
			$('.owl-carousel').each((i, obj) => {
				$(obj).owlCarousel({
					loop: true,
					center: true,
					margin: 150,
					autoWidth: true,
				});
			});

		$('.burger').click(e => {
			$('.burger').toggleClass('active');
			$('.mobile_menu').toggleClass('active');
		});
	});
})(jQuery);
