$(document).click(function() {
  $('.share-box').fadeOut();
})

$('#share').click(function(e) { 
  e.stopPropagation();
  e.preventDefault();
  $('.share-box').fadeToggle(); 
});