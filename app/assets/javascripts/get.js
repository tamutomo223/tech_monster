$(document).on('click', '#get-button', function() {
  setTimeout(function() {
    $('#monster-name').fadeIn();
  },1000);
  
  $('#monster').css({'top':'30%', 'opacity':'1'});
})