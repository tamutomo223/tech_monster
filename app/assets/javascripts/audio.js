$(function() {
  let playIcon = $('.fa-volume-up');
  let muteIcon = $('.fa-volume-mute');

  //BGMの操作
  playIcon.hide();

  playIcon.click(function() {
    $(this).hide();
    muteIcon.show();
    $('audio')[0].pause();
  });

  muteIcon.click(function() {
    $(this).hide();
    playIcon.show();
    $('audio')[0].play();
  });
})