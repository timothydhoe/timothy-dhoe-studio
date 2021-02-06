/* hide and unhide navbar dropdown*/
$('.over').hide();
$('.contact').hide();

$('.over-toggle').on('click', function(){
$('.over' ).slideToggle('slow');
$('.contact' ).slideUp('slow');
return false
})

$('.contact-toggle').on('click', function(){
$('.contact').slideToggle('open');
$('.over' ).slideUp('slow');
return false
})

/* change size of logotype when scrolling*/
$(document).ready(function(){
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 60) {
          $('.logo-compact').css('font-size', '1em');
      } else {
          $('.logo-compact').css('font-size', '1.2em');
      }
  });
});