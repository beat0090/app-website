var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video').html('<iframe src="http://player.vimeo.com/video/81293024?color=ffffff&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> ');

	/* when triggering built in javascript functions we need to bypass jQuery in order to get to the raw javascript element we can use .get()
	
	example: $videoDialog.show() - will tigger jQuerys show function not the raw Javascript show function
			
			  $videoDialog.get(0).show() - will get the first raw javascript element and trigger its native show function
			 
	*/
	$videoDialog.get(0).showModal();	
	
	/*
	.show() allows users to interact with stuff behind the dialog
	.showModal() disables user interact with stuff behind the dialog
	*/
	
});

$('.btn-close').on('click', function () {
	$videoDialog.get(0).close();
	$videoDialog.children('.video').html('');
});




var $items = $('.items img');

var switchItem = function (current, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
		$items.eq(current).hide().attr('data-state', '');
		$items.eq(incoming).attr('data-state', 'current');
	});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;
	
	if (next > $items.length - 1) {
		next = 0;
	}
	
	switchItem(current, next);
});




$('.previous').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current - 1;
	
	if (next > $items.length + 1) {
		next = 0;
	}
	
	//if (previous < 0) {
		//previous - $items.length + 1) {
	
	switchItem(current, next);
});

