$(function() {
  
  if(document.URL.match(/battles\/\d/)) {
    setInterval(function() {
      $('#cry')[0].play();
    }, 2000);
    setInterval(function() {
      $('#cry').remove();
    }, 3500);
  };
  
  $('#escape').click(function() {
    window.location.href = "/";
  });

  $(document).on('click', '#attack', function() {
    $('#punch').currentTime = 0;
    $('#punch')[0].play();

    hpCount = $('#enemy_hp').val();
    enemyHp = $('.enemy__hp');

    if(enemyHp.hasClass('dying')) {
      window.location.href = "/";
    } else if(parseInt(hpCount) <= 10) {
      enemyHp.addClass('dying');
    };

    hpCount -= 10;
    if(enemyHp.hasClass('dying')) {
      enemyHp.text('ひんし じょうたい だ！');
    } else {
      enemyHp.text(`HP : ${hpCount}`);
    };

    $('#enemy_hp').val(hpCount);
  });
});