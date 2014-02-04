var $win = $(window);
var $sun = $('.sun');
var $dipper = $('.dipper');
var $ships = $('.ships img');


$win.on('scroll', function () {
	// console.log($win.scrollTop());
	$sun.css('transform', 'rotate(' + $win.scrollTop() /5 + 'deg)');
});

$('.dipper-section').waypoint(function () {
	$dipper.addClass('js-dipper-animate');
}, { offset: '80%' });

$('.ships-section').waypoint(function () {
	$ships.eq(0).addClass('js-ship-delay-1');
	$ships.eq(2).addClass('js-ship-delay-3');
	$ships.eq(3).addClass('js-ship-delay-2');
	$ships.addClass('js-ships-animate');
}, { offset: '60%' });