$(function() {
    $('.two-columns').each(function() {
		var $count = 0;
		$(this).children().each(function() {
			$count++;
		});

		if ($count <= 10) {
			$(this).removeClass("two-columns");
		}
	});
});
