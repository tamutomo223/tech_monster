$(function() {

  let modalCoin = $('.modal-coin');
  let modalGet = $('.modal-get');
  let overlay = $('.overlay');
  let payButton = $('#pay-ok');
  let getButton = $('#get-button');
  let cursor = $('#cursor')

  getButton.click(function() {
    cursor[0].play();
    $('#gacha')[0].pause();

    $('#monster').css({'top':'30%', 'opacity':'1'});
    setTimeout(function() {
      $('#monster-name').fadeIn();
    },1000);

    setTimeout(function() {
      $('#get')[0].play();
    },2000);

    setTimeout(function() {
      overlay.fadeIn();
      modalGet.fadeIn();
    },4500);
  });


  payButton.click(function() {
    cursor[0].play();
    modalCoin.fadeOut();
    overlay.fadeOut();
  });

});