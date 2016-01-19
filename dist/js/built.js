
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

//tabbed-pannels
$('.mv-tab-panel .mv-side-panel-tabs li a').click(function() {

	var $tabPanel = $(this).closest('.mv-tab-panel'),
		tab = $(this).data('tab'),
		$content = $tabPanel.find('.mv-tab-content[data-panel='+tab+']');

	if ($content.length) {

		// Toggle contents
		$tabPanel.find('.mv-tab-content').removeClass('active');
		$content.addClass('active');

		// Toggle tabs active state
		$tabPanel.find('.mv-side-panel-tabs li a').removeClass('active');
		$(this).addClass('active');
	}
});

// slider
if ($('.mv-slider').length) {
  $('.mv-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<i class="fa fa-angle-left nav-button nav-left"></i>',
    nextArrow: '<i class="fa fa-angle-right nav-button nav-right"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}

// Masonry
if ($('.grid').length) {
  var $grid = $('.grid').masonry({
    columnWidth: '.spacer',
    itemSelector: '.grid-item',
    percentPosition: true
  });
  $grid.imagesLoaded( function(){
     $grid.masonry('layout');
  });
}

// Player
videojs("myMoov", {
  inactivityTimeout: 700
});
videojs('myMoov').ready(function() {
  this.hotkeys({
    volumeStep: 0.1,
    seekStep: 5
  });  
  this.play();
});


