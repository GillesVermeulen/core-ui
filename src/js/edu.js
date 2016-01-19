
if ($('#edu').length) {

  var $select = $('.chosen-select');
  var parseselection = function(e) {
    
    var selection = $select.val();

    if (selection == 'other')   $('.chosen-other').show();
    else                        $('.chosen-other').hide();
  }

  $select.chosen({disable_search_threshold: 10, width:"100%"});
  $select.chosen().change(parseselection);
} 