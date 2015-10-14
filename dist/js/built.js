
$('.feature-reel-item').hover(function(){
	$('.feature-reel-item').removeClass('active');
	$(this).addClass('active');
});

// Inputs
$('.big-input input').focus(function(){
	$(this).parent().addClass('focuson');
});

$('.big-input input').focusout(function(){
	$(this).parent().removeClass('focuson');
});

// Gallery thumbnails
$('.gallery-item').hover(function(){
	$(this).addClass('active');
}, function(){
	$(this).removeClass('active');
});

// Masonry
var $grid = $('.grid').masonry({
  	columnWidth: '.spacer',
	itemSelector: '.grid-item',
	percentPosition: true
});
$grid.imagesLoaded( function(){
   $grid.masonry('layout');
});
