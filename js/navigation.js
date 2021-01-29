$('.over').hide()
$('.contact').hide()

$(document).on('scroll', function(){
var pixelsFromTop = $(document).scrollTop()
console.log(pixelsFromTop)

if(pixelsFromTop > 40){
$('.logo').addClass('logo-compact')
}else{
$('.logo').removeClass('logo-compact')}
})


$('.over-toggle').on('click', function(){
$('.over' ).slideToggle('slow')
$('.contact' ).slideUp('slow')
return false
})

$('.contact-toggle').on('click', function(){
$('.contact').slideToggle('open')
$('.over' ).slideUp('slow')
return false
})


